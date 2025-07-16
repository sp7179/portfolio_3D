import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {isMobile ? (
            <img
              src={`/Techs/${technology.name.toLowerCase().replace(/\s+/g, "")}.png`}
              alt={technology.name}
              className='w-full h-full object-contain'
            />
          ) : (
            <BallCanvas icon={`/Techs/${technology.name.toLowerCase().replace(/\s+/g, "")}.png`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
