import Link from "next/link";
import {AiOutlinePlus} from "react-icons/ai";
import React from "react";
import {AnalyzedData, AnalyzedDataItem, getSentimentScore} from "@/utils/scraper";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';


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
        {field: 'id', headerName: 'ID', width: 90},
        {field: 'username', headerName: 'Username', width: 150},
        {field: 'text', headerName: 'Text', width: 300},
        {
            field: 'Sentiment Score',
            headerName: 'Sentiment Score',
            width: 150,
            align: 'center',
            valueGetter: (params: GridValueGetterParams) =>
                `${getSentimentScore(params.row)}`,
        },
        {
            field: 'created_at',
            headerName: 'Date Sent',
            description: 'This column indicates when the text was created',
            width: 160,
        },
    ];

    return (
        <div className='flex justify-center h-full w-full py-4'>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 10},
                    },
                }}
                pageSizeOptions={[5, 10, 20, 40, 100]}
                checkboxSelection
            />
        </div>
    )
}

const Analysis = (props: AnalysisProps) => {
    const {data} = props

    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 m-auto pattern'>
            <div className='absolute top-0 left-0 right-0 bottom-0 m-auto p-32 flex justify-center items-center'>
                <div className='w-full bg-white h-5/6 shadow-2xl rounded-lg p-6'>
                    <div className='flex flex-row-reverse'>
                        <Link href='/scraper'>
                            <div className='flex justify-center items-center gap-3 bg-violet-500 hover:bg-violet-700
                                    w-48 text-gray-50 h-10 rounded-lg transition duration-500'>
                                <AiOutlinePlus size={20}/>
                                <span>New Search</span>
                            </div>
                        </Link>
                    </div>

                    {data ?
                        (<div className='w-full h-full flex justify-center items-center'>
                            <DataTable data={data}/>
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