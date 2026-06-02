import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { CheckCircle } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      num: "01",
      title: "30+ Years Industry Experience",
      desc: "Founded in 1996, we have grown alongside the global automotive aftermarket. Our long-term metallurgical and machining experience ensures structural stability in every part we build."
    },
    {
      num: "02",
      title: "Globally Certified Operations",
      desc: "Our active certifications under IATF 16949 (Automotive Quality) and ISO/IEC 17025 (Lab Calibration) provide assurance that our output is uniform, reliable, and verified."
    },
    {
      num: "03",
      title: "Full OEM/ODM Integration",
      desc: "From blueprint drawing analysis to CNC prototyping and robotic assembly, we coordinate all engineering stages internally to guarantee high quality and delivery schedules."
    }
  ];

  return (
    <section className="bg-brand-light py-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Why Leading Brands Trust Transmitek"
          subtitle="Delivering structural stability, precision engineering, and verified test workflows across our entire parts inventory."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {points.map((point, idx) => (
            <motion.div
              key={point.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white p-8 rounded-2xl border border-brand-border shadow-md relative group hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
            >
              {/* Number accent */}
              <span className="absolute top-6 right-8 text-5xl font-black text-brand-light group-hover:text-brand-red/10 transition-colors duration-300">
                {point.num}
              </span>

              <div className="flex items-center gap-2 mb-4">
                <CheckCircle size={18} className="text-brand-red shrink-0" />
                <h3 className="text-lg font-bold text-brand-heading-2 group-hover:text-brand-red transition-colors duration-300">
                  {point.title}
                </h3>
              </div>

              <p className="text-xs text-brand-muted font-light leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
