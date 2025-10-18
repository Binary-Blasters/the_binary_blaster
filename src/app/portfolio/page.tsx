import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/constants/data';

export default function Portfolio() {
  return (
    <div className="min-h-screen flex items-center px-4 py-20 pt-32">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-5xl font-bold mb-12 text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">
          Our Portfolio
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
