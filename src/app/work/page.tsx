"use client";
import {
  project_1,
  project_2,
  project_3,
  project_4,
  project_5,
  project_6,
  project_7,
} from "@/assets/images";
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
    title: "PeopleNTech Clone Project",
    category: "Frontend",
    description: `I developed a responsive website for PeopleNTech, a leader in skill development and job placement. The site showcases 70+ courses, 200+ mentors, and 10K+ successful students. Built with HTML, CSS, and React.js, it features a user-friendly design, responsive layout,
     and call-to-action buttons for better engagement.`,
    stack: ["React", "TailwindCss", "NextAuth", "Redux Toolkit", "ShadCn UI"],
    liveUrl: "https://peoplentech-masum.vercel.app/",
    githubUrl: "https://github.com/M-Shourav/Peoplentech_clone",
    image: project_5,
  },
  {
    id: "03",
    title: "Constructify Project",
    category: "Frontend",
    description: `An interactive weather forecast dashboard that provides real-time weather information and 5-day forecasts for multiple locations. Utilizes a third-party weather API.`,
    stack: ["React", "TailwindCss", "NextAuth", "Redux Toolkit", "Stripe"],
    liveUrl: "https://constructify-masum.vercel.app/",
    githubUrl: "https://github.com/M-Shourav/constructify.git",
    image: project_3,
  },
  {
    id: "04",
    title: "Personal Portfolio",
    category: "Full Stack development",
    description: `An interactive weather forecast dashboard that provides real-time weather information and 5-day forecasts for multiple locations. Utilizes a third-party weather API.`,
    stack: ["React", "TailwindCss", "NextAuth", "Redux Toolkit", "Stripe"],
    liveUrl: "https://masum-ahmed.vercel.app/",
    githubUrl: "https://github.com/M-Shourav/portfolio_yt.git",
    image: project_4,
  },
  {
    id: "05",
    title: "Amazon E-commerce project",
    category: "Frontend",
    description: `An interactive weather forecast dashboard that provides real-time weather information and 5-day forecasts for multiple locations. Utilizes a third-party weather API.`,
    stack: ["React", "TailwindCss", "NextAuth", "Redux Toolkit", "Stripe"],
    liveUrl: "https://amazon-clone-masum2.vercel.app/",
    githubUrl: "https://github.com/M-Shourav/amazon_cloneyt.git",
    image: project_2,
  },
  {
    id: "06",
    title: "Blue Berry E-commerce website",
    category: "Full Stack ",
    description:
      "Blue-Berry is a fully responsive e-commerce platform built with React 19 and Next.js 15. It features Sanity.io for efficient database management, Zustand for state management, and Clerk for secure authentication. Designed for seamless user experience, Blue-Berry ensures smooth navigation and scalability.",
    stack: ["React", "TailwindCss", "NextAuth", "Zustand", "Stripe", "clerk"],
    liveUrl: "https://blue-berry-yt.vercel.app",
    githubUrl: "https://github.com/M-Shourav/blue-berry_yt",
    image: project_7,
  },
  {
    id: "07",
    title: "Bloggers-Bd Blog website",
    category: "Full Stack ",
    description: `Bloggers is a fully responsive Blog platform built with React 19 and Next.js 15. It features Sanity.io for efficient database management and OAuth for secure authentication. Designed for seamless user experience, Blue-Berry ensures smooth navigation and scalability.`,
    stack: ["React", "NextJs 15", "TailwindCss", "NextAuth"],
    liveUrl: "https://blogers-bd.vercel.app",
    githubUrl: "https://github.com/M-Shourav/blogers",
    image: project_6,
  },
];

const WorkPage = () => {
  const handleSlideChange = (index: number) => {
    handleSlideChange(index);
  };
  return (
    <PageLayout className="w-full py-5 px-3 md:px-8 md:py-10 mb-10 clear-start">
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
              <Card className="bg-bodyColor border-lightSky/20 mt-10">
                <CardContent className="p-2">
                  <div
                    className="flex flex-col md:flex-row md:items-center
                     md:space-x-8 group"
                  >
                    {/* description */}
                    <div className="w-full  order-2 md:order-1 mb-8 md:mb-0">
                      <div className=" space-y-4 md:space-y-6 mt-4 md:mt-0">
                        <div className="flex items-center justify-between gap-5">
                          <h2
                            className="text-3xl md:text-6xl text-transparent text-outline
                             text-outline-hover leading-none font-extrabold"
                          >
                            {projects?.id}
                          </h2>
                          <div className="flex items-center gap-5">
                            <Link
                              href={projects?.liveUrl}
                              target="_blank"
                              className="w-8 h-8 md:w-10 md:h-10 hover:text-hoverColor duration-300
                            flex items-center justify-center border border-lightSky/20
                            hover:border-lightSky/50"
                            >
                              <span className="text-xl">
                                <MdOutlineArrowOutward />
                              </span>
                            </Link>
                            <Link
                              className="w-8 h-8 md:w-10 md:h-10 hover:text-hoverColor duration-300
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
                    </div>
                    {/* image */}
                    <div className="w-full order-1 md:order-2 mb-4 md:mb-0">
                      <Image
                        src={projects?.image}
                        alt={projects?.title}
                        quality={"100"}
                        priority={true}
                        className="w-full  object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute top-3 right-14">
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
  );
};

export default WorkPage;
