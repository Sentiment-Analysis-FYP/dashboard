import CustomCarousel from "@/components/CustomCarousel";
import Link from "next/link";


const HomePage = () => {
    const images = [
        "/public/lady.jpg",
        "/public/man1.jpg",
        "/public/man2.jpg",
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className='home-pattern h-screen w-screen flex justify-around items-center'>
            {/*<div className=" bg-violet-100 w-5/6 h-5/6 flex rounded-2xl shadow-xl">*/}
            {/*    <div className="flex w-[1200px] bg-violet-200 absolute z-30 h-5/6 clip-path p-16 rounded-2xl ">*/}
            {/*        <div className="pl-16 pt-4 w-[800px]">*/}
            {/*            <h1 className="text-8xl font-semibold text-violet-800">*/}
            {/*                Uncover Insights<br/> from Students&apos; Tweets*/}
            {/*            </h1>*/}
            {/*            <p className='text-3xl text-gray-800 mt-16 pr-32'>*/}
            {/*                Welcome to <span className='font-semibold text-violet-700 tracking-wide'>FeBa</span>, a*/}
            {/*                powerful web application designed to analyze*/}
            {/*                students&apos; tweets and provide valuable psychological insights. With*/}
            {/*                our sentiment analysis and natural language <p className='pr-40'>processing algorithms,*/}
            {/*                educators, counselors and administration can gain a deeper*/}
            {/*                understanding of students&apos; emotional well-being, trends, and*/}
            {/*                sentiments <p className='pr-40'>on Twitter arising from subject matters concerning the*/}
            {/*                    school.</p></p>*/}
            {/*            </p>*/}
            {/*        </div>*/}

            {/*    </div>*/}

            {/*    <div className='h-full flex justify-end items-center w-full rounded-2xl'>*/}
            {/*        <div className='flex justify-end items-center  h-full rounded-2xl relative'>*/}
            {/*            <Image src={home2}*/}
            {/*                   alt='home image'*/}
            {/*                   width={0}*/}
            {/*                   height={0}*/}
            {/*                // sizes="100vw"*/}
            {/*                   style={{width: '100%', height: '100%'}}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</div>*/}
            {/*Left side*/}
            <div className="flex flex-col justify-center items-center px-40">
                <div className='text-9xl text-white font-extrabold flex justify-center items-center flex-col tracking-wide'>
                    <span>Wisdom</span>
                    <span>With</span>
                    <span>Words</span>
                </div>
                <div className='text-5xl mt-24 text-gray-300 w-[500px] pl-10 flex justify-center items-center'>
                    <div>Welcome to <span className='font-semibold text-gray-200 tracking-wide'>FeBa</span><br/>
                        A powerful web application designed to gather and analyze
                        data and provide valuable psychological insights.
                    </div>
                </div>
                <Link href='/register'>
                    <div className='mt-24 text-5xl text-violet-700 flex justify-center items-center py-8 px-16 bg-white
                        rounded-lg hover:shadow-2xl transition duration-300 hover:translate-x-1 hover:bg-gray-300 hover:text-violet-500'>
                        Get Started
                    </div>
                </Link>
            </div>

            {/*Right Side*/}
            <div className="flex flex-col justify-center items-center w-[1200px] h-[1200px]">
                <CustomCarousel/>
            </div>
        </div>
    )
}

export default HomePage