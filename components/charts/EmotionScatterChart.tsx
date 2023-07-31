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

interface EmotionScatterChartProps {
    data: AnalyzedData
}

const EmotionScatterChart = (props: EmotionScatterChartProps) => {
    const {data} = props

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
                    <XAxis type="number" dataKey="x" name="stature" unit="cm"/>
                    <YAxis type="number" dataKey="y" name="weight" unit="kg"/>
                    <ZAxis type="number" dataKey="z" range={[60, 400]} name="score" unit="km"/>
                    <Tooltip cursor={{
                        strokeDasharray: '3 3'
                    }}/>
                    <Legend/>
                    <Scatter name="A school" data={data01} fill="#8884d8" shape="circle"/>
                    <Scatter name="B school" data={data02} fill="#82ca9d" shape="wye"/>
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    )
}

export default EmotionScatterChart