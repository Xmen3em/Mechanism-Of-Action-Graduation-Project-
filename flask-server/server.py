from flask import Flask, request, Response, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import time
import pickle
from sklearn.preprocessing import LabelEncoder
from tensorflow.keras.models import load_model
from io import StringIO

from flask import send_file
from flask import send_from_directory
import os

import plotly.express as px
from plotly.io import to_json
import seaborn as sns
import plotly.graph_objects as go

import orjson
import plotly.utils

app = Flask(__name__)
CORS(app)

encoderGene = None
encoderCell = None
sub = None
preview_data = None
dataset = None
dataset_details = None

p_min = 0.0005
p_max = 0.9995
prediction = pd.DataFrame()

def visualizeData(name_column):
    global dataset

    gene_features = []
    cell_features = []
    for i in dataset.columns:
        if i.startswith('g-'):
            gene_features.append(i)
        if i.startswith('c-'):
            cell_features.append(i)

    if name_column == 'cp_type':
        cp_type_percentages = (dataset['cp_type'].value_counts()*100.0 /len(dataset))

        colors = ['#1f77b4', '#ff7f0e']
        data=[
            go.Bar(name='cp_type', x=cp_type_percentages.index, y=cp_type_percentages.values, 
                marker_color=colors, text=[f'{val:.1f}%' for val in cp_type_percentages.values],
                textposition='auto')
        ]
        fig = go.Figure(data)
        fig.update_layout(
            title_text='Type of Treatment',
            xaxis_title='cp_type',
            yaxis_title='% Drug',
            barmode='stack'
        )
        return to_json(fig, engine="orjson")

    elif name_column == 'cp_time':
        cp_time_percentages = dataset['cp_time'].value_counts()*100.0 /len(dataset)

        colors = ['#1f77b4', '#ff7f0e', '#2ca02c']
        data=[
            go.Bar(name='cp_time', x=cp_time_percentages.index, y=cp_time_percentages.values, 
                text=[f'{val:.2f}%' for val in cp_time_percentages.values],
                textposition='auto', marker_color=colors)
        ]
        fig = go.Figure(data)
        fig.update_layout(
            title_text='Time Duration of Treatment',
            xaxis_title='Time',
            yaxis_title='% Treatment',
            barmode='stack'
        )
        return to_json(fig, engine="orjson")

    elif name_column == 'cp_dose':
        cp_dose_percentages = dataset['cp_dose'].value_counts()*100.0 /len(dataset)

        colors = ['#1f77b4', '#ff7f0e']
        data=[
            go.Bar(name='cp_dose', x=cp_dose_percentages.index, y=cp_dose_percentages.values, 
                text=[f'{val:.2f}%' for val in cp_dose_percentages.values],
                textposition='auto', marker_color=colors)
        ]
        fig = go.Figure(data)
        fig.update_layout(
            title_text='Doses of Drugs',
            xaxis_title='Dose',
            yaxis_title='% Treatment',
            barmode='stack'
        )
        return to_json(fig, engine="orjson")

    elif name_column == 'gene_expression':
        data_list = [dataset[feature] for feature in gene_features]

        colors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf']
        fig = go.Figure()
        for i, feature in enumerate(gene_features):
            fig.add_trace(go.Histogram(x=data_list[i], name=feature, marker_color=colors[i % len(colors)]))
        fig.update_layout(
            title_text='Distribution of all Gene Features',
            xaxis_title_text='Value', 
            yaxis_title_text='Count', 
            bargap=0.2, 
            bargroupgap=0.1, 
            barmode='overlay', 
        )
        fig.update_traces(opacity=0.75)
        return to_json(fig, engine="orjson")

    elif name_column == 'cell_viability':
        data_list = [dataset[feature] for feature in cell_features]

        colors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf']
        fig = go.Figure()
        for i, feature in enumerate(cell_features):
            fig.add_trace(go.Histogram(x = data_list[i], name = feature, marker_color = colors[i % len(colors)]))
        fig.update_layout(
            title_text='Distribution of all Cell Features', 
            xaxis_title_text='Value', 
            yaxis_title_text='Count', 
            bargap=0.2, 
            bargroupgap=0.1, 
            barmode='overlay', 
        )
        fig.update_traces(opacity=0.75)
        return to_json(fig, engine="orjson")

def generate_top_20(pred_results):
    global prediction

    x_axis = list(prediction.columns.values)
    sig_id_values = x_axis[1:]
    count_of_target = prediction.iloc[:, 1:].sum().values
    dct = dict(zip(sig_id_values, count_of_target))
    sorted_dict = dict(sorted(dct.items(), key=lambda i: i[1], reverse=True))

    num_bars = 20
    color_palette = [
        f'rgb(0, 0, {int(255 * (i / num_bars))})' for i in range(num_bars)
    ]

    data=[
        go.Bar(y=list(sorted_dict.keys())[:num_bars], x=list(sorted_dict.values())[:num_bars], orientation='h', marker_color = color_palette)
    ]
    fig1 = go.Figure(data)
    fig1.update_layout(
        yaxis=dict(autorange="reversed"),
        autosize=False,
        width=900,
        height=600,
        plot_bgcolor='white',  
        paper_bgcolor='rgb(247, 250, 252)', 
        # font=dict(color= color)  
    )

    return to_json(fig1, engine="orjson")

