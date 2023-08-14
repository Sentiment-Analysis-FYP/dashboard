import React from "react";
import {CartesianGrid, Legend, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis} from "recharts";
import {AnalyzedData} from "@/utils/scraper";
import {
    getAllNegativeSentimentAnalyzedData,
    getAllPositiveSentimentAnalyzedData,
    getDatesAsNumbers,
    getItemsByEmotionLabel
} from "@/utils/visualizations";

interface EmotionScatterChartProps {
    data: AnalyzedData
}

const EmotionScatterChart = (props: EmotionScatterChartProps) => {
    const {data} = props

    const chartDataPositive = getAllPositiveSentimentAnalyzedData(data)
    const chartDataNegative = getAllNegativeSentimentAnalyzedData(data)

    const negs = getDatesAsNumbers(data)

    const neutral = getDatesAsNumbers(getItemsByEmotionLabel(data, 'neutral'))
    const sadness = getDatesAsNumbers(getItemsByEmotionLabel(data, 'sadness'))
    const anger = getDatesAsNumbers(getItemsByEmotionLabel(data, 'anger'))
    const fear = getDatesAsNumbers(getItemsByEmotionLabel(data, 'fear'))
    const disgust = getDatesAsNumbers(getItemsByEmotionLabel(data, 'disgust'))
    const joy = getDatesAsNumbers(getItemsByEmotionLabel(data, 'joy'))
    const surprise = getDatesAsNumbers(getItemsByEmotionLabel(data, 'surprise'))

    const formatTick = (tickData: Date) => {
        let date = new Date(new Date(tickData).getTime()).toISOString().split('T')[0]
        date = date.substring(0, 10); // Extracting the date up to the day (YYYY-MM-DD)
        return date
    }


    return (
        <div className='w-full flex justify-center items-center'>
            <ResponsiveContainer width="90%" height={400}>
                <ScatterChart>
                    <CartesianGrid/>
                    <XAxis type="number" dataKey="v_sentiment_polarity" name="Sentiment Polarity"/>
                    <YAxis type="number" dataKey="emotion_score" name="Emotion Score"/>
                    {/*<ZAxis type="category" dataKey="created_at" range={[100, 100]} name="Date"/>*/}
                    <Tooltip cursor={{
                        strokeDasharray: '20 30'
                    }}/>
                    <Legend/>
                    {/*<Scatter name="Positive" data={chartDataPositive} fill="#33cc00" shape="circle"/>*/}
                    {/*<Scatter name="Negative" data={chartDataNegative} fill="#ff3333" shape="wye"/>*/}
                    <Scatter name="Neutral" data={neutral.data} fill="#33dd11" shape="wye"/>
                    <Scatter name="Sadness" data={sadness.data} fill="#bcbcbc" shape="circle"/>
                    <Scatter name="Anger" data={anger.data} fill="#a91011" shape="square"/>
                    <Scatter name="Fear" data={fear.data} fill="#33ff77" shape="diamond"/>
                    <Scatter name="Disgust" data={disgust.data} fill="#f899a" shape="cross"/>
                    <Scatter name="Joy" data={joy.data} fill="#1111ff" shape="star"/>
                    <Scatter name="Surprise" data={surprise.data} fill="#ff3333" shape="triangle"/>
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    )
}

export default EmotionScatterChart