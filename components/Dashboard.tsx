import {AiFillPieChart} from "react-icons/ai";

const Dashboard = () => {
    const pages = [
        'Twitter Scraper', 'Data Analysis', 'Data Preprocessing', 'Data Visualization'
    ]

    return (
        <div className='w-[1000px] rounded-lg shadow-lg bg-white h-[1000px] flex justify-center items-center'>
            <div className='flex flex-wrap gap-20 justify-center items-center'>
                {pages.map((page) => (
                    <div key={page}
                         className='cursor-pointer hover:bg-violet-200 transition duration-200 w-[400px] h-[400px] p-10 bg-violet-50 flex flex-col justify-between items-center rounded-lg shadow-md'>
                        <div className='flex justify-center items-center'>
                            <AiFillPieChart size={200}/>
                        </div>
                        <span className='text-3xl justify-center items-center text-violet-500'>
                            {page}
                        </span>
                    </div>
                ))}</div>
        </div>
    )
}

export default Dashboard