import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ data_serialized }) => {
    console.log(data_serialized);
    let sleptWell = 0;
    let sleptBad = 0;

    for (const date in data_serialized) {
        data_serialized[date]["sleepSatisfied"].toString() === "true"
            ? (sleptWell += 1)
            : (sleptBad += 1);
    }

    console.log(sleptWell);
    console.log(sleptBad);

    const data = {
        labels: ["Slept well", "Did not sleep well"],
        datasets: [
            {
                label: "# of Votes",
                data: [sleptWell, sleptBad],
                backgroundColor: [
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                ],
                borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
                borderWidth: 1,
            },
        ],
    };
    return <Doughnut data={data} />;
};

export default DoughnutChart;
