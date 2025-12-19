import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { skills } from "../constants";
import { FaCode, FaCogs, FaTools, FaServer } from "react-icons/fa";

const icons = {
  "Languages & Databases": <FaCode className="text-purple-400 text-2xl mb-3" />,
  "Frameworks & Technologies": <FaCogs className="text-purple-400 text-2xl mb-3" />,
  "Additional Tools & Libraries": <FaTools className="text-purple-400 text-2xl mb-3" />,
  "Runtime & Deployment": <FaServer className="text-purple-400 text-2xl mb-3" />,
};

const SkillBubble = ({ text }) => (
  <div className="px-4 py-2 m-2 rounded-full bg-gradient-to-br from-purple-600 to-violet-700 text-white text-sm shadow-lg">
    {text}
  </div>
);

const SkillBox = ({ title, items, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="bg-gradient-to-b from-[#1d1836] to-[#2c2352] border-2 border-[#915EFF]/20 p-6 rounded-2xl shadow-2xl flex flex-col items-center"
  >
    {icons[title]}
    <h3 className="text-white text-lg font-bold mb-4 text-center">{title}</h3>
    <div className="flex flex-wrap justify-center">
      {items.map((item, idx) => (
        <SkillBubble key={idx} text={item} />
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    setIsMobile(mq.matches);
    mq.addEventListener("change", (e) => setIsMobile(e.matches));
  }, []);

  const itemsPerView = isMobile ? 1 : 2;
  const totalPages = Math.ceil(skills.length / itemsPerView);

  const visibleSkills = skills.slice(
    index * itemsPerView,
    index * itemsPerView + itemsPerView
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Toolbox</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      {/* Slider */}
      <div className="relative mt-12 overflow-hidden min-h-[320px] px-16">

        <motion.div
          initial={{ x: direction * 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-10"
        >
          {visibleSkills.map((section, i) => (
            <SkillBox key={i} index={i} {...section} />
          ))}
        </motion.div>

        {/* LEFT ARROW */}
        {index > 0 && (
          <motion.button
            onClick={() => {
              setDirection(-1);
              setIndex(index - 1);
            }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-4 top-1/2 -translate-y-1/2
                       w-12 h-12 rounded-full bg-purple-700/20 backdrop-blur
                       flex items-center justify-center shadow-lg"
          >
            <img
              src="/arrow.png"
              alt="left"
              className="w-8 h-8 rotate-180 rounded-full"
            />
          </motion.button>
        )}

        {/* RIGHT ARROW */}
        {index < totalPages - 1 && (
          <motion.button
            onClick={() => {
              setDirection(1);
              setIndex(index + 1);
            }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-4 top-1/2 -translate-y-1/2
                       w-12 h-12 rounded-full bg-purple-700/20 backdrop-blur
                       flex items-center justify-center shadow-lg"
          >
            <img
              src="/arrow.png"
              alt="right"
              className="w-8 h-8 rounded-full"
            />
          </motion.button>
        )}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-purple-500" : "w-2 bg-purple-500/40"
              }`}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
