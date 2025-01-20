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
        role: "Career Objective",
        description: `Passionate and skilled MERN stack developer with a
        strong foundation in MongoDB, Express.js, React, and
        Node.js. Seeking to leverage my expertise in full-stack
        development to contribute to innovative projects and
        drive success at a forward-thinking organization.
        Committed to delivering high-quality, scalable web
        applications and continuously enhancing my technical skills.`,
        highlights: [],
      },
    ],
  },
  education: {
    title: "Educational Background",
    items: [
      {
        degree: "MERN Stack Development Course",
        institute: "PeopleNTech IT Institute ",
        period: "2024-Present",
        description: `I have successfully completed the frontend part of 
        the MERN stack development course at PeopleNTech, where I gained 
        hands-on experience with React.js, HTML, CSS, and JavaScript. 
        The course focused on building responsive and dynamic user 
        interfaces, enhancing my skills in modern frontend technologies. 
        I am now equipped to develop seamless, interactive web applications 
        with a strong focus on user experience.`,
        achievement: [
          "React.js",
          "Responsive Web Design",
          "UI/UX Design",
          "Frontend Project Development",
        ],
      },
      {
        degree: "Diploma In Engineering",
        institute: "Dinajpur Polytechnic Institute ",
        period: "2020-2024",
        description:
          "I am completing my Diploma in Computer Science from Dinajpur Polytechnic, where I have gained a strong foundation in programming, networking, and computer systems. The program has equipped me with essential technical skills to tackle various challenges in the IT field. I am passionate about applying my knowledge to real-world projects and further advancing my career in technology.",
        achievement: [
          "Web Development Skills",
          "Technological Problem Solving",
          "Team Collaboration",
        ],
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    items: [
      {
        role: "Frontend Development",
        des: "I have developed strong skills in frontend development, focusing on React.js, HTML, CSS, and JavaScript to build dynamic and responsive user interfaces. I have gained hands-on experience in creating seamless, mobile-friendly websites with an emphasis on user experience. My projects showcase my ability to transform design concepts into functional, interactive web applications.",
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
        des: "I have gained foundational knowledge in backend development using Node.js and Express.js, focusing on building RESTful APIs and handling server-side logic. I have learned to manage databases with MongoDB, ensuring efficient data storage and retrieval. My backend skills allow me to create dynamic, scalable web applications that integrate seamlessly with the frontend.",
        skills: ["Node.js", "MongoDB", "Express", "AWS", "Schema"],
      },
      {
        role: "Tools & Others",
        des: "I have gained proficiency in using various development tools and technologies to streamline my workflow. I am skilled in version control with Git and GitHub for collaborative projects, and I use Visual Studio Code for efficient coding. Additionally, I have experience with Postman for API testing, and I am familiar with tools like npm, Webpack, and Docker to optimize development and deployment processes.",
        skills: [
          "Git",
          "Github",
          "Vs.Code",
          "Npm/Yarn",
          "Vercel",
          "Figma",
          "Canva",
        ],
      },
    ],
  },
  about: {
    title: "About Me",
    bio: "I am a passionate MERN stack developer with a strong focus on frontend development. With hands-on experience in React.js, HTML, CSS, and JavaScript, I create dynamic and responsive web applications. I am constantly learning and improving my skills, aiming to build efficient, scalable, and user-friendly solutions for real-world problems",
    Interests: [
      "Open Source Contributing",
      "Tech Blogging",
      "UI/UX Design",
      "Machine Learning",
    ],
    Languages: ["English (Intermediate)", "Bangla (Native)", "Hindi (Basic)"],
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
            className="w-full h-full md:w-[300px] md:min-h-[43vh]
          grid grid-cols-2 md:grid-cols-1 items-center gap-5"
          >
            {tabsMenu?.map((item) => (
              <TabsTrigger
                key={item?.title}
                value={item?.value}
                className="w-full py-2.5 text-sm md:text-base flex
                 flex-col items-center md:items-start md:px-24
                 bg-white/10 hover:bg-lightSky/20 duration-300
                data-[state=active]:bg-lightSky rounded-md
                 data-[state=active]:text-black"
              >
                <div className="flex items-center justify-center gap-1 md:gap-3">
                  <span className="text-lg">{item?.icon}</span>
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
                    className=" border border-lightSky/20 rounded-xl
                  p-6"
                  >
                    <div className="w-full flex flex-col md:flex-row items-center gap-4 justify-between mb-4">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">{item?.role}</h3>
                        <p className="text-gray-400">{item?.company}</p>
                      </div>

                      <div className="flex items-center gap-2 text-gray-400">
                        <span>
                          <FaCalendarAlt />
                        </span>
                        <p>{item?.period}</p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base mb-4 text-white/90 leading-7 tracking-wide">
                      {item?.description}
                    </p>
                    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3">
                      {item?.highlights.map((item, index) => (
                        <div
                          className="w-full flex items-center justify-center py-1.5 bg-white/80 text-bodyColor rounded-xl
                           text-xs md:text-sm font-semibold"
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
                className="text-xl md:text-2xl mb-6 font-semibold tracking-wide text-lightSky/90"
              >
                {tabContent?.education.title}
              </motion.h2>
              <div className="space-y-6 w-full">
                {tabContent?.education.items.map((item, index) => (
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
                    className=" border border-lightSky/20 rounded-xl
                  p-6"
                  >
                    <div className="w-full flex flex-col md:flex-row items-center gap-4 justify-between mb-4">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">
                          {item?.degree}
                        </h3>
                        <p className="text-gray-400">{item?.institute}</p>
                      </div>

                      <div className="flex items-center gap-2 text-gray-400">
                        <span>
                          <FaCalendarAlt />
                        </span>
                        <p>{item?.period}</p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base mb-4 text-white/90 leading-7 tracking-wide">
                      {item?.description}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {item?.achievement.map((item, index) => (
                        <div
                          className="p-2 flex items-center justify-center py-1.5 bg-white/80 text-bodyColor rounded-xl
                           text-xs md:text-sm font-semibold"
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
                className="text-xl md:text-2xl mb-6 font-semibold tracking-wide text-lightSky/90"
              >
                {tabContent?.skills.title}
              </motion.h2>
              <div className="space-y-6 w-full">
                {tabContent?.skills.items.map((item, index) => (
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
                    className=" border border-lightSky/20 rounded-xl
                  p-6"
                  >
                    <div className="w-full flex flex-col md:flex-row items-center gap-4 justify-between mb-4">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">{item?.role}</h3>
                        <p className="text-gray-400">{item?.des}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                      {item?.skills.map((item, index) => (
                        <div
                          className="p-2 flex items-center justify-center py-1.5 bg-white/80 text-bodyColor rounded-xl
                           text-xs md:text-sm font-semibold"
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
                className="text-xl mb-6 md:text-2xl font-semibold tracking-wide text-lightSky/90"
              >
                {tabContent?.about.title}
              </motion.h2>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="border border-lightSky/20 rounded-xl p-6"
              >
                <div className="flex flex-col gap-y-3">
                  <p className="text-base md:text-lg text-gray-400 tracking-wider leading-7">
                    {tabContent?.about.bio}
                  </p>
                  <div className="flex flex-col gap-y-2">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      Interests
                    </h3>
                    <div className="grid grid-cols-2  md:grid-cols-3 items-center gap-2">
                      {tabContent?.about.Interests.map((item, index) => (
                        <div
                          key={index}
                          className="text-xs md:text-sm font-semibold bg-white/80 text-bodyColor flex 
                        items-center justify-center py-1.5 rounded-xl"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2 mt-3">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      Languages
                    </h3>
                    <div className="grid grid-cols-2  md:grid-cols-3 items-center gap-2">
                      {tabContent?.about.Languages.map((item, index) => (
                        <div
                          key={index}
                          className="text-xs md:text-sm font-semibold bg-white/80 text-bodyColor flex 
                        items-center justify-center py-1.5 rounded-xl"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </PageLayout>
    </div>
  );
};

export default ResumePage;
