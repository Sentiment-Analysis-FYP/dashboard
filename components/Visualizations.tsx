import {AnalyzedData, scrambleAnalyzedDataIds} from "@/utils/scraper";
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
import EmotionScatterChart from "@/components/charts/EmotionScatterChart";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";

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

    analyzedData = scrambleAnalyzedDataIds((analyzedData))

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

    const printDocument = () => {
        const input = document.getElementById('download-div')
        if (!input) return
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'landscape',
            });
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('visualization' + new Date().toISOString() + '.pdf');
        });
    }

    return (
        <div id='vis-content' className=' '>
            {analyzedData.data.length ?
                <div className='w-full flex flex-col justify-center items-center'>
                    <div className='w-5/6 flex  items-center'>
                        <span
                            onClick={() => printDocument()}
                            className='bg-white text-violet-700 font-semibold cursor-pointer py-2 px-4 mb-3
                            rounded-lg shadow-2xl text-lg hover:bg-violet-700 hover:text-white transition duration-200'>
                            Download Report
                        </span>
                    </div>
                    <div id='download-div'
                         className='  w-full flex justify-center items-center'>
                        <div
                            className='px-10 w-5/6 bg-white  shadow-2xl rounded-lg py-10 flex justify-center items-center'>
                            <div className='flex flex-wrap gap-5 w-full  '>
                                {/*<div className='text-2xl w-72'>*/}
                                {/*    <div>*/}
                                {/*        Sentiments over this period were generally <span*/}
                                {/*        className={sentimentRemark == 'negative' ? "text-red-700" : "text-green-700"}>{sentimentRemark}</span>*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        The emotion expressed by users within this period is <span*/}
                                {/*        className={getEmotionPolarity(emotionRemark) == 'negative' ? "text-red-700" : "text-green-700"}>*/}
                                {/*         {emotionRemark}*/}
                                {/*    </span>*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        <span className=''>{advisoryRemark}</span>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div
                                    className='flex justify-center items-center gap-14 w-[600px] h-[600px] bg-violet-50 shadow
                                    rounded-lg'>
                                    <div className='flex flex-col justify-center items-center w-full'>
                                <span className='text-2xl font-semibold text-violet-700'>
                                    Variable Bar Chart Sentiments Over Time
                                </span>
                                        <CustomBarChart data={analyzedData}/>
                                    </div>
                                </div>
                                <div
                                    className='flex justify-center items-center py-16 w-[600px] h-[600px] bg-violet-50 rounded-lg shadow'>
                                    <div className='flex flex-col justify-center items-center'>
                                        <span className='text-2xl font-semibold text-violet-700'>Line Chart</span>
                                        <CustomLineChart data={analyzedData}/>
                                    </div>
                                </div>

                                <div
                                    className='flex justify-center items-center py-16 w-[810px] bg-violet-50 rounded-lg shadow'>
                                    <div className='flex flex-col justify-center items-center w-full'>
                                        <span
                                            className='text-2xl font-semibold text-violet-700'>
                                            Emotion Radar Chart
                                        </span>
                                        <div className='w-[600px] flex justify-center gap-5'>
                                            <EmotionRadarChart data={analyzedData}/>
                                            <div className=' flex flex-col h-96 justify-evenly text-xl'>
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
                                            <div className=' flex flex-col h-96 justify-evenly text-xl'>
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
                                            <div className=' flex flex-col h-96 justify-evenly text-xl'>
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

                                <div
                                    className='flex justify-center items-center py-16 w-[600px] h-[600px] bg-violet-50 rounded-lg shadow'>
                                    <div className='flex flex-col gap-10 justify-center items-center w-full'>
                                        <span
                                            className='text-2xl font-semibold text-violet-700'>
                                            Emotion Scatter Chart</span>
                                        <EmotionScatterChart data={analyzedData}/>
                                    </div>
                                </div>

                                <div
                                    className='flex justify-center items-center py-16 w-[700px] h-[600px] bg-violet-50 rounded-lg '>
                                    <div
                                        className='flex flex-col justify-center items-center bg-violet-50 px-10  rounded-lg '>
                                        <span className='text-2xl font-semibold text-violet-700 '>
                                            Negative Word Cloud
                                        </span>
                                        <CustomWordCloud sentimentList={getSentimentList(analyzedData, NEGATIVE)}/>
                                    </div>
                                </div>

                                <div
                                    className='flex justify-center items-center py-16 w-[700px] h-[600px] bg-violet-50 rounded-lg '>
                                    <div
                                        className='flex flex-col justify-center items-center bg-violet-50 px-10
                                        rounded-lg '>
                                    <span className='text-2xl font-semibold text-violet-700 '>
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