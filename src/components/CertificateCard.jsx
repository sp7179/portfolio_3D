// src/components/CertificateCard.jsx
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const tiltOptions = {
  max: 25,
  scale: 1.05,
  speed: 400,
};

const CertificateCard = ({ index, title, issuer, date, image, link }) => (
  <Tilt options={tiltOptions} className="w-[250px] sm:w-[300px]">
    <motion.div
      className="bg-tertiary p-5 rounded-2xl min-h-[350px] flex flex-col items-center shadow-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
    >
      {/* Certificate Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-contain rounded-md mb-4 border border-white/10"
      />

      {/* Certificate Title */}
      <h3 className="text-white text-lg font-bold text-center">{title}</h3>

      {/* Issuer & Date */}
      <p className="text-secondary text-sm text-center mt-1">{issuer}</p>
      <p className="text-xs text-gray-400 text-center mt-1">{date}</p>

      {/* View Certificate Link */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-blue-400 underline text-sm hover:text-blue-300 transition"
        >
          View Certificate
        </a>
      )}
    </motion.div>
  </Tilt>
);

export default CertificateCard;
