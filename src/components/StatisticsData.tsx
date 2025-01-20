"use client";
import { statsData } from "@/constants";
import CountUp from "react-countup";
const StatisticsData = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-7 md:gap-5">
      {statsData.map((item) => (
        <div
          key={item?.num}
          className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 
           items-center justify-center md:justify-start"
        >
          <CountUp
            className="text-5xl md:text-6xl font-semibold"
            end={item?.num}
            duration={5}
            delay={2}
          />

          <p>{item?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default StatisticsData;
