import React, { useState, useEffect } from "react";

const CalendarDataDisplay = ({
    date,
    inputOpen,
    setInputOpen,
    data,
    setData,
}) => {
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("calendar-data")));
    }, [date, inputOpen]);

    return (
        <div className="border-[1px] border-[#A0A096] flex-1 w-full p-8">
            <div>
                <h3>
                    Selected date:{" "}
                    <em>
                        {new Date(date.getTime() + 3600 * 1000 * 24)
                            .toISOString()
                            .slice(0, 10)}
                    </em>
                </h3>
                <ul className="font-normal text-base mt-8">
                    <li>
                        Time exercised:
                        {data[
                            new Date(date.getTime() + 3600 * 1000 * 24)
                                .toISOString()
                                .slice(0, 10)
                        ]
                            ? data[
                                  new Date(date.getTime() + 3600 * 1000 * 24)
                                      .toISOString()
                                      .slice(0, 10)
                              ]["timeExercised"]
                            : "No data"}
                    </li>
                    <li>
                        Steps Taken:
                        {data[
                            new Date(date.getTime() + 3600 * 1000 * 24)
                                .toISOString()
                                .slice(0, 10)
                        ]
                            ? data[
                                  new Date(date.getTime() + 3600 * 1000 * 24)
                                      .toISOString()
                                      .slice(0, 10)
                              ]["stepsTaken"]
                            : "No data"}
                    </li>
                    <li>
                        Type of exercise done:
                        {data[
                            new Date(date.getTime() + 3600 * 1000 * 24)
                                .toISOString()
                                .slice(0, 10)
                        ]
                            ? data[
                                  new Date(date.getTime() + 3600 * 1000 * 24)
                                      .toISOString()
                                      .slice(0, 10)
                              ]["exerciseType"]
                            : "No data"}
                    </li>
                    <li>
                        Time slept:
                        {data[
                            new Date(date.getTime() + 3600 * 1000 * 24)
                                .toISOString()
                                .slice(0, 10)
                        ]
                            ? data[
                                  new Date(date.getTime() + 3600 * 1000 * 24)
                                      .toISOString()
                                      .slice(0, 10)
                              ]["timeSlept"]
                            : "No data"}
                    </li>
                    <li>
                        Slept well?:
                        {data[
                            new Date(date.getTime() + 3600 * 1000 * 24)
                                .toISOString()
                                .slice(0, 10)
                        ]
                            ? data[
                                  new Date(date.getTime() + 3600 * 1000 * 24)
                                      .toISOString()
                                      .slice(0, 10)
                              ]["sleepSatisfied"]
                            : "No data"}
                    </li>
                </ul>
            </div>
            <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center mt-12 text-base"
                onClick={() => {
                    setInputOpen(true);
                }}
            >
                Change data
            </button>

        </div>
    );
};

export default CalendarDataDisplay;
