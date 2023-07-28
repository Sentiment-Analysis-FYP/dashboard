import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import {useAuth} from "@/hooks/auth"
import {GrClose} from "react-icons/gr";
import {GiHamburgerMenu} from "react-icons/gi";

interface HeaderProps {
    activePage: number,
    setActivePage: React.Dispatch<React.SetStateAction<number>>,
    isOpen: boolean,
    toggleSidebar: () => void
}

const SideNav = (props: HeaderProps) => {
    const {activePage, setActivePage, isOpen, toggleSidebar} = props
    const [email, token] = useAuth()
    const [userEmail, setUserEmail] = useState('')
    // const [activePage, setActivePage] = useState(0)

    let stockCategories = [
        {name: "Home", slug: ""},
        {name: "Scraper", slug: "scraper"},
        {name: "Analysis", slug: "analysis"},
        {name: "Visualizations", slug: "visualizations"},
        {name: "Help", slug: "help"},
    ]

    const [categories, setCategories] = useState(stockCategories)

    useEffect(() => {
        setUserEmail(email ? email : '')
    }, [email])

    const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";

    return (
        <div className={" " + sidebarClass}>
            <div className='bg-white  rounded-lg h-full w-full flex shadow-lg'>
                <div className=" w-full">
                    <div className=" w-full border-gray-300 py-14 items-center flex flex-col justify-between">
                        <div className="flex w-full flex-col items-center justify-center">
                            <div className=' sidebar-toggle text-violet-600'
                            onClick={toggleSidebar}>
                                <GiHamburgerMenu size={40}/>
                            </div>
                            <div className="flex flex-col  mt-20 justify-center items-center  w-full">
                                {categories.map((category, index) => (
                                    <div key={category.slug} onClick={() => setActivePage(index)}>
                                        <div
                                            className={'w-60 flex justify-center items-center text-gray-800 ' +
                                                'font-semibold py-14  group transform uppercase cursor-pointer ' +
                                                ' ease-in-out text-xl ' +
                                                ((activePage == index) ? " shadow-md bg-violet-50" :
                                                    " hover:text-violet-400 duration-400 hover:bg-gray-200 transition ")}>
                                            <p className='transition duration-300 group-hover:translate-x-1'>
                                                {category.name}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNav