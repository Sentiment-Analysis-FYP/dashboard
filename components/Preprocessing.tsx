import {AiOutlineCheck, AiOutlineLineChart, AiOutlinePlus} from "react-icons/ai";
import React, {useEffect, useState} from "react";
import {AnalyzedData, scrambleAnalyzedDataIds, updateScoresToTwoDecimalPlaces} from "@/utils/scraper";
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import clsx from "clsx";
import {useSelector} from "react-redux";
import {getAnalyzedData} from "@/utils/store/analyzedDataSlice";
import {motion} from "framer-motion";
import {VISUALIZATIONS_PAGE} from "@/pages";
import {GrClose} from "react-icons/gr";

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
            field: 'lr_sentiment',
            description: 'From -1 (negative) to 1 (positive)',
            headerName: 'Sentiment',
            valueGetter: (params) => {
                return params.value == 1 ? "Positive" : "Negative"
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

    return (
        <div className='flex justify-center h-[1200px] w-full py-4'>
            <DataGrid
                rows={rows}
                columns={columns}
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

const Preprocessing = (props: AnalysisProps) => {
    // const {data} = props
    const {setActivePage} = props

    const storeAnalyzedData = useSelector(getAnalyzedData)
    console.log(`analyzed data from store:`)
    console.log(storeAnalyzedData)

    let analyzedData: AnalyzedData = {
        scrapeId: storeAnalyzedData.payload.scrapeId,
        data: storeAnalyzedData.payload.analyzedData
    }

    analyzedData = updateScoresToTwoDecimalPlaces(scrambleAnalyzedDataIds(analyzedData))

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

    const initialPreprocessorState = [
        {name: "Stopwords", enabled: false},
        {name: "Punctuation", enabled: false},
        {name: "Characters", enabled: false},
        {name: "URLS", enabled: false},
    ]

    const initialSpecialFunctionsState = [
        {name: "Stopwords", enabled: false},
        {name: "Punctuation", enabled: false},
        {name: "Characters", enabled: false},
        {name: "URLS", enabled: false},
    ]

    const [preprocessors, setPreprocessors] =
        useState(initialPreprocessorState)

    const [specialFunctions, setSpecialFunctions] =
        useState(initialSpecialFunctionsState)

    const handleEnablePreprocessors = (index: number) => {
        // setEnabledPreprocessors()
        // const prep = preprocessors
        // prep[index].enabled = !prep[index].enabled
        // setPreprocessors(prep)
        setPreprocessors((prevState) => {
            prevState[index] = {name: prevState[index].name, enabled: !prevState[index].enabled}
            return [...prevState]
        })
    }

    useEffect(() => {
        console.log(preprocessors)
        // handle table data update
    }, [preprocessors]);


    return (
        <div className=' w-full'>
            <div className='h-full flex justify-center items-center'>
                <div className='w-full bg-white h-5/6 shadow-2xl rounded-lg p-6'>
                    <div className='flex flex-row-reverse justify-between'>
                        <motion.div
                            whileTap={{
                                scale: 0.9
                            }}
                            className='flex justify-center items-center gap-3 bg-violet-500 hover:bg-violet-700
                                    w-40 text-gray-50 h-10 rounded-lg transition duration-300 shadow-xl select-none
                                    hover:shadow-lg cursor-pointer'
                            onClick={() => setActivePage(1)}>
                            <AiOutlinePlus size={20}/>
                            <span>New Search</span>
                        </motion.div>

                        {analyzedData && analyzedData.data.length &&
                            <motion.div
                                whileTap={{
                                    scale: 0.9
                                }}
                                className={'flex justify-center items-center gap-3 bg-violet-500 hover:bg-violet-700' +
                                    ' w-40 text-gray-50 h-10 rounded-lg transition duration-500 shadow-xl cursor-pointer'}
                                onClick={() => setActivePage(VISUALIZATIONS_PAGE)}>
                                <AiOutlineLineChart size={20}/>
                                <span>Visualize</span>
                            </motion.div>
                        }
                    </div>
                    {analyzedData && analyzedData.data.length ?
                        (<div className='lg:w-[1200px] w-[900px] flex flex-col justify-center items-center gap-4'>
                            <div className='w-full flex justify-start flex-wrap items-center pt-8 gap-10'>
                                <span className='text-xl text-violet-600 select-none'>Data Cleaning</span>
                                {preprocessors.map((preprocessor, index) => (
                                    <div key={index}
                                         className={'px-3 py-2 flex justify-between items-center gap-2 rounded-lg ' +
                                             'cursor-pointer' +
                                             (preprocessor.enabled ? " bg-violet-500 text-gray-50" : " bg-gray-300")}
                                         onClick={() => {
                                             handleEnablePreprocessors(index)
                                         }}>
                                        {preprocessors[index].enabled ? (
                                            <AiOutlineCheck size={17} className='text-green-300 '/>
                                        ) : (
                                            <GrClose size={16} className='text-gray-50'/>
                                        )}
                                        {preprocessor.name}
                                    </div>
                                ))}
                            </div>
                            <DataTable data={analyzedData}/>
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

export default Preprocessing