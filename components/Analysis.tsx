import Link from "next/link";
import {AiOutlinePlus} from "react-icons/ai";
import React from "react";
import {AnalyzedData} from "@/utils/scraper";
import {DataGrid, GridCellParams, GridColDef} from '@mui/x-data-grid';
import clsx from "clsx";
import {useSelector} from "react-redux";

interface AnalysisProps {
    data?: AnalyzedData,
}

const NoAnalyzedData = () => {
    return (
        <div className='flex flex-col text-2xl justify-center items-center'>
            <span>Sorry, you have no analyzed data.</span>
            <span>Visit the <Link href='/scraper' className='text-violet-600'>Scraper </Link>
                to gather fresh data</span>
            <span>or upload your own</span>
        </div>
    )
}

const DataTable = (props: AnalysisProps) => {
    const {data} = props
    const rows = data!.data

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', flex: 0.6},
        {field: 'username', headerName: 'Username', flex: 0.7},
        {field: 'text', headerName: 'Text', flex: 1},
        {
            field: 'score',
            description: 'From -1 (negative) to 1 (positive)',
            headerName: 'Sentiment Score',
            flex: 0.7,
            cellClassName: (params: GridCellParams<any, number>) => {
                if (params.value == null) {
                    return '';
                }

                return clsx('super-app', {
                    negative: params.value < 0,
                    positive: params.value > 0,
                });
            },
        },
        {
            field: 'created_at',
            headerName: 'Date Sent',
            description: 'YYYY-MM-DD',
            flex: 0.5,
        },
    ];

    return (
        <div className='flex justify-center h-full w-full py-4'>
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

const Analysis = (props: AnalysisProps) => {
    const {data} = props
    const analyzedData = useSelector((state: any) => state.analyzedData)
    console.log(analyzedData)

    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 m-auto pattern'>
            <div className='absolute top-0 left-0 right-0 bottom-0 m-auto p-32 flex justify-center items-center'>
                <div className='w-full bg-white h-5/6 shadow-2xl rounded-lg p-6'>
                    <div className='flex flex-row-reverse'>
                        <Link href='/scraper'>
                            <div className='flex justify-center items-center gap-3 bg-violet-500 hover:bg-violet-700
                                    w-40 text-gray-50 h-10 rounded-lg transition duration-500 shadow-xl'>
                                <AiOutlinePlus size={20}/>
                                <span>New Search</span>
                            </div>
                        </Link>
                    </div>
                    {analyzedData.data.length ?
                        (<div className='w-full h-full flex justify-center items-center'>
                            <DataTable data={analyzedData}/>
                        </div>) :
                        (<div className='w-full h-full flex justify-center items-center'>
                            <NoAnalyzedData/>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default Analysis