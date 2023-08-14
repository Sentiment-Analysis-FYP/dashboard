import {AiOutlineLineChart, AiOutlinePlus} from "react-icons/ai";
import React, {useEffect, useMemo, useState} from "react";
import {AnalyzedData, scrambleAnalyzedDataIds} from "@/utils/scraper";
import {DataGrid, GridColDef, GridSortModel} from '@mui/x-data-grid';
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {getAnalyzedData} from "@/utils/store/analyzedDataSlice";
import {motion} from "framer-motion";
import {PREPROCESSING_PAGE, VISUALIZATIONS_PAGE} from "@/pages";
import SummaryGraphs from "@/components/charts/SummaryGraphs";
import {useAuth} from "@/hooks/auth";

interface AnalysisDataProps {
    data?: AnalyzedData,
}


const DataTable = (props: AnalysisDataProps) => {
    const {data} = props
    const rows = data!.data

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', flex: 0.5},
        {field: 'username', headerName: 'Username', flex: 0.6},
        {field: 'text', headerName: 'Text', flex: 1},
        {
            field: 'score',
            description: 'From -1 (negative) to 1 (positive)',
            headerName: 'Sentiment',
            valueGetter: (params) => {
                return params.value >= 0 ? "Positive" : "Negative"
            },
            flex: 0.6,
            cellClassName: (params) => {
                if (params.value == null) {
                    return '';
                }

                return clsx('super-app', {
                    negative: params.value == "Negative",
                    positive: params.value == "Positive",
                });
            },
        },
        {
            field: 'emotion_label',
            headerName: 'Emotion',
            description: '',
            flex: 0.4,
        },
        {
            field: 'created_at',
            headerName: 'Date Sent',
            description: 'YYYY-MM-DD',
            flex: 0.4,
        },
    ];

    const defaultSortModel: GridSortModel = [
        {
            field: 'id',
            sort: 'asc', // 'asc' for ascending order, 'desc' for descending order
        },
    ];

    return (
        <div className='flex justify-center h-[700px] w-full py-4'>
            <DataGrid
                rows={rows}
                columns={columns}
                // sortModel={defaultSortModel}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 20},
                    },
                }}
                pageSizeOptions={[5, 10, 20, 40, 100]}
                checkboxSelection
                sx={{
                    '& .super-app-theme--cell': {
                        backgroundColor: 'rgba(224, 183, 60, 0.55)',
                        color: '#1a3e72',
                        fontWeight: '600',
                    },
                    '& .super-app.positive': {
                        // backgroundColor: 'rgba(157, 255, 118, 0.49)',
                        color: '#38761D',
                        fontWeight: '600',
                    },
                    '& .super-app.negative': {
                        // backgroundColor: '#d47483',
                        color: '#ff0088',
                        fontWeight: '600',
                    },
                    border: 0
                }}
            />
        </div>
    )
}

interface AnalysisProps {
    setActivePage: React.Dispatch<React.SetStateAction<number>>
}

