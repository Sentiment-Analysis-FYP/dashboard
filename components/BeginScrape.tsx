import React from "react";

interface BeginScrapeProps {
    runScrape(): void
}

const BeginScrape = (props: BeginScrapeProps) => {
    const {runScrape} = props

    return (
        <div className='flex justify-center items-center'>
            <button className=" bg-violet-500 w-[500px] h-32 hover:bg-violet-700 text-white font-bold px-4 rounded-md
                transition duration-500"
                    onClick={() => runScrape()}>
                BEGIN SCRAPE
            </button>
        </div>
    );
};

export default BeginScrape;
