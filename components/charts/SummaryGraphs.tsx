import React from "react";
import {AnalyzedData} from "@/utils/scraper";
import {
    Bar,
    BarChart,
    Brush,
    CartesianGrid,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import {getDataItemsCountGroupedBy} from "@/utils/visualizations";
import EmotionRadarChart from "@/components/charts/EmotionRadarChart";

interface SummaryGraphsProps {
    data: AnalyzedData
}

const SummaryGraphs = (props: SummaryGraphsProps) => {
    const {data} = props
    const chartData = getDataItemsCountGroupedBy(data.data, 'day')


    return (
        <div className='bg-white p-6 w-full rounded-lg flex justify-between items-center'>

            {data.data && data.data.length > 0 && data.data[0].emotion_score > 0 && <div className='w-1/2'>
                <EmotionRadarChart data={data}/>
            </div>}

            <div className='w-1/2 h-[400px] flex flex-col justify-center items-center py-10'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} barCategoryGap={2} barGap={0} margin={{
                        top: 5,
                        right: 20,
                        left: 0,
                        bottom: 5
                    }}>
                        <CartesianGrid strokeDasharray="10 10"/>
                        <XAxis dataKey="date"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend verticalAlign="top" wrapperStyle={{
                            lineHeight: '40px'
                        }}/>
                        <ReferenceLine y={0} stroke="#000"/>
                        <Brush dataKey="date" height={30} stroke="#8884d8"/>
                        <Bar dataKey="positiveCount" name="Positive" fill="#33cc00"/>
                        <Bar dataKey="negativeCount" name="Negative" fill="#ff3333"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}


export default SummaryGraphs