import React from "react";

interface UserNameProps {
    setUsername: React.Dispatch<React.SetStateAction<string>>
}

const UserName = (props: UserNameProps) => {
    const {setUsername} = props

    return (
        <div className="w-[500px] h-32 bottom flex items-center space-x-7 bg-violet-50 my-2 px-4 rounded-md">
            <div className=" flex flex-col">
                <div className=" flex flex-col m-2 ">
                    <label htmlFor="username" className="my-2 mb-0 text-violet-600 text-xl">
                        Username search*
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="w-80 py-2 px-4 border-[1px] border-gray-300 rounded-md"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <span className="my-2 text-sm text-violet-900">
                            Enter one username only*
                        </span>
                </div>
            </div>
        </div>
    );
};

export default UserName;
