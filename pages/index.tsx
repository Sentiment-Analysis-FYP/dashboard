import Image from "next/image";
import { Nunito } from "next/font/google";
import UserName from "@/components/UserName";
import BeginScrape from "@/components/BeginScrape";
import DatePicker from "@/components/DatePicker";
import AddKeyword from "@/components/AddKeyword";
import NewDatePicker from "@/components/NewDatePicker";
import Link from "next/link";
import { CgRename } from "react-icons/cg";
import { AiOutlineMail } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { motion } from "framer-motion";

const nunito = Nunito({
  weight: ["400"],
  subsets: ["latin"],
});
console.log(nunito);

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

      <div className="flex w-full">
        <div className="h-screen bg-blue-500 overflow-hidden">
          <Image
            src={"/../public/loginimg.png"}
            // fill
            width={900}
            height={900}
            alt="loginimg"
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="z-[100] flex flex-col justify-center items-center w-1/2 gap-8">
          <div className="flex flex-col text-sm w-96">
            <span className="text-gray-900 text-2xl pb-4">Sign In</span>
            <span className="text-sm pb-2">If you don't have an account</span>
            <span className="">
              You can
              <Link
                href={"/register"}
                className="text-indigo-600 font-semibold"
              >
                {" "}
                Register here.
              </Link>
            </span>
          </div>

          <div className="flex flex-col gap-3 w-96">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <div className="border-b-[1px] border-indigo-600 flex gap-2 items-center">
                <CgRename size={14} />
                <input
                  type="text"
                  name="name"
                  className="outline-none"
                  placeholder="Enter your full name"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <div className="border-b-[1px] border-indigo-600 flex gap-2 items-center">
                <AiOutlineMail size={14} />
                <input
                  type="text"
                  name="email"
                  className="outline-none"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <div className="border-b-[1px] border-indigo-600 flex gap-2 items-center">
                <BiLock size={14} />
                <input
                  type="password"
                  name="password"
                  className="outline-none"
                  placeholder="Enter a strong password"
                />
              </div>
            </div>{" "}
            <div className="flex justify-between text-xs w-96">
              <div className="flex gap-1">
                <input type="checkbox" />
                <span>Remember me</span>
              </div>
              <div>
                <Link href={"/resetpassword"}>Forgot Password</Link>
              </div>
            </div>
          </div>

          <motion.button className="bg-indigo-500 h-12 w-96 flex justify-center items-center rounded-full text-white"
          whileTap={{
            scale: 0.95
          }}>
            Login
          </motion.button>
        </div>
      </div>
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
