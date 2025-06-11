import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { skills } from "../constants";
import { FaCode, FaCogs, FaTools } from "react-icons/fa";

const icons = {
  "Languages & Databases": <FaCode className="text-purple-400 text-2xl mb-3" />,
  "Frameworks & Technologies": <FaCogs className="text-purple-400 text-2xl mb-3" />,
  "Additional Tools & Libraries": <FaTools className="text-purple-400 text-2xl mb-3" />,
};

const SkillBubble = ({ text }) => (
  <div className="px-4 py-2 m-2 rounded-full bg-gradient-to-br from-purple-600 to-violet-700 text-white text-sm shadow-lg animate-float border-2 border-transparent hover:border-purple-300 transition duration-300">
    {text}
  </div>
);

const SkillBox = ({ title, items, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="bg-gradient-to-b from-[#1d1836] to-[#2c2352] border-2 border-[#915EFF]/20 p-6 rounded-2xl shadow-2xl flex flex-col items-center relative overflow-hidden hover:shadow-purple-700/50 transition duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 to-indigo-800/5 blur-lg opacity-60 animate-pulse" />
    <div className="relative z-10">
      {icons[title]}
      <h3 className="text-white text-lg font-bold mb-4 text-center">{title}</h3>
      <div className="flex flex-wrap justify-center">
        {items.map((item, idx) => (
          <SkillBubble key={idx} text={item} />
        ))}
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Toolbox</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((section, index) => (
          <SkillBox key={index} index={index} {...section} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
