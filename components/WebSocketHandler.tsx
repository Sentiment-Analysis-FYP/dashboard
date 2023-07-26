import React, {useEffect, useState} from 'react'
import {useRouter} from "next/router"

const WebSocketComponent = () => {
    const router = useRouter()
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        const ws = new WebSocket(process.env.NEXT_PUBLIC_EXPRESS_BASE_URL!) // Replace with your backend URL

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
        <div>
            {isComplete ? <p>Task is complete!</p> : <p>Task is not complete yet.</p>}
        </div>
    )
}

export default WebSocketComponent