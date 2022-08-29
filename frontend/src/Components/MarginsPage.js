import React, { useState, useEffect } from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
  Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)

const MarginsPage = () => {
  const [chartData, setChartData] = useState({datasets: []});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Q3 2018", "Q4 2018", 
      "Q1 2019", "Q2 2019", "Q3 2019", "Q4 2019", 
      "Q1 2020", "Q2 2020", "Q3 2020", "Q4 2020", 
      "Q1 2021", "Q2 2021", "Q3 2021", "Q4 2021", 
      "Q1 2022", "Q2 2022"
    ],
      datasets: [
        {
          label: "Gross Margin",
          data: [
            22.33,
            19.96,
            12.46,
            14.5,
            18.89,
            18.83,
            20.61,
            20.99,
            23.52,
            19.22,
            21.32,
            24.11,
            26.6,
            27.35,
            29.11,
            25],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235)",
        },
        {
          label: "Operating Margin",
          data: [
            6.11,
            5.72,
            -11.5,
            -2.63,
            4.14,
            4.86,
            4.72,
            5.41,
            9.22,
            5.35,
            5.71,
            10.97,
            14.56,
            14.74,
            19.2,
            14.55],
          borderColor: "rgb(0, 102, 102)",
          backgroundColor: "rgb(0, 102, 102)",
        },
        {
          label: "Profit Margin",
          data: [
            4.57,
            1.93,
            -15.46,
            -6.43,
            2.26,
            1.42,
            0.26,
            1.72,
            3.77,
            2.51,
            4.21,
            9.55,
            11.76,
            13.09,
            17.69,
            13.34],
          borderColor: "rgb(51, 255, 255)",
          backgroundColor: "rgb(51, 255, 255)",
        },

      ],
    });

    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Tesla Quarterly Margins",
        }
      },
    });
  }, []);

  return (
    <div className="financial-chart">
        <Line options={chartOptions} data={chartData}></Line>
    </div>
  )
}

export default MarginsPage
