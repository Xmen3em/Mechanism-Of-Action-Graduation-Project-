"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import Plot from "react-plotly.js";
import styles from "./results.module.css";

const Results = () => {
  const [previewData, setPreviewData] = useState(null);
  const [columns, setColumns] = useState([]);
  const [activeTab, setActiveTab] = useState("preview");
  const [top20JSON, setTop20JSON] = useState(null);
  const [lowest20JSON, setLowest20JSON] = useState(null);
  const [isJSONFetched, setIsJSONFetched] = useState(false);
  const [datasetDetails, setDatasetDetails] = useState(null);
  const [columnName, setColumnName] = useState("cp_type");
  const [visualizationJSON, setVisualizationJSON] = useState(null);

  useEffect(() => {
    const fetchPreviewData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/preview");
        setPreviewData(response.data.data);
        setColumns(response.data.columns); // Set columns order
      } catch (error) {
        console.error("Error fetching preview data:", error);
      }
    };

    fetchPreviewData();
  }, []);

  useEffect(() => {
    const fetchDatasetDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/dataset_details"
        );
        setDatasetDetails(response.data);
      } catch (error) {
        console.error("Error fetching dataset details:", error);
      }
    };
    if (activeTab === "Data") {
      fetchDatasetDetails();
    }
  }, [activeTab]);

  useEffect(() => {
    const fetchJSONs = async () => {
      try {
        const top20Response = await axios.get(
          "http://localhost:5000/top_20_json"
        );
        setTop20JSON(JSON.parse(top20Response.data.json));

        const lowest20Response = await axios.get(
          "http://localhost:5000/lowest_20_json"
        );
        setLowest20JSON(JSON.parse(lowest20Response.data.json));

        setIsJSONFetched(true);
      } catch (error) {
        console.error("Error fetching JSONs:", error);
      }
    };

    if (activeTab === "Insights" && !isJSONFetched) {
      fetchJSONs();
    }
  }, [activeTab, isJSONFetched]);

  const handleDownload = async () => {
    try {
      const response = await axios.get("http://localhost:5000/download", {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "prediction.csv");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  const handleFetchVisualization = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/visualize?name_column=${columnName}`
      );
      setVisualizationJSON(JSON.parse(response.data.json));
    } catch (error) {
      console.error("Error fetching visualization:", error);
    }
  };

  const renderPreviewTable = () => {
    if (!previewData || previewData.length === 0) {
      return null;
    }

    const previewRows = previewData.slice(0, 10); // Display only the first 10 rows

    return (
      <table
        className={`${styles.table} min-w-full bg-white border-collapse border border-black`}
      >
        <thead>
          <tr>
            {columns.map((header, index) => (
              <th
                key={index}
                className={`${styles.thLight} py-2 px-4 border border-black`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {previewRows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${styles.trHover} hover:bg-gray-100`}
            >
              {columns.map((header, colIndex) => (
                <td
                  key={colIndex}
                  className={`${styles.tdLight} py-2 px-4 border border-black`}
                >
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderModelsLogLoss = (models) => {
    return (
      <div className={styles.insightBox}>
        <h3 className={`${styles.textXl} ${styles.fontSemibold} ${styles.mb4}`}>
          Machine Learning Models that were tested
        </h3>
        <table
          className={`${styles.table} min-w-full bg-white border-collapse border border-black`}
        >
          <thead>
            <tr>
              <th className={`${styles.thLight} py-2 px-4 border border-black`}>
                Model
              </th>
              <th className={`${styles.thLight} py-2 px-4 border border-black`}>
                Log Loss
              </th>
            </tr>
          </thead>
          <tbody>
            {models.map((item, index) => (
              <tr key={index}>
                <td
                  key={index}
                  className={`${
                    index === 0
                      ? `${styles.goldRow} ${styles.sheenContinuous}`
                      : ""
                  } ${styles.tdLight}`}
                >
                  {item.model}
                </td>
                <td
                  key={index}
                  className={`${
                    index === 0
                      ? `${styles.goldRow} ${styles.sheenContinuous}`
                      : ""
                  } ${styles.tdLight}`}
                >
                  {item.logLoss}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderDatasetDetails = () => {
    if (!datasetDetails) {
      return <p>No dataset details available.</p>;
    }

    return (
      <div className={styles.datasetDetailsBox}>
        <h2 className={`${styles.textXl} ${styles.fontSemibold} ${styles.mb4}`}>
          Dataset Details
        </h2>
        <ul>
          {datasetDetails.map(({ Item, Value }) => (
            <li key={Item} className={styles.datasetDetailItem}>
              <strong>{Item}:</strong> {Value}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const visualizeDatasetDetails = () => {
    return (
      <div className={styles.datasetDetailsBox}>
        {/* <div className={styles.visualizationBox}> */}
        <h3 className={styles.textXl}>Select Column Name for Visualization:</h3>
        {/* <input
          type="text"
          value={columnName}
          onChange={(e) => setColumnName(e.target.value)}
          className={styles.input}
        /> */}
        <select
          value={columnName}
          onChange={(e) => setColumnName(e.target.value)}
          className={styles.input}
        >
          <option value="cp_type">cp_type</option>
          <option value="cp_time">cp_time</option>
          <option value="cp_dose">cp_dose</option>
          <option value="gene_expression">gene_expression</option>
          <option value="cell_viability">cell_viability</option>
        </select>
        <Button onClick={handleFetchVisualization} className="mt-4">
          Visualize
        </Button>
        {/* </div> */}
        {visualizationJSON && (
          <Plot
            data={visualizationJSON.data}
            layout={visualizationJSON.layout}
          />
        )}
      </div>
    );
  };

  const navItems = [
    { name: "Preview", tab: "preview" },
    { name: "Insights", tab: "Insights" },
    { name: "Data", tab: "Data" },
  ];

  const models = [
    { model: "Neural Network (AutoEncoder) ✨", logLoss: "0.016 ✔" },
    { model: "XGBoost (AutoEncoder)", logLoss: "0.018" },
    {
      model: "ClassifierChain (Random Forest) (AutoEncoder)",
      logLoss: "0.022",
    },
    { model: "ClassifierChain (Random Forest)", logLoss: "3.42" },
    { model: "ADAPTED ALGORITHM (MLKNN)", logLoss: "3.75" },
    { model: "Label powerset (K-NN)", logLoss: "5.26" },
    { model: "BINARY RELEVANCE  (GAUSSIANNB)", logLoss: "6.79" },
    { model: "ONE VS REST  (GAUSSIANNB)", logLoss: "6.79" },
    { model: "Label powerset (SGDClassifier)", logLoss: "7.86" },
    { model: "ONE VS REST  (SGDClassifier)", logLoss: "7.97" },
  ];

  return (
    <div
      className={`${styles.resultsContainer} mx-auto px-4 rounded-lg shadow-lg`}
    >
      <div className={`${styles.flex} ${styles.flexRow}`}>
        <div className={`${styles.sidebar} dark:${styles.sidebarDark}`}>
          <nav className="space-y-4">
            {navItems.map((item) => (
              <div
                key={item.tab}
                className={`${styles.navItem} ${
                  activeTab === item.tab ? styles.navItemActive : ""
                } dark:${
                  activeTab === item.tab ? styles.navItemDarkActive : ""
                }`}
                onClick={() => setActiveTab(item.tab)}
              >
                {item.name}
              </div>
            ))}
          </nav>
        </div>
        <div className={`${styles.w3_4} ${styles.p6}`}>
          {activeTab === "preview" && (
            <div>
              <h2
                className={`${styles.text2xl} ${styles.fontSemibold} ${styles.mb4}`}
              >
                Prediction Preview
              </h2>
              <h3
                className={`${styles.mb2} ${styles.italic}`}
                style={{ color: "#718096" }}
              >
                Showing only 10 rows
              </h3>
              <div className={styles.overflowXAuto}>{renderPreviewTable()}</div>
              <Button
                onClick={handleDownload}
                className={`${styles.goldButton} ${styles.sheen} mt-4`}
              >
                Download Full Results
              </Button>
            </div>
          )}
          {activeTab === "Insights" && (
            <div>
              <h2
                className={`${styles.text2xl} ${styles.fontSemibold} ${styles.mb4}`}
              >
                Prediction Insights
              </h2>
              <h3
                className={`${styles.mb4} ${styles.italic}`}
                style={{ color: "#718096" }}
              >
                Some valuable insights about the prediction results
              </h3>
              {/* <div className="space-y-6"> */}
              {renderModelsLogLoss(models)}
              {top20JSON ? (
                <div className={styles.insightBox}>
                  <h3
                    className={`${styles.textXl} ${styles.fontSemibold} ${styles.mb2}`}
                  >
                    Top 20 Targets ✔
                  </h3>
                  <Plot data={top20JSON.data} layout={top20JSON.layout} />
                </div>
              ) : (
                <p>Loading top 20 graph...</p>
              )}
              {lowest20JSON ? (
                <div className={styles.insightBox}>
                  <h3
                    className={`${styles.textXl} ${styles.fontSemibold} ${styles.mb2}`}
                  >
                    Lowest 20 Targets ❌
                  </h3>
                  <Plot data={lowest20JSON.data} layout={lowest20JSON.layout} />
                </div>
              ) : (
                <p>Loading lowest 20 graph...</p>
              )}
              {/* </div> */}
            </div>
          )}
          {activeTab === "Data" && (
            <div>
              <h2
                className={`${styles.text2xl} ${styles.fontSemibold} ${styles.mb4}`}
              >
                Dataset Analysis
              </h2>
              <h3
                className={`${styles.mb2} ${styles.italic}`}
                style={{ color: "#718096" }}
              >
                Get a better grasp of your dataset
              </h3>
              {renderDatasetDetails()}
              {visualizeDatasetDetails()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;
