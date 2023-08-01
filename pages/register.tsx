import {SignUp} from "@/components/SignUp";
import Header from "@/components/Header";
import Link from "next/link";

export default function Register() {
    return (
        <div>
            <Link href='/'><Header setActivePage={() => {
            }}/></Link>
            <div className='mt-32'>
                <SignUp/>
            </div>
        </div>
    )
}