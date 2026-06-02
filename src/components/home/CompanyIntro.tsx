import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { ShieldCheck, Compass, Users } from 'lucide-react';

// Factory image import
import factoryImg from '../../../../Leading Auto Parts Manufacturer in China _ Transmitek_files/factory-view-1-2.jpg';

export const CompanyIntro: React.FC = () => {
  const listItems = [
    {
      icon: <ShieldCheck className="text-brand-red shrink-0" size={20} />,
      title: "IATF 16949 Accredited Production",
      desc: "Operating strictly under automotive standard control parameters to supply top-tier international brands."
    },
    {
      icon: <Compass className="text-brand-blue shrink-0" size={20} />,
      title: "ISO/IEC 17025 Certified Testing",
      desc: "Our state-of-the-art testing laboratories execute rigorous high-pressure fatigue, leakage, and endurance validation."
    },
    {
      icon: <Users className="text-brand-red shrink-0" size={20} />,
      title: "OEM & ODM Partnering",
      desc: "Complete custom specifications matching, precision tool design, prototyping, and serial manufacturing."
    }
  ];

  return (
    <section className="bg-white py-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <SectionHeading
              title="Global Aftermarket & OEM Manufacturing Partner"
              subtitle="Transmitek Transmission Co., Ltd. is a premier manufacturer specializing in high-tolerance automotive drivetrain and fuel delivery components."
              align="left"
            />
            
            <p className="text-brand-body text-sm font-light leading-relaxed -mt-6 mb-8 max-w-xl">
              With over three decades of mechanical fabrication experience, we combine design engineering with computerized automated assembly. Today, 86% of our products are exported globally to international aftermarket brands, validating our standard of manufacturing reliability.
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-5 mb-8 w-full">
              {listItems.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={idx}
                  className="flex gap-4 items-start"
                >
                  <div className="p-2.5 rounded-lg bg-brand-light">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-heading-2">{item.title}</h4>
                    <p className="text-xs text-brand-muted mt-0.5 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/about">
              <Button variant="primary" size="md" className="uppercase tracking-wider text-xs">
                About Transmitek
              </Button>
            </Link>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-brand-border"
            >
              <img
                src={factoryImg}
                alt="Transmitek Plant Facility"
                className="w-full h-auto object-cover object-center aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent pointer-events-none" />
            </motion.div>
            
            {/* Tiny accent decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-red/5 rounded-full blur-xl z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-blue/5 rounded-full blur-xl z-0" />
          </div>

        </div>
      </div>
    </section>
  );
};
