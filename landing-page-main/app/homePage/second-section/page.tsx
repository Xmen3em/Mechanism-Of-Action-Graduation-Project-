"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import styles from './second-section.module.css';

const features = [
  {
    name: "MoA Prediction Tool",
    description:
      "Unlock the future of drug discovery with our cutting-edge MoA prediction tool! Empower your research by accurately predicting a compound's Mechanism of Action from its cellular signature. Revolutionize the way you approach drug development and gain unprecedented insights into molecular pathways.",
    image: "/images/3d-fluency-sparkling.png",
    alt: "Customizable",
    color: "blue",
  },
  {
    name: " Insights and Analysis ",
    description:
      "Dive into a world of data-driven discoveries! Our platform not only predicts MoA but also provides in-depth insights and analysis. Uncover hidden patterns, identify novel connections, and stay at the forefront of scientific exploration. Elevate your research with our comprehensive analytical tools.",
    image: "/images/icon-analytics.png",
    alt: "Customizable",
  },
  {
    name: "Researches and Case Studies",
    description:
      "Explore the frontier of biotechnology with our curated collection of researches and case studies. Stay informed about the latest breakthroughs, success stories, and advancements in MoA. Gain a competitive edge by leveraging the knowledge and experiences shared by experts in the field. Your journey to innovation starts here.",
    image: "/images/icon-journey.png",
    alt: "Customizable",
  },
   {
    name: "Interactive Visualization",
    image: "/images/3d-fluency-accounting.png",
    description:
      "Immerse yourself in your data with our interactive visualization tools. Gain intuitive insights through dynamic charts and graphs that make complex data easy to understand. Explore your findings from multiple perspectives and communicate your discoveries effectively.",
    alt: "Customizable",
  },
  {
    name: "Enhanced Speed",
    description:
      "Accelerate your research with our high-performance platform. Experience rapid predictions and analyses to streamline your workflow and make informed decisions swiftly. Speed up your drug discovery process and stay ahead in the competitive landscape.",
    image: "/images/icon-fast.png",
    alt: "Customizable",
  },

   {
    name: " More..",
    description:
      "Stay tuned for more updates, and services that will redefine your journey with us. Your exploration has only just begun.",
    image: "/images/icon-layer.png",
    alt: "Customizable",
  },
];

