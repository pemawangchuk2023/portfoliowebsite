"use client";

import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementSection";
import ContactSection from "@/components/ContactSection";
import ExcellCell from "@/components/ExcellCell";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Project from "@/components/Project";
import SkillsSection from "@/components/SkillSection";
import React from "react";

const Portfolio = () => {
  return (
    <div className="w-full bg-gray-200/10 dark:bg-gray-900 text-gray-900 dark:text-gray-300 transition-colors duration-300">
      <div className="fixed inset-0 grid grid-cols-6 grid-rows-[repeat(100,1fr)] pointer-events-none">
        {[...Array(600)].map((_, i) => (
          <ExcellCell
            key={i}
            className="border border-gray-400 dark:border-gray-700 bg-white dark:bg-gray-800"
          />
        ))}
      </div>
      <Header />
      <main className="container mx-auto px-4 py-8 relative z-10">
        <AboutSection />
        <SkillsSection />
        <AchievementsSection />
        <Project />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default Portfolio;