def generate_lowest_20(pred_results):
    global prediction

    x_axis = list(prediction.columns.values)
    sig_id_values = x_axis[1:]
    count_of_target = prediction.iloc[:, 1:].sum().values
    dct = dict(zip(sig_id_values, count_of_target))
    sorted_dict = dict(sorted(dct.items(), key=lambda i: i[1], reverse=True))

    num_bars = 20
    color_palette = [
        f'rgb(0, 0, {int(255 * (i / num_bars))})' for i in range(num_bars)
    ]

    data=[
        go.Bar(y=list(sorted_dict.keys())[-num_bars:], x=list(sorted_dict.values())[-num_bars:], orientation='h', marker_color = color_palette)
    ]
    fig2 = go.Figure(data)
    fig2.update_layout(
        yaxis=dict(autorange="reversed"),
        autosize=False,
        width=900,
        height=600,
        plot_bgcolor='white',  
        paper_bgcolor='rgb(247, 250, 252)',
    )
    
    return to_json(fig2, engine="orjson")

def load_models():
    global encoderGene, encoderCell, sub
    if encoderGene is None:
        encoderGene = load_model("D:\\graduation project\\Graduation Project (MOA)\\autoencoder + neural network\\encoders_gene_features.h5")
    if encoderCell is None:
        encoderCell = load_model("D:\\graduation project\\Graduation Project (MOA)\\autoencoder + neural network\\encoders_cell_features.h5")
    if sub is None:
        sub = pd.read_csv("D:\graduation project\Graduation Project (MOA)\sample_submission.csv")

def preprocessData(inputData):
    load_models()

    le = LabelEncoder()
    inputData['cp_type'] = le.fit_transform(inputData['cp_type'])
    inputData['cp_time'] = le.fit_transform(inputData['cp_time'])
    inputData['cp_dose'] = le.fit_transform(inputData['cp_dose'])

    gene_features = []
    cell_features = []
    for i in inputData.columns:
        if i.startswith('g-'):
            gene_features.append(i)
        if i.startswith('c-'):
            cell_features.append(i)

    test_gene_features = encoderGene.predict(inputData[gene_features])
    test_cell_features = encoderCell.predict(inputData[cell_features])

    x_1_test = np.hstack((inputData['cp_type'].values.reshape(-1,1), inputData['cp_time'].values.reshape(-1, 1), inputData['cp_dose'].values.reshape(-1, 1),
                        test_gene_features, test_cell_features))

    return x_1_test

@app.route('/upload', methods=['POST'])
def upload_file():
    global preview_data, dataset_details, dataset, prediction, p_max, p_min
    if request.method == 'POST':
        file = request.files['file']

    if not file:
        print("No file 🚩🚩🚩🚩")
        return "No file"

    dataset_details = [
        {"Item": "Dataset Name", "Value": file.filename},
        {"Item": "Data Source", "Value": "CSV File"},
    ]

    data = pd.read_csv(file, delimiter=',')
    dataset = data.copy()
    
    dataset_details.extend([
        {"Item": "Total Rows", "Value": data.shape[0]},
        {"Item": "Total Columns", "Value": data.shape[1]},
        {"Item": "Total Data Points", "Value": data.shape[0] * data.shape[1]}
    ])

    start_time = time.time()

    new_data = preprocessData(data)

    directory = "D:\\graduation project\\Graduation Project (MOA)\\autoencoder + neural network\\models" 
    file_paths = []

    for filename in os.listdir(directory):
        file_path = os.path.join(directory, filename)
        file_paths.append(file_path)

    y_pred = np.zeros((new_data.shape[0], 206))
    for i in file_paths:
        model = load_model(i)
        y_pred += model.predict(new_data) / (21)

    print('DONE PREDICTION')
    end_time = time.time()
    print('TIME TAKEN TO PREDICT IS : {}'.format(end_time - start_time))

    sub.iloc[:new_data.shape[0], 1:] = np.clip(y_pred, p_min, p_max)

    # Round the numbers to 3 decimal places
    sub.iloc[:new_data.shape[0], 1:] = sub.iloc[:new_data.shape[0], 1:].round(5)

    prediction = sub.iloc[:new_data.shape[0], :]
    prediction['sig_id'] = data['sig_id']

    # Storing preview data temporarily
    preview_data = {
        "data": prediction.to_dict(orient='records'),
        "columns": list(prediction.columns)  # Include the column order
    }

    return jsonify({"file_ready": True})

@app.route('/dataset_details', methods=['GET'])
def get_dataset_details():
    global dataset_details
    if dataset_details is None:
        return jsonify({"message": "No dataset details available"})
    else:
        return jsonify(dataset_details)

@app.route('/download', methods=['GET'])
def download_file():
    global prediction
    csv_output = StringIO()
    prediction.to_csv(csv_output, index=False)
    csv_output.seek(0)

    return Response(
        csv_output.getvalue(),  
        mimetype="text/csv",
        headers={"Content-disposition": "attachment; filename=prediction.csv"}
    )

@app.route('/preview', methods=['GET'])
def get_preview_data():
    global preview_data
    if preview_data is None:
        return jsonify({"message": "No preview data available"})
    else:
        return jsonify(preview_data)

@app.route('/top_20_json', methods=['GET'])
def get_top_20_json():
    global prediction
    json_data = generate_top_20(prediction)
    return jsonify({"json": json_data})

@app.route('/lowest_20_json', methods=['GET'])
def get_lowest_20_json():
    global prediction
    json_data = generate_lowest_20(prediction)
    return jsonify({"json": json_data})

@app.route('/visualize', methods=['GET'])
def visualize():
    name_column = request.args.get('name_column')
    graph_json = None
    graph_json = visualizeData(name_column)    
    if graph_json:
        return jsonify({"json": graph_json})
    else:
        return jsonify({'error': 'Column not found'}), 404

if __name__ == '__main__': 
    app.run(debug=True)