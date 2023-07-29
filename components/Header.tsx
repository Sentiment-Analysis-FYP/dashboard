import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import {GrFormClose} from "react-icons/gr";
import {useAuth} from "@/hooks/auth";
import {logout} from "@/utils/auth";
import {DASHBOARD_PAGE} from "@/pages";

interface HeaderProps {
    setActivePage: React.Dispatch<React.SetStateAction<number>>
}

const Header = (props: HeaderProps) => {
    const [userEmail, setUserEmail] = useState('');
    const [email, token] = useAuth()
    const {setActivePage} = props
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
            text-2xl flex justify-center items-center absolute right-40 bottom-5 shadow-md
            cursor-pointer hover:bg-violet-600 transition duration-300 hover:shadow-lg">

                    <div className='flex justify-center items-center pb-[2px]'>
                        {userEmail.charAt(0)}
                    </div>
                </div>
            </Link>
        )
    }

    return (
        <>
            <div className='absolute top-0 left-0 right-0 bg-white h-20 w-screen shadow-xl'/>
            <div className="fixed top-0 left-0 bg-white z-40 h-22 w-full ">
                <div className=' w-full flex items-center'>
                    <div className="px-6 w-full">
                        <div className=" w-full border-gray-300 py-6 items-center px-10 flex">
                            <div className="float-left">
                                <span
                                    onClick={() => setActivePage(DASHBOARD_PAGE)}
                                    className="select-none cursor-pointer hover:text-violet-500 font-bold text-4xl text-violet-800 tracking-[10px]">
                                    FeeBa
                                </span>
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
                    {userEmail ? (<div className='flex justify-center items-center mr-14 mt-2'>
                        <UserProfile/>
                        <span
                            className='w-20 flex justify-center items-center rounded-lg bg-gray-50 px-2 py-1 text-violet-500
                        cursor-pointer hover:bg-violet-100 transition duration-200'
                            onClick={() => {
                                setUserEmail('')
                                logout()
                            }}>
                        Log out
                    </span>
                    </div>) : (<div
                        className='text-lg w-72 right-20 text-violet-600 flex justify-center items-center gap-5 '>
                        <Link href='/login'><span
                            className='bg-violet-50 px-3 py-1 rounded-lg hover:bg-violet-100'>Login</span></Link>
                        <Link href='/register'><span className='bg-violet-50 px-3 py-1 rounded-lg hover:bg-violet-100'>Sign Up</span></Link>
                    </div>)}

                </div>

                <div
                    className={mobileMenu ? "opacity-100 flex visible flex-col items-center fixed top-0 left-0 w-full p-4" +
                        " bg-transparent overflow-hidden z-50 " + fadeInTopRight :
                        " flex flex-col items-center fixed top-0 left-0 w-full p-4 bg-transparent overflow-hidden z-50 " +
                        fadeOutTopRight}>

                    <div className="fixed top-6 right-10 rounded-full w-16 h-16
                    flex justify-center items-center opacity-80" onClick={toggleMobileMenu}>
                        <GrFormClose size={36}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header