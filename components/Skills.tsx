import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <Section id="skills" className="bg-surface/30">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-12">Technologies</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
        {SKILLS.map((category, idx) => {
          const Icon = category.icon;
          return (
            <div 
              key={idx}
              className="bg-background p-8 group hover:bg-surface transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <Icon size={20} className="text-secondary group-hover:text-white transition-colors" />
                <h3 className="font-display font-semibold text-primary tracking-wide">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-y-2 gap-x-4">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="text-sm text-muted group-hover:text-secondary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;