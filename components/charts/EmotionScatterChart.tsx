import React from "react";
import {
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Scatter,
    ScatterChart,
    Tooltip,
    XAxis,
    YAxis,
    ZAxis
} from "recharts";
import {AnalyzedData} from "@/utils/scraper";
import {getAllNegativeSentimentAnalyzedData, getAllPositiveSentimentAnalyzedData} from "@/utils/visualizations";

interface EmotionScatterChartProps {
    data: AnalyzedData
}

const EmotionScatterChart = (props: EmotionScatterChartProps) => {
    const {data} = props

    const chartDataPositive = getAllPositiveSentimentAnalyzedData(data)
    const chartDataNegative = getAllNegativeSentimentAnalyzedData(data)

    const data01 = [{
        x: 100,
        y: 200,
        z: 200
    }, {
        x: 120,
        y: 100,
        z: 260
    }, {
        x: 170,
        y: 300,
        z: 400
    }, {
        x: 140,
        y: 250,
        z: 280
    }, {
        x: 150,
        y: 400,
        z: 500
    }, {
        x: 110,
        y: 280,
        z: 200
    }];
    const data02 = [{
        x: 200,
        y: 260,
        z: 240
    }, {
        x: 240,
        y: 290,
        z: 220
    }, {
        x: 190,
        y: 290,
        z: 250
    }, {
        x: 198,
        y: 250,
        z: 210
    }, {
        x: 180,
        y: 280,
        z: 260
    }, {
        x: 210,
        y: 220,
        z: 230
    }];

    return (
        <div className='w-full flex justify-center items-center'>
            <ResponsiveContainer width="90%" height={400}>
                <ScatterChart>
                    <CartesianGrid/>
                    <XAxis type="category" dataKey="created_at" name="Date"/>
                    <YAxis type="category" dataKey="emotion_label" name="Emotion"/>
                    <ZAxis type="number" dataKey="score" range={[500, 500]} name="Score"/>
                    <Tooltip cursor={{
                        strokeDasharray: '20 30'
                    }}/>
                    <Legend/>
                    <Scatter name="Positive" data={chartDataPositive} fill="#33cc00" shape="circle"/>
                    <Scatter name="Negative" data={chartDataNegative} fill="#ff3333" shape="wye"/>
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    )
}

export default EmotionScatterChart