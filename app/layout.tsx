import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import SkillSection from "@/components/SkillSection";
import AchievementsSection from "@/components/AchievementSection";
import Project from "@/components/Project";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my portfolio website developed as part of assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container mx-auto px-4 py-8 relative z-10">
          <AboutSection />
          <SkillSection />
          <AchievementsSection />
          <Project />
          <ContactSection />
        </main>
        <Footer />
        {children}
      </body>
    </html>
  );
}
