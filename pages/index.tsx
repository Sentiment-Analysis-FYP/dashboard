import {SignUp} from "@/components/SignUp";
import Header from "@/components/Header";
import {useAuth} from "@/hooks/auth";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Scraper} from "@/components/Scraper";
import Analysis from "@/components/Analysis";
import Visualizations from "@/components/Visualizations";
import Help from "@/components/Help";
import HomePage from "@/components/HomePage";

export default function Home() {
    const [email, token] = useAuth()
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activePage, setActivePage] = useState(0)

    useEffect(() => {
        setIsLoggedIn(!!email)
    }, [email]);


    const HOME_PAGE = 0
    const SCRAPER_PAGE = 1
    const ANALYSIS_PAGE = 2
    const VISUALIZATIONS_PAGE = 3
    const HELP_PAGE = 4

    const renderSlide = (position: number) => {
        switch (position) {
            case HOME_PAGE:
                return <motion.div>
                    <HomePage/>
                </motion.div>

            case SCRAPER_PAGE:
                return <motion.div>
                    <Scraper/>
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
        <main className='pattern'>
            <Header activePage={activePage} setActivePage={setActivePage}/>
            {/*{isLoggedIn ? (<HomePage/>) : (<SignUp/>)}*/}

            <motion.div
                className='w-screen h-screen flex justify-center items-center pl-48'>
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
        </main>
    )
}