import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Globe, Plane, Award } from 'lucide-react';

// World Map Image Import
import mapImg from '../../assets/world_map_vector.png';

export const GlobalPresence: React.FC = () => {
  const highlights = [
    {
      icon: <Globe className="text-brand-blue" size={20} />,
      title: "50+ Countries Reached",
      desc: "Supplying drivetrain parts across North America, Europe, Southeast Asia, South America, and Africa."
    },
    {
      icon: <Plane className="text-brand-red" size={20} />,
      title: "Logistical Proximity",
      desc: "Direct shipping pipelines from major China sea ports, facilitating fast container distribution schedules."
    },
    {
      icon: <Award className="text-brand-blue" size={20} />,
      title: "86% Export Volume",
      desc: "An overwhelming majority of our annual manufacturing output supplies major foreign tier-2 or aftermarket brands."
    }
  ];

  return (
    <section className="bg-brand-dark text-white py-20 relative w-full overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text and Highlight list */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <SectionHeading
              title="Global Export Footprint"
              subtitle="Proven logistics channels routing transmission and fuel systems to global distribution centers."
              align="left"
              light={true}
            />

            <p className="text-sm font-light text-brand-footer-text leading-relaxed -mt-6 mb-8 max-w-md">
              From our manufacturing plant in Ruian, Zhejiang, we manage a supply chain capable of delivering products globally on tight schedules.
            </p>

            <div className="flex flex-col gap-6 w-full">
              {highlights.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={idx}
                  className="flex gap-4 items-start"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-brand-footer-text mt-0.5 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Map Image Column */}
          <div className="lg:col-span-7 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-brand-dark-2/40 p-4 backdrop-blur-sm"
            >
              <img
                src={mapImg}
                alt="Global Distribution Map"
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute bottom-6 left-6 bg-brand-dark/80 border border-white/10 px-4 py-2.5 rounded-lg backdrop-blur-md flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-brand-red rounded-full animate-ping" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-footer-text">
                  Direct Export Routes Active
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
