import Image from "next/image";
import scraperImg from "@/public/img/Dashboard.png"
import SA from "@/public/img/SA.png"
import imgPeople from "@/public/img/People.png"
import SaResult from "@/public/img/SA Results.png"
import visualizations from "@/public/img/Visualizations.png"
import student from "@/public/img/students.png"
import home1 from "@/public/img/home1.jpg"
import home2 from "@/public/img/home2.jpg"

const HomePage = () => {
    return (
        <div className=' h-screen w-screen flex justify-center items-center'>
            <div className=" bg-white w-5/6 h-5/6 flex rounded-2xl shadow-xl">
                <div className="flex w-[1200px] bg-violet-200 absolute z-30 h-5/6 clip-path p-16 rounded-2xl ">
                    <div className="pl-16 pt-4 w-[800px]">
                        <h1 className="text-8xl font-semibold text-violet-600">
                            Uncover Insights<br/> from Students&apos; Tweets
                        </h1>
                        <p className='text-3xl text-violet-500 mt-16 pr-32'>
                            Welcome to FeBa, a powerful web application designed to analyze
                            students&apos; tweets and provide valuable psychological insights. With
                            our sentiment analysis and natural language <p className='pr-40'>processing algorithms,
                            educators, counselors and administration can gain a deeper
                            understanding of students&apos; emotional well-being, trends, and
                            sentiments on Twitter arising from subject matters concerning the
                            school.</p>
                        </p>
                        {/*<h2 className="text-2xl mt-3 mb-2 font-extrabold text-violet-600">Key Features</h2>*/}
                        {/*<ul className=" list-inside  list-disc marker:text-violet-600">*/}
                        {/*    <li> Ability to analyze tweets from any user or hashtag.</li>*/}
                        {/*    <li>*/}
                        {/*        Identification of keywords and phrases related to the school*/}
                        {/*        example: Knust, Tech, Kwame Tech.*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                        {/*<h2 className="text-2xl mb-2 mt-3 font-extrabold text-violet-600">Sentiment Analysis</h2>*/}
                        {/*<p>*/}
                        {/*    <ul className="list-inside list-disc marker:text-violet-600">*/}
                        {/*        <li>*/}
                        {/*            Our advanced sentiment analysis accurately assesses the*/}
                        {/*            emotional tone of students&apos; tweets, identifying positive,*/}
                        {/*            negative, or neutral sentiments.*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            Emotion Trends: Discover trends and patterns in students&apos;*/}
                        {/*            emotions over time, helping educators, counselors and*/}
                        {/*            administration to track students sentiments.*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</p>*/}
                    </div>

                </div>
                {/*<div className='flex justify-center items-center'>*/}
                {/*    <Image className="shadow-lg rounded-2xl" src={SA} alt="This is image"/>*/}
                {/*</div>*/}

                {/* second grid  */}
                {/*<Image className="shadow-lg " src={student} alt="This is image"/>*/}
                {/*<div className="">*/}
                {/*    <h2 className="text-2xl  font-extrabold text-violet-600">Benefits</h2>*/}
                {/*    <p>*/}
                {/*        <ul className="list-inside list-disc marker:text-violet-600">*/}
                {/*            <li>*/}
                {/*                Early Intervention: Detect signs of emotional distress early on,*/}
                {/*                enabling timely intervention and support.*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                Data-Driven Decisions: Make informed decisions based on*/}
                {/*                data-driven insights into students&apos; sentiments.*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                Student Engagement: Understand student interests and concerns*/}
                {/*                better to foster meaningful engagement and management.*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </p>*/}
                {/*</div>*/}


                {/* third grid  */}
                {/*<div className="">*/}
                {/*    <div>*/}
                {/*        <h2 className="text-xl  font-extrabold text-violet-600">How It Works</h2>*/}
                {/*        <ul className="list-inside list-disc marker:text-violet-600">*/}
                {/*            <li>*/}
                {/*                The <span className="font-semibold">scraper </span> allows you*/}
                {/*                to access tweets from twitter by specifying key words, tags and*/}
                {/*                username. There is a custom calender choose tweets in a specific*/}
                {/*                time frame for analysis*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                The <span className="font-semibold">analysis </span>*/}
                {/*                shows what exists in the tweets being scraped from tweeter.*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                The <span className="font-semibold">visualizations </span> shows*/}
                {/*                the outcome of the analysis, there, insight is gained by*/}
                {/*                receiving comprehensive reports and visualizations on sentiment,*/}
                {/*                emotions and trending topics*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*        <h2 className="text-2xl  font-extrabold text-violet-600">Privacy & Security:</h2>*/}
                {/*        <p>*/}
                {/*            At sentinel, privacy and security are paramount. We adhere to*/}
                {/*            strict data protection regulations and ensure that all data is*/}
                {/*            encrypted and anonymized.*/}
                {/*        </p>*/}
                {/*        <button*/}
                {/*            className="bg-violet-600 text-2xl font-extrabold text-white rounded-md h-16 w-52 hover:bg-indigo-300">*/}
                {/*            Get Started*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="grid grid-cols-2 gap-4 pb-5">*/}
                {/*    <Image className="shadow-lg h-[360px]" src={scraperImg} alt="Visuakization"/>*/}
                {/*    <Image className="shadow-lg h-[360px]" src={visualizations} alt="Visuakization"/>*/}
                {/*</div>*/}

                <div className='h-full flex justify-end items-center w-full rounded-2xl'>
                    <div className='flex justify-end items-center bg-red-700  h-full rounded-2xl relative'>
                        <Image src={home2}
                               alt='home image'
                               width={0}
                               height={0}
                               // sizes="100vw"
                               style={{width: '100%', height: '100%'}}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage