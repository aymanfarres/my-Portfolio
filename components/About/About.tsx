import React from 'react'
import Character from "@/components/About/Character";

const About = () => {
  const paragraph= "I'm a front-end developer passionate about building responsive, visually appealing websites that prioritize user experience. With a focus on clean code and modern design, I transform concepts into dynamic, engaging web interfaces. Explore my projects to see how I bring creativity and functionality together to craft exceptional digital experiences."

  return (
    <div className='md:mx-20 '>
        <h1 className='font-name  text-center text-white mt-20 text-[2rem]  '>About Me</h1>
      <Character value={paragraph}  />
    </div>
  )
}

export default About
