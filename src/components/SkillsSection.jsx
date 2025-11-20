import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  SiPython,
  SiSpring,
  SiSpringboot,
  SiHibernate,
  SiApachemaven,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMysql,
  SiGit,
  SiDocker,
  SiTensorflow,
  SiOpencv,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiPostman,
  SiGithubactions,
} from "react-icons/si";

import { FaJava, FaDatabase, FaAws } from "react-icons/fa";

const skillsData = {
  "Java Ecosystem": [
    { name: "Java 21", icon: <FaJava size={28} className="text-red-500" /> },
    { name: "Spring Boot 3", icon: <SiSpringboot size={28} className="text-green-500" /> },
    { name: "Spring AI", icon: <SiSpring size={28} className="text-green-600" /> },
    { name: "Spring Security", icon: <SiSpring size={28} className="text-green-700" /> },
    { name: "Hibernate/JPA", icon: <SiHibernate size={28} className="text-gray-400" /> },
    { name: "Maven", icon: <SiApachemaven size={28} className="text-red-600" /> },
  ],
  "Frontend": [
    { name: "React 19", icon: <SiReact size={28} className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={28} className="text-teal-400" /> },
    { name: "JavaScript", icon: <SiJavascript size={28} className="text-yellow-400" /> },
    { name: "HTML5", icon: <SiHtml5 size={28} className="text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 size={28} className="text-blue-600" /> },
  ],
  "Databases": [
    { name: "MySQL", icon: <SiMysql size={28} className="text-blue-500" /> },
    { name: "SQL Server", icon: <FaDatabase size={28} className="text-red-600" /> },
    { name: "MongoDB", icon: <SiMongodb size={28} className="text-green-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={28} className="text-blue-400" /> },
  ],
  "DevOps & Tools": [
    { name: "Docker", icon: <SiDocker size={28} className="text-blue-500" /> },
    { name: "Git", icon: <SiGit size={28} className="text-red-600" /> },
    { name: "GitHub Actions", icon: <SiGithubactions size={28} className="text-blue-600" /> },
    { name: "AWS", icon: <FaAws size={28} className="text-orange-500" /> },
    { name: "Postman", icon: <SiPostman size={28} className="text-orange-500" /> },
  ],
  "AI & Data": [
    { name: "OpenAI API", icon: <SiOpencv size={28} className="text-green-500" /> }, // Using OpenCV icon as placeholder or generic
    { name: "Python", icon: <SiPython size={28} className="text-blue-500" /> },
    { name: "TensorFlow", icon: <SiTensorflow size={28} className="text-orange-600" /> },
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
          Technical <span className="text-primary">Skills</span>
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
                <span className="font-medium text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
