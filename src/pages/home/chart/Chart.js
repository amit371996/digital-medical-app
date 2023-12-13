import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
    }
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      offset: true,
      grid: {
        display: false, 
      },
      ticks: {
        color: "#DD6362",
      },
    },
    y: {
      beginAtZero: true,
      stacked: true,
      grid: {
        display: false, 
      },
      ticks: {
        stepSize: 100, 
        max: 500, 
        min: 0,   
        color: "#DD6362",
      }
    }
  },
  elements: {
    line: {
      borderColor: "#DD6362", 
    }
  },
  legend: {
    display: false, 
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const data = {
  labels,
  datasets: [
    
    {
      label: "Dataset 1",
      data: [100, 182, 175, 193, 121, 251, 182, 156, 162, 217, 125, 134],
      backgroundColor: "rgba(221, 99, 98, 0.3)",
      barThickness: "10",
      borderRadius: 5,
      minBarLength: 30,
      categorySpacing: 5,
      borderSkipped: "bottom",
      barPercentage: 0.8,
      categoryPercentage: 0.9

    },
    {
      label: "Dataset 2",
      data: [172, 173, 111, 90, 89, 67, 189, 34, 128, 122, 87, 38].reverse(),
      backgroundColor: "rgba(221, 99, 98, 1)",
      barThickness: "10",
      borderRadius: 5,
      minBarLength: 50,
      categorySpacing: 5,

    }
  ]
};

export const Chart = () => {
  return (
    < div className="bar-container">
      <div className="barbx">
        <Bar options={options} data={data} />
      </div>

    </div>
  );
}