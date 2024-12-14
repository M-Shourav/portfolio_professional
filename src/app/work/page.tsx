"use client";
import { project_1, project_2, project_3, project_4 } from "@/assets/images";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { MdOutlineArrowOutward } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";

const project = [
  {
    id: "01",
    title: "Shofy E-commerce project",
    category: "Frontend",
    description: `An interactive weather forecast dashboard that provides real-time weather information and 5-day forecasts for multiple locations. Utilizes a third-party weather API.`,
    stack: ["React", "TailwindCss", "NextAuth", "Redux Toolkit", "Stripe"],
    liveUrl: "https://shofyyt.vercel.app/",
    githubUrl: "https://github.com/M-Shourav/shofyecommerce.git",
    image: project_1,
  },
  {
    id: "02",
    title: "Constructify Project",
    category: "Frontend",
    description: `An interactive weather forecast dashboard that provides real-time weather information and 5-day forecasts for multiple locations. Utilizes a third-party weather API.`,
    stack: ["React", "TailwindCss", "NextAuth", "Redux Toolkit", "Stripe"],
    liveUrl: "https://constructify-masum.vercel.app/",
    githubUrl: "https://github.com/M-Shourav/constructify.git",
    image: project_3,
  },
  {
    id: "03",
    title: "Personal Portfolio",
    category: "Full Stack development",
    description: `An interactive weather forecast dashboard that provides real-time weather information and 5-day forecasts for multiple locations. Utilizes a third-party weather API.`,
    stack: ["React", "TailwindCss", "NextAuth", "Redux Toolkit", "Stripe"],
    liveUrl: "https://masum-ahmed.vercel.app/",
    githubUrl: "https://github.com/M-Shourav/portfolio_yt.git",
    image: project_4,
  },
  {
    id: "04",
    title: "Amazon E-commerce project",
    category: "Frontend",
    description: `An interactive weather forecast dashboard that provides real-time weather information and 5-day forecasts for multiple locations. Utilizes a third-party weather API.`,
    stack: ["React", "TailwindCss", "NextAuth", "Redux Toolkit", "Stripe"],
    liveUrl: "https://amazon-clone-masum2.vercel.app/",
    githubUrl: "https://github.com/M-Shourav/amazon_cloneyt.git",
    image: project_2,
  },
];

const WorkPage = () => {
  const handleSlideChange = (index: number) => {
    handleSlideChange(index);
  };
  return (
    <div className="py-5 md:py-10 mb-10">
      <PageLayout>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
          onSelect={() => {
            const index = 0;
            if (typeof index === "number") {
              handleSlideChange(index);
            }
          }}
        >
          <CarouselContent>
            {project?.map((projects) => (
              <CarouselItem key={projects?.id}>
                <Card className="bg-bodyColor border-lightSky/20">
                  <CardContent className="p-6">
                    <div
                      className="flex flex-col md:flex-row md:items-center
                     md:space-x-8 group"
                    >
                      {/* description */}
                      <div className="w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0">
                        <div className=" space-y-3 md:space-y-6 mt-4 md:mt-0">
                          <h2
                            className="text-3xl md:text-6xl text-transparent text-outline
                             text-outline-hover leading-none font-extrabold"
                          >
                            {projects?.id}
                          </h2>
                          <h3
                            className="text-2xl font-semibold leading-none
                          group-hover:text-hoverColor duration-300"
                          >
                            {projects?.title}
                          </h3>
                          <p className="text-white/60 tracking-wide leading-7">
                            {projects?.description}
                          </p>
                          <ul
                            className="flex flex-wrap md:flex-nowrap items-center
                           gap-2 md:gap-4"
                          >
                            {projects?.stack.map((item, index) => (
                              <li
                                key={index}
                                className="text-sm md:text-base text-lightSky/80"
                              >
                                {item}
                                {index !== projects?.stack.length - 1 && ","}
                              </li>
                            ))}
                          </ul>
                          <span className="w-full h-px bg-gray-600 inline-block" />
                        </div>
                        <div className="flex items-center gap-5 mt-4">
                          <Link
                            href={projects?.liveUrl}
                            target="_blank"
                            className="w-10 h-10 hover:text-hoverColor duration-300 
                            flex items-center justify-center border border-lightSky/20
                            hover:border-lightSky/50"
                          >
                            <span className="text-xl">
                              <MdOutlineArrowOutward />
                            </span>
                          </Link>
                          <Link
                            className="w-10 h-10 hover:text-hoverColor duration-300 
                            flex items-center justify-center border border-lightSky/20
                             hover:border-lightSky/50"
                            href={projects?.githubUrl}
                            target="_blank"
                          >
                            <span className="text-xl">
                              <FiGithub />
                            </span>
                          </Link>
                        </div>
                      </div>
                      {/* image */}
                      <div className="w-full md:w-1/2 order-1 md:order-2">
                        <div
                          className="relative h-64 md:h-96 overflow-hidden rounded-xl
                        bg-gray-700"
                        >
                          <Image
                            src={projects?.image}
                            alt={projects?.title}
                            quality={"100"}
                            priority={true}
                            className="w-full h-full object-fill"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-20 -bottom-10">
            <CarouselPrevious
              className=" rounded-full text-white border border-lightSky/30
            hover:border-lightSky/50 hover:text-lightSky  duration-300"
            />
            <CarouselNext
              className=" rounded-full text-white border border-lightSky/30
            hover:border-lightSky/50 hover:text-lightSky  duration-300"
            />
          </div>
        </Carousel>
      </PageLayout>
    </div>
  );
};

export default WorkPage;
