import {AiFillPieChart} from "react-icons/ai";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getAnalyzedData} from "@/utils/store/analyzedDataSlice";
import Image, {StaticImageData} from "next/image";
import PreprocessImg from "@/public/PreprocessImg.jpg";
import VisualizationImg from "@/public/VisualizationImg.jpeg";
import AnalysisImg from "@/public/AnalysisImg.jpg";
import scrapedataImg from "@/public/ScrapeDataImg.jpg";

interface DashboardProps {
    setActivePage: React.Dispatch<React.SetStateAction<number>>
}

interface Images {
    [key: string]: StaticImageData;
}

const Dashboard = (props: DashboardProps) => {
    const [dataAvailable, setDataAvailable] = useState(false);
    const {setActivePage} = props
    const pages = [
        'Twitter Scraper', 'Data Analysis', 'Data Preprocessing', 'Data Visualization'
    ]

    const images: Images = {
        "Twitter Scraper": scrapedataImg,
        "Data Analysis": AnalysisImg,
        "Data Preprocessing": PreprocessImg,
        "Data Visualization": VisualizationImg,
    };

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
                             if (dataAvailable || index == 0)
                                 setActivePage(index + 1)
                         }}
                         className={' transition duration-200 w-[400px] h-[400px] p-10  flex flex-col justify-between items-center rounded-lg '
                             + (!(dataAvailable || index > 0) ? "cursor-pointer hover:bg-violet-500 hover:text-white bg-violet-100 shadow-md text-violet-500"
                                 : " text-gray-400 bg-gray-100 ")}>
                        <div className={'flex justify-center items-center rounded-2xl overflow-hidden ' +
                            (!(dataAvailable && index != 0) && " opacity-75")}>
                            {/*<AiFillPieChart size={200}/>*/}
                            <Image src={images[page]} alt="image"/>
                        </div>
                        <span className='text-3xl font-semibold justify-center items-center pt-2'>
                            {page}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard