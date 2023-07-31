import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import {GrFormClose} from "react-icons/gr";
import {useAuth} from "@/hooks/auth";
import {getUserScrapes, logout} from "@/utils/auth";
import {DASHBOARD_PAGE} from "@/pages";
import {useRouter} from "next/router";
import {BiLockAlt} from "react-icons/bi";
import {LuLogOut} from "react-icons/lu";
import {Scrape} from "@/utils/scraper";

interface HeaderProps {
    setActivePage: React.Dispatch<React.SetStateAction<number>>
}

const Header = (props: HeaderProps) => {
    const [userEmail, setUserEmail] = useState('');
    const [email, token, username] = useAuth()
    const {setActivePage} = props
    const router = useRouter()
    const [userScrapes, setUserScrapes] = useState([{title: ''}]);
    const [showUserScrapes, setShowUserScrapes] = useState(false);
    const [usernameState, setUsernameState] = useState(username);

    useEffect(() => {
        const scrapes = async () => {
            const resJson: Scrape[] = await getUserScrapes(email!)
            // return resJson
            console.log(resJson)
            setUserScrapes(resJson)
        }
        if (email) {
            scrapes()
            // console.log(ss)
        }
    }, [email, setActivePage, showUserScrapes]);


    useEffect(() => {
        setUserEmail(email!)
        setUsernameState(username)
    }, [email, username]);

    const fadeInTopRight = "opacity-100 duration-150 scale-100 ease-in-out delay-75"
    const fadeOutTopRight = "opacity-0 invisible duration-100 scale-50 translate-x-40 -translate-y-32"

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    const UserProfile = () => {
        return (
            <div className=" h-10 text-violet-500 py-1 px-2 rounded-lg
                    text-2xl flex justify-center items-center right-40 bottom-5
                    cursor-pointer hover:bg-violet-50 transition duration-300 "
                 onClick={() => setShowUserScrapes((prevState) => !prevState)}>
                <div className='flex justify-center items-center gap-1 pb-[2px]'>
                    <BiLockAlt size={20}/>
                    {usernameState}
                </div>
                {showUserScrapes && <UserScrapes/>}
            </div>
        )
    }

    const UserScrapes = () => {
        return (
            <div className='absolute top-28 text-gray-600 right-8 w-96 rounded-lg px-10 py-5 bg-white'>
                <span className='w-full flex justify-center items-center pb-1 text-violet-600'>Your scrapes</span>
                <div className='w-full px-3 h-[2px] bg-violet-300'></div>
                {userScrapes.length > 0 ? <div className='flex flex-col text-gray-600 items-center'>
                    {userScrapes && userScrapes.map((scrape) => (
                        <span key={scrape.toString()}
                              className='py-1 bg-violet-50 rounded-md w-full flex justify-center items-center gap-1'>
                            {scrape.title}
                        </span>
                    ))}
                </div> : "No scrapes"}
            </div>
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
                        </div>
                    </div>
                    {userEmail ? (<div className='flex w-full gap-4 justify-end items-center mr-8 mt-2'>
                        <UserProfile/>
                        <span
                            className='w-32 flex justify-around items-center rounded-lg bg-gray-100 px-2 py-2 text-violet-500
                            cursor-pointer hover:bg-violet-200 transition duration-200 hover:shadow'
                            onClick={() => {
                                setUserEmail('')
                                router.replace(router.asPath)
                                logout()
                            }}>
                        Log out <LuLogOut/>
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