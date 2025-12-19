import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { ChevronLeft, ChevronRight, AlertCircleIcon } from "lucide-react";

const categories = ["Courses", "Achievements", "Participation"];

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState("Courses");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredCertificates = certificates.filter(
    (cert) => cert.category === activeCategory
  );

  const currentCert = filteredCertificates[currentIndex];

  const handleNext = () => {
    if (currentIndex < filteredCertificates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

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
            onClick={() => {
              setActiveCategory(cat);
              setCurrentIndex(0);
            }}
            className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 
              ${
                activeCategory === cat
                  ? "bg-[#915EFF] text-white shadow-lg"
                  : "bg-[#1d1836] text-gray-400 hover:bg-[#2e225a] hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Redesigned Layout */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="mt-10 bg-gradient-to-br from-[#1d1836] to-[#0f0c2f] p-8 rounded-xl shadow-2xl flex flex-col gap-6"
      >
        {currentCert ? (
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left - Details */}
            <div className="flex-1 space-y-3 text-left text-white">
              <h3 className="text-3xl font-extrabold text-purple-400 drop-shadow-md">
                {currentCert.title}
              </h3>
              <p className="text-lg text-secondary font-medium">
                {currentCert.issuer}
              </p>
              <p className="text-sm text-gray-400 italic">{currentCert.date}</p>
              {currentCert.description && (
                <p className="text-sm text-gray-300 pt-2 leading-relaxed max-w-md">
                  {currentCert.description}
                </p>
              )}
            </div>

            {/* Right - Image with arrows */}
            <div className="relative flex-1 flex items-center justify-center">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="group absolute left-[-50px] bg-[#915EFF] p-2 rounded-full text-white shadow-lg hover:scale-110 transition disabled:opacity-30"
              >
                <ChevronLeft size={28} />
                {currentIndex === 0 && (
                  <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-red-500 group-hover:opacity-100 opacity-0 transition-opacity">
                    <AlertCircleIcon size={25} className="inline-block mr-1 mt-20" />{" "}
                    No previous
                  </span>
                )}
              </button>

              <img
                src={currentCert.image}
                alt={currentCert.title}
                className="mr-6 width w-full max-w-[500px] max-h-[360px] object-contain border-4 border-purple-500/40 rounded-2xl shadow-[0_10px_25px_rgba(145,94,255,0.4)] cursor-pointer transform transition-transform duration-500 hover:scale-[1.07] hover:-translate-y-2"
                onClick={() => window.open(currentCert.image, "_blank")}
              />

              <button
                onClick={handleNext}
                disabled={currentIndex === filteredCertificates.length - 1}
                className="group absolute right-[-25px] bg-[#915EFF] p-2 rounded-full text-white shadow-lg hover:scale-110 transition disabled:opacity-30"
              >
                <ChevronRight size={28} />
                {currentIndex === filteredCertificates.length - 1 && (
                  <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-red-500 group-hover:opacity-100 opacity-0 transition-opacity">
                    <AlertCircleIcon size={25} className="inline-block mr-1 mt-20" />{" "}
                    No more
                  </span>
                )}
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-400">
            No certificates available in this category.
          </p>
        )}

        {/* Index Info */}
        <div className="text-center text-sm text-gray-400 mt-6">
          Showing {currentIndex + 1} of {filteredCertificates.length} in "
          {activeCategory}"
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificate");
