'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import GlassmorphicCard from './GlassmorphicCard';
import { skills } from '@/constants';

const SkillsSection: React.FC = () => (
  <section id="skills" className="mb-16">
    <h2 className="text-3xl font-bold mb-4 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-400 via-sky-600 to-purple-800 bg-clip-text text-transparent">Skills & Expertise</h2>
    <GlassmorphicCard>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 text-xl space-x-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.2 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Badge variant="secondary" className="text-xl cursor-pointer bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-yellow-800 via-amber-300 to-green-300 bg-clip-text text-transparent">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </GlassmorphicCard>
  </section>
);

export default SkillsSection;
