import React from "react";

function Schedule() {
  return (
    <div>
      <div className="p-4 mb-10">
        <h1 className="text-4xl text-center dark:text-white text-gray-800 font-semibold mb-6">
          <span className="text-primary_orange-0 text-4xl 2.25rem 3rem">
            Schedule{" "}
          </span>
          of GSSoC 2022!
        </h1>
        <div className="container">
          <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                  <i className="fas fa-check-circle text-white"></i>
                </div>
              </div>
              <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1">
                  4th Mar to 5th Mar
                </h3>
                <p className="leading-tight text-justify w-full">
                  Assign projects to mentors
                </p>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                  <i className="fas fa-check-circle text-white"></i>
                </div>
              </div>
              <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1">08th Mar</h3>
                <p className="leading-tight text-justify">
                  1st phase of contribution
                </p>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-red-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                  <i className="fas fa-times-circle text-white"></i>
                </div>
              </div>
              <div className="bg-red-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1 text-gray-50">
                  10th Mar to 12th Mar
                </h3>
                <p className="leading-tight text-justify">
                  Community bonding session starts
                </p>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                  <i className="fas fa-exclamation-circle text-gray-400"></i>
                </div>
              </div>
              <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1 text-gray-50">
                  10th Mar
                </h3>
                <p className="leading-tight text-justify">Leaderboard opens</p>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-red-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                  <i className="fas fa-times-circle text-white"></i>
                </div>
              </div>
              <div className="bg-red-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1 text-gray-50">
                  01st Apr
                </h3>
                <p className="leading-tight text-justify">
                  Allotment of projects
                </p>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-red-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                  <i className="fas fa-times-circle text-white"></i>
                </div>
              </div>
              <div className="bg-red-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1 text-gray-50">
                  31st May
                </h3>
                <p className="leading-tight text-justify">Coding period ends</p>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-red-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                  <i className="fas fa-times-circle text-white"></i>
                </div>
              </div>
              <div className="bg-red-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1 text-gray-50">
                  2nd week of July
                </h3>
                <p className="leading-tight text-justify">
                  Results will be declared
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;