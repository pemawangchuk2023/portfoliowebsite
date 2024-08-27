"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { TopBars } from "@/constants";
import Link from "next/link";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#1C3144] text-[#FCEFF9]"
          : "text-[#242038] dark:text-[#FCEFF9]"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pema Wangchuk</h1>
        <nav className="hidden md:flex space-x-6">
          {TopBars.map((bar) => (
            <Link
              key={bar.name}
              href={bar.href}
              className="text-xl rounded-xl hover:text-green-500 px-4 py-2 ring ring-blue-600 ring-offset-2"
            >
              {bar.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Switch
            checked={darkMode}
            onCheckedChange={setDarkMode}
            className="data-[state=checked]:bg-green-600"
          />
          {darkMode ? <Moon size={20} /> : <Sun size={20} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
