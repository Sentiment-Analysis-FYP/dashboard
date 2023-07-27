import React, {useEffect} from "react";
import {ReactDOM} from "react";
import {useState} from "react";
import {AiOutlinePlus} from "react-icons/ai";
import {BiLock} from "react-icons/bi";

interface AddKeywordsProps {
    setKeywordsState: React.Dispatch<React.SetStateAction<string[]>>
}

const AddKeyword = (props: AddKeywordsProps) => {
    const {setKeywordsState} = props

    const [keywords, setKeywords] = useState<any[]>([]);
    const [keyword, setKeyword] = useState("");
    const addKeywords = () => {
        if (keyword !== "") {
            setKeywords([...keywords, keyword]);
            setKeyword("");
            console.log(keyword);
        }
    };

    const deleteKeyword = (index: number) => {
        const updateList = [...keywords];
        // delete updateList[index];
        updateList.splice(index, 1);
        setKeywords(updateList);
    };

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            addKeywords();
        }
    };

    useEffect(() => {
        setKeywordsState(keywords)
    }, [keywords])


    return (
        <div className="flex w-[500px] flex-col bg-gray-100 px-4 py-2 rounded-md m-2 h-[450px]">
            <span className="m-2">Search keywords</span>
            <div className="flex justify-between">
                <input
                    className="w-72 rounded-md mx-2 mr-0 px-4 py-3 border-[1px] border-gray-300"
                    type="text"
                    //   function
                    value={keyword}
                    onChange={(e) => {
                        setKeyword(e.target.value);
                    }}
                    placeholder="Kwame Nkrumah University"
                    onKeyUp={handleKeyUp}
                />
                <button
                    onClick={addKeywords}
                    className="w-40 flex gap-2 items-center justify-center bg-violet-500 py-3 to-white rounded-md
                            font-bold hover:bg-violet-700 text-gray-50 transition duration-500">
                      <span>
                        <AiOutlinePlus size={20}/>
                      </span>
                    Add keyword
                </button>
            </div>

            <div className='py-2'>
                {keywords?.length > 0 ? (
                    <div id='keyword-scroll' className='overflow-y-scroll h-[350px] snap-y py-2'>
                        {keywords.map(
                            (keyword, index) => (
                                <div
                                    className="flex gap-2 justify-between my-2 rounded-md snap-start "
                                    key={index}>
                                    <li className="bg-white w-72 mx-2 px-4 mr-0 py-3 pr-10 rounded-md  ">
                                        {keyword}
                                    </li>
                                    <button
                                        onClick={() => {
                                            deleteKeyword(index as number)
                                        }}
                                        className="w-40 text-gray-50 bg-violet-500 to-white p-2 px-4 rounded-md
                                         font-bold hover:bg-violet-700 flex gap-3 items-center justify-center">
                                        <BiLock size={20}/>
                                        Delete
                                    </button>
                                </div>
                            )
                        )}
                    </div>
                ) : (
                    <div className="mx-2 my-5">
                        <p>No keyword provided</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddKeyword;
