import {AnalyzedData, scrambleAnalyzedDataIds, updateScoresToTwoDecimalPlaces} from "@/utils/scraper";
import CustomWordCloud from "@/components/charts/CustomWordCloud";
import {getEmotionFrequency, getSentimentList} from "@/utils/visualizations";
import CustomBarChart from "@/components/charts/CustomBarChart";
import React, {useEffect, useState} from "react";
import CustomLineChart from "@/components/charts/CustomLineChart";
import {useSelector} from "react-redux";
import {getAnalyzedData} from "@/utils/store/analyzedDataSlice";
import Link from "next/link";
import {motion} from "framer-motion";
import {getAdvisoryRemark, getHighestOccurringSentiment} from "@/utils/sentiment";
import {getEmotionPolarity, getHighestOccurringEmotion} from "@/utils/emotion";
import EmotionRadarChart from "@/components/charts/EmotionRadarChart";

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

    const [sentimentRemark, setSentimentRemark] = useState('');
    const [emotionRemark, setEmotionRemark] = useState('');
    const [advisoryRemark, setAdvisoryRemark] = useState('');

    useEffect(() => {
        setAdvisoryRemark(getAdvisoryRemark(sentimentRemark, getEmotionPolarity(emotionRemark)))
    }, [sentimentRemark, emotionRemark]);

    useEffect(() => {
        setSentimentRemark(getHighestOccurringSentiment(analyzedData.data))
        setEmotionRemark(getHighestOccurringEmotion(analyzedData.data))
    }, []);


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

    const emotionFrequencies = getEmotionFrequency(analyzedData)

    return (
        <div id='vis-content' className='h-screen overflow-y-scroll'>
            {analyzedData.data.length ?
                <div className='w-full '>
                    <div
                        className=' py-32 w-full flex justify-center items-center'>
                        <div
                            className='w-[1400px] lg:w[1000px] bg-white  shadow-2xl rounded-lg py-20 flex justify-center items-center'>
                            <div className='flex flex-col gap-5 justify-center items-center '>
                                <div className='text-2xl'>
                                    <div>
                                        Sentiments over this period were generally <span
                                        className={sentimentRemark == 'negative' ? "text-red-700" : "text-green-700"}>{sentimentRemark}</span>
                                    </div>
                                    <div>
                                        The emotion expressed by users within this period is <span
                                        className={getEmotionPolarity(emotionRemark) == 'negative' ? "text-red-700" : "text-green-700"}>
                                         {emotionRemark}
                                    </span>
                                    </div>
                                    <div>
                                        <span className=''>{advisoryRemark}</span>
                                    </div>
                                </div>
                                <div
                                    className='flex justify-center items-center gap-14 my-10 py-24 w-[1200px] bg-violet-50 shadow
                                    rounded-lg'>
                                    <div className='flex flex-col justify-center items-center w-full'>
                                <span className='text-2xl font-semibold text-violet-700'>
                                    Variable Bar Chart Sentiments Over Time
                                </span>
                                        <CustomBarChart data={analyzedData}/>
                                    </div>
                                </div>
                                <div
                                    className='flex justify-center items-center py-24 w-[1200px] bg-violet-50 rounded-lg shadow'>
                                    <div className='flex flex-col justify-center items-center w-full'>
                                        <span className='text-2xl font-semibold text-violet-700'>Line Chart</span>
                                        <CustomLineChart data={analyzedData}/>
                                    </div>
                                </div>

                                <div
                                    className='flex justify-center items-center py-24 w-[1200px] bg-violet-50 rounded-lg shadow'>
                                    <div className='flex flex-col justify-center items-center w-full'>
                                        <span
                                            className='text-2xl font-semibold text-violet-700'>Emotion Radar Chart</span>
                                        <div className='w-1/2 flex justify-center gap-10'>
                                            <EmotionRadarChart data={analyzedData}/>
                                            <div className='w-96 flex flex-col h-96 justify-evenly text-xl'>
                                                <span className='text-violet-500 border-b-[1px] border-gray-700'>
                                                    Emotion
                                                </span>
                                                {emotionFrequencies.map((item, index) => (
                                                    <div key={index} className='flex gap-4'>
                                                        <span className='text-violet-500'>
                                                            {item.label}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className='w-96 flex flex-col h-96 justify-evenly text-xl'>
                                                <span className='text-violet-500 border-b-[1px] border-gray-700'>
                                                    Positive
                                                </span>
                                                {emotionFrequencies.map((item, index) => (
                                                    <div key={index} className='flex gap-4 justify-end'>
                                                        <span className='text-green-600'>
                                                            {item.positive}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className='w-96 flex flex-col h-96 justify-evenly text-xl'>
                                                <span className='text-violet-500 border-b-[1px] border-gray-700'>
                                                    Negative
                                                </span>
                                                {emotionFrequencies.map((item, index) => (
                                                    <div key={index} className='flex gap-4 justify-end'>
                                                        <span className='text-red-500'>
                                                            {item.negative}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex w-[1200px] justify-between items-center'>
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
                                {/*<div className='flex justify-center items-center gap-14'>*/}
                                {/*    <div>pie chart</div>*/}
                                {/*    <div>more tins</div>*/}
                                {/*</div>*/}
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