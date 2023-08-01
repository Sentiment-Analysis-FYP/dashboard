import {
    Brush,
    CartesianGrid,
    Line,
    LineChart,
    ReferenceArea,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts'
import React, {useEffect, useState} from "react";
import {AnalyzedData} from "@/utils/scraper";
import {
    convertDatesToNumberDates,
    getDataItemsCountGroupedBy,
    GroupedDataItem, LineChartDataItem,
    makeNegativeCountsPositive
} from "@/utils/visualizations";

interface CustomLineChartProps {
    data: AnalyzedData,
}

// const getLineChartData = (data: AnalyzedDataItem[]) => {
//     return sortByCreatedAt(data)
// }

export interface Impressions {
    name: number;
    cost: number;
    impression: number;
}

// Sample data for Impressions
const impressions: Impressions[] = [
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

const groupedData: GroupedDataItem[] = [
    {
        count: 10,
        date: "2023-07-21",
        positiveCount: 6,
        negativeCount: 4,
    },
    {
        count: 8,
        date: "2023-07-22",
        positiveCount: 5,
        negativeCount: 3,
    },
    {
        count: 7,
        date: "2023-07-23",
        positiveCount: 3,
        negativeCount: 4,
    },
    {
        count: 12,
        date: "2023-07-24",
        positiveCount: 7,
        negativeCount: 5,
    },
    {
        count: 6,
        date: "2023-07-25",
        positiveCount: 3,
        negativeCount: 3,
    },
    {
        count: 9,
        date: "2023-07-26",
        positiveCount: 4,
        negativeCount: 5,
    },
    {
        count: 11,
        date: "2023-07-27",
        positiveCount: 6,
        negativeCount: 5,
    },
    {
        count: 13,
        date: "2023-07-28",
        positiveCount: 8,
        negativeCount: 5,
    },
    {
        count: 7,
        date: "2023-07-29",
        positiveCount: 4,
        negativeCount: 3,
    },
    {
        count: 10,
        date: "2023-07-30",
        positiveCount: 5,
        negativeCount: 5,
    },
    {
        count: 9,
        date: "2023-07-31",
        positiveCount: 4,
        negativeCount: 5,
    },
    {
        count: 14,
        date: "2023-08-01",
        positiveCount: 8,
        negativeCount: 6,
    },
    {
        count: 6,
        date: "2023-08-02",
        positiveCount: 3,
        negativeCount: 3,
    },
    {
        count: 12,
        date: "2023-08-03",
        positiveCount: 6,
        negativeCount: 6,
    },
    {
        count: 8,
        date: "2023-08-04",
        positiveCount: 4,
        negativeCount: 4,
    },
];


const CustomLineChart = (props: CustomLineChartProps) => {
    const [groupBy, setGroupBy] = useState('day')
    const [groupByRadios, setGroupByRadios] = useState([true, false, false]);
    const lineChartData = convertDatesToNumberDates(makeNegativeCountsPositive(
        getDataItemsCountGroupedBy(props.data.data, groupBy)))
    // const lineChartData = convertDatesToNumberDates(makeNegativeCountsPositive(
    //     groupedData))

    // console.log(lineChartData)

    const formatTick = (tickData: Date) => {
        let date = new Date(new Date(tickData).getTime()).toISOString().split('T')[0]
        switch (groupBy) {
            case 'day':
                date = date.substring(0, 10); // Extracting the date up to the day (YYYY-MM-DD)
                break;
            case 'month':
                date = date.substring(0, 7); // Extracting the date up to the month (YYYY-MM)
                break;
            case 'year':
                date = date.substring(0, 4); // Extracting the date up to the year (YYYY)
                break;
            default:
                throw new Error(`Invalid groupBy option: ${groupBy}`);
        }

        return date
    }

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

    const initialState = {
        data: lineChartData,
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
    const getAxisYDomain = (from: string | undefined,
                            to: string | undefined,
                            ref: keyof LineChartDataItem,
                            offset: number): (number | string)[] => {
        if (from && to) {
            const fromDate = new Date(from);
            const toDate = new Date(to);
            // const refData = data.slice(Number(from) - 1, Number(to));
            // const refData = lineChartData.filter((d) => {
            //     // const currentDate = new Date(d.date);
            //     // return currentDate >= fromDate && currentDate <= toDate;
            //     return d.date >= from && d.date <= to
            // });
            // console.log(`from ${fromDate} to ${toDate}`)
            const refData = data.filter((d) => {
                const currentDate = new Date(d.date);
                return currentDate >= fromDate && currentDate <= toDate;
            });

            console.log(refData)
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
        if (refAreaLeft && refAreaRight && refAreaLeft > refAreaRight)
            [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

        console.log(`refAreaLeft ${refAreaLeft}\nrefAreaRight ${refAreaRight}`)
        // yAxis domain
        const [bottom, top] =
            getAxisYDomain(refAreaLeft, refAreaRight, 'negativeCount', 1);
        const [bottom2, top2] =
            getAxisYDomain(refAreaLeft, refAreaRight, 'positiveCount', 50);
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
            bottom: 'dataMin-1',
            top2: 'dataMax+20',
            bottom2: 'dataMin-20'
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
        <div className='w-[600px] h-[500px] flex flex-col justify-center items-center  select-none pr-4'>
            <button type="button"
                    className="px-10 py-1 bg-violet-500 hover:bg-violet-700  transition duration-500
                        rounded-lg text-gray-50"
                    onClick={() => zoomOut()}>
                Zoom Out
            </button>

            <div className="flex justify-between items-center w-72  text-gray-800 select-none">
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

            <ResponsiveContainer>
                <LineChart
                    data={lineChartData} width={250}
                    onMouseDown={e => setZoomGraph(prev => ({
                        ...prev,
                        refAreaLeft: e.activeLabel!
                    }))}
                    onMouseMove={e => zoomGraph.refAreaLeft && setZoomGraph(prev => ({
                        ...prev,
                        refAreaRight: e.activeLabel!
                    }))}
                    onMouseUp={() => zoom()}>
                    <CartesianGrid strokeDasharray="10 10"/>
                    <XAxis allowDataOverflow dataKey="date" domain={left && right ? [left, right] : undefined}
                           type="number"
                           tickFormatter={tickData => formatTick(tickData)}
                    />
                    <YAxis allowDataOverflow domain={[bottom, top]} type="number" yAxisId="1"/>
                    {/*<YAxis orientation="right" allowDataOverflow domain={[bottom2, top2]} type="number" yAxisId="2"/>*/}
                    {/*<YAxis/>*/}
                    <Tooltip
                        labelFormatter={value => {
                            return `${formatTick(value)}`
                        }}/>
                    <Line yAxisId="1" type="natural" dataKey="positiveCount" name="Positive" stroke="#33cc00"
                          animationDuration={400}/>
                    <Line yAxisId="1" type="natural" dataKey="negativeCount" name="Negative" stroke="#ff3333"
                          animationDuration={600}/>
                    {refAreaLeft && refAreaRight ?
                        <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3}/> : null}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CustomLineChart