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
        <div className='w-[400px] md:w-[600px] h-[400px] md:h-[600px] overflow-clip '>
            <TagCloud minSize={12}
                      maxSize={35}
                      tags={wordList}
                      className="simple-cloud"
            />
        </div>
    )
}

export default CustomWordCloud