const Analysis = (props: AnalysisProps) => {
    // const {data} = props
    const {setActivePage} = props
    const dispatch = useDispatch()
    const [email, token] = useAuth()
    const [change, setChange] = useState(false);
    const storeAnalyzedData = useSelector(getAnalyzedData)

    console.log(`analyzed data from store:`)
    console.log(storeAnalyzedData)

    // useEffect(() => {
    //     setAnalysisAnalyzedData(storeAnalyzedData.payload)
    //     console.log('update to analysis analyzed data')
    // }, [storeAnalyzedData]);


    const analyzedData: AnalyzedData = useMemo(() => {
        const si = storeAnalyzedData.payload.scrapeId
        const da = storeAnalyzedData.payload.analyzedData
        const ad: AnalyzedData = {
            scrapeId: si,
            data: da
        }
        return ad
    }, [storeAnalyzedData])
    const [analysisAnalyzedData, setAnalysisAnalyzedData] = useState(analyzedData);
    //     {
    //     scrapeId: storeAnalyzedData.payload.scrapeId,
    //     data: storeAnalyzedData.payload.analyzedData
    // }
    useEffect(() => {
        setAnalysisAnalyzedData(analyzedData)
    }, [analyzedData]);


    useEffect(() => {
        const ws = new WebSocket(process.env.NEXT_PUBLIC_EXPRESS_WS_BASE_URL!) // Replace with your backend URL

        ws.onopen = () => {
            console.log('Emotion WebSocket connection established')
            if (email) ws.send(JSON.stringify({
                // email: `${email}`
                email: `emotion`
            }))
        }

        // ws.onmessage = (event) => {
        //     console.log('emotion ws')
        //     const eventData = JSON.parse(event.data)
        //     console.log(eventData.data.emotion.scrape_id)
        //
        //     const temp: AnalyzedData = {
        //         scrapeId: eventData.data.emotion.scrape_id,
        //         data: eventData.data.emotion.data
        //     }
        //
        //     console.log('temp is')
        //     console.log(temp)
        //     const scrambledAnalyzedData =
        //         scrambleAnalyzedDataIds(temp)
        //     setAnalysisAnalyzedData(scrambledAnalyzedData)
        //     setAnalyzedData(scrambledAnalyzedData)
        //     // dispatch(clearAnalyzedData())
        //     // dispatch(setAnalyzedData(scrambledAnalyzedData))
        //
        //     // if (eventData) {
        //     //     console.log(eventData.data)
        //     //     const tempData = JSON.parse(eventData.data)
        //     //
        //     //     if (tempData) {
        //     //         console.log('FROM SOCKET:')
        //     //         console.log(tempData.emotion)
        //     //         const endData = tempData.emotion
        //     //
        //     //         const scrapeid = endData.scrape_id
        //     //         const adata = endData.data
        //     //
        //     //         const dataToStore: AnalyzedData = {
        //     //             scrapeId: scrapeid,
        //     //             data: adata
        //     //         }
        //     //         console.log('IN HERER')
        //     //         console.log(dataToStore)
        //     //
        //     //         // setAnalysisAnalyzedData(dataToStore)
        //     //         // dispatch(setAnalyzedData(dataToStore))
        //     //         // console.log('stored in store')
        //     //         // const jsonAnalyzedData = JSON.parse(analyzedData)
        //     //         // console.log(jsonAnalyzedData)
        //     //         // // scramble IDs in case of duplicates
        //     //         // const scrambledAnalyzedData =
        //     //         //     scrambleAnalyzedDataIds(jsonAnalyzedData.data)
        //     //         //
        //     //         // // console.log(scrambledAnalyzedData)
        //     //         //
        //     //         // dispatch(setAnalyzedData(scrambledAnalyzedData))
        //     //         // console.log(scrambledAnalyzedData)
        //     //         // setIsComplete(eventData.isComplete)
        //     //         // router.reload()
        //     //         // setChange((prevState) => !prevState)
        //     //     } else {
        //     //         console.log('No analyzed data')
        //     //     }
        //     // }
        // }

        ws.onclose = () => {
            console.log('WebSocket connection closed')
        }

        // return () => {
        //     // Clean up the WebSocket connection when the component unmounts
        //     ws.close()
        // }
    },)

    const NoAnalyzedData = () => {
        return (
            <div className='flex flex-col text-2xl justify-center items-center p-20'>
                <span>Sorry, you have no scraped data.</span>
                <span>Visit the <span onClick={() => setActivePage(1)} className='text-violet-500 cursor-pointer
                hover:text-violet-700 transition duration-300'>
                    Scraper </span>
                to gather fresh data</span>
                <span>or upload your own</span>
            </div>
        )
    }

    useEffect(() => {
        console.log('ANALYZED DATA CHANGED')
    }, [analyzedData]);


    return (
        <div id='' className=' w-full mt-16'>
            <div className='h-full flex flex-col justify-center items-center'>
                <div className='w-full flex justify-center items-center my-10'>
                    <SummaryGraphs data={analysisAnalyzedData}/>
                </div>

                <div className='w-full bg-white  shadow-2xl rounded-lg p-6'>
                    <div className='flex flex-row-reverse justify-between'>
                        <motion.div
                            whileTap={{
                                scale: 0.9
                            }}
                            className='flex justify-center items-center gap-3 bg-violet-600 hover:bg-violet-700
                                    w-40 text-gray-50 h-10 rounded-lg transition duration-300 shadow-xl select-none
                                    hover:shadow-lg cursor-pointer'
                            onClick={() => setActivePage(1)}>
                            <AiOutlinePlus size={20}/>
                            <span>New Scrape</span>
                        </motion.div>

                        {analyzedData && analyzedData.data.length &&
                            <motion.div
                                whileTap={{
                                    scale: 0.9
                                }}
                                className={'flex justify-center items-center gap-3 bg-violet-500 hover:bg-violet-700' +
                                    ' w-40 text-gray-50 h-10 rounded-lg transition duration-500 shadow-xl cursor-pointer'}
                                onClick={() => {
                                    setActivePage(VISUALIZATIONS_PAGE)
                                }}>
                                <AiOutlineLineChart size={20}/>
                                <span>Visualize</span>
                            </motion.div>
                        }

                        {analyzedData && analyzedData.data.length &&
                            <motion.div
                                whileTap={{
                                    scale: 0.9
                                }}
                                className={'flex justify-center items-center gap-3 bg-violet-500 hover:bg-violet-700' +
                                    ' w-40 text-gray-50 h-10 rounded-lg transition duration-500 shadow-xl cursor-pointer'}
                                onClick={() => setActivePage(PREPROCESSING_PAGE)}>
                                <AiOutlineLineChart size={20}/>
                                <span>Preprocessing</span>
                            </motion.div>
                        }
                    </div>
                    {analyzedData && analyzedData.data.length ?
                        (<div className='lg:w-[1200px] w-[900px] flex flex-col justify-center items-center'>
                            <DataTable data={scrambleAnalyzedDataIds(analysisAnalyzedData)}/>
                        </div>) :
                        (<div className='w-full h-full flex justify-center items-center'>
                            <NoAnalyzedData/>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Analysis