import React, {useEffect, useRef, useState} from 'react'
import Image from "next/image";
import Link from "next/link";
import {CgRename} from "react-icons/cg";
import {AiOutlineMail} from "react-icons/ai";
import {BiLock} from "react-icons/bi";
import {motion} from "framer-motion";
import {signUp} from "@/utils/auth";
import {useRouter} from "next/router";

require('dotenv').config()

export const SignUp = () => {
    const [loginStatus, setLoginStatus] = useState(0)
    const signUpRef = useRef(null)
    const router = useRouter()

    const handleSignUp = async () => {
        if (!signUpRef.current) return

        const firstName: string = signUpRef.current['firstName']['value']
        const lastName: string = signUpRef.current['lastName']['value']
        const email: string = signUpRef.current['email']['value']
        const password: string = signUpRef.current['password']['value']
        const confirmPassword: string = signUpRef.current['cpassword']['value']

        // console.log(password)

        if (firstName.length < 1 || lastName.length < 1 || email.length < 1) {
            alert("Please fill all fields.")
            return
        }

        if (password != confirmPassword) {
            alert("Passwords do not match.")
            return
        }

        if (password.length < 8) {
            alert('Password should be at least 8 characters')
            return
        }

        const status = await signUp(firstName, lastName, email, password)
        console.log(status)
        setLoginStatus(status)
    }
    useEffect(() => {
        if (loginStatus == 201) {
            router.push('/home')
            return
        }
    }, [loginStatus]);


    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 m-auto pattern">
            <div className='pattern fixed top-0 left-0 right-0 bottom-0 opacity-[10%] bg-black'/>
            <div
                className="absolute top-0 left-0 right-0 bottom-0 m-auto overflow-hidden flex justify-center
                items-center opacity-100">
                <Image
                    src={"/../public/loginimg.png"}
                    // fill
                    width={1200}
                    height={1200}
                    alt="loginimg"
                    style={{objectFit: "cover"}}
                />
            </div>
            <div className='w-[500px] h-[600px] flex justify-center items-center absolute top-0 left-0 right-0 bottom-0
                            m-auto bg-white rounded-xl'>
                <div className="flex flex-col justify-center items-center gap-8">
                    <div className="flex flex-col text-sm w-96">
                        <span className="text-gray-900 text-2xl pb-4">Sign Up</span>
                        <span className="text-sm pb-2">If you already have an account</span>
                        <span className="">
                          You can
                          <Link
                              href={"/login"}
                              className="text-indigo-600 font-semibold">
                            {" "}
                              Login here.
                          </Link>
                        </span>
                    </div>

                    <form ref={signUpRef} onSubmit={handleSignUp} className="flex flex-col gap-3 w-96">
                        <div className="flex flex-col gap-4 w-96">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="firstName" className="text-sm">
                                    First Name
                                </label>
                                <div className="border-b-[1px] border-indigo-600 flex gap-2 items-center
                                focus-within:border-b-[2px] transition duration-300">
                                    <CgRename size={14}/>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="outline-none w-full"
                                        placeholder="Enter your first name..."
                                        required={true}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="lastName" className="text-sm">
                                    Last Name
                                </label>
                                <div className="border-b-[1px] border-indigo-600 flex gap-2 items-center
                                focus-within:border-b-[2px] transition duration-300">
                                    <CgRename size={14}/>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="outline-none w-full"
                                        placeholder="Enter your last name..."
                                        required={true}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="name" className="text-sm">
                                    Email
                                </label>
                                <div className="border-b-[1px] border-indigo-600 flex gap-2 items-center
                                focus-within:border-b-[2px] transition duration-300">
                                    <AiOutlineMail size={14}/>
                                    <input
                                        type="text"
                                        name="email"
                                        className="outline-none w-full"
                                        placeholder="Enter your email address..."
                                        required={true}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="password" className="text-sm">
                                    Password
                                </label>
                                <div className="border-b-[1px] border-indigo-600 flex gap-2 items-center
                                focus-within:border-b-[2px] transition duration-300">
                                    <BiLock size={14}/>
                                    <input
                                        type="password"
                                        name="password"
                                        className="outline-none w-full"
                                        placeholder="Enter your password..."
                                        minLength={8}
                                        required={true}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="cpassword" className="text-sm">
                                    Confirm Password
                                </label>
                                <div className="border-b-[1px] border-indigo-600 flex gap-2 items-center
                                focus-within:border-b-[2px] transition duration-300">
                                    <BiLock size={14}/>
                                    <input
                                        type="password"
                                        name="cpassword"
                                        className="outline-none w-full"
                                        placeholder="Confirm your password..."
                                        minLength={8}
                                        required={true}
                                    />
                                </div>
                            </div>

                            {" "}
                            <div className="flex justify-between text-xs w-96">
                                <div className="flex gap-1">
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </form>

                    <motion.button
                        value='Register'
                        className="bg-indigo-500 h-12 w-96 flex justify-center items-center rounded-full text-white
                        cursor-pointer"
                        whileTap={{
                            scale: 0.95
                        }}
                        onClick={handleSignUp}>
                        Register
                    </motion.button>

                </div>
            </div>
        </div>
    )
}
