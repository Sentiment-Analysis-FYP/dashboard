import React from 'react'
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

export const SignUp = () => {
    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 m-auto pattern">
            <div className='pattern fixed top-0 left-0 right-0 bottom-0 opacity-[10%] bg-black'/>
            <div
                className="absolute top-0 left-0 right-0 bottom-0 m-auto overflow-hidden flex justify-center
                items-center opacity-50">
                <Image
                    src={"/../public/loginimg.png"}
                    // fill
                    width={1200}
                    height={1200}
                    alt="loginimg"
                    style={{objectFit: "cover"}}
                />
            </div>
            <div className='w-[500px] h-[550px] flex justify-center items-center absolute top-0 left-0 right-0 bottom-0
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

                    <div className="flex flex-col gap-3 w-96">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name" className="text-sm">
                                Name
                            </label>
                            <div className="border-b-[1px] border-indigo-600 flex gap-2 items-center">
                                <CgRename size={14}/>
                                <input
                                    type="text"
                                    name="name"
                                    className="outline-none w-full"
                                    placeholder="Enter your full name..."
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 w-96">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="name" className="text-sm">
                                    Email
                                </label>
                                <div className="border-b-[1px] border-indigo-600 flex gap-2 items-center">
                                    <AiOutlineMail size={14}/>
                                    <input
                                        type="text"
                                        name="email"
                                        className="outline-none w-full"
                                        placeholder="Enter your email address..."
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
                                        placeholder="Enter your password..."
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
                                        placeholder="Comfirm your password..."
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
                    </div>

                    <motion.button
                        className="bg-indigo-500 h-12 w-96 flex justify-center items-center rounded-full text-white"
                        whileTap={{
                            scale: 0.95
                        }}>
                        Register
                    </motion.button>
                </div>
            </div>
        </div>
    )
}
