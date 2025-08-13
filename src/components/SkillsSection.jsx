// src/components/SkillsSection.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  SiPython,
  SiNodedotjs,
  SiCplusplus,
  SiC,
  SiDjango,
  SiExpress,
  SiFlask,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiAngular,
  SiMysql,
  SiGit,
  SiDocker,
  SiNpm,
  SiTensorflow,
  SiScikitlearn,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiMongodb,
  SiCashapp,
  SiTailwindcss,
  SiScrumalliance,
} from "react-icons/si";

import { FaAws, FaJava, FaDatabase } from "react-icons/fa";
import { DiDotnet } from "react-icons/di";

const skillsData = {
  "Core Languages & Frameworks": [
    { name: "Java", icon: <FaJava size={28} className="text-red-500" /> },
    {
      name: "MongoDB",
      icon: <SiMongodb size={28} className="text-green-600" />,
    },
    { name: "Express.js", icon: <SiExpress size={28} /> },
    { name: "React.js", icon: <SiReact size={28} className="text-blue-500" /> },
    {
      name: "Node.js",
      icon: <SiNodedotjs size={28} className="text-green-500" />,
    },
    { name: "C#", icon: <DiDotnet size={28} className="text-blue-700" /> },
  ],
  "Frontend Development": [
    { name: "HTML", icon: <SiHtml5 size={28} className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 size={28} className="text-blue-600" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript size={28} className="text-yellow-400" />,
    },
    { name: "React.js", icon: <SiReact size={28} className="text-blue-500" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={28} className="text-teal-400" />,
    },
  ],
  "Backend Development": [
    { name: "Express.js", icon: <SiExpress size={28} /> },
    { name: ".Net", icon: <DiDotnet size={28} className="text-blue-700" /> },
  ],
  Databases: [
    {
      name: "SQL Server",
      icon: <FaDatabase size={28} className="text-blue-700" />,
    },
    { name: "MySQL", icon: <SiMysql size={28} className="text-blue-500" /> },
  ],
  "AI & Machine Learning": [
    {
      name: "TensorFlow/Keras",
      icon: <SiTensorflow size={28} className="text-orange-600" />,
    },
    {
      name: "Scikit-learn",
      icon: <SiScikitlearn size={28} className="text-orange-500" />,
    },
    { name: "OpenCV", icon: <SiOpencv size={28} /> },
    { name: "NumPy", icon: <SiNumpy size={28} className="text-blue-500" /> },
    {
      name: "Pandas",
      icon: <SiPandas size={28} className="text-indigo-800" />,
    },
  ],
  "DevOps & Tools": [
    { name: "Git", icon: <SiGit size={28} className="text-red-600" /> },
    { name: "Docker", icon: <SiDocker size={28} className="text-blue-500" /> },
    { name: "npm", icon: <SiNpm size={28} className="text-red-600" /> },
    { name: "AWS", icon: <FaAws size={28} className="text-orange-500" /> },
  ],
  Methodologies: [
    { name: "Agile", icon: null },
    { name: "Scrum", icon: null },
  ],
};

const categories = ["All", ...Object.keys(skillsData)];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const getFilteredSkills = () => {
    if (activeCategory === "All") {
      return Object.values(skillsData).flat();
    }
    return skillsData[activeCategory];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="Skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card/70 hover:bg-card"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-card/50 p-4 rounded-lg flex items-center gap-4 card-hover"
              >
                {skill.icon}
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
