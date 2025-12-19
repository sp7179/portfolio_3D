import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import profileImg from "../assets/sp7179.png";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    glareEnable={true}
    glareMaxOpacity={0.45}
    scale={1.05}
    transitionSpeed={250}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-4 flex flex-col-reverse md:flex-row items-center gap-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm a passionate software developer with experience in Python, Java, and
          JavaScript, skilled in frameworks like React, Node.js, and Express. I
          specialize in backend systems, AI tools, and full-stack applications,
          with a strong foundation in Data Structures & Algorithms. I'm a fast
          learner who loves solving real-world problems through clean, scalable
          code. Let's build something impactful together!
        </motion.p>

        {/* Profile Image */}

        <div className="w-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 14,
            }}
            className="relative w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] lg:w-[220px] lg:h-[220px] cursor-pointer"
          >
            <img
              src={profileImg}
              alt="profile"
              className="w-full h-full object-cover rounded-full border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
            />
          </motion.div>
        </div>


      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(About, "about");
