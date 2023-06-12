import React from 'react'

const UserName = () => {
  return (
    <div>
        <h1>SCRAPER</h1> {/*top container*/}
      <div className="bottom flex space-x-7">
        <div className="leftSection flex flex-col">
          <div className=" flex flex-col">
            <label htmlFor="username">Username search</label>
            <input
              type="text"
              id="username"
              className="bg-transparent w-80 font-semibold py-2 px-4 border border-gray-400 
              rounded-md"
            />
            <span>Enter one username only</span>
          </div>
        </div>
    </div>
    </div>
  )
}

export default UserName