import React, {useEffect, useState} from 'react'
import {useRouter} from "next/router"
import {motion} from "framer-motion";
import {useAuth} from "@/hooks/auth";
import {useDispatch, useSelector} from "react-redux";
import {getAnalyzedData, setAnalyzedData} from "@/utils/store/analyzedDataSlice";
import {scrambleAnalyzedDataIds} from "@/utils/scraper";
import {ANALYSIS_PAGE} from "@/pages";

interface WebSocketComponentProps {
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    setActivePage: React.Dispatch<React.SetStateAction<number>>
}

const WebSocketComponent = (props: WebSocketComponentProps) => {
    const {showModal, setShowModal, setActivePage} = props
    const router = useRouter()
    const [isComplete, setIsComplete] = useState(false)
    const [email, token] = useAuth()
    const dispatch = useDispatch()

    useEffect(() => {
        const ws = new WebSocket(process.env.NEXT_PUBLIC_EXPRESS_WS_BASE_URL!) // Replace with your backend URL

        ws.onopen = () => {
            console.log('WebSocket connection established')
            if (email) ws.send(JSON.stringify({
                email: `${email}`
            }))
        }

        ws.onmessage = (event) => {
            const eventData = JSON.parse(event.data)
            const analyzedData = eventData.data

            if (analyzedData) {
                const jsonAnalyzedData = JSON.parse(analyzedData)

                // scramble IDs in case of duplicates
                const scrambledAnalyzedData =
                    scrambleAnalyzedDataIds(jsonAnalyzedData)
                dispatch(setAnalyzedData(scrambledAnalyzedData))
                setIsComplete(eventData.isComplete)
            } else {
                console.log('No analyzed data')
            }
        }

        ws.onclose = () => {
            console.log('WebSocket connection closed')
        }

        return () => {
            // Clean up the WebSocket connection when the component unmounts
            ws.close()
        }
    },)

    useEffect(() => {
        // route to analysis page
        let timeout: ReturnType<typeof setTimeout>
        if (isComplete) {
            timeout = setTimeout(() => {
                // router.push('/analysis')
                setActivePage(ANALYSIS_PAGE)
            }, 3000)
        }

        return () => {
            clearTimeout(timeout) // Clean up the timeout when the component unmounts or isComplete changes.
        }
    }, [isComplete])

    const analyzedData = useSelector(getAnalyzedData);

    useEffect(() => {
        console.log(`analyzed data payload from store`)
        console.log(analyzedData.payload.analyzedData)
    }, [analyzedData]);


    return (
        <>
            {showModal && <div className='absolute  bg-opacity-50  top-0 right-0 left-0 bottom-0 m-auto
                w-full h-screen flex justify-center items-center '>
                <div
                    className='w-[400px] h-[400px] flex flex-col justify-center items-center bg-white rounded-lg
                        shadow-2xl text-3xl transition- duration-500'>
                    {isComplete ?
                        <div className='flex flex-col justify-center items-center gap-2 mb-4'>
                            <span className='-mt-10 text-violet-600'>Processing results</span>
                            <span className='text-lg'>This may take a few minutes...</span>
                        </div>
                        :
                        <div className='flex flex-col justify-center items-center gap-2 mb-4'>
                            <span className='-mt-10'>Running Scraper</span>
                            <span className='text-lg'>This may take a few minutes...</span>
                        </div>
                    }

                    <div className='flex w-full justify-center items-center dot-windmill mx-auto'
                         style={{
                             backgroundColor: "#aa00ff",
                             color: "#aa00ff"
                         }}
                    />

                    <div
                        className='z-50 w-full px-4 text-lg text-violet-500 absolute top-80 right-0 left-0 bottom-0
                        m-auto flex justify-center items-center select-none'>
                        <motion.div
                            whileTap={{
                                scale: 0.9,
                                transition: {duration: 0.1, delay: 0}
                            }}
                            className='px-6 py-2 hover:text-violet-700 transition duration-300 hover:-translate-y-1
                            cursor-pointer hover:bg-gray-200 rounded-lg'
                            onClick={() => setShowModal(false)}>
                            Cancel
                        </motion.div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default WebSocketComponent