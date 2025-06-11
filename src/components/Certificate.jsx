import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import CertificateCard from "./CertificateCard";

const categories = ["Courses", "Achievements", "Participation"];

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState("Courses");

  const filteredCertificates = certificates.filter(
    (cert) => cert.category === activeCategory
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Recognitions & Proof of Work</p>
        <h2 className={styles.sectionHeadText}>Certificates</h2>
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mt-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 
              ${activeCategory === cat 
                ? "bg-[#915EFF] text-white shadow-lg" 
                : "bg-[#1d1836] text-gray-400 hover:bg-[#2e225a] hover:text-white"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="mt-10 flex flex-wrap gap-6 justify-center bg-gradient-to-br from-[#1d1836] to-[#0f0c2f] p-8 rounded-xl shadow-2xl transition-all duration-700"
      >
        {filteredCertificates.length > 0 ? (
          filteredCertificates.map((cert, index) => (
            <CertificateCard key={`cert-${index}`} index={index} {...cert} />
          ))
        ) : (
          <p className="text-gray-400">No certificates available in this category.</p>
        )}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificate");
