import Image from "next/image";
import {Nunito} from "next/font/google";
import UserName from "@/components/UserName";
import BeginScrape from "@/components/BeginScrape";
import DatePicker from "@/components/DatePicker";
import AddKeyword from "@/components/AddKeyword";
import NewDatePicker from "@/components/NewDatePicker";
import Link from "next/link";
import {CgRename} from "react-icons/cg";
import {AiOutlineMail} from "react-icons/ai";
import {BiLock} from "react-icons/bi";
import {motion} from "framer-motion";
import {SignUp} from "@/components/SignUp";
import {SignIn} from "@/components/SignIn";
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
    );
}

// flex items-center justify-center h-screen
// style={{
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '100vh',
// }
