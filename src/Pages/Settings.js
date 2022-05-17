import React from 'react'

const Settings = () => {
  return (
      <div className="p-7 text-2xl font-semibold flex-1">
          <h1 className="text-3xl mb-16">Settings</h1>
          <div className="grid place-items-center">
            <button
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center mt-12 text-base"
                onClick={() => {
                    localStorage.removeItem("calendar-data")
                }}
            >
                Clear all data
            </button>
          </div>
      </div>
  );
}

export default Settings