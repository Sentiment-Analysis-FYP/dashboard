import {Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer} from "recharts";
import React from "react";
import {AnalyzedData} from "@/utils/scraper";
import {getEmotionFrequency, getMaxEmotionFrequencyDataValue} from "@/utils/visualizations";
import {SentimentType} from "@/utils/sentiment";

interface EmotionRadarChartProps {
    data: AnalyzedData
}

const EmotionRadarChart = (props: EmotionRadarChartProps) => {
    const {data} = props

    const emotionFrequencies = getEmotionFrequency(data)
    console.log(emotionFrequencies)

    return (
        <div className='w-full flex justify-center items-center mb-3'>
            <ResponsiveContainer width="100%" height={400}>
                <RadarChart
                    cx='50%' cy='50%'
                    outerRadius={150}
                    width={450}
                    height={450}
                    data={emotionFrequencies}>
                    <PolarGrid gridType='circle'/>
                    <PolarAngleAxis dataKey="label"/>
                    <PolarRadiusAxis angle={30} domain={['dataMin', 'dataMax+5']}/>
                    <Radar name="Positive" dataKey="positive" stroke="#33cc00" fill="#33cc00" fillOpacity={0.6}/>
                    <Radar name="Negative" dataKey="negative" stroke="#ff3333" fill="#ff3333" fillOpacity={0.6}/>
                    <Legend/>
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default EmotionRadarChart