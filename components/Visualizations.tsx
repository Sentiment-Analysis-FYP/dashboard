import {AnalyzedData} from "@/utils/scraper";
import CustomWordCloud from "@/components/charts/CustomWordCloud";
import {getSentimentList} from "@/utils/visualizations";
import CustomBarChart from "@/components/charts/CustomBarChart";

interface VisualizationsProps {
    data: AnalyzedData
}

const NEGATIVE = 'negative'
const POSITIVE = 'positive'

const Visualizations = (props: VisualizationsProps) => {
    const {data} = props

    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 m-auto pattern'>
            <div className=' top-0 left-0 right-0 bottom-0 m-auto p-32 flex justify-center items-center'>
                <div className='w-full bg-white h-5/6 shadow-2xl rounded-lg p-6 flex justify-center items-center'>
                    <div className='sm:flex sm:flex-col grid grid-cols-2 gap-5 justify-center items-center'>
                        <div className='flex justify-center items-center gap-14'>
                            <div className='flex flex-col justify-center items-center'>
                                <span className='text-2xl font-semibold'>Negative Word Cloud</span>
                                <CustomWordCloud sentimentList={getSentimentList(data, NEGATIVE)}/>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <span className='text-2xl font-semibold'>Positive Word Cloud</span>
                                <CustomWordCloud sentimentList={getSentimentList(data, POSITIVE)}/>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-14'>
                            <div className=''>
                                <CustomBarChart data={data}/>
                            </div>
                            <div>word cloud (neg and pos)</div>
                        </div>
                        <div className='flex justify-center items-center gap-14'>
                            <div>scatter plot</div>
                            <div>stacked bar chart</div>
                        </div>
                        <div className='flex justify-center items-center gap-14'>
                            <div>pie chart</div>
                            <div>more tins</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visualizations