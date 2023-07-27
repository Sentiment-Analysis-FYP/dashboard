import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import {useAuth} from "@/hooks/auth"

const Header = () => {
    const [email, token] = useAuth()
    const [activePage, setActivePage] = useState(0);

    let stockCategories = [
        {name: "Home", slug: ""},
        {name: "Scraper", slug: "scraper"},
        {name: "Analysis", slug: "analysis"},
        {name: "Visualizations", slug: "visualizations"},
        {name: "Help", slug: "help"},
    ]

    const [categories, setCategories] = useState(stockCategories)

    useEffect(() => {

    }, [activePage]);


    return (
        <div className="fixed top-0 bottom-0 left-0 bg-white z-50 h-5/6 w-96 shadow-lg my-10 mx-10 rounded-lg">
            <div className=' w-full flex items-center'>
                <div className=" w-full">
                    <div className=" w-full border-gray-300 py-14 items-center flex flex-col justify-between">
                        <div className="flex flex-col justify-center items-center">
                            <Link href='/'>
                                <span
                                    className=" font-bold text-4xl text-violet-800 tracking-[15px]">
                                    SENTINEL
                                </span>
                            </Link>
                            <span
                                className='mt-2 py-3 px-5 text-md text-violet-500 bg-violet-50 rounded-lg '>{email}</span>
                        </div>
                        <div className="flex w-full flex-col items-center justify-center">
                            <div className="flex flex-col  mt-20 justify-center items-center  w-full">
                                {categories.map((category, index) => (
                                    <Link key={category.slug} href={`/${category.slug}`}
                                          onClick={() => setActivePage(index)}>
                                        <div
                                            className={'w-96 flex justify-center items-center text-gray-800 ' +
                                                'font-semibold py-14  group transform uppercase ' +
                                                ' ease-in-out text-xl ' +
                                                ((activePage == index) ? " shadow-md bg-violet-50" :
                                                    " hover:text-violet-400 hover:duration-400 hover:bg-gray-200 transition ")}>
                                            <p className='transition duration-300 group-hover:translate-x-1'>
                                                {category.name}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header