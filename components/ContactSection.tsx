"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import GlassmorphicCard from "./GlassmorphicCard";
import Image from "next/image";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const ContactSection = () => (
  <section
    id="contact"
    className="flex flex-col md:flex-row justify-between items-start gap-8 font-sans"
  >
    {/* Left Section */}
    <div className="w-full md:w-1/2">
      <h2 className="relative text-2xl font-bold mb-4 before:content-['Get_in_Touch'] before:absolute before:top-1 before:left-1 before:text-purple-500 before:opacity-50 before:z-[-1]">
        Get in Touch
      </h2>
      <GlassmorphicCard>
        <div className="p-6">
          <div className="flex flex-wrap gap-4">
            <Button variant="ghost" className="flex items-center">
              <Link href="https://github.com/pemawangchuk2023">
                <Image
                  src="/assets/github.png"
                  alt="github"
                  width={45}
                  height={45}
                />
              </Link>
            </Button>
            <Button variant="ghost" className="flex items-center">
              <Link href="https://www.linkedin.com/in/pema-wangchuk-5561aa224/">
                <Image
                  src="/assets/linkedin.png"
                  alt="linkedin"
                  width={45}
                  height={45}
                />
              </Link>
            </Button>
            <Button variant="ghost" className="flex items-center">
              <Image
                src="/assets/email.png"
                alt="email"
                width={45}
                height={45}
              />
            </Button>
          </div>
        </div>
      </GlassmorphicCard>
    </div>

    {/* Right Section */}
    <div className="w-full md:w-1/2">
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription className="text-xl capitalize">
            Fill out the form below and I will get back to you as soon as
            possible.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-4xl">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-xl">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter Your Name"
              className="text-xl  shadow-[6px_6px_73px_74px_rgba(72,_252,_70,_0.33)]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xl">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Enter Your Email"
              type="email"
              className="text-xl  shadow-[6px_6px_73px_74px_rgba(72,_252,_70,_0.33)]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-xl">
              Message
            </Label>
            <Textarea
              className="min-h-[200px] shadow-[6px_6px_73px_74px_rgba(72,_252,_70,_0.33)] text-xl"
              id="message"
              placeholder="Enter Your Message"
            />
          </div>
        </CardContent>
        <CardFooter className="w-full flex justify-center text-center items-center ">
          <Button type="submit" className="w-fit text-xl py-6">
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  </section>
);

export default ContactSection;
