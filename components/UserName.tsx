import React from "react";

interface UserNameProps {
    setUsername: React.Dispatch<React.SetStateAction<string>>
}

const UserName = (props: UserNameProps) => {
    const {setUsername} = props

    return (
        <div>
            <div className="w-[500px] h-32 bottom flex items-center space-x-7 bg-gray-100 m-2 px-4 rounded-md">
                <div className="leftSection flex flex-col">
                    <div className=" flex flex-col m-2 ">
                        <label htmlFor="username" className="my-2 mb-0">
                            Username search
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-80 font-semibold py-2 px-4 border border-gray-400 rounded-md"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <span className="my-2">
                            Enter one username only
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserName;
