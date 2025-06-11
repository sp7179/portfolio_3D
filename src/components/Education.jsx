import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { educations } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

const EducationCard = ({ index, title, institution, date, points, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="flex items-start gap-5 relative z-10"
    >
      {/* Left timeline bullet */}
      <div className="w-6 h-6 bg-[#915EFF] rounded-full flex items-center justify-center text-white text-sm z-20">
        {icon}
      </div>

      {/* Vertical line */}
      <div className="absolute left-[11px] top-6 w-[2px] h-full bg-[#915EFF]/50" />

      {/* Card (with custom hover border only) */}
      <Tilt
        className="w-full"
        options={{
          max: 0,      // no tilt angle
          scale: 1,    // no zoom
          speed: 1000, // keep transition
        }}
      >
        <div className="bg-[#1d1836] p-5 rounded-xl shadow-lg border border-[#915EFF]/10 hover:border-[#915EFF] transition-colors duration-300">
          <h3 className="text-white text-xl font-bold">{title}</h3>
          <p className="text-secondary font-semibold mt-1">{institution}</p>
          <p className="text-sm text-gray-400">{date}</p>
          <ul className="mt-2 list-disc ml-5 text-white text-sm">
            {points.map((point, i) => (
              <li key={`point-${i}`}>{point}</li>
            ))}
          </ul>
        </div>
      </Tilt>
    </motion.div>
  );
};


const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Where I’ve Studied</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      <div className="mt-10 relative pl-10 border-l-2 border-[#915EFF]/30 space-y-10">
        {educations.map((edu, index) => (
          <EducationCard key={`edu-${index}`} index={index} {...edu} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
