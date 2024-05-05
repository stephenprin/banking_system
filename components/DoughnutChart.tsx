"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

import React from 'react'

export const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const data={
        datasets:[
            {
            label:"Banks",
            data: [1250, 2500,3750],
            backgroundColor:["#FF6384","#36A2EB","#FFCE56"],
            hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]
            }

        ],
        labels: ["Banks 1", "Banks 2", "Banks 3"]
    }

  return (
    <Doughnut data={data}
    options={{
        responsive: true,
        cutout:"60%",
        plugins: {
            legend: {
                display:false
            }
        }
    }
}
     />
  )
}
