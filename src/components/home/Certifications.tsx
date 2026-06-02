import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { companyCertifications } from '../../data/company';
import { Award, FileText, CheckCircle2 } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section className="bg-brand-dark py-20 border-t border-b border-brand-border-dark relative w-full overflow-hidden">
      {/* Decorative neon backlights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="Certified Quality Standards"
          subtitle="Our factories and calibration laboratories hold international certifications, making us a qualified Tier-1 partner for world brands."
          light={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {companyCertifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glassmorphism p-8 md:p-10 rounded-2xl relative border border-white/5 hover:border-brand-red/30 hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Top Accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${
                cert.id === 'iatf' ? 'bg-brand-red shadow-lg shadow-brand-red/50' : 'bg-brand-blue shadow-lg shadow-brand-blue/50'
              }`} />

              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Certification Icon */}
                <div className={`p-4 rounded-2xl shrink-0 ${
                  cert.id === 'iatf' ? 'bg-brand-red/10 text-brand-red' : 'bg-brand-blue/10 text-brand-blue'
                }`}>
                  {cert.id === 'iatf' ? <Award size={36} /> : <FileText size={36} />}
                </div>

                {/* Details */}
                <div className="flex-grow">
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    cert.id === 'iatf' ? 'text-brand-red' : 'text-brand-blue'
                  }`}>
                    {cert.authority}
                  </span>
                  
                  <h3 className="text-xl md:text-2xl font-black text-white mt-1 mb-2">
                    {cert.code}
                  </h3>
                  
                  <p className="text-sm font-semibold text-brand-footer-text mb-4">
                    {cert.name}
                  </p>

                  <div className="h-px bg-white/10 my-4" />

                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-xs text-brand-footer-text">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Scope:</strong> {cert.scope}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-brand-footer-text">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Status:</strong> {cert.validity}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small footer text in trust */}
        <div className="text-center mt-12">
          <p className="text-xs text-brand-footer-text font-light max-w-lg mx-auto leading-relaxed">
            All audits are conducted and maintained annually by certified international inspection houses, including TUV Rheinland and CNAS accredited boards.
          </p>
        </div>
      </div>
    </section>
  );
};
