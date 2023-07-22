import React from "react";
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

export const SignIn = () => {
    return (
        <div className="flex w-full">
            <div className="bg-blue-500 overflow-hidden w-1/2 h-full relative">
                <Image
                    src={"/../public/loginimg.png"}
                    fill
                    // width={900}
                    // height={900}
                    alt="loginimg"
                    style={{objectFit: "contain"}}
                />
            </div>

            <div className=" flex flex-col justify-center items-center w-1/2 gap-8">
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

                <div className="flex flex-col gap-3 w-96">

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
                </div>

                <motion.button
                    className="bg-indigo-500 h-12 w-96 flex justify-center items-center rounded-full text-white"
                    whileTap={{
                        scale: 0.95,
                    }}
                >
                    Login
                </motion.button>
            </div>
        </div>
    );
};
