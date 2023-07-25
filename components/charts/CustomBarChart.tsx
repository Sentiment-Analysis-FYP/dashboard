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
        <div className='w-full h-[600px] flex justify-center items-center'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={1000} height={800} data={chartData} barCategoryGap={2} barGap={2} margin={{
                    top: 5,
                    right: 20,
                    left: 20,
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
    )
}

export default CustomBarChart