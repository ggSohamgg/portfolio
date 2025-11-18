import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-24 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
            
            <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-primary tracking-tight">
                    Let's collaborate.
                </h2>
                <p className="text-lg text-secondary max-w-md leading-relaxed">
                   Whether you have a question, a project idea, or just want to say hi, I'm always open to discussing new opportunities.
                </p>
                
                 <div className="flex gap-6 pt-4">
                    {SOCIAL_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-white transition-colors transform hover:scale-110 duration-200"
                            aria-label={link.name}
                        >
                            <link.icon size={24} />
                        </a>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-6 md:items-end">
                <div className="flex flex-col md:items-end gap-1">
                    <div className="text-sm font-mono text-muted uppercase tracking-wider mb-2">Get in touch</div>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xl md:text-3xl font-bold text-white hover:text-white/80 transition-colors flex items-center gap-2 group">
                        {PERSONAL_INFO.email}
                        <ArrowUpRight className="opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
                    </a>
                </div>
                
                <div className="flex flex-col md:items-end gap-1 text-secondary">
                    <div className="text-lg">{PERSONAL_INFO.phone}</div>
                    <div className="text-lg text-muted">{PERSONAL_INFO.location}</div>
                </div>
            </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted font-mono uppercase tracking-wider">
            <div>
                &copy; {new Date().getFullYear()} Soham Banerjee
            </div>
            <div>
                Designed & Built with AI
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;