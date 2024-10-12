"use client";
import React, { useState } from 'react';
import { projects } from '../../app/data';
import Link from 'next/link';

type Project = {
  img: string;
  head: string;
  text: string;
  href: string;
};

type ProjectsProps = {
  setActiveMenu: (index: number | null) => void;
};

const Projects: React.FC<ProjectsProps> = ({ setActiveMenu }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordionToggle = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className='relative mix-blend-difference z-10 text-white h-[80vh] w-full mt-[8rem]'>
      <h1 className='text-center text-4xl font-name mb-[4rem]'>Projects</h1>
      <ul onMouseLeave={() => { setActiveMenu(null); }} className='border-b'>
        {projects.map((project: Project, i: number) => (
          <li
            onMouseOver={() => { setActiveMenu(i); }}
            key={project.head}
            className='text-[4vw] p-5 border-t'
          >
            <button 
              onClick={() => handleAccordionToggle(i)}
              className='flex justify-between w-full items-center'>
              <span>{project.head}</span>
              <span className='text-3xl font-bold'>
                {activeIndex === i ? '-' : '+'}
              </span>
            </button>
            <div className={`grid md:mt-10 text-xl overflow-hidden transition-all duration-300 ease-in-out 
              ${activeIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className='overflow-hidden bg-black md:leading-[2.5rem] '>
                <div >
                  
                  <Link href={project.href} legacyBehavior>
                    <a
                      className='font-bold text-blue-600 font-name'
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h1 className='font-bold text-3xl hover:text-white'>Visite-website</h1>
                      
                    </a>
                  </Link>
                </div>                
                {project.text}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
