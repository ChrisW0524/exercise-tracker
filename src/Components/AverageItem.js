import React from "react";

const AverageItem = ({ data_serialized, variable, color }) => {
    const findAverage = (variable) => {
        let avg = 0;
        for (const date in data_serialized) {
            avg += Number(data_serialized[date][variable]) || 0;
        }
        avg = Math.round(avg / Object.keys(data_serialized).length);
        return avg;
    };

    const exerciseAvg = findAverage("timeExercised");
    const stepsAvg = findAverage("stepsTaken");
    const sleepAvg = findAverage("timeSlept");


    return (
        <div className="p-10 rounded-lg bg-custom-primary transition-all duration-300 shadow-xl text-center ">
            <h1>{"Average exercise, sleep, and steps"}</h1>
            <div className="flex flex-row gap-x-8 mt-6">
                <div className="flex flex-col justify-center items-center flex-1">
                    <span className="w-20 h-20 bg-red-500 rounded-full grid place-items-center text-custom-primary">
                        {exerciseAvg}
                    </span>
                    <p className="text-gray-500 text-sm text-normal">
                        Minutes exercised per day
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center flex-1">
                    <span className="w-20 h-20 bg-green-500 rounded-full grid place-items-center text-custom-primary">
                        {stepsAvg}
                    </span>
                    <p className="text-gray-500 text-sm text-normal flex-1">
                        Steps taken per day
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center flex-1">
                    <span className="w-20 h-20 bg-blue-500 rounded-full grid place-items-center text-custom-primary">
                        {sleepAvg}
                    </span>
                    <p className="text-gray-500 text-sm text-normal">
                        Minutes slept per day
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AverageItem;
