import {AiFillPieChart} from "react-icons/ai";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getAnalyzedData} from "@/utils/store/analyzedDataSlice";

interface DashboardProps {
    setActivePage: React.Dispatch<React.SetStateAction<number>>
}

const Dashboard = (props: DashboardProps) => {
    const [dataAvailable, setDataAvailable] = useState(false);
    const {setActivePage} = props
    const pages = [
        'Twitter Scraper', 'Data Analysis', 'Data Preprocessing', 'Data Visualization'
    ]

    const storeAnalyzedData = useSelector(getAnalyzedData)

    useEffect(() => {
        setDataAvailable(storeAnalyzedData.payload.analyzedData.length > 0)
    }, [storeAnalyzedData])


    return (
        <div className='w-[1000px] rounded-lg shadow-lg bg-white h-[1000px] flex justify-center items-center'>
            <div className='flex flex-wrap gap-20 justify-center items-center select-none'>
                {pages.map((page, index) => (
                    <div key={index}
                         onClick={() => {
                             if (dataAvailable)
                                 setActivePage(index + 1)
                         }}
                         className={' transition duration-200 w-[400px] h-[400px] p-10  flex flex-col justify-between items-center rounded-lg '
                             + (!(dataAvailable || index > 0) ? "cursor-pointer hover:bg-violet-200 bg-violet-50 shadow-md text-violet-500"
                                 : " text-gray-400 bg-gray-100 ")}>
                        <div className='flex justify-center items-center'>
                            <AiFillPieChart size={200}/>
                        </div>
                        <span className='text-3xl justify-center items-center '>
                            {page}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard