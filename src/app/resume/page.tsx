"use client";
import PageLayout from "@/components/PageLayout";
import { IoBagOutline, IoCodeSlashOutline } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import { FiUser } from "react-icons/fi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
const tabsMenu = [
  { title: "Experience", value: "experience", icon: <IoBagOutline /> },
  { title: "Education", value: "education", icon: <GiGraduateCap /> },
  { title: "Skills", value: "skills", icon: <IoCodeSlashOutline /> },
  { title: "About Me", value: "about", icon: <FiUser /> },
];
const tabContent = {
  experience: {
    title: "Professional Experience",
    items: [
      {
        role: " Frontend Developer",
        company: "Tech Solution Inc",
        period: "2021-present",
        description:
          "Led the development of multiple React-based web applications, improving performance by 40%. Mentored junior developers and implemented best practices for code quality.",
        highlights: ["React", "Next.js", "TypeScript", "Team LeaderShip"],
      },
      {
        role: " Full Stack Developer",
        company: "Digital Innovations Ltd",
        period: "2018-2021",
        description:
          "Developed and maintained full-stack applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality solutions.",
        highlights: ["Node.js", "React", "MongoDB", "AWS"],
      },
    ],
  },
  education: {
    title: "Educational Background",
    items: [
      {
        degree: "Diploma In Engineering",
        institute: "Dinajpur Polytechnic Institute ",
        period: "2020-2024",
        description:
          "Specialized in Software Engineering and Artificial Intelligence. Graduated with honors.",
        achievement: ["3.70 Cgpa", "Research Publication", "Dean's List"],
      },
      {
        degree: "Secondary School Certificate",
        institute: "Chilahati Merchant&#39;s High School ",
        period: "2015-2020",
        description:
          "Foundation in computer science principles, data structures, and algorithms.",
        achievement: [
          "4.72 Gpa",
          "Academic Excellence Award",
          "Programming Club Lead",
        ],
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    items: [
      {
        role: "Frontend Development",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, distinctio. Quas fugiat nesciunt ipsum. Voluptatem inventore iste labore, similique quod laudantium rerum dolor, impedit voluptas distinctio praesentium quibusdam veniam tempore. Laudantium repellendus possimus adipisci maxime.",
        skills: [
          "React",
          "Next.js",
          "TailwindCss",
          "TypeScript",
          "Framer Motion",
        ],
      },
      {
        role: "Backend Development",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, distinctio. Quas fugiat nesciunt ipsum. Voluptatem inventore iste labore, similique quod laudantium rerum dolor, impedit voluptas distinctio praesentium quibusdam veniam tempore. Laudantium repellendus possimus adipisci maxime.",
        skills: ["Node.js", "MongoDB", "Express", "AWS", "Schema"],
      },
    ],
  },
  about: {
    title: "About Me",
    bio: "Passionate software developer with over 5 years of experience in building modern web applications. Committed to writing clean, maintainable code and staying current with emerging technologies. Strong advocate for user-centric design and accessibility.",
    Interests: [
      "Open Source Contributing",
      "Tech Blogging",
      "UI/UX Design",
      "Machine Learning",
    ],
    Languages: ["English (Intermediate)", "Bangla (Native)", "German (Basic)"],
  },
};
const ResumePage = () => {
  return (
    <div className="flex flex-col justify-center py-10">
      <PageLayout>
        <Tabs
          defaultValue="experience"
          className="flex flex-col md:flex-row  gap-5"
        >
          <TabsList
            className="w-full md:w-[300px] md:min-h-[43vh] flex flex-row 
          md:flex-col items-start gap-4"
          >
            {tabsMenu?.map((item) => (
              <TabsTrigger
                key={item?.title}
                value={item?.value}
                className="w-full py-2.5 text-xs md:text-base flex flex-col items-start md:px-24 bg-white/10 hover:bg-lightSky/20 duration-300
                data-[state=active]:bg-lightSky data-[state=active]:text-black"
              >
                <div className="flex items-center gap-1 md:gap-3">
                  <span className="">{item?.icon}</span>
                  {item?.title}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex-1">
            {/*  experience*/}
            <TabsContent value="experience">
              <motion.h2
                initial={{ y: 10, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                  },
                }}
                className="text-xl md:text-2xl mb-6 font-semibold tracking-wide text-lightSky/90"
              >
                {tabContent?.experience.title}
              </motion.h2>
              <div className="space-y-6 w-full">
                {tabContent?.experience.items.map((item, index) => (
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                      },
                    }}
                    key={index}
                    className="border border-lightSky/20 rounded-xl
                  p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">{item?.role}</h3>
                        <p className="text-gray-400">{item?.company}</p>
                      </div>

                      <div className="flex items-center gap-1 text-gray-400">
                        <span>
                          <FaCalendarAlt />
                        </span>
                        <p>{item?.period}</p>
                      </div>
                    </div>
                    <p className="text-base mb-4 text-white/90 leading-7 tracking-wide">
                      {item?.description}
                    </p>
                    <div className="flex items-center gap-3">
                      {item?.highlights.map((item, index) => (
                        <div
                          className="bg-white/80 text-bodyColor rounded-full
                           text-xs py-1.5 px-2.5 text-center  font-semibold"
                          key={index}
                        >
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            {/*  education*/}
            <TabsContent value="education">
              <motion.h2
                initial={{ y: 10, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                  },
                }}
                className="text-xl md:text-2xl font-semibold tracking-wide text-lightSky/90"
              >
                {tabContent?.education.title}
              </motion.h2>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills">
              <motion.h2
                initial={{ y: 10, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                  },
                }}
                className="text-xl md:text-2xl font-semibold tracking-wide text-lightSky/90"
              >
                {tabContent?.skills.title}
              </motion.h2>
            </TabsContent>
            {/* about */}
            <TabsContent value="about">
              <motion.h2
                initial={{ y: 10, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                  },
                }}
                className="text-xl md:text-2xl font-semibold tracking-wide text-lightSky/90"
              >
                {tabContent?.about.title}
              </motion.h2>
            </TabsContent>
          </div>
        </Tabs>
      </PageLayout>
    </div>
  );
};

export default ResumePage;
