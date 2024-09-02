"use client";
import ExcellCell from "@/components/ExcellCell";

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
    </div>
  );
}

export default Portfolio;