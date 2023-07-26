import React, {useState} from "react";
import UserName from "@/components/UserName";
import BeginScrape from "@/components/BeginScrape";
import AddKeyword from "@/components/AddKeyword";
import NewDatePicker from "@/components/NewDatePicker";
import {requestScrape} from "@/utils/scraper";
import WebSocketHandler from "@/components/WebSocketHandler";

export const Scraper = () => {
    const [username, setUsername] = useState("");
    const [keywordsState, setKeywordsState] = useState([""]);
    const [dates, setDates] = useState([new Date(), new Date()]);
    const [scrapeSuccess, setScrapeSuccess] = useState(false);

    const runScrape = async () => {
        if (!username || !keywordsState) {
            alert('Provide a username and/or password')
        }

        const status = await requestScrape(username, keywordsState, dates[0], dates[1])
        setScrapeSuccess(status == 200)
    }

    return (
        <div className='bg-white flex flex-col h-[800px] w-[1300px] p-32 shadow-2xl'>
            <div className='flex justify-between'>
                <UserName setUsername={setUsername}/>
                <BeginScrape runScrape={runScrape}/>
            </div>

            <div className='flex justify-between w-full'>
                <NewDatePicker setDates={setDates}/>
                <AddKeyword setKeywordsState={setKeywordsState}/>
            </div>

            <WebSocketHandler/>
        </div>
    )
}