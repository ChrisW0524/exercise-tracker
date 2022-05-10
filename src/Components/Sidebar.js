import React, { useState } from "react";
import { FaFireAlt } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import {
    MdSpaceDashboard,
    MdOutlineSportsBasketball,
    MdSettings,
} from "react-icons/md";
import { RiMoonClearFill } from "react-icons/ri";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const Menus = [
        { spacer: true },
        { title: "Dashboard", icon: <MdSpaceDashboard></MdSpaceDashboard> },
        { spacer: true },
        {
            title: "Exercise",
            icon: <MdOutlineSportsBasketball></MdOutlineSportsBasketball>,
        },

        { title: "Sleep", icon: <RiMoonClearFill></RiMoonClearFill> },
        { spacer: true },
        { title: "Settings", icon: <MdSettings></MdSettings> },
    ];

    return (
        <div
            className={`h-screen ${
                isOpen ? "w-72" : "w-24"
            } bg-custom-secondary relative transition-all duration-300 p-5 pt-8`}
        >
            {/* Rotate Icon */}
            <div
                className={`absolute cursor-pointer -right-3 top-9 border-2 border-custom-secondary z-50 text-3xl rounded-full bg-custom-primary ${
                    isOpen ? "rotate-180" : "rotate-0"
                } transition-all duration-300`}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <IoMdArrowDropright></IoMdArrowDropright>
            </div>

            <div className="flex gap-x-4 items-center">
                <div className=" text-white text-2xl grid place-items-center bg-orange-600 w-10 h-10 rounded-lg bg-gradient-to-tr from-orange-400 min-w-[40px]">
                    <FaFireAlt></FaFireAlt>
                </div>
                <div className="max-h-10">
                  <h3
                      className={`text-custom-primary origin-left font-medium text-xl transition-all duration-300 ${
                          !isOpen && "scale-0"
                      }`}
                  >
                      Health Tracker
                  </h3>
                </div>
            </div>
            <ul>
                {Menus.map((menu, index) => {
                    if (!menu.spacer) {
                        return (
                            <li
                                className={`text-custom-primary text-3xl flex items-center gap-x-4 cursor-pointer p-2 hover:bg-neutral-700 rounded-lg mt-10
                                }`}
                                key={index}
                            >
                                <div className="grid place-items-center pl-[6px]">
                                    {menu.icon}
                                </div>
                                <p
                                    className={`text-gray-300 text-sm origin-left duration-75 ${
                                        !isOpen && "hidden"
                                    }`}
                                >
                                    {menu.title}
                                </p>
                            </li>
                        );
                    }
                    else{
                      return <li>
                        <hr className="w-full my-10" />
                      </li>
                    }
                })}
            </ul>
        </div>
    );
};

export default Sidebar;
