import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Mail, ArrowRight } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section className="bg-brand-dark-2 border-t border-brand-border-dark py-16 relative w-full overflow-hidden">
      {/* Visual glowing effects */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <span className="text-[10px] tracking-widest text-brand-red font-bold uppercase mb-3">Get in Touch</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Ready to Discuss Your Part Requirements?
        </h2>
        <p className="text-sm md:text-base text-brand-footer-text font-light max-w-xl leading-relaxed mb-8">
          Whether you need bulk aftermarket pricing or custom OEM spline tooling blueprints, our engineering team is here to support you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
          <Link to="/contact" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto uppercase tracking-wider text-xs" icon={<ArrowRight size={14} />}>
              Request Technical Quote
            </Button>
          </Link>
          <a href="mailto:sales@transmitek.com" className="w-full sm:w-auto">
            <Button variant="ghost" size="lg" className="w-full sm:w-auto text-white hover:bg-white/5 border border-white/10 uppercase tracking-wider text-xs" icon={<Mail size={14} />} iconPosition="left">
              Email Sales Desk
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
