"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import GlassmorphicCard from "./GlassmorphicCard";

const AboutSection = () => (
  <section id="about" className="mb-16 text-xl">
    <GlassmorphicCard>
      <div className="flex flex-col md:flex-row items-center gap-8 p-8">
        <motion.img
          src="assets/me.png"
          alt="Pema Wangchuk"
          className="rounded-full w-48 h-48 object-cover"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.5 }}
        />
        <div className="text-xl capitalize text-justify">
          <motion.h2
            className="relative font-bold mb-4 text-3xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hi There, I am Pema Wangchuk,
            <br />
            <span>
              <TypeAnimation
                sequence={[
                  "Blockchain Developer",
                  1000,
                  "Bitcoin Historian",
                  1000,
                  "NextJS Educationist",
                  1000,
                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
              />
            </span>
          </motion.h2>
          <motion.p
            className="mb-4 font-sans font-extrabold text-2xl bg-gradient-to-r from-green-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            With 5+ years of experience in crafting elegant, efficient, and
            user-centric web applications. Passionate about clean code,
            performance optimization, and creating seamless user experiences.
          </motion.p>
          <Button
            variant="outline"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-green-500 to-pink-500 group-hover:from-green-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-green-800"
          >
            <span className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xl">
              Download CV
            </span>
          </Button>
        </div>
      </div>
    </GlassmorphicCard>
  </section>
);

export default AboutSection;
