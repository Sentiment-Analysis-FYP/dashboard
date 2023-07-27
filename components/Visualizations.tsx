import {AnalyzedData} from "@/utils/scraper";
import CustomWordCloud from "@/components/charts/CustomWordCloud";
import {getSentimentList} from "@/utils/visualizations";
import CustomBarChart from "@/components/charts/CustomBarChart";
import {useEffect, useState} from "react";
import CustomLineChart from "@/components/charts/CustomLineChart";
import {useSelector} from "react-redux";
import {getAnalyzedData} from "@/utils/store/analyzedDataSlice";

interface VisualizationsProps {
    data: AnalyzedData
}

const NEGATIVE = 'negative'
const POSITIVE = 'positive'

const Visualizations = (props: VisualizationsProps) => {
    const {data} = props

    const storeAnalyzedData = useSelector(getAnalyzedData)
    console.log(`analyzed data from store:`)
    console.log(storeAnalyzedData)

    let analyzedData: AnalyzedData = {
        scrapeId: storeAnalyzedData.payload.scrapeId,
        data: storeAnalyzedData.payload.analyzedData
    }


    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 m-auto pattern'>
            <div className=' top-0 left-0 right-0 bottom-0 m-auto py-32 px-4 flex justify-center items-center'>
                <div className='w-full bg-white h-5/6 shadow-2xl rounded-lg p-6 flex justify-center items-center'>
                    <div className='flex flex-col gap-5 justify-center items-center'>
                        <div className='flex justify-center items-center gap-14'>
                            <div className='flex flex-col justify-center items-center'>
                                <span className='text-2xl font-semibold text-violet-700'>Negative Word Cloud</span>
                                <CustomWordCloud sentimentList={getSentimentList(analyzedData, NEGATIVE)}/>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <span className='text-2xl font-semibold text-violet-700'>Positive Word Cloud</span>
                                <CustomWordCloud sentimentList={getSentimentList(analyzedData, POSITIVE)}/>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-14 py-32 w-full'>
                            <div className='flex flex-col justify-center items-center w-full'>
                                <span className='text-2xl font-semibold text-violet-700'>Variable Bar Chart</span>
                                <CustomBarChart data={analyzedData}/>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-14 py-32 w-full'>
                            <div className='flex flex-col justify-center items-center w-full'>
                                <span className='text-2xl font-semibold text-violet-700'>Line Chart</span>
                                <CustomLineChart data={analyzedData}/>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-14'>
                            <div>pie chart</div>
                            <div>more tins</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visualizations