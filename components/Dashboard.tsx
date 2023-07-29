import { AiFillPieChart } from "react-icons/ai";
import React from "react";
import Image, { StaticImageData } from "next/image";
import PreprocessImg from "@/public/PreprocessImg.jpg";
import VisualizationImg from "@/public/VisualizationImg.jpeg";
import AnalysisImg from "@/public/AnalysisImg.jpg";
import scrapedataImg from "@/public/ScrapeDataImg.jpg";

interface DashboardProps {
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}
interface Images {
  [key: string]: StaticImageData;
}

const Dashboard = (props: DashboardProps) => {
  const { setActivePage } = props;
  const pages = [
    "Twitter Scraper",
    "Data Analysis",
    "Data Preprocessing",
    "Data Visualization",
  ];
  const images: Images = {
    "Twitter Scraper": scrapedataImg,
    "Data Analysis": AnalysisImg,
    "Data Preprocessing": PreprocessImg,
    "Data Visualization": VisualizationImg,
  };

  return (
    <div className="w-[1000px] rounded-lg shadow-lg bg-white h-[1000px] flex justify-center items-center">
      <div className="flex flex-wrap gap-20 justify-center items-center">
        {pages.map((page, index) => (
          <div
            key={page}
            onClick={() => setActivePage(index + 1)}
            className="cursor-pointer hover:bg-violet-200 transition duration-200 w-[400px] h-[400px] p-10 bg-violet-50 flex flex-col justify-between items-center rounded-lg shadow-md"
          >
            <div className="flex justify-center items-center">
              {/* <AiFillPieChart size={200}/> */}
              <Image src={images[page]} alt="image" />
            </div>
            <span className="text-3xl justify-center items-center text-violet-500">
              {page}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
