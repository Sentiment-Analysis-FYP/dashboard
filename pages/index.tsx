import {SignUp} from "@/components/SignUp";
import Header from "@/components/Header";
import {useAuth} from "@/hooks/auth";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

export default function Home() {
    const [email, token] = useAuth()
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activePage, setActivePage] = useState(0)

    useEffect(() => {
        setIsLoggedIn(!!email)
    }, [email]);


    const HomePage = () => {
        return (
            <div className='mt-24'>
                Home Page
            </div>
        )
    }

    const HOME_PAGE = 0
    const SCRAPER_PAGE = 1
    const ANALYSIS_PAGE = 2
    const VISUALIZATIONS_PAGE = 3
    const HELP_PAGE = 4

    const renderSlide = (position: number) => {
        switch (position) {
            case HOME_PAGE:
                return <motion.div>
                </motion.div>

            case SCRAPER_PAGE:
                return <motion.div>
                </motion.div>

            case ANALYSIS_PAGE:
                return <motion.div>
                </motion.div>

            case VISUALIZATIONS_PAGE:
                return <motion.div>
                </motion.div>

            case HELP_PAGE:
                return <motion.div>
                </motion.div>
        }
    }

    return (
        <main>
            <Header activePage={activePage} setActivePage={setActivePage}/>
            {isLoggedIn ? (<HomePage/>) : (<SignUp/>)}
        </main>
    )
}