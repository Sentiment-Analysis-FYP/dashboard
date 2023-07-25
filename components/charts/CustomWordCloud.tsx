import {useEffect, useLayoutEffect} from "react";
import WordCloud from "wordcloud";
import {number} from "prop-types";
import {AnalyzedDataItem} from "@/utils/scraper";
import {TagCloud} from "react-tagcloud";
import {generateWordCloudItemList} from "@/utils/visualizations";

interface CustomWordCloudProps {
    sentimentList: AnalyzedDataItem[]
}


const CustomWordCloud = (props: CustomWordCloudProps) => {
    const {sentimentList} = props
    const wordList = generateWordCloudItemList(sentimentList)

    // useEffect(() => {
    //     if (typeof window !== "undefined" && document && document.getElementById('custom-wordcloud')) {
    //         // WordCloud(document.getElementById('custom-wordcloud')!, {
    //         //     list: wordList
    //         // })
    //     }
    // },)


    return (
        <div className='w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-red-700 overflow-clip '>
            word cloud
            {/*<canvas id='custom-wordcloud' width='100%' height='100%'/>*/}
            <TagCloud minSize={12}
                      maxSize={35}
                      tags={wordList}
                      className="simple-cloud"
            />
        </div>
    )
}

export default CustomWordCloud