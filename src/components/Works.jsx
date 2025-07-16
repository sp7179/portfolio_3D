import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  position,
}) => {
  const positionStyles = {
    center: "scale-100 opacity-100 z-30",
    left: "scale-90 opacity-40 z-10 blur-[1px]",
    right: "scale-90 opacity-40 z-10 blur-[1px]",
    hidden: "hidden",
  };

  return (
    <motion.div
      className={`transition-all duration-500 ease-in-out transform cursor-pointer ${positionStyles[position]}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.05}
        transitionSpeed={250}
        options={{ max: 45, scale: 1, speed: 450 }}
        className={`bg-tertiary p-5 rounded-2xl w-[280px] md:w-[360px] h-[560px] flex flex-col justify-between 
        ${position !== "center" ? "pointer-events-none select-none overflow-hidden" : ""}`}
      >
        {/* Project Image */}
        <div className="relative w-full h-[200px] md:h-[220px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={(e) => {
                if (position !== "center") return;
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className={`black-gradient w-10 h-10 rounded-full flex justify-center items-center 
              ${position !== "center" ? "cursor-not-allowed opacity-40" : "cursor-pointer"}`}
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Project Title + Description */}
        <div
          className={`mt-4 flex-1 pr-1 ${
            position === "center" ? "overflow-auto" : "overflow-hidden"
          }`}
        >
          <h3 className="text-white font-bold text-[22px]">{name}</h3>
          <motion.ul
            className="mt-2 list-disc list-inside text-secondary text-[14px] space-y-1"
            initial={position === "center" ? "hidden" : false}
            animate={position === "center" ? "visible" : false}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {description.map((point, idx) => (
              <motion.li
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};


const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < projects.length - 1;

  const next = () => {
    if (hasNext) setCurrentIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (hasPrev) setCurrentIndex((prev) => prev - 1);
  };

  const getPosition = (index) => {
    if (isMobile) {
      return index === currentIndex ? "center" : "hidden";
    } else {
      if (index === currentIndex) return "center";
      if (index === currentIndex - 1) return "left";
      if (index === currentIndex + 1) return "right";
      return "hidden";
    }
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world
          examples. Each project includes links to source code and a description of
          the technologies used. They reflect my ability to build, solve, and
          execute effectively.
        </motion.p>
      </div>

      {/* Project Carousel */}
      <div className="mt-12 relative w-full max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-center">
        {/* Left Arrow */}
        <div className="absolute left-[-20px] md:left-[-40px]">
          <button
            onClick={prev}
            disabled={!hasPrev}
            className="group bg-[#915EFF] text-white p-3 rounded-full shadow-lg hover:scale-110 transition disabled:opacity-30"
          >
            <ChevronLeft size={28} />
            {!hasPrev && (
              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-red-500 group-hover:opacity-100 opacity-0 transition-opacity">
                <AlertCircle className="inline-block mr-1" size={18} /> No previous
              </span>
            )}
          </button>
        </div>

        {/* Cards */}
        <div
          className={`flex ${isMobile ? "justify-center w-full" : "justify-center gap-4"
            } items-center h-[620px] overflow-hidden`}
        >
          {projects.map((project, index) => {
            const position = getPosition(index);
            return (
              <div
                key={`project-${index}`}
                onClick={() => setCurrentIndex(index)}
              >
                <ProjectCard index={index} {...project} position={position} />
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <div className="absolute right-[-20px] md:right-[-40px]">
          <button
            onClick={next}
            disabled={!hasNext}
            className="group bg-[#915EFF] text-white p-3 rounded-full shadow-lg hover:scale-110 transition disabled:opacity-30"
          >
            <ChevronRight size={28} />
            {!hasNext && (
              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-red-500 group-hover:opacity-100 opacity-0 transition-opacity">
                <AlertCircle className="inline-block mr-1" size={18} /> No more
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-6">
        Showing {currentIndex + 1} of {projects.length} projects
      </div>
    </>
  );
};



export default SectionWrapper(Works, "");
