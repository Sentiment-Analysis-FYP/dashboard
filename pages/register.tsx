import {SignUp} from "@/components/SignUp";
import Header from "@/components/Header";

export default function Register() {
    return (
        <div>
            <Header/>
            <div className='mt-32'>
                <SignUp/>
            </div>
        </div>
    )
}