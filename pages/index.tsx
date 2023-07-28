import {SignUp} from "@/components/SignUp";
import SideNav from "@/components/SideNav";
import {useAuth} from "@/hooks/auth";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Scraper} from "@/components/Scraper";
import Analysis from "@/components/Analysis";
import Visualizations from "@/components/Visualizations";
import Help from "@/components/Help";
import HomePage from "@/components/HomePage";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";

export const DASHBOARD = 0
export const SCRAPER_PAGE = 1
export const ANALYSIS_PAGE = 2
export const PREPROCESSING = 3
export const VISUALIZATIONS_PAGE = 4
export const HELP_PAGE = 5


export default function Home() {
    const [email, token] = useAuth()
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [activePage, setActivePage] = useState(0)
    const [sidebarOpen, setSideBarOpen] = useState(false);

    useEffect(() => {
        setIsLoggedIn(!!email)
    }, [email]);

    const handleViewSidebar = () => {
        setSideBarOpen(!sidebarOpen);
    };

    const renderSlide = (position: number) => {
        switch (position) {
            case DASHBOARD:
                return <motion.div>
                    <Dashboard setActivePage={setActivePage}/>
                </motion.div>

            case SCRAPER_PAGE:
                return <motion.div>
                    <Scraper setActivePage={setActivePage}/>
                </motion.div>

            case PREPROCESSING:
                return <motion.div>
                </motion.div>

            case ANALYSIS_PAGE:
                return <motion.div>
                    <Analysis setActivePage={setActivePage}/>
                </motion.div>

            case VISUALIZATIONS_PAGE:
                return <motion.div>
                    <Visualizations setActivePage={setActivePage}/>
                </motion.div>

            case HELP_PAGE:
                return <motion.div>
                    <Help/>
                </motion.div>
        }
    }

    return (
        <main className='pattern '>
            <Header/>

            {isLoggedIn && <SideNav activePage={activePage} setActivePage={setActivePage} isOpen={sidebarOpen}
                                    toggleSidebar={handleViewSidebar}/>}

            {isLoggedIn ?
                <div className='h-screen z-10'>
                    {/*<div className={'flex w-screen h-screen justify-center items-center transition duration-300 '*/}
                    {/*    + (sidebarOpen ? " pl-96" : "")}>*/}
                    {/*    <Dashboard setActivePage={setActivePage}/>*/}
                    {/*</div>*/}
                    {/*{isLoggedIn ? (<HomePage/>) : (<SignUp/>)}*/}


                    <motion.div
                        className='w-screen h-screen flex justify-center items-center '>
                        <AnimatePresence mode='popLayout'>
                            <motion.div
                                key={activePage}
                                initial={{opacity: 0, x: "30%"}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: "-100%"}}
                                transition={{duration: .3, delay: 0}}
                                className=''>
                                {renderSlide(activePage)}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
                :
                <SignUp/>}
        </main>
    )
}