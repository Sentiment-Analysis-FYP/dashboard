import React from "react";
import {motion} from "framer-motion";


interface BeginScrapeProps {
    runScrape(): void

    enabled: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const BeginScrape = (props: BeginScrapeProps) => {
    const {runScrape, setShowModal, enabled} = props

    return (
        <div className='flex justify-center items-center'>
            <motion.button
                whileTap={{
                    scale: 0.9
                }}
                className={" w-[500px] h-32 shadow-lg  font-bold px-4 rounded-md transition duration-500 "
                    + (enabled ? " hover:bg-violet-700 bg-violet-500 text-white" : " bg-gray-100 text-gray-400")}
                onClick={() => {
                    setShowModal(true)
                    runScrape()
                }}
                disabled={!enabled}
            >
                BEGIN SCRAPE
            </motion.button>
        </div>
    );
};

export default BeginScrape;
