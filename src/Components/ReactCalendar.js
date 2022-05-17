import React, { useState } from "react";
import Calendar from "react-calendar";
import Popup from "reactjs-popup";
import CalendarDataDisplay from "./CalendarDataDisplay";

const ReactCalendar = ({ data, setData }) => {
    const [date, setDate] = useState(new Date());
    const [inputOpen, setInputOpen] = useState(false);
    const exerciseTypes = [
        "Walking or Hiking",
        "Running",
        "Swimming",
        "Gym Workout",
        "Football",
        "Cricket",
        "Basketball",
        "Hockey",
        "Tennis",
        "Badminton",
        "Volleyball",
        "Table Tennis",
        "Baseball",
        "Rugby",
        "Other",
    ];

    const [timeExercised, setTimeExercised] = useState(0);
    const [stepsTaken, setStepsTaken] = useState(0);
    const [exerciseType, setExerciseType] = useState("Walking or Hiking");
    const [timeSlept, setTimeSlept] = useState(0);
    const [sleepSatisfied, setSleepSatisfied] = useState(false);

    const resetInput = () => {
        setTimeExercised(0);
        setStepsTaken(0);
        setExerciseType("Walking or Hiking");
        setTimeSlept(0);
        setSleepSatisfied(false);
    };

    const onChange = (date) => {
        setDate(date);
        resetInput();
    };

    const handleSubmit = () => {
        var data_serialized = {};
        if (JSON.parse(window.localStorage.getItem("calendar-data")) != null) {
            data_serialized = JSON.parse(
                window.localStorage.getItem("calendar-data")
            );
        }

        let object = {
            timeExercised: timeExercised,
            stepsTaken: stepsTaken,
            exerciseType: exerciseType,
            timeSlept: timeSlept,
            sleepSatisfied: sleepSatisfied,
        };

        data_serialized[
            new Date(date.getTime() + 3600 * 1000 * 24)
                .toISOString()
                .slice(0, 10)
        ] = object;

        localStorage.setItem("calendar-data", JSON.stringify(data_serialized));
    };

    return (
        <div className="flex flex-1">
            <Calendar
                onChange={onChange}
                value={date}
                className="text-base w-full"
            />
            {/* Data display */}
            <CalendarDataDisplay
                date={date}
                inputOpen={inputOpen}
                setInputOpen={setInputOpen}
                data={data}
                setData={setData}
            ></CalendarDataDisplay>

            {/* Popup */}
            <Popup
                open={inputOpen}
                closeOnDocumentClick
                onClose={() => {
                    setInputOpen(false);
                }}
            >
                <div className="modal p-8">
                    <p className="font-bold text-3xl text-center">
                        Current date:{" "}
                        {new Date(date.getTime() + 3600 * 1000 * 24)
                            .toISOString()
                            .slice(0, 10)}
                    </p>
                    <hr className="w-full my-10 border-[1px] border-custom-secondary" />
                    <div className="mb-6">
                        <label className="block mb-2 font-medium text-gray-900 ">
                            Time exercised in minutes
                        </label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            onChange={(event) =>
                                setTimeExercised(event.target.value)
                            }
                        ></input>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 font-medium text-gray-900 ">
                            How many steps taken today?
                        </label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            onChange={(event) =>
                                setStepsTaken(event.target.value)
                            }
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                        ></input>
                    </div>

                    <label className="block mb-2 font-medium text-gray-900 ">
                        Type of exercise completed
                    </label>
                    <select
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-6"
                        onChange={(event) =>
                            setExerciseType(event.target.value)
                        }
                    >
                        {exerciseTypes.map((exercise, index) => {
                            return (
                                <option key={index} value={exercise}>
                                    {exercise}
                                </option>
                            );
                        })}
                    </select>
                    <div className="mb-6">
                        <label className="block mb-2 font-medium text-gray-900 ">
                            How long did you sleep?
                        </label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            onChange={(event) =>
                                setTimeSlept(event.target.value)
                            }
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                        ></input>
                    </div>

                    <div className="">
                        <label className="block mb-2 font-medium text-gray-900 ">
                            Did you sleep well today?
                        </label>
                        <div className="flex items-center mb-4">
                            <input
                                type="radio"
                                name="sleep"
                                value={true}
                                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                onChange={(event) => {
                                    setSleepSatisfied(event.target.value);
                                }}
                            />
                            <p className="block ml-2 text-sm font-medium text-gray-900">
                                Slept well
                            </p>
                        </div>
                        <div className="flex items-center mb-4">
                            <input
                                type="radio"
                                name="sleep"
                                value={false}
                                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                onChange={(event) => {
                                    setSleepSatisfied(event.target.value);
                                }}
                            />
                            <p className="block ml-2 text-sm font-medium text-gray-900">
                                Did not sleep well
                            </p>
                        </div>
                    </div>

                    <div className="grid place-items-center">
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center mt-12"
                            onClick={() => {
                                console.log(timeExercised);
                                console.log(stepsTaken);
                                console.log(exerciseType);
                                handleSubmit();
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </Popup>
        </div>
    );
};

export default ReactCalendar;
