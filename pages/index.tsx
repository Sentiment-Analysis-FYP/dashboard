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
import {SideNavigation} from "@/components/SideNavigation";

const nunito = Nunito({
    weight: ["400"],
    subsets: ["latin"],
});

export default function Home() {
    return (
        <main className={nunito.className}>
            {/* <div className="grid grid-cols-2 gap-1 m-1 p-20 h-screen place-items-center"> */}
            {/* <div className="flex w-full flex-col gap-1 m-1 p-20"> */}
            {/* <h1>SCRAPER</h1> top container */}
            {/* <div className="flex items-center"> */}
            {/* <UserName /> */}
            {/* <BeginScrape /> */}
            {/* </div> */}
            {/* <div className="flex"> */}
            {/* <AddKeyword /> */}
            {/* <DatePicker /> */}
            {/* <NewDatePicker /> */}
            {/* </div> */}
            {/* </div> */}
            {/*<SignUp/>*/}
            <SideNavigation/>
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
