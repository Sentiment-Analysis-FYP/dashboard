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
        <div className='flex flex-col gap-1 justify-center items-center px-2'>
            <div className='w-full h-[1px] bg-gray-300 mt-1 mb-6'/>
            <motion.button
                whileTap={{
                    scale: 0.9
                }}
                className={" w-full h-32 shadow-lg text-2xl tracking-wide font-bold px-4 rounded-md transition duration-200 "
                    + (enabled ? " hover:bg-violet-700 bg-violet-500 text-white hover:shadow-2xl" :
                        " bg-violet-200 text-gray-100 ")}
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
