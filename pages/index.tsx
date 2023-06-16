import Image from "next/image";
import { Inter } from "next/font/google";
import UserName from "@/components/UserName";
import BeginScrape from "@/components/BeginScrape";
import DatePicker from "@/components/DatePicker";
import AddKeyword from "@/components/AddKeyword";
import NewDatePicker from "@/components/NewDatePicker";

export default function Home() {
  return (
    <main>
      {/* <div className="grid grid-cols-2 gap-1 m-1 p-20 h-screen place-items-center"> */}
      <div className="flex w-full flex-col gap-1 m-1 p-20">
        <h1>SCRAPER</h1> {/*top container*/}
        <div className="flex items-center">
          <UserName />
          <BeginScrape />
        </div>
        <div className="flex">
          <AddKeyword />
          {/* <DatePicker /> */}
          <NewDatePicker />
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
