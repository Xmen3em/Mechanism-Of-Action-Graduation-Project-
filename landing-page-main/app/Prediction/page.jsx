// pages/prediction/page.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ComboboxDemo } from "@/components/ui/comboBox";
import styles from "./prediction.module.css";
import { Button } from "@/components/ui/button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CircularProgress from "@mui/material/CircularProgress";
import { Backdrop } from "@mui/material";

const steps = ["Initializing Servers", "Building Models", "Making Predictions"];

const acceptableCSVFileTypes =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .csv";

const Prediction = () => {
  const [requirementsMet, setRequirementsMet] = useState("");
  const [firstRowColumnNames, setFirstRowColumnNames] = useState("");
  const [filePathInputValue, setFilePathInputValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileReady, setFileReady] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();

  const shouldDisableUpload = () => {
    return (
      requirementsMet !== "yes" ||
      firstRowColumnNames !== "yes" ||
      !filePathInputValue ||
      loading
    );
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setFilePathInputValue(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const formData = new FormData();
    formData.append("file", filePathInputValue);

    try {
      setActiveStep(0); // Initializing Servers
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate server initialization delay

      setActiveStep(1); // Building Models
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate model building delay

      if (response.data.file_ready) {
        setFileReady(true);
        setActiveStep(2); // Making Predictions
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate prediction delay

        setLoading(false);
        router.push("/results"); // Navigate to the results page
      } else {
        setLoading(false);
        setErrorMessage("File processing failed. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setErrorMessage("Error uploading file. Please try again.");
      setLoading(false);
    }
  };

  // const handleCancel = () => {
  //   setLoading(false);
  //   setActiveStep(0);
  // };

  return (
    <div
      className={`${styles.padding_div} mx-auto px-4 rounded-lg shadow-lg dark:bg-indigo-950`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-200 dark:bg-indigo-950 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-8">Requirements</h2>
          <ul className="list-disc list-inside">
            <li className="mb-4">✓ File format is CSV or Excel</li>
            <li className="mb-4">✓ First row is column names</li>
            <li className="mb-4">✓ First column is an ID or equivalent</li>
            <li className="mb-4">
              🔗{" "}
              <a
                href="/sample.csv"
                style={{ textDecoration: "underline" }}
                download
              >
                Here
              </a>{" "}
              is a sample CSV file
            </li>
          </ul>
        </div>

        <div className="p-6 dark:bg-black rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="fileInput" className="block mb-2">
                <Image
                  src="/images/upload.png"
                  width={30}
                  height={30}
                  alt="download logo"
                />
                Upload File
              </label>
              <input
                type="file"
                id="fileInput"
                name="fileInput"
                accept={acceptableCSVFileTypes}
                onChange={handleFileInputChange}
                className="border border-gray-300 p-2 w-full rounded-lg mb-4"
              />
            </div>
            <div className="mb-6">
              <label className="block mt-4 mb-4">
                Are all requirements met?
              </label>
              <ComboboxDemo
                selectedValue={requirementsMet}
                onSelect={(value) => setRequirementsMet(value)}
              />
            </div>
            <div className="mb-6">
              <label className="block mt-4 mb-4">
                Is the first row column names?
              </label>
              <ComboboxDemo
                selectedValue={firstRowColumnNames}
                onSelect={(value) => setFirstRowColumnNames(value)}
              />
            </div>
            {errorMessage && (
              <div className="text-red-500 mb-4">{errorMessage}</div>
            )}
            <Button type="submit" disabled={shouldDisableUpload() || loading}>
              {loading ? "Loading..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
      <Backdrop
        open={loading}
        style={{
          zIndex: 1000,
          color: "#fff",
          backdropFilter: "blur(5px)",
        }}
      >
        <div
          className={`${styles.stepperContainer} p-6 bg-white rounded-lg shadow-lg`}
        >
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  StepIconProps={{ classes: { completed: "step-completed" } }}
                >
                  {activeStep === index && (
                    <CircularProgress size={20} color="primary" />
                  )}
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          {/* <Button onClick={handleCancel} className="mt-4" color="secondary">
            Cancel
          </Button> */}
        </div>
      </Backdrop>
      <style jsx global>{`
        .step-completed {
          color: green !important;
        }
      `}</style>
    </div>
  );
};

export default Prediction;
