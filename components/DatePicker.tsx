import React from "react";

const DatePicker = () => {
  return (
    <div className="flex items-center justify-center w-full bg-gray-50">
      <div className="flex bg-white rounded-xl shadow-lg">
        <div className="flex flex-col">
          <div className="flex divide-x">
            <div className="flex flex-col px-6 pt-5 pb-6  border-b border-gray-100">
              <div className="flex items-center justify-between">
                <button className="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
                  <svg
                    className="w-6 h-6 text-gray-900 stroke-current"
                    fill="none"
                  >
                    <path
                      d="M13.25 8.75L9.75 12l3 3.25"
                      stroke-width="1.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div className="text-sm font-semibold">February</div>
                <button className="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
                  <svg
                    className="w-6 h-6 text-gray-900 stroke-current"
                    fill="none"
                  >
                    <path
                      d="M10.75 8.75l3.5 3.25-3.5 3.25"
                      stroke-width="1.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-7 text-xs text-center text-gray-900">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg font-semibold">
                  Mon
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg font-semibold">
                  Tue
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg font-semibold">
                  Wed
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg font-semibold">
                  Thu
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg font-semibold">
                  Fri
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg font-semibold">
                  Sat
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg font-semibold">
                  Sun
                </span>

                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  1
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  2
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  3
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  4
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  5
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  6
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  7
                </span>

                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  8
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  9
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  10
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  11
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  12
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  13
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  14
                </span>

                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  15
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  16
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  17
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-l-lg bg-blue-600 text-white">
                  18
                </span>
                <span className="flex items-center justify-center w-10 h-10  font-semibold text-blue-600 bg-gray-50">
                  19
                </span>
                <span className="flex items-center justify-center w-10 h-10  font-semibold text-blue-600 bg-gray-50">
                  20
                </span>
                <span className="flex items-center justify-center w-10 h-10  font-semibold text-blue-600  rounded-tr-lg bg-gray-50">
                  21
                </span>

                <span className="flex items-center justify-center w-10 h-10  font-semibold text-blue-600 rounded-l-lg bg-gray-50">
                  22
                </span>
                <span className="flex items-center justify-center w-10 h-10  font-semibold text-blue-600 bg-gray-50">
                  23
                </span>
                <span className="flex items-center justify-center w-10 h-10  font-semibold text-blue-600 bg-gray-50">
                  24
                </span>
                <span className="flex items-center justify-center w-10 h-10  font-semibold text-blue-600 bg-gray-50">
                  25
                </span>
                <span className="flex items-center justify-center w-10 h-10  font-semibold text-blue-600 bg-gray-50">
                  26
                </span>
                <span className="flex items-center justify-center w-10 h-10  font-semibold text-blue-600 bg-gray-50">
                  27
                </span>
                <span className="flex items-center justify-center w-10 h-10  font-semibold text-blue-600 rounded-br-lg  bg-gray-50">
                  28
                </span>

                <span className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700">
                  1
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700">
                  2
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700">
                  3
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700">
                  4
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700">
                  5
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700">
                  6
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700">
                  7
                </span>
              </div>
            </div>
            <div className="flex flex-col px-6 pt-5 pb-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <button className="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
                  <svg
                    className="w-6 h-6 text-gray-900 stroke-current"
                    fill="none"
                  >
                    <path
                      d="M13.25 8.75L9.75 12l3 3.25"
                      stroke-width="1.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div className="text-sm font-semibold">March</div>
                <button className="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
                  <svg
                    className="w-6 h-6 text-gray-900 stroke-current"
                    fill="none"
                  >
                    <path
                      d="M10.75 8.75l3.5 3.25-3.5 3.25"
                      stroke-width="1.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-7 text-xs text-center text-gray-900">
                <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                  Mon
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                  Tue
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                  Wed
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                  Thu
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                  Fri
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                  Sat
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                  Sun
                </span>

                <span className="flex items-center justify-center w-10 h-10  text-blue-600 bg-gray-50 rounded-tl-lg">
                  1
                </span>
                <span className="flex items-center justify-center w-10 h-10  text-blue-600 bg-gray-50">
                  2
                </span>
                <span className="flex items-center justify-center w-10 h-10  text-blue-600 bg-gray-50">
                  3
                </span>
                <span className="flex items-center justify-center w-10 h-10  text-blue-600 bg-gray-50">
                  4
                </span>
                <span className="flex items-center justify-center w-10 h-10  text-blue-600 bg-gray-50">
                  5
                </span>
                <span className="flex items-center justify-center w-10 h-10  text-blue-600 bg-gray-50">
                  6
                </span>
                <span className="flex items-center justify-center w-10 h-10  text-blue-600 bg-gray-50 rounded-r-lg">
                  7
                </span>

                <span className="flex items-center justify-center w-10 h-10  text-blue-600 bg-gray-50 rounded-bl-lg">
                  8
                </span>
                <span className="flex items-center justify-center w-10 h-10  text-blue-600 bg-gray-50">
                  9
                </span>
                <span className="flex items-center justify-center w-10 h-10  text-blue-600 bg-gray-50">
                  10
                </span>
                <span className="flex items-center justify-center w-10 h-10  bg-blue-600 text-white rounded-r-lg">
                  11
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  12
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  13
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  14
                </span>

                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  15
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  16
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  17
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  18
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  19
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  20
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  21
                </span>

                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  22
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  23
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  24
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  25
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  26
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  27
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  28
                </span>

                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  29
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  30
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  31
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700">
                  1
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700">
                  2
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700">
                  3
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700">
                  4
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex item-center">
              <div>
                <input
                  type="text"
                  className="flex items-center w-32 px-4 py-2 text-sm text-gray-900 rounded-lg bg-gray-50 focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-none"
                  placeholder="18/02/2023"
                />
              </div>
              <div>
                <svg
                  className="w-6 h-6 stroke-current text-gray-900"
                  fill="none"
                >
                  <path
                    d="M6.738 12.012h10.5m-4.476 4.25l4.5-4.25-4.5-4.25"
                    stroke-width="1.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="flex items-center w-32 px-4 py-2 text-sm text-gray-900 rounded-lg bg-gray-50 focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-none"
                placeholder="11/03/2023"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 text-sm rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-gray-200">
                Cancel
              </button>
              <button className="px-4 py-2 text-sm rounded-lg text-white bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-blue-700">
                Set Date
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
