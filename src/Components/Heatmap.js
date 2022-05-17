import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";

function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
}

function getRange(count) {
    return Array.from({ length: count }, (_, i) => i);
}

const config = {
    timeExercised: {
        ranges: [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150],
        color: "red",
    },
    timeSlept: {
        ranges: [0, 60, 120, 180, 240, 300, 360, 420, 480, 540, 600],
        color: "blue",
    },
    stepsTaken: {
        ranges: [
            0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000,
        ],
        color: "green",
    },
};

const today = new Date();
const currentYear = new Date().getFullYear();
const firstDay = new Date(currentYear, 0, 1);
const lastDay = new Date(currentYear, 11, 31);

const Heatmap = ({ data_serialized, variable, title, tooltipText }) => {
    // console.log(data_serialized)
    const yearData = getRange(365).map((index) => {
        const d = shiftDate(new Date(lastDay), -index)
            .toISOString()
            .slice(0, 10);
        var count = 0;
        if (data_serialized[d] !== undefined) {
            count = Number(data_serialized[d][variable]);
        }

        return {
            date: shiftDate(new Date(lastDay), -index)
                .toISOString()
                .slice(0, 10),
            count: count,
        };
    });

    return (
        <div className="w-full">
            <div className="w-full p-10 rounded-lg bg-custom-primary transition-all duration-300 shadow-xl mb-10">
                <h3 className="font-bold text-2xl mb-10 text-custom-secondary transition-all duration-300">
                    {title}
                </h3>
                <CalendarHeatmap
                    className=""
                    startDate={new Date(currentYear, 0, 0)}
                    endDate={new Date(currentYear, 11, 30)}
                    values={yearData}
                    horizontal={true}
                    showMonthLabels={true}
                    showWeekdayLabels={true}
                    gutterSize={1}
                    classForValue={(value) => {
                        if (!value || value.count === 0) {
                            return "fill-neutral-300"
                        }
                        if (
                            config[variable]["ranges"][0] < value.count &&
                            value.count <= config[variable]["ranges"][1]
                        ) {
                            return config[variable]["color"] === "red"
                                ? "fill-red-100"
                                : config[variable]["color"] === "blue"
                                ? "fill-blue-100"
                                : config[variable]["color"] === "green"
                                ? "fill-green-100"
                                : "";
                        }
                        if (
                            config[variable]["ranges"][1] < value.count &&
                            value.count <= config[variable]["ranges"][2]
                        ) {
                            return config[variable]["color"] === "red"
                                ? "fill-red-200"
                                : config[variable]["color"] === "blue"
                                ? "fill-blue-200"
                                : config[variable]["color"] === "green"
                                ? "fill-green-200"
                                : "";
                        }
                        if (
                            config[variable]["ranges"][2] < value.count &&
                            value.count <= config[variable]["ranges"][3]
                        ) {
                            return config[variable]["color"] === "red"
                                ? "fill-red-300"
                                : config[variable]["color"] === "blue"
                                ? "fill-blue-300"
                                : config[variable]["color"] === "green"
                                ? "fill-green-300"
                                : "";
                        }
                        if (
                            config[variable]["ranges"][3] < value.count &&
                            value.count <= config[variable]["ranges"][4]
                        ) {
                            return config[variable]["color"] === "red"
                                ? "fill-red-400"
                                : config[variable]["color"] === "blue"
                                ? "fill-blue-400"
                                : config[variable]["color"] === "green"
                                ? "fill-green-400"
                                : "";
                        }
                        if (
                            config[variable]["ranges"][4] < value.count &&
                            value.count <= config[variable]["ranges"][5]
                        ) {
                            return config[variable]["color"] === "red"
                                ? "fill-red-500"
                                : config[variable]["color"] === "blue"
                                ? "fill-blue-500"
                                : config[variable]["color"] === "green"
                                ? "fill-green-500"
                                : "";
                        }
                        if (
                            config[variable]["ranges"][5] < value.count &&
                            value.count <= config[variable]["ranges"][6]
                        ) {
                            return config[variable]["color"] === "red"
                                ? "fill-red-600"
                                : config[variable]["color"] === "blue"
                                ? "fill-blue-600"
                                : config[variable]["color"] === "green"
                                ? "fill-green-600"
                                : "";
                        }
                        if (
                            config[variable]["ranges"][6] < value.count &&
                            value.count <= config[variable]["ranges"][7]
                        ) {
                            return config[variable]["color"] === "red"
                                ? "fill-red-700"
                                : config[variable]["color"] === "blue"
                                ? "fill-blue-700"
                                : config[variable]["color"] === "green"
                                ? "fill-green-700"
                                : "";
                        }
                        if (
                            config[variable]["ranges"][7] < value.count &&
                            value.count <= config[variable]["ranges"][8]
                        ) {
                            return config[variable]["color"] === "red"
                                ? "fill-red-800"
                                : config[variable]["color"] === "blue"
                                ? "fill-blue-800"
                                : config[variable]["color"] === "green"
                                ? "fill-green-800"
                                : "";
                        }
                        if (
                            config[variable]["ranges"][8] < value.count &&
                            value.count <= config[variable]["ranges"][9]
                        ) {
                            return config[variable]["color"] === "red"
                                ? "fill-red-900"
                                : config[variable]["color"] === "blue"
                                ? "fill-blue-900"
                                : config[variable]["color"] === "green"
                                ? "fill-green-900"
                                : "";
                        }

                        return config[variable]["color"] === "red"
                            ? "fill-red-1000"
                            : config[variable]["color"] === "blue"
                            ? "fill-blue-1000"
                            : config[variable]["color"] === "green"
                            ? "fill-green-1000"
                            : "";
                    }}
                    tooltipDataAttrs={(value) => {
                        return {
                            "data-tip": `${value.date} ${tooltipText} ${value.count}`,
                        };
                    }}
                ></CalendarHeatmap>
                <ReactTooltip />
                <div className="flex">
                    <p className="text-sm text-gray-500">
                        Note that activity calculations are very much in
                        development and will likely change in the near future.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Heatmap;
