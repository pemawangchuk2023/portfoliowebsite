"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { skillsData } from "@/constants";
import { HoverBorderGradient } from "./acer/hover-border-gradient";

const SkillSection = () => {
  const [currentPositions, setCurrentPositions] = useState([...skillsData]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPositions((prevPositions) => {
        if (prevPositions.length > 0) {
          const newPositions = [...prevPositions];
          const firstElement = newPositions.shift();
          if (firstElement) {
            newPositions.push(firstElement);
          }
          return newPositions;
        }
        return prevPositions;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="w-full py-8 md:py-12 lg:py-16">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          My Skills As a Self-Learner
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl lg:text-base xl:text-2xl">
          Explore the technologies and tools I&apos;m proficient in.
        </p>
        <div className="relative w-[500px] h-[500px]">
          {currentPositions.map((skill, index) => (
            <div
              key={skill.title}
              className={`skill-container skill-circle skill-pos-${index}`}
            >
              <HoverBorderGradient
                containerClassName="rounded-xl"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <Image
                  src={skill.iconSrc}
                  alt={`${skill.title} icon`}
                  width={80}
                  height={80}
                  style={{ width: "80px", height: "80px" }}
                  layout="intrinsic"
                />
              </HoverBorderGradient>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
