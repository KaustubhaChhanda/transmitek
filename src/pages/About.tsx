import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { companyTimeline } from '../data/company';
import { Certifications } from '../components/home/Certifications';
import { ChevronRight, Landmark } from 'lucide-react';

// Factory image imports
import factoryLine from '../../../Leading Auto Parts Manufacturer in China _ Transmitek_files/factory-assembly-line.jpg';
import robotech from '../../../Leading Auto Parts Manufacturer in China _ Transmitek_files/fanuc-robor-production.jpg';
import cncMachining from '../../../Leading Auto Parts Manufacturer in China _ Transmitek_files/transmitek-cnc.jpg';
import precisionDoosan from '../../../Leading Auto Parts Manufacturer in China _ Transmitek_files/Doosan-four-axis-precision-machining.jpg';
import honingNet from '../../../Leading Auto Parts Manufacturer in China _ Transmitek_files/honing-net-inside.jpg';
import productAssembly from '../../../Leading Auto Parts Manufacturer in China _ Transmitek_files/product-assembly-dept.jpg';
import digitalManage from '../../../Leading Auto Parts Manufacturer in China _ Transmitek_files/digital-managemenet-for-delivery.jpg';
import labTesting from '../../../Leading Auto Parts Manufacturer in China _ Transmitek_files/lab-comprehensive-testing.jpg';

export const About: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = [
    { src: precisionDoosan, title: "Doosan CNC Machining" },
    { src: cncMachining, title: "Precision Machining Center" },
    { src: robotech, title: "FANUC Robotic Assembly Line" },
    { src: factoryLine, title: "Propeller Shaft Welding Line" },
    { src: honingNet, title: "Internal Honing Net Assembly" },
    { src: productAssembly, title: "Product Inspection Department" },
    { src: labTesting, title: "ISO 17025 Test Laboratory" },
    { src: digitalManage, title: "Logistical Packing Area" }
  ];

  const qualityProcessSteps = [
    {
      step: "01",
      title: "Material Spectrograph Audit",
      desc: "Incoming aluminum and steel alloys are audited via chemical spectrographs to verify raw load capacity margins before extrusion."
    },
    {
      step: "02",
      title: "Precision Machining & Honing",
      desc: "Bodies are machined on four-axis CNC lines. Cylinder walls are honed to establish oil-retaining cross-hatch configurations."
    },
    {
      step: "03",
      title: "CMM Laser Dimensional Inspections",
      desc: "Finished GDI pump valve sleeves and drive shafts are measured via laser Coordinate Measuring Machines (CMM) to match design specifications."
    },
    {
      step: "04",
      title: "Endurance & Pressure Lab Validation",
      desc: "Assemblies undergo dynamic stress checks, including 10,000,000 cyclic fatigue pushes, environmental chamber audits, and burst validations."
    },
    {
      step: "05",
      title: "100% Helium Leak Auditing",
      desc: "Finished clutch slave and GDI pumps undergo pneumatic helium-leak validation tests to guarantee zero fluid loss at maximum workloads."
    }
  ];

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white">
      
      {/* Page Hero Banner */}
      <section className="bg-brand-dark text-white pt-36 pb-20 w-full relative overflow-hidden flex justify-center text-center">
        <div className="absolute left-10 top-0 w-80 h-80 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-brand-footer-text mb-4 uppercase tracking-widest font-semibold">
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <ChevronRight size={12} className="text-brand-border-dark" />
            <span className="text-white">About Us</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Over 30 Years of Experience
          </h1>
          <p className="text-sm md:text-base text-brand-footer-text max-w-lg font-light leading-relaxed mt-3">
            Bridging technical precision, automated robotics, and accredited calibration standards to supply high-grade aftermarket automotive components.
          </p>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] tracking-widest text-brand-red font-bold uppercase mb-2">Corporate Profile</span>
            <h2 className="text-3xl font-extrabold text-brand-heading mb-4">
              Precision Driven. Performance Proven.
            </h2>
            <div className="h-1 bg-brand-red w-12 rounded-full mb-6" />
            
            <p className="text-brand-body text-sm font-light leading-relaxed mb-4">
              Established in 1996 in Ruian, Zhejiang—the capital of automotive parts manufacturing in China—Transmitek Transmission Co., Ltd. has evolved into an international supplier of propeller shafts, GDI fuel pumps, and clutch hydraulic components.
            </p>
            <p className="text-brand-body text-sm font-light leading-relaxed mb-6">
              Our 30,000 square meter facility houses advanced machinery, including four-axis Doosan CNC centers, coordinate measuring setups, and robotic assembly cells. By combining computerized fabrication with human inspection, we satisfy volume orders while preserving structural consistency.
            </p>

            <div className="grid grid-cols-2 gap-6 bg-brand-light p-6 rounded-xl border border-brand-border">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-brand-red">86%</span>
                <span className="text-xs text-brand-muted mt-1">Exported to Global Aftermarket Brands</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-brand-blue">30,000m²</span>
                <span className="text-xs text-brand-muted mt-1">Modern Production Area</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={factoryLine}
              alt="Assembly Line Operations"
              className="w-full h-auto object-cover rounded-2xl shadow-xl border border-brand-border"
            />
            <div className="absolute -bottom-4 -left-4 bg-brand-dark text-white p-4 rounded-xl shadow-lg border border-brand-border-dark flex items-center gap-3">
              <Landmark size={24} className="text-brand-red shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider">Est. 1996</span>
                <span className="text-[10px] text-brand-footer-text">30+ Years of Manufacturing Integrity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal History Timeline */}
      <section className="bg-brand-light py-20 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Our Milestone Timeline"
            subtitle="How we expanded from a localized driveshaft supplier into a globally certified automotive components manufacturer."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {companyTimeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl border border-brand-border shadow-sm hover:border-brand-red/35 transition-all duration-300 relative group"
              >
                <div className="absolute top-6 right-6 text-2xl font-black text-brand-red/10 group-hover:text-brand-red transition-colors duration-300">
                  {item.year}
                </div>
                <h3 className="text-base font-bold text-brand-heading-2 mb-2 pr-12 group-hover:text-brand-red transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-muted font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Testing Process */}
      <section className="bg-white py-20 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Our Quality Verification Protocol"
            subtitle="Every component passes through standardized quality checkpoints before packaging and shipping."
          />

          <div className="relative mt-12 border-l border-brand-border pl-6 sm:pl-8 space-y-12 max-w-4xl mx-auto text-left">
            {qualityProcessSteps.map((step, idx) => (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className="relative"
              >
                {/* Step indicator circle */}
                <div className="absolute -left-[39px] sm:-left-[47px] top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-brand-red flex items-center justify-center text-[10px] sm:text-xs font-black text-brand-red shadow-sm">
                  {step.step}
                </div>
                
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-heading-2 mb-1.5 flex items-center gap-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-brand-muted font-light leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Factory Machinery Gallery */}
      <section className="bg-brand-light py-20 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Production Facilities & Technology"
            subtitle="Look inside our factories, housing high-precision machinery and automated testing setups."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-brand-border flex flex-col h-full group"
              >
                <div className="overflow-hidden aspect-video relative shrink-0">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                <div className="p-4 flex-grow flex items-center justify-center text-center">
                  <span className="text-xs font-bold text-brand-heading-2 group-hover:text-brand-red transition-colors duration-200">
                    {img.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Certifications block */}
      <Certifications />

    </div>
  );
};
