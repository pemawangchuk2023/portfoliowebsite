"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import GlassmorphicCard from "./GlassmorphicCard";
import Image from "next/image";

const ContactSection = () => (
  <section id="contact">
    <h2 className="relative text-2xl font-bold mb-4 before:content-['Get_in_Touch'] before:absolute before:top-1 before:left-1 before:text-purple-500 before:opacity-50 before:z-[-1]">
      Get in Touch
    </h2>
    <GlassmorphicCard>
      <div className="p-6">
        <div className="flex flex-wrap gap-4">
          <Button variant="ghost" className="flex items-center">
            <Image
              src="/assets/github.png"
              alt="github"
              width={45}
              height={45}
            />
          </Button>
          <Button variant="ghost" className="flex items-center">
            <Image
              src="/assets/linkedin.png"
              alt="linkedin"
              width={45}
              height={45}
            />
          </Button>
          <Button variant="ghost" className="flex items-center">
            <Image src="/assets/email.png" alt="email" width={45} height={45} />
          </Button>
        </div>
      </div>
    </GlassmorphicCard>
  </section>
);

export default ContactSection;
