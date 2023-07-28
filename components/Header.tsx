import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import {GrFormClose} from "react-icons/gr";
import {useAuth} from "@/hooks/auth";

const Header = () => {
    const [userEmail, setUserEmail] = useState('');
    const [email, token] = useAuth()
    // let stockCategories = [
    //     {name: "Login", slug: "login"},
    //     {name: "Downloads", slug: "downloads"},
    //     {name: "About", slug: "#about"},
    //     {name: "Help", slug: "help"},
    //     {name: "Contact", slug: "contact"},
    // ]

    // const [categories, setCategories] = useState(stockCategories);

    useEffect(() => {
        setUserEmail(email!)
    }, [email]);

    // useEffect(() => {
    //     if (userEmail) {
    //         stockCategories.shift()
    //         setCategories(stockCategories)
    //     }
    // }, [userEmail]);

    // useEffect(() => {
    //     // setUpdateHeader(false)
    //     setUserEmail(checkUserLogin().email)
    // }, [updateHeader]);


    const fadeInTopRight = "opacity-100 duration-150 scale-100 ease-in-out delay-75"
    const fadeOutTopRight = "opacity-0 invisible duration-100 scale-50 translate-x-40 -translate-y-32"

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    const UserProfile = () => {
        return (
            <Link href='/login'>
                <div className="rounded-full w-10 h-10 text-white bg-violet-500 uppercase
            text-2xl flex justify-center items-center absolute right-20 bottom-5 shadow-md
            cursor-pointer hover:bg-violet-600 transition duration-300 hover:shadow-lg">

                    <div className='flex justify-center items-center pb-[2px]'>
                        {userEmail.charAt(0)}
                    </div>

                </div>
            </Link>
        )
    }

    return (
        <div className="fixed top-0 left-0 bg-white z-40 h-22 w-full shadow-lg">
            <div className=' w-full flex items-center'>
                <div className="px-6 w-full">
                    <div className=" w-full border-gray-300 py-6 items-center md:px-12 flex">
                        <div className="float-left">
                            <Link href='/'>
                                <span
                                    className=" font-bold text-4xl text-violet-800 tracking-[15px]">
                                    SENTINEL
                                </span>
                            </Link>
                        </div>
                        {/*<div className="flex items-center justify-center md:contents hidden float-right">*/}
                        {/*    <div className="float-left flex mx-16 justify-center items-center p-1">*/}
                        {/*        {categories.map((category) => (*/}
                        {/*            <Link key={category.slug} href={`/${category.slug}`}>*/}
                        {/*            <span*/}
                        {/*                className='px-4 align-middle text-gray-800 ml-4 font-semibold*/}
                        {/*                 cursor-pointer hover:text-gray-500 hover:translate-x-0.5 transform transition*/}
                        {/*                  hover:duration-400 ease-in-out text-md'>*/}
                        {/*                {category.name}*/}
                        {/*            </span>*/}
                        {/*            </Link>*/}
                        {/*        ))}*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
                {userEmail ? (<UserProfile/>) : (<div></div>)}

            </div>

            <div
                className={mobileMenu ? "opacity-100 flex visible flex-col items-center fixed top-0 left-0 w-full p-4" +
                    " bg-transparent overflow-hidden z-50 " + fadeInTopRight :
                    " flex flex-col items-center fixed top-0 left-0 w-full p-4 bg-transparent overflow-hidden z-50 " +
                    fadeOutTopRight}>
                {/*<div className="pl-4 bg-gray-100 w-full overflow-hidden rounded-sm">*/}
                {/*    {categories.map((category) => (*/}
                {/*        <Link key={category.slug} href={`/${category.slug}`}>*/}
                {/*            <div key={category.slug} className="border-b-[1px] border-gray-200 flex*/}
                {/*        items-center pl-2 py-6 text-lg text-black cursor-pointer">*/}
                {/*                {category.name}*/}
                {/*            </div>*/}
                {/*        </Link>*/}
                {/*    ))}*/}
                {/*</div>*/}
                <div className="fixed top-6 right-10 rounded-full w-16 h-16
                    flex justify-center items-center opacity-80" onClick={toggleMobileMenu}>
                    <GrFormClose size={36}/>
                </div>
            </div>
        </div>
    )
}

export default Header