import Container from "@/components/Container";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";
import SocialLinks from "./SocialLinks";
import Link from "next/link";
import Photo from "./Photo";
import StatisticsData from "./StatisticsData";
import HomeDescription from "./HomeDescription";
const Banner = () => {
  return (
    <Container className="py-5 flex flex-col lg:flex-row items-center justify-center gap-5">
      <div className=" order-2 md:order-none flex flex-col items-start gap-y-2 ">
        <p className="text-sm font-normal tracking-wide">
          <span className="text-lightSky">MERN</span> Stack Developer
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold text-white/90">
          Hello I&#39;m <br />
          <span className="text-lightSky">Masum Ahmed.</span>
        </h1>
        <div className="min-h-44">
          <HomeDescription />
        </div>
        <div className="mt-5 flex flex-wrap md:flex-nowrap gap-8 items-start">
          <Button
            asChild
            variant={"outline"}
            size={"lg"}
            className=" rounded-full text-lightSky tracking-wider hover:bg-hoverColor
             hover:text-bodyColor duration-300"
          >
            <Link
              href={"./masum-ahmed.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 "
            >
              <span>Download Cv</span> <FiDownload />
            </Link>
          </Button>
          <div className="mb-9 md:mb-0">
            <SocialLinks />
          </div>
        </div>
        <div className="mt-0 md:mt-5">
          <StatisticsData />
        </div>
      </div>
      <div className="mb-8 md:mb-0 order-1 md:order-none">
        <Photo />
      </div>
    </Container>
  );
};

export default Banner;
