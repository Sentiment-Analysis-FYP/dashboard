import {useEffect, useLayoutEffect} from "react";
import WordCloud from "wordcloud";
import {number} from "prop-types";
import {AnalyzedDataItem} from "@/utils/scraper";
import {TagCloud} from "react-tagcloud";

interface CustomWordCloudProps {
    wordList: AnalyzedDataItem[]
}


const CustomWordCloud = (props: CustomWordCloudProps) => {
    const {wordList} = props

    // useEffect(() => {
    //     if (typeof window !== "undefined" && document && document.getElementById('custom-wordcloud')) {
    //         // WordCloud(document.getElementById('custom-wordcloud')!, {
    //         //     list: wordList
    //         // })
    //     }
    // },)


    return (
        <div className='w-full'>
            word cloud
            {/*<canvas id='custom-wordcloud' width='100%' height='100%'/>*/}
            <TagCloud minSize={12}
                      maxSize={35}
                      tags={wordList}
            />
        </div>
    )
}

export default CustomWordCloud