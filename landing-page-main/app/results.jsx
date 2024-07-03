// pages/results.jsx
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import styles from "./results.module.css";

const Results = () => {
  const [previewData, setPreviewData] = useState(null);
  const [activeTab, setActiveTab] = useState("preview");

  useEffect(() => {
    const fetchPreviewData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/preview");
        setPreviewData(response.data);
      } catch (error) {
        console.error("Error fetching preview data:", error);
      }
    };

    fetchPreviewData();
  }, []);

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

  const renderPreviewTable = () => {
    if (!previewData || previewData.length === 0) {
      return null;
    }

    const headers = Object.keys(previewData[0]);
    const previewRows = previewData.slice(0, 10); // Display only the first 10 rows

    return (
      <table className="min-w-full bg-white dark:bg-gray-800 border-collapse border border-gray-200 dark:border-gray-700">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="py-2 px-4 border border-gray-200 dark:border-gray-700 bg-blue-500 text-white dark:bg-gray-700 dark:text-gray-300">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {previewRows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100 dark:hover:bg-gray-700">
              {headers.map((header, colIndex) => (
                <td key={colIndex} className="py-2 px-4 border border-gray-200 dark:border-gray-700">
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className={` ${styles.resultsContainer} mx-auto px-4 rounded-lg shadow-lg dark:bg-indigo-950 `}>
      <div className="flex flex-row">
        <div className="w-1/4 bg-gray-200 dark:bg-black p-6 rounded-lg">
          <ul>
            <li className="mb-4 cursor-pointer" onClick={() => setActiveTab("preview")}>Preview Data</li>
            <li className="mb-4 cursor-pointer" onClick={() => setActiveTab("tab2")}>Tab 2</li>
            <li className="mb-4 cursor-pointer" onClick={() => setActiveTab("tab3")}>Tab 3</li>
          </ul>
        </div>
        <div className="w-3/4 p-6 dark:bg-black rounded-lg">
          {activeTab === "preview" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Prediction Preview</h2>
              <h3 className="text-sm mb-2" style={{ fontStyle: 'italic', color: '#718096' }}>Showing only 10 rows</h3>
              <div className="overflow-x-auto">{renderPreviewTable()}</div>
              <Button onClick={handleDownload} className="mt-4">Download Results</Button>
            </div>
          )}
          {activeTab === "tab2" && <div>Tab 2 Content</div>}
          {activeTab === "tab3" && <div>Tab 3 Content</div>}
        </div>
      </div>
    </div>
  );
};

export default Results;
