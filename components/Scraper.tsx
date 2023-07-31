import React, {useEffect, useState} from "react";
import UserName from "@/components/UserName";
import BeginScrape from "@/components/BeginScrape";
import AddKeyword from "@/components/AddKeyword";
import NewDatePicker from "@/components/NewDatePicker";
import {requestScrape} from "@/utils/scraper";
import WebSocketHandler from "@/components/WebSocketHandler";
import {useAuth} from "@/hooks/auth";
import FileUploader from "@/components/FileUploader";
import {AiOutlineUpload} from "react-icons/ai";
import {AnimatePresence, motion} from "framer-motion";

interface ScraperProps {
    setActivePage: React.Dispatch<React.SetStateAction<number>>
}

export const Scraper = (props: ScraperProps) => {
    const {setActivePage} = props
    const [username, setUsername] = useState("");
    const [title, setTitle] = useState('');
    const [keywordsState, setKeywordsState] = useState([""]);
    const [dates, setDates] = useState([new Date(), new Date()]);
    const [scrapeSuccess, setScrapeSuccess] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [enabled, setEnabled] = useState(false);
    const [email, token] = useAuth()
    const [activeTab, setActiveTab] = useState(0);

    const renderSlide = (position: number) => {
        switch (position) {
            case 0:
                return <motion.div>
                    <div className='pt-10'>
                        <div className='flex gap-20'>
                            <div className='flex flex-col  w-full'>
                                <UserName setUsername={setUsername}/>
                                <NewDatePicker setDates={setDates}/>
                            </div>

                            <div className='flex justify-between w-full'>
                                <div className=''>
                                    <AddKeyword setKeywordsState={setKeywordsState}/>
                                    {/*<FileUploader showModal={showModal} setShowModal={setShowModal}/>*/}
                                </div>
                            </div>
                        </div>

                        <div className='pt-5'>
                            <BeginScrape runScrape={runScrape} setShowModal={setShowModal} enabled={enabled}/>
                        </div>
                    </div>
                </motion.div>

            case 1:
                return <motion.div className='pt-14'>
                    <FileUploader showModal={showModal} setShowModal={setShowModal}/>
                </motion.div>
        }
    }

    const runScrape = async () => {
        console.log(username)
        console.log(keywordsState)

        if (username.trim().length > 0 || keywordsState.length > 0) {
            const status = await requestScrape(username,
                keywordsState,
                dates[0], dates[1],
                email ? email : "guest",
                title)
            setScrapeSuccess(status == 200)
            return
        }

        alert('Provide a username and/or keywords.')
        return
    }

    useEffect(() => {
        if (username.trim().length > 0 || keywordsState.length > 0) setEnabled(true)
        else setEnabled(false)
    }, [username, keywordsState]);


    return (
        <div className='bg-white flex flex-col h-[800px] w-[1300px] px-24 py-10 shadow-2xl rounded-lg'>
            <div className=' justify-between flex gap-4'>
                <div>
                    <input
                        type="text"
                        placeholder='Scrape title'
                        onChange={(e) => setTitle(e.target.value)}
                        className='w-[500px] py-2 px-4 border-[1px] border-violet-600 rounded-md text-lg'/>
                </div>
                <div className='flex gap-4 w-full justify-end'>
                    <div className='flex justify-center items-center gap-4 text-lg select-none '>
                    <span
                        onClick={() => setActiveTab(0)}
                        className={'cursor-pointer rounded-lg px-3 py-2 hover:shadow transition duration-200'
                            + (!activeTab ? ' text-gray-50 bg-violet-600' : ' text-violet-600 bg-violet-50 border-[1px] border-violet-200')}>
                        Twitter</span>
                        <span
                            className=' bg-gray-100 rounded-lg px-3 py-2 hover:text-gray-300 transition duration-200 text-gray-400'>
                        TripAdvisor</span>
                        <span
                            className=' bg-gray-100 rounded-lg px-3 py-2 hover:text-gray-300 transition duration-200 text-gray-400'>
                        Yelp</span>
                    </div>

                    <div
                        onClick={() => setActiveTab(1)}
                        className={'cursor-pointer select-none hover:shadow transition duration-200 rounded-lg px-2 py-1 flex gap-2 text-lg justify-between items-center'
                            + (activeTab ? ' text-gray-50 bg-violet-600' : ' text-violet-600 bg-violet-50 border-[1px] border-violet-200')}>
                        <AiOutlineUpload size={20}/>
                        <span>File Upload</span>
                    </div>
                </div>
            </div>
            <motion.div
                className=''>
                <AnimatePresence mode='popLayout'>
                    <motion.div
                        key={activeTab}
                        initial={{opacity: 0, x: !activeTab ? "-30%" : "30%"}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: !activeTab ? "-20%" : "20%"}}
                        transition={{duration: .3, delay: 0}}
                        className=''>
                        {renderSlide(activeTab)}
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            {showModal &&
                <WebSocketHandler showModal={showModal} setShowModal={setShowModal}
                                  setActivePage={setActivePage}/>}
        </div>
    )
}