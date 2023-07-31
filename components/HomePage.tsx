import Image from "next/image";
import scraperImg from "@/public/img/Dashboard.png"
import SA from "@/public/img/SA.png"
import imgPeople from "@/public/img/People.png"
import SaResult from "@/public/img/SA Results.png"
import visualzation from "@/public/img/Visualizations.png"
import student from "@/public/img/students.png"

const HomePage = () => {
    return (
        <div className="mt-24 grid grid-cols-2">
            <div className="flex">
                <div className="ml-5 mb-5 mr-5 pl-5 pt-3 pb-3">
                    <h1 className="text-2xl mb-2 font-extrabold text-violet-600">
                        Uncover Insights from Students' Tweets
                    </h1>
                    <p>
                        Welcome to Sentinel, a powerful web application designed to analyze
                        students' tweets and provide valuable psychological insights. With
                        our sentiment analysis and natural language processing algorithms,
                        educators, counselors and administration can gain a deeper
                        understanding of students' emotional well-being, trends, and
                        sentiments on Twitter arising from subject matters concerning the
                        school.
                    </p>
                    <h2 className="text-2xl mt-3 mb-2 font-extrabold text-violet-600">Key Features</h2>
                    <ul className=" list-inside  list-disc marker:text-violet-600">
                        <li> Ability to analyze tweets from any user or hashtag.</li>
                        <li>
                            Identification of keywords and phrases related to the school
                            example: Knust, Tech, Kwame Tech.
                        </li>
                    </ul>
                    <h2 className="text-2xl mb-2 mt-3 font-extrabold text-violet-600">Sentiment Analysis</h2>
                    <p>
                        <ul className="list-inside list-disc marker:text-violet-600">
                            <li>
                                Our advanced sentiment analysis accurately assesses the
                                emotional tone of students' tweets, identifying positive,
                                negative, or neutral sentiments.
                            </li>
                            <li>
                                Emotion Trends: Discover trends and patterns in students'
                                emotions over time, helping educators, counselors and
                                administration to track students sentiments.
                            </li>
                        </ul>
                    </p>
                </div>

            </div>
            <Image className="shadow-lg mb-5" src={SA} alt="This is image"/>

            {/* second grid  */}
            <Image className="shadow-lg mb-5" src={student} alt="This is image"/>
            <div className="ml-5 mb-5 mr-5 pl-5 pt-3 pb-3">
                <h2 className="text-2xl mb-2 font-extrabold text-violet-600">Topic Analysis</h2>
                <p>
                    Gain insights into the most discussed topics among students,
                    allowing you to understand their interests and concerns.
                </p>
                <h2 className="text-2xl mb-2 mt-3 font-extrabold text-violet-600"> Real-time Monitoring</h2>
                <p>
                    Stay up-to-date with students' emotions by monitoring their tweets
                    in real-time.
                </p>
                <h2 className="text-2xl mb-2 mt-3 font-extrabold text-violet-600">Benefits</h2>
                <p>
                    <ul className="list-inside list-disc marker:text-violet-600">
                        <li>
                            Early Intervention: Detect signs of emotional distress early on,
                            enabling timely intervention and support.
                        </li>
                        <li>
                            Data-Driven Decisions: Make informed decisions based on
                            data-driven insights into students' sentiments.
                        </li>
                        <li>
                            Student Engagement: Understand student interests and concerns
                            better to foster meaningful engagement and management.
                        </li>
                    </ul>
                </p>
            </div>


            {/* third grid  */}
            <div className="ml-5 mr-5 mb-10 pr-2 pl-5 pt-3 pb-3">
                <div>
                    <h2 className="text-xl mb-2 font-extrabold text-violet-600">How It Works</h2>
                    <ul className="list-inside list-disc marker:text-violet-600">
                        <li>
                            The <span className="font-semibold">scraper </span> allows you
                            to access tweets from twitter by specifying key words, tags and
                            username. There is a custom calender choose tweets in a specific
                            time frame for analysis
                        </li>
                        <li>
                            The <span className="font-semibold">analysis </span>
                            shows what entils in the tweets been scraped from tweeter.
                        </li>
                        <li>
                            The <span className="font-semibold">visualizations </span> shows
                            the outcome of the analysis, there, insight is gained by
                            receiving comprehensive reports and visualizations on sentiment,
                            emotions and trending topics
                        </li>
                    </ul>
                    <h2 className="text-2xl mb-2 mt-3 font-extrabold text-violet-600">Privacy & Security:</h2>
                    <p>
                        At sentinel, privacy and security are paramount. We adhere to
                        strict data protection regulations and ensure that all data is
                        encrypted and anonymized.
                    </p>
                    <button
                        className="bg-violet-600 ml-64 mt-8 text-2xl font-extrabold text-white rounded-md h-16 w-52 hover:bg-indigo-300">
                        Get Started
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pb-5">
                <Image className="shadow-lg h-[360px]" src={scraperImg} alt="Visuakization"/>
                <Image className="shadow-lg h-[360px]" src={visualzation} alt="Visuakization"/>
            </div>
        </div>
    )
}

export default HomePage