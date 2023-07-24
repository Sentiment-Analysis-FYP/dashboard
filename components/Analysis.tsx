import Link from "next/link";
import {AiOutlinePlus} from "react-icons/ai";
import React from "react";

interface AnalysisProps {
    data: ScrapeData,
}
const Analysis = () => {
    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 m-auto pattern'>
            <div className='absolute top-0 left-0 right-0 bottom-0 m-auto p-32 flex justify-center items-center'>
                <div className='w-full bg-white h-[400px] shadow-2xl rounded-lg p-6'>
                    <div className='flex flex-row-reverse'>
                        <Link href='/scraper'>
                            <div className='flex justify-center items-center gap-3 bg-violet-500 hover:bg-violet-700
                                    cursor-pointer w-48 text-gray-50 h-10 rounded-lg transition duration-500'>
                                <AiOutlinePlus size={20}/>
                                <span>New Search</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analysis