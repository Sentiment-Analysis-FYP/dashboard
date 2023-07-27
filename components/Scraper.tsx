import React, {useEffect, useState} from "react";
import UserName from "@/components/UserName";
import BeginScrape from "@/components/BeginScrape";
import AddKeyword from "@/components/AddKeyword";
import NewDatePicker from "@/components/NewDatePicker";
import {requestScrape} from "@/utils/scraper";
import WebSocketHandler from "@/components/WebSocketHandler";
import {useAuth} from "@/hooks/auth";

export const Scraper = () => {
    const [username, setUsername] = useState("");
    const [keywordsState, setKeywordsState] = useState([""]);
    const [dates, setDates] = useState([new Date(), new Date()]);
    const [scrapeSuccess, setScrapeSuccess] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [enabled, setEnabled] = useState(false);
    const [email, token] = useAuth()

    const runScrape = async () => {
        console.log(username)
        console.log(keywordsState)

        if (username || keywordsState.length > 0) {
            const status = await requestScrape(username, keywordsState, dates[0], dates[1], email ? email : "guest")
            setScrapeSuccess(status == 200)
            return
        }

        alert('Provide a username and/or keywords.')
        return
    }

    useEffect(() => {
        if (username || keywordsState.length > 0) setEnabled(true)
        else setEnabled(false)
    }, [username, keywordsState]);


    return (
        <div className='bg-white flex flex-col h-[800px] w-[1300px] p-32 shadow-2xl'>
            <div className='flex justify-between'>
                <UserName setUsername={setUsername}/>
                <BeginScrape runScrape={runScrape} setShowModal={setShowModal} enabled={enabled}/>
            </div>

            <div className='flex justify-between w-full'>
                <NewDatePicker setDates={setDates}/>
                <AddKeyword setKeywordsState={setKeywordsState}/>
            </div>

            {showModal && <WebSocketHandler showModal={showModal} setShowModal={setShowModal}/>}
        </div>
    )
}