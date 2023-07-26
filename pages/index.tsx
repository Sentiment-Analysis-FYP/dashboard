import {SignUp} from "@/components/SignUp";
import Header from "@/components/Header";
import {useAuth} from "@/hooks/auth";
import {useEffect, useState} from "react";

export default function Home() {
    const [email, token] = useAuth()
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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

    return (
        <main>
            <Header/>
            {isLoggedIn ? (<HomePage/>) : (<SignUp/>)}
        </main>
    )
}