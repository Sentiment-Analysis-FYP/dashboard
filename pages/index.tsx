import {Nunito} from "next/font/google";
import {SignUp} from "@/components/SignUp";
import Header from "@/components/Header";
import {useAuth} from "@/hooks/auth";

const nunito = Nunito({
    weight: ["400"],
    subsets: ["latin"],
});

export default function Home() {
    const [email, token] = useAuth()

    return (
        <main className={nunito.className}>
            <Header/>

            {email ? (<div></div>) : (<SignUp/>)}
        </main>
    )
}