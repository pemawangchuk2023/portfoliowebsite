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
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <div className="flex">
            <TabsTrigger
              value="web"
              className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-400 via-sky-600 to-purple-800 bg-clip-text text-transparent text-2xl text-center"
            >
              Full Stack Development
            </TabsTrigger>
            <TabsTrigger
              value="mobile"
              className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-400 via-sky-600 to-purple-800 bg-clip-text text-transparent text-2xl text-center"
            >
              Mobile Application
            </TabsTrigger>
            <TabsTrigger
              value="data"
              className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-400 via-sky-600 to-purple-800 bg-clip-text text-transparent text-2xl text-center"
            >
              Web3
            </TabsTrigger>
            <TabsTrigger
              value="ai"
              className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-400 via-sky-600 to-purple-800 bg-clip-text text-transparent text-2xl text-center"
            >
              AI Project Developed
            </TabsTrigger>
          </div>
        </TabsList>
        {["web", "mobile", "data", "ai"].map((tab) => (
          <TabsContent key={tab} value={tab}>
            <Carousel className="w-full border-2 border-x-purple-700 border-y-yellow-400 rounded-lg">
              <CarouselContent>
                {filteredProjects.map((project) => (
                  <CarouselItem key={project.title}>
                    <div className="p-2">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <span className="ml-2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-400 via-sky-600 to-purple-800 bg-clip-text text-transparent">
                              {project.title}
                            </span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex">
                          {/* Project Image */}
                          <div className="w-1/2">
                            <Image
                              src={project.image}
                              alt={project.title}
                              className="object-cover rounded-md mb-4"
                              width={600}
                              height={500}
                            />
                          </div>
                          {/* Project Description */}
                          <div className="w-1/2 pl-4">
                            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-justify capitalize font-sans text-gray-800 dark:text-gray-200">
                              {project.description}
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="outline"
                            className="w-fit bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-400 via-sky-600 to-purple-800 bg-clip-text text-transparent text-2xl border-2 border-sky-400"
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
