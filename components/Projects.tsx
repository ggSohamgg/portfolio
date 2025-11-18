import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { Github, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-12">Selected Works</h2>

      <div className="grid gap-8">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="group relative grid md:grid-cols-[1.5fr_1fr] gap-8 p-5 md:p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500"
          >
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono text-muted border border-white/10 px-2 py-1 rounded-md uppercase tracking-wider">
                            {project.type}
                        </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 group-hover:underline decoration-white/20 underline-offset-8">
                        {project.title}
                    </h3>
                    
                    <p className="text-secondary leading-relaxed mb-6 max-w-xl">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t, i) => (
                        <span key={i} className="text-xs text-muted font-mono">
                            /{t}
                        </span>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {project.github && (
                        <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-primary hover:text-white/80 transition-colors">
                            <Github size={18} />
                            Code
                        </a>
                    )}
                    {project.link && (
                        <a href={project.link} className="flex items-center gap-2 text-sm font-medium text-primary hover:text-white/80 transition-colors">
                            <ArrowUpRight size={18} />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>

            {/* Metrics/Details Section */}
            <div className="border-t md:border-t-0 md:border-l border-white/5 md:pl-8 pt-6 md:pt-0 flex flex-col justify-center">
                <h4 className="text-sm font-semibold text-white mb-4">Key Outcomes</h4>
                <ul className="space-y-3">
                    {project.metrics?.map((metric, mIdx) => (
                        <li key={mIdx} className="flex items-start gap-3 text-sm text-muted group-hover:text-secondary transition-colors">
                            {/* Improved Bullet Point Visibility */}
                            <div className="mt-0.5 text-green-500 shrink-0">
                                <CheckCircle2 size={16} />
                            </div>
                            <span className="leading-tight">{metric}</span>
                        </li>
                    ))}
                </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;