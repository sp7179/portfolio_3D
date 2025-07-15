import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { FaRegStickyNote } from "react-icons/fa"; // React notepad icon
import certificateIcon from "../assets/certificate logo.png"; // ✅ Adjust path if needed

const ExperienceCard = ({ experience }) => {
  const handleCertificateClick = () => {
    if (experience.certificateImage) {
      window.open(experience.certificateImage, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] rounded-full object-cover"
          />
        </div>
      }
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
          <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
            {experience.company_name}
          </p>
        </div>

        {experience.certificateImage && (
          <button
            onClick={handleCertificateClick}
            className="ml-4 p-2 rounded-full transition duration-300 transform hover:scale-110 shadow-md hover:shadow-glow bg-[#2f2f2f] hover:bg-[#3f3f3f]"
            title="View Certificate"
          >
            <img
              src={certificateIcon}
              alt="certificate icon"
              className="w-6 h-6 rounded-full object-cover"
            />
          </button>
        )}
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
