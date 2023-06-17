import React from "react";

const UserName = () => {
  return (
    <div>
      <div className="w-[500px] h-24 bottom flex items-center space-x-7 bg-gray-100 m-2 px-4 rounded-md">
        <div className="leftSection flex flex-col">
          <div className=" flex flex-col m-2 ">
            <label htmlFor="username" className="my-2 mb-0 m-2">Username search</label>
            <input
              type="text"
              id="username"
              className="w-80 font-semibold py-2 px-4 border border-gray-400 
              rounded-md"
            />
            <span className="my-2 m-2">Enter one username only</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserName;
