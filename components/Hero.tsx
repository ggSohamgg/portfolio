import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Bot } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const githubLink = SOCIAL_LINKS.find(link => link.name === "GitHub")?.url;
  const linkedinLink = SOCIAL_LINKS.find(link => link.name === "LinkedIn")?.url;
  const hfLink = SOCIAL_LINKS.find(link => link.name === "Hugging Face")?.url;

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        
        {/* Spotlight Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="animate-spotlight absolute -top-40 left-0 md:left-60 w-[100vw] md:w-[50vw] h-screen bg-gradient-to-b from-white/5 to-transparent opacity-0 transform -translate-x-1/2 -translate-y-1/2 blur-[100px]" />
        </div>

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-secondary font-medium">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Available for new opportunities
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-primary">
                    Building the <br />
                    <span className="text-muted">Intelligence of Tomorrow.</span>
                </h1>
                
                <p className="max-w-2xl text-lg md:text-xl text-secondary leading-relaxed">
                    I architect specialized language models and scalable AI systems. 
                    Focused on making good quality datasets, efficient LLM training, and edge deployment.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                    <a 
                        href="#projects" 
                        onClick={handleScrollToProjects}
                        className="group flex items-center gap-2 px-6 py-3 bg-primary text-background font-bold rounded-full hover:bg-white/90 transition-colors"
                    >
                        View Work
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <div className="flex items-center gap-4 border-l border-white/10 pl-6 ml-2">
                        <a href={githubLink} target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors">
                            <Github size={24} />
                        </a>
                        <a href={linkedinLink} target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors">
                            <Linkedin size={24} />
                        </a>
                        {hfLink && (
                            <a href={hfLink} target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors">
                                <Bot size={24} />
                            </a>
                        )}
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="text-secondary hover:text-primary transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default Hero;