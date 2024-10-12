"use client";
import { useMotionValueEvent, useScroll, motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-90%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{ duration: 0.2 }}
      className='w-full *:cursor-pointer z-10 md:top-0 fixed sm:-top-0 flex justify-center pt-4'
    >
      <div className='relative flex backdrop-blur-sm text-white sm:gap-8 gap-4 p-3 border-2 rounded-3xl items-center justify-center  border-gray-200'>
        <Link className="hover:scale-110 transition-transform hover:font-bold" to="home" smooth={true} duration={500} onClick={() => setIsHidden(false)}>Home</Link>
        <Link className="hover:scale-110 transition-transform hover:font-bold" to="about" smooth={true} duration={500} onClick={() => setIsHidden(false)}>About</Link>
        <Link className="hover:scale-110 transition-transform hover:font-bold" to="projects" smooth={true} duration={500} onClick={() => setIsHidden(false)}>Projects</Link>
        <Link className="hover:scale-110 transition-transform hover:font-bold" to="stack" smooth={true} duration={500} onClick={() => setIsHidden(false)}>Stack</Link>
        <Link className="hover:scale-110 transition-transform hover:font-bold" to="resume" smooth={true} duration={500} onClick={() => setIsHidden(false)}>Resume</Link>
        <Link className="hover:scale-110 transition-transform hover:font-bold" to="contact" smooth={true} duration={500} onClick={() => setIsHidden(false)}>Contact</Link>
      </div>
    </motion.div>
  );
}

export default Nav;
