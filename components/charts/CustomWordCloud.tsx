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
        <div className='w-[600px] h-[600px] overflow-clip flex justify-center items-center'>
            {wordList.length ?
                <TagCloud minSize={12}
                          maxSize={100}
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