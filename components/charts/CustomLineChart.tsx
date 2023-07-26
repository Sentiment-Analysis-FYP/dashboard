import {
    Line,
    LineChart,
    ResponsiveContainer,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ReferenceArea
} from 'recharts'
import {useState} from "react";
import {sortByCreatedAt} from "@/utils/visualizations";
import {AnalyzedData, AnalyzedDataItem} from "@/utils/scraper";

interface CustomLineChartProps {
    data: AnalyzedData
}

const getLineChartData = (data: AnalyzedDataItem[]) => {
    return sortByCreatedAt(data)
}

export interface Impressions {
    name: number;
    cost: number;
    impression: number;
}

// Sample data for Impressions
const impressionsData: Impressions[] = [
    {name: 1, cost: 100, impression: 2000},
    {name: 2, cost: 150, impression: 3000},
    {name: 3, cost: 80, impression: 1500},
    {name: 4, cost: 120, impression: 2500},
    {name: 5, cost: 90, impression: 1800},
    {name: 6, cost: 180, impression: 3500},
    {name: 7, cost: 130, impression: 2300},
    {name: 8, cost: 70, impression: 1200},
    {name: 9, cost: 200, impression: 4000},
    {name: 10, cost: 110, impression: 2100},
    {name: 11, cost: 160, impression: 3200},
    {name: 12, cost: 140, impression: 2700},
    // Add more data as needed
];


const CustomLineChart = (props: CustomLineChartProps) => {
    const chartData = getLineChartData(props.data.data)


    const initialState = {
        data: impressionsData,
        left: 'dataMin',
        right: 'dataMax',
        refAreaLeft: '',
        refAreaRight: '',
        top: 'dataMax+1',
        bottom: 'dataMin-1',
        top2: 'dataMax+20',
        bottom2: 'dataMin-20',
        animation: true
    };
    const getAxisYDomain = (from: string | undefined, to: string | undefined, ref: keyof Impressions, offset: number): (number | string)[] => {
        if (from && to) {
            const refData = impressionsData.slice(Number(from) - 1, Number(to));
            let [bottom, top] = [refData[0][ref], refData[0][ref]];
            refData.forEach(d => {
                if (d[ref] > top) top = d[ref];
                if (d[ref] < bottom) bottom = d[ref];
            });
            return [(Number(bottom) | 0) - offset, (Number(top) | 0) + offset];
        }
        return [initialState.bottom, initialState.top];
    };
    const [zoomGraph, setZoomGraph] = useState(initialState);
    const zoom = () => {
        let {
            refAreaLeft,
            refAreaRight
        } = zoomGraph;
        const {
            data
        } = zoomGraph;
        if (refAreaLeft === refAreaRight || refAreaRight === '') {
            setZoomGraph(prev => ({
                ...prev,
                refAreaLeft: '',
                refAreaRight: ''
            }));
            return;
        }

        // xAxis domain
        if (refAreaLeft && refAreaRight && refAreaLeft > refAreaRight) [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

        // yAxis domain
        const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 'cost', 1);
        const [bottom2, top2] = getAxisYDomain(refAreaLeft, refAreaRight, 'impression', 50);
        setZoomGraph(prev => ({
            ...prev,
            refAreaLeft: '',
            refAreaRight: '',
            data: data?.slice(),
            left: refAreaLeft,
            right: refAreaRight,
            bottom,
            top,
            bottom2,
            top2
        } as any));
    };
    const zoomOut = () => {
        const {
            data
        } = zoomGraph;
        setZoomGraph(prev => ({
            ...prev,
            data: data?.slice(),
            refAreaLeft: '',
            refAreaRight: '',
            left: 'dataMin',
            right: 'dataMax',
            top: 'dataMax+1',
            bottom: 'dataMin',
            top2: 'dataMax+50',
            bottom2: 'dataMin+50'
        }));
    };
    const {
        data,
        left,
        right,
        refAreaLeft,
        refAreaRight,
        top,
        bottom,
        top2,
        bottom2
    } = zoomGraph;

    return (
        <div className='w-full h-[600px] flex flex-col justify-center items-center py-10 select-none'>
            line chart
            <button type="button" className="px-10 py-2 bg-violet-500 hover:bg-violet-700 transition duration-500
            rounded-lg text-gray-50"
                    onClick={() => zoomOut()}>
                Zoom Out
            </button>

            <ResponsiveContainer minHeight={500}>
                <LineChart width={800} height={400} data={data}
                           onMouseDown={e => setZoomGraph(prev => ({
                               ...prev,
                               refAreaLeft: e.activeLabel!
                           }))}
                           onMouseMove={e => zoomGraph.refAreaLeft && setZoomGraph(prev => ({
                               ...prev,
                               refAreaRight: e.activeLabel!
                           }))}
                           onMouseUp={() => zoom()}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis allowDataOverflow dataKey="name" domain={left && right ? [left, right] : undefined}
                           type="number"/>
                    <YAxis allowDataOverflow domain={[bottom, top]} type="number" yAxisId="1"/>
                    <YAxis orientation="right" allowDataOverflow domain={[bottom2, top2]} type="number" yAxisId="2"/>
                    <Tooltip/>
                    <Line yAxisId="1" type="natural" dataKey="cost" stroke="#8884d8" animationDuration={300}/>
                    <Line yAxisId="2" type="natural" dataKey="impression" stroke="#82ca9d" animationDuration={300}/>

                    {refAreaLeft && refAreaRight ?
                        <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3}/> : null}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CustomLineChart