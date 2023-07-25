import {AnalyzedData} from "@/utils/scraper";
import React from "react";
import {
    ResponsiveContainer,
    Bar,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ReferenceLine,
    Brush
} from 'recharts'
import {getDataItemsCountGroupedBy} from "@/utils/visualizations";

interface CustomBarChartProps {
    data: AnalyzedData,
    groupBy: string
}

const CustomBarChart = (props: CustomBarChartProps) => {
    const {data, groupBy} = props
    const chartData = getDataItemsCountGroupedBy(data.data, groupBy)
    const xDataKey = "score"
    const yDataKey = "count"

    return (
        <div className='w-full flex justify-center items-center'>
            bar chart
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={500} height={300} data={chartData} margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend verticalAlign="top" wrapperStyle={{
                        lineHeight: '40px'
                    }}/>
                    <ReferenceLine y={0} stroke="#000"/>
                    <Brush dataKey="name" height={30} stroke="#8884d8"/>
                    <Bar dataKey="pv" fill="#8884d8"/>
                    <Bar dataKey="uv" fill="#82ca9d"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CustomBarChart