import React, {useState} from "react";
import UserName from "@/components/UserName";
import BeginScrape from "@/components/BeginScrape";
import AddKeyword from "@/components/AddKeyword";
import NewDatePicker from "@/components/NewDatePicker";
import {requestScrape} from "@/utils/scraper";

export const Scraper = () => {
    const [username, setUsername] = useState("");
    const [keywordsState, setKeywordsState] = useState([""]);
    const [dates, setDates] = useState([]);
    const [scrapeSuccess, setScrapeSuccess] = useState(false);

    const runScrape = async () => {
        const status = await requestScrape(username, keywordsState, dates[0], dates[1])

        setScrapeSuccess(status == 200)
    }

    return (
        <div className='bg-white flex flex-col'>
            <div className='flex justify-between'>
                <UserName setUsername={setUsername}/>
                <BeginScrape runScrape={runScrape}/>
            </div>

            <div className='flex justify-between'>
                <AddKeyword setKeywordsState={setKeywordsState}/>
                <NewDatePicker setDates={setDates}/>
            </div>
        </div>
    )
}