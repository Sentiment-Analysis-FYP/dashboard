import Image from "next/image";
import { Nunito } from "next/font/google";
import UserName from "@/components/UserName";
import BeginScrape from "@/components/BeginScrape";
import DatePicker from "@/components/DatePicker";
import AddKeyword from "@/components/AddKeyword";
import NewDatePicker from "@/components/NewDatePicker";
import Link from "next/link";

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

        <div className="z-[100] flex flex-col justify-center items-center w-1/2">
          <div className="flex flex-col text-sm">
            <span className="text-gray-900 text-2xl">Sign In</span>
            <span className="text-sm">If you don't have an account</span>
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
          <div>
            sign in. If you don't have an account, you can register here
          </div>
          <div> Name and input Email and input Password and input</div>
          <div> remembrer me button and forgotten password </div>
          <div>login button</div>
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
