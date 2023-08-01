import {SignIn} from "@/components/SignIn";
import Header from "@/components/Header";
import Link from 'next/link'

export default function Login() {
    return (
        <div>
            {/*<SideNav/>*/}
            <Link href='/'><Header setActivePage={() => {
            }}/></Link>
            <SignIn/>
        </div>
    )
}