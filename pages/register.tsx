import {SignUp} from "@/components/SignUp";
import SideNav from "@/components/SideNav";

export default function Register() {
    return (
        <div>
            <SideNav/>
            <div className='mt-32'>
                <SignUp/>
            </div>
        </div>
    )
}