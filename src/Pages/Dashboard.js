import React, { useState } from "react";
import ReactCalendar from "../Components/ReactCalendar";
import "react-calendar/dist/Calendar.css";
import Heatmap from "../Components/Heatmap";
import PieChart from "../Components/PieChart";
import AverageItem from "../Components/AverageItem";
import DoughnutChart from "../Components/DoughnutChart";
const Dashboard = () => {
    const [data, setData] = useState(() => {
        if (localStorage.getItem("calendar-data") === null) {
            localStorage.setItem("calendar-data", JSON.stringify({}));
        }
        const calendar_data = JSON.parse(localStorage.getItem("calendar-data"));
        return calendar_data || {};
    });

    return (
        <div className="p-7 text-2xl font-semibold flex-1 w-full h-[100vh] overflow-y-scroll">
            <h1 className="text-3xl mb-16">Dashboard</h1>
            <div className="flex gap-x-16 mb-16">
                <ReactCalendar data={data} setData={setData}></ReactCalendar>
                <AverageItem data_serialized={data}></AverageItem>
            </div>
            <div className="flex gap-x-16">
                <div className="flex gap-x-16 flex-col w-2/3 h-full">
                    <Heatmap
                        data_serialized={data}
                        variable="timeExercised"
                        title="Time exercised each day"
                        tooltipText={"minutes exercised:"}
                    ></Heatmap>
                    <Heatmap
                        data_serialized={data}
                        variable="stepsTaken"
                        title="Steps taken each day"
                        tooltipText={"steps taken:"}
                    ></Heatmap>
                    <Heatmap
                        data_serialized={data}
                        variable="timeSlept"
                        title="Time slept each day"
                        tooltipText={"minutes slept:"}
                    ></Heatmap>
                </div>
                <div className="w-1/3 flex flex-col h-full">
                    <div className="flex-1 p-10 rounded-lg bg-custom-primary transition-all duration-300 shadow-xl mb-10 text-center">
                        <h1>Pie chart of types of exercise done</h1>
                        <PieChart data_serialized={data}></PieChart>
                    </div>
                    {/* <AverageItem
                        data_serialized={data}
                        variable={"stepsTaken"}
                        color={"#ffffff"}
                    ></AverageItem> */}
                    <div className="flex-1 p-10 rounded-lg bg-custom-primary transition-all duration-300 shadow-xl text-center">
                        <h1>Pie chart of types of exercise done</h1>
                        <DoughnutChart data_serialized={data}></DoughnutChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
