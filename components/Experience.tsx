import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../constants';
import { Briefcase, MapPin, Sparkles } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-16">Experience</h2>

      <div className="relative border-l border-white/10 ml-3 lg:ml-24 space-y-16">
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="relative pl-4 lg:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-6 w-2.5 h-2.5 rounded-full bg-background border border-white/50 group-hover:border-primary transition-colors z-10 shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
            
            {/* Date - Positioned top on mobile/tablet, left on desktop */}
            <div className="absolute left-4 top-5 lg:left-auto lg:right-full lg:mr-12 lg:top-5 flex items-center gap-2 text-sm font-mono text-muted whitespace-nowrap">
               <span className="hidden lg:inline-block h-px w-8 bg-white/10"></span>
               {exp.period}
            </div>

            {/* Experience Card */}
            <div className="mt-12 lg:mt-0 group relative p-5 md:p-6 lg:p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                
                {/* Header */}
                <div className="flex flex-col gap-2 mb-8">
                    <div className="flex items-start justify-between">
                        <h3 className="text-xl md:text-2xl font-display font-bold text-primary">{exp.role}</h3>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-muted border border-white/10 px-2 py-1 rounded-full">
                            <MapPin size={12} />
                            {exp.location}
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-base md:text-lg text-white/80 font-medium">
                        <Briefcase size={16} className="text-muted" />
                        {exp.company}
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                    {/* Description Header & List */}
                    <div>
                        <h4 className="flex items-center gap-2 text-sm font-bold text-white/90 uppercase tracking-wider mb-4">
                            <Sparkles size={14} className="text-muted" />
                            Key Contributions
                        </h4>
                        <ul className="space-y-3">
                            {exp.description.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-secondary leading-relaxed">
                                    <span className="mt-2 w-1 h-1 rounded-full bg-white/60 shrink-0 group-hover:bg-white transition-colors shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                                    <span className="flex-1">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {exp.technologies && (
                        <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2">
                            {exp.technologies.map((tech, tIdx) => (
                                <span 
                                    key={tIdx} 
                                    className="px-3 py-1 text-xs font-medium text-white/60 bg-white/5 border border-white/5 rounded-full hover:bg-white/10 hover:text-white transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;