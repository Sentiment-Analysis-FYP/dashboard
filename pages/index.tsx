import {SignUp} from "@/components/SignUp";
import Header from "@/components/Header";
import {useAuth} from "@/hooks/auth";

export default function Home() {
    const [email, token] = useAuth()

    return (
        <main>
            <Header/>
            {email ? (<div></div>) : (<SignUp/>)}
        </main>
    )
}