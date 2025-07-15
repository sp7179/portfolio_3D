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

        {/* Pentagon Image */}
        <motion.div
          whileHover={{
            scale: 1.05,
            rotate: [0, -1.5, 1.5, -1.5, 0],
            boxShadow: "0 0 25px 5px rgba(165, 105, 255, 0.5)",
          }}
          transition={{ duration: 0.5 }}
          className="relative w-[220px] h-[220px] cursor-pointer group"
        >
          <div className="absolute inset-0 rounded-[10%] z-0 blur-lg bg-purple-500 opacity-20 group-hover:animate-pulse pointer-events-none" />
          <img
            src={profileImg}
            alt="profile"
            className="w-full h-full object-cover rounded-full border-4 border-purple-500 shadow-lg transition-all duration-500"
          />
        </motion.div>
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
