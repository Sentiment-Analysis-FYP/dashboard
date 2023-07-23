import {SignUp} from "@/components/SignUp";
import Header from "@/components/Header";
import {useAuth} from "@/hooks/auth";

export default function Home() {
    const [email, token] = useAuth()

    const HomePage = () => {
        return (
            <div className='mt-32'>
                Home Page
            </div>
        )
    }

    return (
        <main>
            <Header/>
            {email ? (<HomePage/>) : (<SignUp/>)}
        </main>
    )
}