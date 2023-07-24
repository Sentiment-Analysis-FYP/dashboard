import Link from "next/link";
import {AiOutlinePlus} from "react-icons/ai";
import React from "react";
import {AnalyzedData, AnalyzedDataItem} from "@/utils/scraper";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

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

    return (
        <div className='flex justify-center'>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow className='text-violet-600 uppercase'>
                            <TableCell>id</TableCell>
                            <TableCell align='center'>username</TableCell>
                            <TableCell align='center'>text</TableCell>
                            <TableCell align='center'>sentiment score</TableCell>
                            <TableCell align='center'>date created</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

const Analysis = (props: AnalysisProps) => {
    const {data} = props

    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 m-auto pattern'>
            <div className='absolute top-0 left-0 right-0 bottom-0 m-auto p-32 flex justify-center items-center'>
                <div className='w-full bg-white h-[400px] shadow-2xl rounded-lg p-6'>
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