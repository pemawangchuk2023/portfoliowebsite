"use client";

import React from "react";
import { motion } from "framer-motion";
import GlassmorphicCard from "./GlassmorphicCard";
import { achievements } from "@/constants";
import Image from "next/image";

const AchievementsSection = () => (
  <section id="achievements" className="mb-16">
    <h2 className="text-3xl font-bold mb-4 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-400 via-sky-600 to-purple-800 bg-clip-text text-transparent">
      Achievements
    </h2>
    <div className="grid md:grid-cols-2 gap-4 text-xl">
      {/* Left Side: Achievements with Trophy Image */}
      <div className="relative flex items-center h-full">
        <div className="mr-8 flex-shrink-0">
          <Image
            src="/assets/projects/achievement.png"
            alt="Trophy"
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
        <div className="relative flex-grow">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative mb-8 flex items-center"
            >
              <div className="w-4 h-4 rounded-full bg-teal-500 mr-4 flex-shrink-0"></div>
              <GlassmorphicCard className="flex-shrink-0 max-w-md">
                <div className="p-4">
                  <p className="bg-gradient-to-r from-green-400 via-red-500 to-blue-500 bg-clip-text text-transparent dark:from-green-300 dark:via-red-400 dark:to-blue-400">
                    {achievement}
                  </p>
                </div>
              </GlassmorphicCard>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Right Side: MERN Stack Display with Rotation */}
      <div className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-lg shadow-[6px_6px_73px_74px_rgba(72,_252,_70,_0.33)]">
        <h3 className="text-3xl font-bold text-emerald-400 mb-4">MERN STACK</h3>
        <motion.div
          className="flex justify-center items-center space-x-8"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 360, 360] }}
          transition={{
            duration: 6,
            ease: "linear",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <div className="text-center">
            <div className="relative">
              <Image
                src="/assets/mongodb.png"
                alt="MongoDB"
                width={100}
                height={100}
                className="mx-auto"
              />
              <div className="bg-sky-500 w-12 h-2 mx-auto mt-10"></div>
              <div className="bg-sky-500 w-1 h-8 mx-auto -mt-10"></div>
            </div>
            <span className="block mt-2 text-white">MongoDB</span>
          </div>
          <div className="text-center">
            <div className="relative">
              <Image
                src="/assets/express.png"
                alt="Express"
                width={100}
                height={100}
                className="mx-auto"
              />
              <div className="bg-sky-500 w-12 h-2 mx-auto mt-10"></div>
              <div className="bg-sky-500 w-1 h-8 mx-auto -mt-10"></div>
            </div>
            <span className="block mt-2 text-white">Express</span>
          </div>
          <div className="text-center">
            <div className="relative">
              <Image
                src="/assets/react.png"
                alt="React"
                width={100}
                height={100}
                className="mx-auto"
              />
              <div className="bg-sky-500 w-12 h-2 mx-auto mt-10"></div>
              <div className="bg-sky-500 w-1 h-8 mx-auto -mt-10"></div>
            </div>
            <span className="block mt-2 text-white">React</span>
          </div>
          <div className="text-center">
            <div className="relative">
              <Image
                src="/assets/node.png"
                alt="Node.js"
                width={100}
                height={100}
                className="mx-auto"
              />
              <div className="bg-sky-500 w-12 h-2 mx-auto mt-10"></div>
              <div className="bg-sky-500 w-1 h-8 mx-auto -mt-10"></div>
            </div>
            <span className="block mt-2 text-white">Node.js</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AchievementsSection;
