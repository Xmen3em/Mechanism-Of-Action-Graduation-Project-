# Mechanisms of Action (MOA) Prediction Web Application

![](https://github.com/Xmen3em/Mechanism-Of-Action-Graduation-Project-/blob/main/maxresdefault.jpg)

## Description
This project aims to predict the mechanism of action (MOA) of various drugs using machine learning and deep learning techniques. It leverages gene expression, cell viability data, and other relevant features to develop a predictive model that can assist in drug discovery and development.

## Installation Instructions

### Prerequisites
- Python 3.8+
- Node.js 14+

### Python Dependencies
Ensure you have `pip` installed. Then, install the necessary Python packages:

```bash
pip install -r requirements.txt
```
### Node.js Dependencies
Navigate to the project directory and install the necessary Node.js packages:

```bash
npm install
```
### Running the Web Application
#### Start the Flask Server
After installing the Python dependencies, start the Flask server:

```bash
python server.py
```

#### Start the Node.js Application
In another terminal, navigate to the project directory and start the Node.js application:

```bash
npm run dev
```

## Usage
**Example Code Snippets**

**Using the Flask API**

![](https://github.com/Xmen3em/Mechanism-Of-Action-Graduation-Project-/blob/main/Screenshot%202024-07-06%20020723.png)

#### Node.js Frontend

The frontend provides an interactive interface for users to input data and view predictions. After running npm run dev, visit http://localhost:3000 in your browser to access the application.

## Features

### Predictive Models
Utilizes machine learning models to predict drug MOA.

#### ANN
![](https://github.com/Xmen3em/Mechanism-Of-Action-Graduation-Project-/blob/main/Screenshot%202024-07-11%20232829.png)

**score on kaggle**

![](https://github.com/Xmen3em/Mechanism-Of-Action-Graduation-Project-/blob/main/autoencoder%20%2B%20neural%20network/Screenshot%20from%202024-05-20%2023-20-05.png)

**training history**

![](https://github.com/Xmen3em/Mechanism-Of-Action-Graduation-Project-/blob/main/autoencoder%20%2B%20neural%20network/__results___16_1.png)

#### XGBoost using Autoencoder
![](https://github.com/Xmen3em/Mechanism-Of-Action-Graduation-Project-/blob/main/Screenshot%202024-07-11%20233600.png)

**score on kaggle**

![](https://github.com/Xmen3em/Mechanism-Of-Action-Graduation-Project-/blob/main/xgboost/xgboost_autoencoder/score.png)

#### *These are the two best models out of the many models we have trained*

## User-Friendly Interface
Web application built with Node.js for easy interaction.

![](https://github.com/Xmen3em/Mechanism-Of-Action-Graduation-Project-/blob/main/Screenshot%202024-07-12%20000419.png)

### **A video explaining what's in the web and how to use our tool to predict the mechanism of action**

[![](https://github.com/Xmen3em/Mechanism-Of-Action-Graduation-Project-/blob/main/2024%2C_3_19_17_pm_(copy)%20(1080p).mp4)]((https://github.com/Xmen3em/Mechanism-Of-Action-Graduation-Project-/blob/main/2024%2C_3_19_17_pm_(copy)%20(1080p).mp4))