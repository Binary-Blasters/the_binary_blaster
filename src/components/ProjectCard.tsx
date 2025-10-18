'use client';

import { Project } from '@/types';
import { ArrowRight } from 'lucide-react';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="group cursor-pointer">
      <div
        className={`bg-gradient-to-br ${project.color} rounded-lg h-48 mb-4 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300`}
      >
        <span className="text-white text-center px-4">
          <p className="font-bold mb-2">{project.title}</p>
          <p className="text-sm opacity-90">{project.description}</p>
        </span>
      </div>
      <div className="space-y-2">
        <p className="text-emerald-400 text-sm font-semibold">{project.category}</p>
        <p className="text-gray-300">{project.title}</p>
        <button className="text-emerald-300 hover:text-emerald-200 flex items-center gap-2 transition-colors">
          View Project <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
