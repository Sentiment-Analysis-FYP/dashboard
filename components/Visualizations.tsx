import {AnalyzedData, scrambleAnalyzedDataIds, updateScoresToTwoDecimalPlaces} from "@/utils/scraper";
import CustomWordCloud from "@/components/charts/CustomWordCloud";
import {getSentimentList} from "@/utils/visualizations";
import CustomBarChart from "@/components/charts/CustomBarChart";
import React, {useEffect, useState} from "react";
import CustomLineChart from "@/components/charts/CustomLineChart";
import {useSelector} from "react-redux";
import {getAnalyzedData} from "@/utils/store/analyzedDataSlice";
import Link from "next/link";
import {motion} from "framer-motion";

interface VisualizationsProps {
    // data: AnalyzedData
    setActivePage: React.Dispatch<React.SetStateAction<number>>
}

const NEGATIVE = 'negative'
const POSITIVE = 'positive'

const Visualizations = (props: VisualizationsProps) => {
    // const {data} = props
    const {setActivePage} = props

    const storeAnalyzedData = useSelector(getAnalyzedData)
    console.log(`analyzed data from store:`)
    console.log(storeAnalyzedData)

    let analyzedData: AnalyzedData = {
        scrapeId: storeAnalyzedData.payload.scrapeId,
        data: storeAnalyzedData.payload.analyzedData
    }

    analyzedData = scrambleAnalyzedDataIds(updateScoresToTwoDecimalPlaces(analyzedData))

    const NoAnalyzedData = () => {
        return (
            <div className='flex flex-col text-2xl justify-center items-center p-16'>
                <span>Sorry, you have no scraped data.</span>
                <span>Visit the <span onClick={() => setActivePage(1)}
                                      className='text-violet-500 cursor-pointer
                                      hover:text-violet-700 transition duration-300'>
                    Scraper </span> to gather fresh data</span>
                <span>or upload your own</span>
            </div>
        )
    }

    return (
        <div>
            {analyzedData.data.length ?
                <div className='m-auto overflow-y-scroll'>
                    <div
                        className=' top-0 left-0 right-0 bottom-0 m-auto py-32 px-32 w-5/6 flex justify-center items-center'>
                        <div
                            className='w-full bg-white  shadow-2xl rounded-lg py-16 flex justify-center items-center'>
                            <div className='flex flex-col gap-5 justify-center items-center px-10'>
                                <div className='flex justify-center items-center gap-14'>
                                    <div
                                        className='flex flex-col justify-center items-center bg-violet-50 px-10 py-14 gap-8 rounded-lg shadow'>
                                <span className='text-2xl font-semibold text-violet-700 mb-8'>
                                    Negative Word Cloud
                                </span>
                                        <CustomWordCloud sentimentList={getSentimentList(analyzedData, NEGATIVE)}/>
                                    </div>
                                    <div
                                        className='flex flex-col justify-center items-center bg-violet-50 px-10 py-14 gap-8
                                rounded-lg shadow'>
                                <span className='text-2xl font-semibold text-violet-700 mb-8'>
                                    Positive Word Cloud
                                </span>
                                        <CustomWordCloud sentimentList={getSentimentList(analyzedData, POSITIVE)}/>
                                    </div>
                                </div>
                                <div
                                    className='flex justify-center items-center gap-14 my-10 py-24 w-full bg-violet-50 shadow
                            rounded-lg'>
                                    <div className='flex flex-col justify-center items-center w-full'>
                                <span className='text-2xl font-semibold text-violet-700'>
                                    Variable Bar Chart
                                </span>
                                        <CustomBarChart data={analyzedData}/>
                                    </div>
                                </div>
                                <div
                                    className='flex justify-center items-center py-24 w-full bg-violet-50 rounded-lg shadow'>
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
                :
                <div className=' top-0 right-0 left-0 bottom-0 m-auto flex justify-center items-center'>
                    <div
                        className='w-[600px] h-[400px] flex flex-col justify-center items-center bg-white rounded-lg
                        shadow-2xl text-3xl'>
                        <NoAnalyzedData/>
                    </div>
                </div>}
        </div>
    )
}

export default Visualizations