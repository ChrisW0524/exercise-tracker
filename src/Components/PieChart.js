import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data_serialized }) => {

    let exerciseDict = {
        "Walking or Hiking": 0,
        Running: 0,
        Swimming: 0,
        "Gym Workout": 0,
        Football: 0,
        Cricket: 0,
        Basketball: 0,
        Hockey: 0,
        Tennis: 0,
        Badminton: 0,
        Volleyball: 0,
        "Table Tennis": 0,
        Baseball: 0,
        Rugby: 0,
        Other: 0,
    };

    for (const date in data_serialized) {
        exerciseDict[data_serialized[date]["exerciseType"]] += 1;
    }

    const data = {
        labels: Object.keys(exerciseDict),
        datasets: [
            {
                label: "# of Votes",
                data: Object.values(exerciseDict),
                backgroundColor: [
                    "rgba(26, 188, 156,0.2)",
                    "rgba(46, 204, 113,0.2)",
                    "rgba(52, 152, 219,0.2)",
                    "rgba(155, 89, 182,0.2)",
                    "rgba(52, 73, 94,0.2)",
                    "rgba(243, 156, 18,0.2)",
                    "rgba(230, 126, 34,0.2)",
                    "rgba(231, 76, 60,0.2)",
                    "rgba(189, 195, 199,0.2)",
                    "rgba(127, 140, 141,0.2)",
                    "rgba(247, 143, 179,0.2)",
                    "rgba(241, 144, 102,0.2)",
                    "rgba(87, 75, 144,0.2)",
                    "rgba(196, 69, 105,0.2)",
                    "rgba(48, 57, 82,0.2)",
                ],
                borderColor: [
                    "rgba(26, 188, 156,1.0)",
                    "rgba(46, 204, 113,1.0)",
                    "rgba(52, 152, 219,1.0)",
                    "rgba(155, 89, 182,1.0)",
                    "rgba(52, 73, 94,1.0)",
                    "rgba(243, 156, 18,1.0)",
                    "rgba(230, 126, 34,1.0)",
                    "rgba(231, 76, 60,1.0)",
                    "rgba(189, 195, 199,1.0)",
                    "rgba(127, 140, 141,1.0)",
                    "rgba(247, 143, 179,1.0)",
                    "rgba(241, 144, 102,1.0)",
                    "rgba(87, 75, 144,1.0)",
                    "rgba(196, 69, 105,1.0)",
                    "rgba(48, 57, 82,1.0)",
                ],
                borderWidth: 1,
            },
        ],
    };
    return <Pie data={data} />;
};

export default PieChart;
