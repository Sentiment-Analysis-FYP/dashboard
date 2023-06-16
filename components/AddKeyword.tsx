import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddKeyword = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [task, setTask] = useState("");
  const addTasks = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
      console.log(task);
    }
  };

  const deleteTask = (index: number) => {
    const updateList = [...tasks];
    // delete updateList[index];
    updateList.splice(index, 1);
    setTasks(updateList);
  };

  return (
    <div className="flex w-[500px] flex-col bg-gray-100 px-4 py-2 rounded-md m-2">
      <h1>Search keywords</h1>
      <div className="flex justify-between">
        <input
          className="w-72 rounded-md mx-3 mr-0 px-4 py-3"
          type="text"
          //   function
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          placeholder="Kwame Nkrumah University"
        />
        <button
          onClick={addTasks}
          className="w-40 flex gap-1 items-center justify-center bg-violet-500 py-3 to-white rounded-md font-bold hover:bg-blue-700"
        >
          <span className="">
            <AiOutlinePlus size={20} />
          </span>
          Add keyword
        </button>
      </div>
      <div>
        {tasks?.length > 0 ? (
          <ul>
            {tasks.map(
              (
                task:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined,
                index: React.Key | null | undefined
              ) => (
                <div
                  className="flex gap-2 justify-between my-2 rounded-md"
                  key={index}
                >
                  <li className="  bg-white w-72 font-semibold mx-3 px-4  mr-0 py-3 pr-10 rounded-md  ">
                    {task}
                  </li>
                  <button
                    onClick={() => {
                      deleteTask(index as number);
                    }}
                    className="w-40 bg-violet-500 to-white p-2 px-4 rounded-md font-bold hover:bg-blue-700"
                  >
                    Delete
                  </button>
                </div>
              )
            )}
          </ul>
        ) : (
          <div>
            <p>No keyword available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddKeyword;

// const ExperimentKey = () => {
//     const AddKeyword = () => {
//     const (keywords, setKeywords) = useState([]);
//     const [inputValue, setInputValue] = useState('');

//     const handleInputChange = (event) => {
//         setInputValue(event.target.value)
//     };

//     const handleAddKeyword = () => {
//         setKeywords([...keywords, inputValue])
//         setInputValue('');
//     };

//     const handleDelete = {index} => {
//         const newKeywords = keyword.filter((, i) => i ==index),
//         setKeywords(newKeywords);
//     };

//   return (
//     <div>
//          <h1 className="text-2xl">Search keyword</h1>
//          <div className="flex">
//           <input
//           className="border border-gray-400 mr-2 px-2 py-2 flex-grow"
//           type="text"
//           placeholder="Kwame Nkrumah University"
//           value={inputValue}
//           onChange={handleInputChange}
//         />
//         <button className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//          onClick={handleAddKeyword}
//          >
//           Add keyword
//         </button>
//       </div>
//       <ul className="list-disc list-inside my-4">
//          {keywords.map((keywords, index) => (
//             <li key={index} className="flex justify-between items-center mb-2">
//                {keywords}
//                <button className="bg-red-500 text-white font-bold py-1 px-2 rounded"
//                 onClick={()=> handleDelete(index)}
//                >
//                  delete
//                </button>
//             </li>
//          ))}
//       </ul>
//     </div>
//   )
// }
