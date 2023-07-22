import React, {useEffect, useRef, useState} from 'react'
import Image from "next/image";
import Link from "next/link";
import {CgRename} from "react-icons/cg";
import {AiOutlineMail} from "react-icons/ai";
import {BiLock} from "react-icons/bi";
import {motion} from "framer-motion";
import {signIn, signUp} from "@/utils/auth";
import {useRouter} from "next/router";

export const SignIn = () => {
    const [loginStatus, setLoginStatus] = useState(0)
    const signInRef = useRef(null)
    const router = useRouter()

    const handleSignIn = async () => {
        if (!signInRef.current) return

        const email: string = signInRef.current['email']['value']
        const password: string = signInRef.current['password']['value']

        if (password.length < 8) {
            alert('Password should be at least 8 characters')
            return
        }

        const status = await signIn(email, password)
        console.log(status)
        setLoginStatus(status)
    }
    useEffect(() => {
        if (loginStatus == 200) {
            router.push('/')
            return
        }
    }, [loginStatus]);

    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 m-auto pattern">
            <div className='pattern fixed top-0 left-0 right-0 bottom-0 opacity-[10%] bg-black'/>
            <div className="absolute top-0 left-0 right-0 bottom-0 m-auto overflow-hidden flex justify-center
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

            <div className="w-[500px] h-[500px] flex justify-center items-center absolute top-0 left-0 right-0 bottom-0
                            m-auto bg-white rounded-xl">
                <div className="flex flex-col justify-center items-center gap-8">
                    <div className="flex flex-col text-sm w-96">
                        <span className="text-gray-900 text-2xl pb-4">Sign In</span>
                        <span className="text-sm pb-2">If you don&apos;t have an account</span>
                        <span className="">
                        You can
                        <Link href={"/register"} className="text-indigo-600 font-semibold">
                          {" "}
                            Register here.
                        </Link>
                      </span>
                    </div>

                    <form ref={signInRef} onSubmit={handleSignIn} className="flex flex-col gap-3 w-96">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="text-sm">
                                Email
                            </label>
                            <div className="border-b-[1px] border-indigo-600 flex gap-2 items-center">
                                <AiOutlineMail size={14}/>
                                <input
                                    type="text"
                                    name="email"
                                    className="outline-none w-full"
                                    placeholder="Enter your email address"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="text-sm">
                                Password
                            </label>
                            <div className="border-b-[1px] border-indigo-600 flex gap-2 items-center">
                                <BiLock size={14}/>
                                <input
                                    type="password"
                                    name="password"
                                    className="outline-none w-full"
                                    placeholder="Enter a strong password"
                                />
                            </div>
                        </div>
                        {" "}
                        <div className="flex justify-between text-xs w-96">
                            <div className="flex gap-1">
                                <input type="checkbox"/>
                                <span>Remember me</span>
                            </div>
                            <div>
                                <Link href={"/resetpassword"}>Forgot Password</Link>
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
                        onClick={handleSignIn}>
                        Log In
                    </motion.button>
                </div>
            </div>
        </div>
    );
};
