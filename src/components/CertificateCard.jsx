import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const CertificateCard = ({ index, title, issuer, date, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Optional: ESC key to close the modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Certificate Card */}
      <Tilt options={{ max: 25, scale: 1.05, speed: 400 }} className="w-[250px] sm:w-[300px]">
        <motion.div
          className="bg-tertiary p-5 rounded-2xl min-h-[350px] flex flex-col items-center shadow-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
        >
          <img
            src={image}
            alt={title}
            onClick={() => setIsOpen(true)}
            className="w-full h-40 object-contain rounded-md mb-4 border border-white/10 cursor-pointer hover:scale-105 transition-transform"
          />
          <h3 className="text-white text-lg font-bold text-center">{title}</h3>
          <p className="text-secondary text-sm text-center mt-1">{issuer}</p>
          <p className="text-xs text-gray-400 text-center mt-1">{date}</p>
        </motion.div>
      </Tilt>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={image}
            alt={title}
            className="max-w-[90vw] max-h-[90vh] object-contain pointer-events-none select-none rounded-lg shadow-2xl"
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />
        </div>
      )}
    </>
  );
};

export default CertificateCard;
