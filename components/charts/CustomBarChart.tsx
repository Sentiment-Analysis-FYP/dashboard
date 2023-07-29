import {AnalyzedData} from "@/utils/scraper";
import React, {useEffect, useState} from "react";
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
import {getEmotionPolarity, getHighestOccurringEmotion} from "@/utils/emotion";
import {getAdvisoryRemark, getHighestOccurringSentiment, SentimentType} from "@/utils/sentiment";

interface CustomBarChartProps {
    data: AnalyzedData,
}

const CustomBarChart = (props: CustomBarChartProps) => {
    const {data} = props
    const [groupBy, setGroupBy] = useState('day')
    const chartData = getDataItemsCountGroupedBy(data.data, groupBy)
    const [groupByRadios, setGroupByRadios] = useState([true, false, false]);

    useEffect(() => {
        switch (groupBy) {
            case 'day':
                setGroupByRadios([true, false, false])
                break

            case 'month':
                setGroupByRadios([false, true, false])
                break

            case 'year':
                setGroupByRadios([false, false, true])
                break
        }
    }, [groupBy]);




    return (
        <div className='w-full h-[700px] flex flex-col justify-center items-center py-10'>
            <div className="flex justify-between items-center w-80 pt-5 text-gray-800 select-none">
                <div className='flex gap-2'
                     onClick={() => setGroupBy('day')}>
                    <input readOnly type='radio' value='day' checked={groupByRadios[0]}
                    />
                    Day
                </div>
                <div className='flex gap-2'
                     onClick={() => setGroupBy('month')}>
                    <input readOnly type='radio' value='month' checked={groupByRadios[1]}
                    />
                    Month
                </div>
                <div className='flex gap-2'
                     onClick={() => setGroupBy('year')}>
                    <input readOnly type='radio' value='year' checked={groupByRadios[2]}
                    />
                    Year
                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} barCategoryGap={2} barGap={0} margin={{
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