const SecondSection = () => {
  return (
    <div className={styles.background}>
      <div
        className="
        flex flex-col md:flex-row
        items-center justify-center pb-10
        "
      >
        <div className="p-5 justify-center md:w-1/3">
          <div className="bg-gradient-to-r from-blue-800 to-yellow-500 bg-clip-text text-transparent text-4xl md:text-4xl font-bold pb-10">
            MoA (Mechanism of Action):
          </div>
          <div className="text-xl mb-8 text-gray-700 dark:text-gray-200">
            In pharmacology, the term Mechanism of Action (MoA) embodies the
            intricate biochemical interactions underlying a drug's
            pharmacological effects. These interactions are pivotal, often
            targeting specific molecular entities such as enzymes or receptors,
            and are fundamental to understanding a drug's therapeutic properties
            and potential side effects.
          </div>
          <a href="../../Prediction">
            <a className="bg-blue-500 text-white p-4 mb-10 justify-center flex md:w-1/4 rounded-lg hover:bg-blue-600">
              Get Started
            </a>
          </a>
        </div>
        

        <div className="md:ml-10 md:mt-0 mt-5">
          <Image
            className="rounded-xl"
            src="/images/first.jpg"
            width={600}
            height={600}
            alt="logo"
          />
        </div>
        
      </div>
       <div className="absolute inset-20 z-[-1] bg-gradient-to-br from-[#4c6ef5] to-[#fff6d0] opacity-20 blur-[100px]" >
   
      </div>
     
      <div className="relative w-full h-full space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8  md:p-12  max-w-7xl mx-auto">
        <img
          src="/images/kaggle.png"
          alt="Kaggle"
          width={600}
          height={400}
          className="rounded-xl object-cover w-full h-full"
        />
                <div className="space-y-4">
          <h2 className="bg-gradient-to-r from-blue-800 to-yellow-500 bg-clip-text text-transparent text-4xl md:text-4xl font-bold pb-10">Problem Description</h2>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-200">
           In this competition, we had access to a unique dataset that combines gene expression and cell viability data. The data is based on a new technology that measures simultaneously (within the same samples) human cells’ responses to drugs in a pool of 100 different cell types (thus solving the problem of identifying ex-ante, which cell types are better suited for a given drug). In addition, you will have access to MoA annotations for more than 5,000 drugs in this dataset.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="bg-gradient-to-r from-blue-800 to-yellow-500 bg-clip-text text-transparent text-4xl md:text-4xl font-bold pb-10">About Kaggle</h2>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-200">
            Kaggle is a platform for predictive modeling and analytics competitions. It allows data scientists, machine
            learning engineers, researchers, and enthusiasts to participate in and contribute to data science projects.
            It's known for hosting data science competitions, where participants use their skills to tackle real-world
            problems by building models with the best solutions, and provides access to a wealth of public datasets that
            can be used for training and experimentation.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="bg-gradient-to-r from-blue-800 to-yellow-500 bg-clip-text text-transparent text-4xl md:text-4xl font-bold pb-10">Why This Challenge Matters</h2>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-200">
            This challenge is presented with the goal of advancing drug development through improvements to MoA prediction algorithms. If successful, it will help to develop an algorithm to predict a compound’s MoA given its cellular signature, thus helping scientists advance the drug discovery process.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="bg-gradient-to-r from-blue-800 to-yellow-500 bg-clip-text text-transparent text-4xl md:text-4xl font-bold pb-10">Kaggle Competition Link</h2>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-200">
           For detailed information about the competition, visit the Kaggle
              page:
              <a
                href="https://www.kaggle.com/c/lish-moa/overview"
                target="_blank"
              >
                Kaggle - MOA Prediction Challenge
              </a>
          </p>
        </div>

      </div>
      
      <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-[#5098d8] to-[#923993] opacity-20 blur-[100px]" />
    </div>
    







<div className="w-full bg-gray-50 p-8 dark:bg-gray-950">
  <div className="container mx-auto px-4 md:px-6">
    <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-8 lg:space-x-12">
      
      {/* Video Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative rounded-lg border border-gray-200 bg-gray-50 shadow-lg w-full md:w-auto dark:border-gray-800 dark:bg-gray-950">
          <video className="w-full rounded-lg" width={570} height={320} controls>
            <source src="/content/hero-1.mp4" type="video/mp4" />
          </video>
          {/* Overlay to mimic the title bar in the screenshot */}
          <div className="absolute top-0 left-0 bg-black bg-opacity-75 text-white px-2 py-1 rounded-t-lg w-full">
            <span>Moa Prediction Page Demo</span>
          </div>
        </div>
      </div>
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <div className="dark:bg-gray-950 rounded-lg p-6 shadow-md bg-white">
          <div className="flex items-center space-x-4">
            {/* Placeholder for avatar */}
            <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            <div>
              


<div className="bg-gradient-to-r from-blue-800 to-yellow-500 bg-clip-text text-transparent text-4xl md:text-4xl font-bold pb-10">
      How to Use Our Tool
    </div>
    <p className="text-gray-500 md:text-xl dark:text-gray-400">
      Follow these simple steps to effectively use our data analysis and visualization tool.
    </p>
    <div className="grid gap-4 md:gap-8 mt-6">
      <div className="grid gap-2">
        <div className="font-medium">1. Upload Your Dataset</div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Click the "Upload" button, select your CSV file, and click "Open" to upload your dataset.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="font-medium">2. View Dataset Details</div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          After uploading, view a summary of your dataset, including the number of rows, columns, and data points.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="font-medium">3. Analyze the Data</div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Our tool preprocesses your data and generates predictions using our models. View a sample of the prediction results.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="font-medium">4. Visualize Data</div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Choose a column to visualize and view graphs showing distributions and patterns in your data.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="font-medium">5. Download Results</div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Click the "Download" button to save the prediction results as a CSV file on your computer.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="font-medium">6. Explore Additional Features</div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          View the top 20 and lowest 20 most frequently predicted targets in your dataset.
        </p>
      </div>
      </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>




      <div className="flex-col items-center justify-center">
        <div
          className="
            text-3xl
            flex
            justify-center
            md:text-5xl
            font-bold
            pt-5
            pb-10
            bg-gradient-to-r
            from-purple-400
            to-blue-800
            bg-clip-text
            text-transparent
          "
        >
          Key Features
        </div>

        <div className="grid grid-cols-1 p-4 md:grid-cols-3 gap-4 md:px-40">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex-col space-y-6 pb-10 border
                p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out
              "
            >
              <div
                className="
                  text-3xl font-bold
                "
              >
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={300}
                  height={300}
                  className="object-contain h-20 w-20 items-center justify-center flex mb-10"
                />
                <div>
                  <div
                    className="text-2xl pb-4 
                    "
                  >
                    {feature.name}
                  </div>

                  <div className="bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent text-sm dark:text-slate-300">
                    {feature.description}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
        
      </div>
      
      
    </div>
  );
};

export default dynamic(() => Promise.resolve(SecondSection), { ssr: false });
