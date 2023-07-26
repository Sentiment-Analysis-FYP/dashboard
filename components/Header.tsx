import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import {useAuth} from "@/hooks/auth"

const Header = () => {
    const [email, token] = useAuth()

    let stockCategories = [
        {name: "Home", slug: ""},
        {name: "Scraper", slug: "scraper"},
        {name: "Analysis", slug: "analysis"},
        {name: "Visualizations", slug: "visualizations"},
        {name: "Help", slug: "help"},
    ]

    const [categories, setCategories] = useState(stockCategories)

    return (
        <div className="fixed top-0 left-0 bg-white z-50 h-22 w-full shadow-lg">
            <div className=' w-full flex items-center'>
                <div className="px-6 w-full">
                    <div className=" w-full border-gray-300 py-6 items-center md:px-12 flex justify-between">
                        <div className="">
                            <Link href='/'>
                                <span
                                    className="cursor-pointer font-bold text-md md:text-2xl
                                     text-violet-800 tracking-widest">
                                    SENTINEL
                                </span>
                            </Link>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="flex gap-16 mx-16 justify-center items-center p-1 w-full">
                                {categories.map((category) => (
                                    <Link key={category.slug} href={`/${category.slug}`}>
                                        <div
                                            className='px-1 text-gray-800 ml-4 font-semibold
                                                cursor-pointer hover:text-gray-500 hover:translate-x-0.5 transform
                                                hover:duration-400 ease-in-out text-md transition'>
                                            {category.name}
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