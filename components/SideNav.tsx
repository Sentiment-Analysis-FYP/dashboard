import React, {useEffect, useState} from 'react'
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineCloudDownload, AiOutlineFunction} from "react-icons/ai";
import {TbDeviceDesktopAnalytics} from "react-icons/tb";
import {BsBarChartLine} from "react-icons/bs";

interface HeaderProps {
    activePage: number,
    setActivePage: React.Dispatch<React.SetStateAction<number>>,
    isOpen: boolean,
    toggleSidebar: () => void
}

const SideNav = (props: HeaderProps) => {
    const {activePage, setActivePage, isOpen, toggleSidebar} = props
    // const [activePage, setActivePage] = useState(0)

    let stockCategories = [
        {name: "Scraper", slug: "scraper"},
        {name: "Analysis", slug: "analysis"},
        {name: "Preprocessing", slug: "preprocessing"},
        {name: "Visualizations", slug: "visualizations"},
    ]

    const [categories, setCategories] = useState(stockCategories)

    const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";

    const renderIcon = (pos: number) => {
        let icon;
        switch (pos) {
            case 0:
                icon = <AiOutlineCloudDownload size={40}/>
                break

            case 1:
                icon = <TbDeviceDesktopAnalytics size={40}/>
                break

            case 2:
                icon = <AiOutlineFunction size={40}/>
                break

            case 3:
                icon = <BsBarChartLine size={40}/>
                break
        }

        return icon
    }

    return (
        <div className={sidebarClass + ' mt-0 h-full'}>
            <div>
                <div className=' sidebar-toggle text-violet-600 '
                     onClick={toggleSidebar}>
                    <GiHamburgerMenu size={40}/>
                </div>
            </div>

            <div className='z-50 bg-white rounded-lg h-full w-full flex shadow-lg '>
                <div className=" w-full bg-white">
                    <div className=" w-full bg-white py-14 items-center flex flex-col justify-center">
                        <div className="flex w-full flex-col items-center justify-center">
                            <div className="flex flex-col  mt-40 justify-center items-center  w-full">
                                {categories.map((category, index) => (
                                    <div key={category.slug} onClick={() => setActivePage(index + 1)}>
                                        <div
                                            className={'w-64 flex  items-center text-gray-800 ' +
                                                'font-semibold py-14  group transform uppercase cursor-pointer ' +
                                                ' ease-in-out text-xl transition duration-100 ' +
                                                ((activePage == index) ? " text-violet-600" :
                                                    " hover:text-violet-400 duration-400 transition ")}>
                                            <div className={!isOpen ? ' pl-[180px] ' : " pl-[25px]"}>
                                                {renderIcon(index)}
                                            </div>
                                            {isOpen &&
                                                <p className='pl-6 transition duration-300 group-hover:translate-x-1'>
                                                    {category.name}
                                                </p>
                                            }
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