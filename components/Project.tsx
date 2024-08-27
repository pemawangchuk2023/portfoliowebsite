"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { projects } from "@/constants";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BackgroundBeamsWithCollision from "./Background-Beams-With-Collision";


const Project = () => {
  const [activeTab, setActiveTab] = useState("web");

  const filteredProjects = projects.filter(
    (project) => project.id === activeTab
  );

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-400 via-sky-600 to-purple-800 bg-clip-text text-transparent">
        Featured Projects
      </h2>
      <Tabs defaultValue="web" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          <TabsTrigger
            value="web"
            className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-400 via-sky-600 to-purple-800 bg-clip-text text-transparent text-lg sm:text-2xl text-center"
          >
            Full Stack Development
          </TabsTrigger>
          <TabsTrigger
            value="mobile"
            className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-400 via-sky-600 to-purple-800 bg-clip-text text-transparent text-lg sm:text-2xl text-center"
          >
            Mobile Application
          </TabsTrigger>
          <TabsTrigger
            value="data"
            className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-400 via-sky-600 to-purple-800 bg-clip-text text-transparent text-lg sm:text-2xl text-center"
          >
            Web3
          </TabsTrigger>
          <TabsTrigger
            value="ai"
            className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-400 via-sky-600 to-purple-800 bg-clip-text text-transparent text-lg sm:text-2xl text-center"
          >
            AI Project Developed
          </TabsTrigger>
        </TabsList>
        {["web", "mobile", "data", "ai"].map((tab) => (
          <TabsContent key={tab} value={tab}>
            <Carousel className="w-full border-4 border-dotted border-t-green-400 border-b-yellow-400 border-l-red-700 border-r-blue-900 rounded-xl">
              <BackgroundBeamsWithCollision>
                <CarouselContent>
                  {filteredProjects.map((project) => (
                    <CarouselItem key={project.title}>
                      <div className="p-2">
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center">
                              <span className="ml-2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-400 via-sky-600 to-purple-800 bg-clip-text text-transparent text-xl sm:text-2xl">
                                {project.title}
                              </span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="flex flex-col sm:flex-row">
                            {/* Project Image */}
                            <div className="w-full sm:w-1/2">
                              <Image
                                src={project.image}
                                alt={project.title}
                                className="object-cover rounded-md mb-4"
                                width={600}
                                height={500}
                              />
                            </div>
                            {/* Project Description */}
                            <div className="w-full sm:w-1/2 sm:pl-4">
                              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-justify capitalize font-sans text-gray-800 dark:text-gray-200">
                                {project.description}
                              </p>
                            </div>
                          </CardContent>
                          <CardFooter className="mt-4 sm:mt-0">
                            <Button
                              variant="outline"
                              className="w-full sm:w-auto bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-400 via-sky-600 to-purple-800 bg-clip-text text-transparent text-xl sm:text-2xl border-2 border-sky-400"
                            >
                              View Project{" "}
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                          </CardFooter>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </BackgroundBeamsWithCollision>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default Project;
