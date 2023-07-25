import {useLayoutEffect} from "react";
import WordCloud from "wordcloud";
import {number} from "prop-types";

interface CustomWordCloudProps {
    wordList: [string, number][]
}

const CustomWordCloud = (props: CustomWordCloudProps) => {
    const {wordList} = props

    useLayoutEffect(() => {
        if (document && document.getElementById('custom-wordcloud'))
            // draw cloud
            WordCloud(document.getElementById('custom-wordcloud')!, {
                list: wordList
            })
    }, [])


    return (
        <div className='w-full'>
            word cloud
            <canvas id='custom-wordcloud' width='100%' height='100%'/>
        </div>
    )
}

export default CustomWordCloud