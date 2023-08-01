import {AnalyzedDataItem} from "@/utils/scraper";
import {TagCloud} from "react-tagcloud";
import {generateWordCloudItemList} from "@/utils/visualizations";

interface CustomWordCloudProps {
    sentimentList: AnalyzedDataItem[]
}


const CustomWordCloud = (props: CustomWordCloudProps) => {
    const {sentimentList} = props
    const wordList = generateWordCloudItemList(sentimentList)

    return (
        <div className='w-[600px] h-[550px] flex justify-center items-center overflow-hidden'>
            {wordList.length ?
                <TagCloud minSize={10}
                          maxSize={70}
                          tags={wordList}
                          className="simple-cloud"
                /> :
                <div className='text-violet-500 text-xl'>
                    Could not generate Word Cloud for empty list
                </div>}
        </div>
    )
}

export default CustomWordCloud