import Header from "@/components/Header";
import Visualizations from "@/components/Visualizations";
import {useDispatch, useSelector} from "react-redux";
import {AnalyzedData} from "@/utils/scraper";

export default function VisualizationsPage() {
    const dispatch = useDispatch();
    const analyzedData = useSelector((state: { analyzedData: AnalyzedData }) => state.analyzedData);

    return (
        <div>
            <Header/>

            <main className='mt-24'>
                <Visualizations data={analyzedData}/>
            </main>
        </div>
    )
}