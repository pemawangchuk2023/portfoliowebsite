"use client";

import React from "react";
import { Card } from "@/components/ui/card";

interface GlassmorphicCardProps {
  children: React.ReactNode;
  className?: string;
}
const GlassmorphicCard = ({ children, className }: GlassmorphicCardProps) => (
  <Card
    className={`border-dotted border-white dark:border-gray-500 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md ${className}`}
  >
    {children}
  </Card>
);

export default GlassmorphicCard;
