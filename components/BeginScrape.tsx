import React from "react";

interface BeginScrapeProps {
    runScrape(): void
}

const BeginScrape = (props: BeginScrapeProps) => {
    const {runScrape} = props

    return (
        <div>
            <button className=" bg-violet-500 w-96 h-24 hover:bg-blue-700 text-white font-bold px-4 rounded-md "
                    onClick={() => runScrape()}>
                BEGIN SCRAPE
            </button>
        </div>
    );
};

export default BeginScrape;
