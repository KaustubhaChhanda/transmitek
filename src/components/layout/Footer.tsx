import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Shield, CheckCircle } from 'lucide-react';

// Footer Logo Import
import logoFooter from '../../../../Leading Auto Parts Manufacturer in China _ Transmitek_files/logo_footer-300x47.png';
// QR Code Imports
import qrWechat from '../../../../Contact Us - TRANSMITEK_files/wechat-transmitek.jpg';
import qrWhatsapp from '../../../../Contact Us - TRANSMITEK_files/whatsapp-transmitek.jpg';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-brand-footer-text border-t border-brand-border-dark pt-16 w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="inline-block">
            <img src={logoFooter} alt="Transmitek Logo" className="h-10 w-auto object-contain brightness-110" />
          </Link>
          <p className="text-sm font-light leading-relaxed">
            Over 30 years of excellence in manufacturing premium automotive parts. Supplying 86% of output to international brands under IATF 16949 quality standards.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex flex-col items-center gap-1">
              <img src={qrWechat} alt="WeChat Contact" className="w-16 h-16 rounded border border-brand-border-dark p-0.5 bg-white object-cover" />
              <span className="text-[10px] tracking-wider uppercase font-semibold">WeChat Contact</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img src={qrWhatsapp} alt="WhatsApp Contact" className="w-16 h-16 rounded border border-brand-border-dark p-0.5 bg-white object-cover" />
              <span className="text-[10px] tracking-wider uppercase font-semibold">WhatsApp Link</span>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 pb-2 border-b border-brand-red w-16">
            Navigation
          </h4>
          <ul className="flex flex-col gap-3.5 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition-colors duration-200">
                Home Page
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white transition-colors duration-200">
                Product Catalog
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors duration-200">
                About Transmitek
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors duration-200">
                Contact & Inquiries
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories Column */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 pb-2 border-b border-brand-red w-16">
            Products
          </h4>
          <ul className="flex flex-col gap-3.5 text-sm">
            <li>
              <Link to="/products" className="hover:text-white transition-colors duration-200">
                Propeller Shafts
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white transition-colors duration-200">
                GDI Fuel Pumps
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white transition-colors duration-200">
                Clutch Master Cylinders
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white transition-colors duration-200">
                Clutch Slave Cylinders
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact info column */}
        <div className="flex flex-col gap-6">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider pb-2 border-b border-brand-red w-16">
            Contact Us
          </h4>
          <div className="flex flex-col gap-4 text-sm font-light">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-red shrink-0 mt-0.5" />
              <span>Building 2, Dongxin Science & Technology Park, Ruian, Zhejiang, China</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-brand-red shrink-0" />
              <span>+86-577-65166299 / 65191299</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-brand-red shrink-0" />
              <span>sales@transmitek.com</span>
            </div>
          </div>
          
          <div className="bg-brand-dark-2 border border-brand-border-dark p-3.5 rounded-lg flex items-center gap-3.5 mt-2">
            <Shield size={24} className="text-brand-blue shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white uppercase tracking-wider">IATF 16949 / ISO 17025</span>
              <span className="text-[10px] text-brand-footer-text leading-tight mt-0.5">Accredited testing processes & export manufacturing.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-brand-dark-2 py-6 px-6 border-t border-brand-border-dark w-full text-center text-xs text-brand-footer-text">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>
            © {currentYear} Transmitek Transmission Co., Ltd. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a href="https://transmitek.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Official Site
            </a>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle size={12} className="text-emerald-500" /> Premium Quality Assured
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
