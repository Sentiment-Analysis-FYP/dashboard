import Image from "next/image";
import { Inter } from "next/font/google";
import UserName from "@/components/UserName";
import BeginScrape from "@/components/BeginScrape";
import DatePicker from "@/components/DatePicker";
import AddKeyword from "@/components/AddKeyword";

export default function Home() {
  return (
    <main>
      <div>
        <div>
          <UserName/>
          <BeginScrape/>
        </div>
        <div>
          <AddKeyword/>
          <DatePicker/>
        </div>
        
      </div>
    </main>
  );
}
