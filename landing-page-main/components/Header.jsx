"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
const Header = () => {
  return (
    <header>
        <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <Highlight className="text-black dark:text-white">
          Researches and references
        </Highlight>
<div className="text-lg pt-10">
👋 Explore a curated collection of tutorials, articles, research papers, and external links related to Mechanism of Action (MoA) prediction. . {" "}

</div>
      </motion.h1>
    </HeroHighlight>
      {/* <div >
        <div className='text-3xl text-white'>Researches and references</div>
        <p className=' text-white text-lg mt-10'>👋 Explore a curated collection of tutorials, articles, research papers, and external links related to Mechanism of Action (MoA) prediction. . </p>
      </div> */}
    </header>
  )
}
export default Header ;