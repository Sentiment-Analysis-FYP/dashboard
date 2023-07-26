import React, {useEffect, useState} from 'react'
import {useRouter} from "next/router"

const WebSocketComponent = () => {
    const router = useRouter()
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        const ws = new WebSocket(process.env.NEXT_PUBLIC_EXPRESS_WS_BASE_URL!) // Replace with your backend URL

        ws.onopen = () => {
            console.log('WebSocket connection established')
        }

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data)
            setIsComplete(data.isComplete) // Update state based on data received from the backend
        }

        ws.onclose = () => {
            console.log('WebSocket connection closed')
        }

        return () => {
            // Clean up the WebSocket connection when the component unmounts
            ws.close()
        }
    }, [])

    useEffect(() => {
        // route to analysis page
        let timeout: ReturnType<typeof setTimeout>
        if (isComplete) {
            timeout = setTimeout(() => {
                router.push('/analysis')
            }, 3000)
        }

        return () => {
            clearTimeout(timeout) // Clean up the timeout when the component unmounts or isComplete changes.
        }
    }, [isComplete])


    return (
        <>
            {isComplete ?
                <div className='absolute blur-lg top-0 right-0 left-0 bottom-0 m-auto w-screen h-screen'>
                    <div className='w-[300px] h-[300px]'>
                        Task is complete!
                    </div>
                </div> :
                <div className='absolute backdrop-blur-sm top-0 right-0 left-0 bottom-0 m-auto w-screen h-screen flex
                    justify-center items-center'>
                    <div
                        className='w-[300px] h-[300px] flex flex-col justify-center items-center bg-white rounded-lg shadow-2xl'>
                        Loading...

                        <div className='flex w-full justify-center items-center dot-windmill mx-auto'
                             // data-content={colors.at((position + 5) % colors.length)}
                             style={{
                                 backgroundColor: "#aa00ff",
                                 color: "#aa00ff"
                             }}/>
                    </div>
                </div>
            }
        </>
    )
}

export default WebSocketComponent