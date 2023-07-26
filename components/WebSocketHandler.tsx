import React, {useEffect, useState} from 'react'

const WebSocketComponent = () => {
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

    return (
        <div>
            {isComplete ? <p>Task is complete!</p> : <p>Task is not complete yet.</p>}
        </div>
    )
}

export default WebSocketComponent