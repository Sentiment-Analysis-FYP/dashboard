import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import {AiOutlineMenu} from "react-icons/ai";
import {GrFormClose} from "react-icons/gr";
import {useAuth} from "@/hooks/auth";

const Header = () => {
    const [email, token] = useAuth()

    let stockCategories = [
        {name: "Home", slug: "/"},
        {name: "Scraper", slug: "scraper"},
        {name: "Analysis", slug: "analysis"},
        {name: "Visualizations", slug: "vis"},
        {name: "About", slug: "about"},
    ]

    const [categories, setCategories] = useState(stockCategories);
    //
    // useEffect(() => {
    //     setemail(useAuth().email)
    // }, []);
    //
    // useEffect(() => {
    //     if (email) {
    //         stockCategories.shift()
    //         setCategories(stockCategories)
    //     }
    // }, [email]);

    // useEffect(() => {
    //     const {email, token} = useAuth()
    //     // setUpdateHeader(false)
    //     setemail(email)
    // }, [updateHeader]);


    const fadeInTopRight = "opacity-100 duration-150 scale-100 ease-in-out delay-75"
    const fadeOutTopRight = "opacity-0 invisible duration-100 scale-50 translate-x-40 -translate-y-32"

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    // const UserProfile = () => {
    //     return (
    //         <Link href='/login'>
    //             <div className="rounded-full w-10 h-10 text-white bg-orange-500 uppercase
    //         text-2xl flex justify-center items-center absolute right-20 shadow-md
    //         cursor-pointer hover:bg-orange-600 transition duration-300 hover:shadow-lg">
    //
    //                 <div className='flex justify-center items-center pb-[2px]'>
    //                     {email.charAt(0)}
    //                 </div>
    //
    //             </div>
    //         </Link>
    //     )
    // }

    return (
        <div className="fixed top-0 left-0 bg-white z-50 h-22 w-full shadow-lg">
            <div className=' w-full flex items-center'>
                <div className="px-6 w-full">
                    <div className=" w-full inline-block border-gray-300 py-6 items-center md:px-12 flex">
                        <div className="">
                            <Link href='/'>
                                <span className="cursor-pointer font-bold text-md md:text-2xl">
                                    SENTINEL
                                </span>
                            </Link>
                        </div>
                        <div className="flex items-center justify-center md:contents ">
                            <div className="flex mx-16 justify-center items-center p-1 w-full">
                                {categories.map((category) => (
                                    <Link key={category.slug} href={`/${category.slug}`}>
                                        <div
                                            className='px-3 gap-16 align-middle text-gray-800 ml-4 font-semibold
                                         cursor-pointer hover:text-gray-500 hover:translate-x-0.5 transform transition
                                          hover:duration-400 ease-in-out text-md'>
                                            {category.name}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            {/*<div className="pl-16 pt-1 flex gap-4 float-right justify-center items-center">*/}
                            {/*    <Link href="">*/}
                            {/*        <div className="cursor-pointer hover:text-blue-900 transition*/}
                            {/*         flex items-center duration-100 ease-in-out">*/}
                            {/*            <FaFacebookF size={22}/>*/}
                            {/*        </div>*/}
                            {/*    </Link>*/}

                            {/*    <Link href="">*/}
                            {/*        <div className="cursor-pointer hover:text-blue-900 transition*/}
                            {/*         flex items-center duration-100 ease-in-out">*/}
                            {/*            <FaTwitter size={22}/>*/}
                            {/*        </div>*/}
                            {/*    </Link>*/}

                            {/*    <Link href="">*/}
                            {/*        <div className="cursor-pointer hover:text-blue-900 transition*/}
                            {/*         flex items-center duration-100 ease-in-out">*/}
                            {/*            <FaInstagram size={22}/>*/}
                            {/*        </div>*/}
                            {/*    </Link>*/}

                            {/*    <Link href="">*/}
                            {/*        <div className="cursor-pointer hover:text-blue-900 transition*/}
                            {/*         flex items-center duration-100 ease-in-out">*/}
                            {/*            <FaLinkedin size={22}/>*/}
                            {/*        </div>*/}
                            {/*    </Link>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                {/*{email && !mobile ? (<UserProfile/>) : (<div></div>)}*/}

            </div>
            {/*<div*/}
            {/*    className={(mobile ? " opacity-100 " : " invisible ") + "absolute top-1 right-4 rounded-full w-16 h-16 " +*/}
            {/*        "flex justify-center text-black items-center cursor-pointer"} onClick={toggleMobileMenu}>*/}
            {/*    <AiOutlineMenu size={32}/>*/}
            {/*</div>*/}
            {/*<div*/}
            {/*    className={mobileMenu ? "opacity-100 flex visible flex-col items-center fixed top-0 left-0 w-full p-4" +*/}
            {/*        " bg-transparent overflow-hidden z-50 " + fadeInTopRight :*/}
            {/*        " flex flex-col items-center fixed top-0 left-0 w-full p-4 bg-transparent overflow-hidden z-50 " +*/}
            {/*        fadeOutTopRight}>*/}
            {/*    <div className="pl-4 bg-gray-100 w-full overflow-hidden rounded-sm">*/}
            {/*        {categories.map((category) => (*/}
            {/*            <Link key={category.slug} href={`/${category.slug}`}>*/}
            {/*                <div key={category.slug} className="border-b-[1px] border-gray-200 flex*/}
            {/*            items-center pl-2 py-6 text-lg text-black cursor-pointer">*/}
            {/*                    {category.name}*/}
            {/*                </div>*/}
            {/*            </Link>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*    <div className="fixed top-6 right-10 rounded-full w-16 h-16*/}
            {/*        flex justify-center items-center opacity-80" onClick={toggleMobileMenu}>*/}
            {/*        <GrFormClose size={36}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default Header