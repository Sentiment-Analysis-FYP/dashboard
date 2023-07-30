import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer} from "recharts";
import React from "react";
import {AnalyzedData} from "@/utils/scraper";

interface EmotionRadarChartProps {
    data: AnalyzedData
}

const EmotionRadarChart = (props: EmotionRadarChartProps) => {
    return (
        <div className='w-full'>
            <ResponsiveContainer width="100%" height={400}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={subjectData} margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}>
                    <PolarGrid/>
                    <PolarAngleAxis dataKey="subject"/>
                    <PolarRadiusAxis/>
                    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} {...args} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default EmotionRadarChart