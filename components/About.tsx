import React from 'react';
import Section from './Section';
import { EDUCATION, CERTIFICATES } from '../constants';
import { GraduationCap, Award, ArrowUpRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-surface/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                About Me
            </h2>
            <div className="space-y-6 text-lg text-secondary leading-relaxed">
                <p>
                    I am a Computer Science undergraduate at <span className="text-white font-semibold">{EDUCATION.university}</span>, obsessed with the intersection of efficiency and intelligence.
                </p>
                <p>
                    My work primarily focuses on Large Language Models (LLMs)—specifically how to make them smaller, faster, and more accessible without sacrificing reasoning capabilities. From dataset curation to QLoRA finetuning, I handle the full lifecycle of model development.
                </p>
                <p>
                    I don't just train models; I deploy them. Whether it's optimizing for mobile edge devices or building scalable inference APIs, I ensure AI creates tangible value.
                </p>
            </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
            {/* Education */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-white/10 rounded-lg text-white">
                        <GraduationCap size={20} />
                    </div>
                    <span className="text-xs font-mono text-secondary border border-white/10 px-2 py-1 rounded">{EDUCATION.year}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-1">{EDUCATION.university}</h3>
                <p className="text-secondary font-medium mb-4">{EDUCATION.degree}</p>
                <div className="flex items-center gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    GPA: {EDUCATION.gpa}
                </div>
            </div>

            {/* Certificates */}
            <div className="space-y-3">
                <h4 className="text-xs font-bold text-muted uppercase tracking-wider px-1">Certifications</h4>
                {CERTIFICATES.map((cert, idx) => (
                    <a key={idx} href={cert.link} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-all">
                        <div className="flex items-center gap-3">
                            <div className="text-muted group-hover:text-white transition-colors">
                                <Award size={18} />
                            </div>
                            <div>
                                <div className="text-primary font-semibold text-sm group-hover:underline decoration-white/20 underline-offset-4">{cert.title}</div>
                                <div className="text-xs text-muted mt-1">{cert.issuer}</div>
                            </div>
                        </div>
                        <ArrowUpRight size={16} className="text-muted group-hover:text-white opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </a>
                ))}
            </div>
        </div>

      </div>
    </Section>
  );
};

export default About;