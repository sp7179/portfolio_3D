// src/components/Certificates.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "../constants";
import CertificateCard from "./CertificateCard";
import { SectionWrapper } from "../hoc";

const tabs = ["course", "achievements", "participation"];

const Certificates = () => {
  const [activeTab, setActiveTab] = useState("course");

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className="bg-tertiary rounded-t-[20px] px-6 py-5">
        <p className="text-secondary text-[17px]">My Verified</p>
        <h2 className="text-white text-[30px] font-bold">Certificates</h2>
      </div>

      <div className="px-6 py-5">
        {/* Tabs */}
        <div className="flex gap-5 justify-center mb-6">
          {tabs.map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`px-4 py-2 rounded-full transition-all duration-300 font-semibold capitalize ${
                activeTab === type
                  ? "bg-[#915EFF] text-white shadow-lg"
                  : "bg-gray-700 text-white/70 hover:bg-gray-600"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Animated Certificate Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="flex flex-wrap justify-center gap-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {certificates[activeTab].map((item, index) => (
              <CertificateCard key={index} index={index} {...item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, "certificates");
