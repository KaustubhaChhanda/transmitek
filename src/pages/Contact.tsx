import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'sonner';
import { products } from '../data/products';
import { Button } from '../components/ui/Button';
import { ChevronRight, Mail, Phone, MapPin, Send } from 'lucide-react';

// QR Code Imports
import qrWechat from '../assets/wechat-transmitek.jpg';
import qrWhatsapp from '../assets/whatsapp-transmitek.jpg';

interface InquiryFormData {
  fullName: string;
  companyName: string;
  emailAddress: string;
  phoneNumber: string;
  productInterest: string;
  messageText: string;
}

export const Contact: React.FC = () => {
  const location = useLocation();
  const state = location.state as { productInterest?: string } | null;
  
  // Find product if query state passes product id
  const targetProduct = state?.productInterest 
    ? products.find(p => p.id === state.productInterest) 
    : null;

  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm<InquiryFormData>({
    defaultValues: {
      fullName: '',
      companyName: '',
      emailAddress: '',
      phoneNumber: '',
      productInterest: targetProduct ? targetProduct.category : 'other',
      messageText: targetProduct ? `Hello Transmitek team,\n\nI would like to inquire about specifications and pricing for: ${targetProduct.name} (OEM: ${targetProduct.partNumbers?.join('/') || 'N/A'}).` : ''
    }
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sync if targetProduct changes
  useEffect(() => {
    if (targetProduct) {
      setValue('productInterest', targetProduct.category);
      setValue('messageText', `Hello Transmitek team,\n\nI would like to inquire about specifications and pricing for: ${targetProduct.name} (OEM: ${targetProduct.partNumbers?.join('/') || 'N/A'}).`);
    }
  }, [targetProduct, setValue]);

  const onSubmitForm = async (data: InquiryFormData) => {
    console.log('Technical inquiry submitted:', data);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    
    // Trigger Success Notification
    toast.success('Inquiry Submitted Successfully!', {
      description: 'Our technical sales engineers will contact you within 24 business hours.',
      duration: 5000,
    });
    
    reset({
      fullName: '',
      companyName: '',
      emailAddress: '',
      phoneNumber: '',
      productInterest: 'other',
      messageText: ''
    });
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-brand-lighter">
      <Toaster position="top-right" richColors />

      {/* Page Hero Banner */}
      <section className="bg-brand-dark text-white pt-36 pb-20 w-full relative overflow-hidden flex justify-center text-center">
        <div className="absolute right-10 top-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-brand-footer-text mb-4 uppercase tracking-widest font-semibold">
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <ChevronRight size={12} className="text-brand-border-dark" />
            <span className="text-white">Contact Us</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Connect With Our Team
          </h1>
          <p className="text-sm md:text-base text-brand-footer-text max-w-lg font-light leading-relaxed mt-3">
            Submit a technical inquiry, request specification sheets, or get custom quote parameters directly from our engineering desks.
          </p>
        </div>
      </section>

      {/* Contact Columns Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Details & QR Codes */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="text-[10px] tracking-widest text-brand-red font-bold uppercase mb-2">Corporate HQ</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-heading-2">
                Manufacturing Location
              </h2>
              <div className="h-1 bg-brand-red w-12 rounded-full mt-3 mb-6" />
            </div>

            {/* Info Cards */}
            <div className="flex flex-col gap-4">
              <div className="bg-white border border-brand-border p-5 rounded-xl shadow-sm flex items-start gap-4">
                <MapPin className="text-brand-red shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-xs font-bold text-brand-heading uppercase tracking-wider">Address</h4>
                  <p className="text-sm text-brand-muted mt-1 leading-relaxed font-light">
                    Building 2, Dongxin Science & Technology Park, Ruian City, Wenzhou, Zhejiang Province, 325200, China
                  </p>
                </div>
              </div>

              <div className="bg-white border border-brand-border p-5 rounded-xl shadow-sm flex items-start gap-4">
                <Phone className="text-brand-blue shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-xs font-bold text-brand-heading uppercase tracking-wider">Phone Lines</h4>
                  <p className="text-sm text-brand-muted mt-1 leading-relaxed font-light">
                    Sales Desk: +86-577-65166299 <br />
                    Fax Desk: +86-577-65191299
                  </p>
                </div>
              </div>

              <div className="bg-white border border-brand-border p-5 rounded-xl shadow-sm flex items-start gap-4">
                <Mail className="text-brand-red shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-xs font-bold text-brand-heading uppercase tracking-wider">Email Channels</h4>
                  <p className="text-sm text-brand-muted mt-1 leading-relaxed font-light">
                    sales@transmitek.com <br />
                    info@transmitek.com
                  </p>
                </div>
              </div>
            </div>

            {/* WeChat & WhatsApp QR block */}
            <div className="bg-white border border-brand-border p-6 rounded-xl shadow-sm">
              <h4 className="text-xs font-bold text-brand-heading uppercase tracking-wider mb-4 text-center sm:text-left">
                Instant Chat Channels
              </h4>
              <div className="flex flex-col sm:flex-row items-center justify-around gap-6">
                <div className="flex flex-col items-center gap-2">
                  <img src={qrWechat} alt="WeChat QR Code" className="w-28 h-28 rounded-lg border border-brand-border p-1 bg-brand-lighter" />
                  <span className="text-xs font-bold text-brand-heading-2">WeChat QR Code</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img src={qrWhatsapp} alt="WhatsApp Link QR" className="w-28 h-28 rounded-lg border border-brand-border p-1 bg-brand-lighter" />
                  <span className="text-xs font-bold text-brand-heading-2">WhatsApp Link QR</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 border border-brand-border rounded-2xl shadow-lg relative">
            <h3 className="text-xl font-bold text-brand-heading-2 mb-2">Technical Inquiry Desk</h3>
            <p className="text-xs text-brand-muted font-light mb-8">Please provide vehicle references or OEM part numbers to expedite technical audits.</p>
            
            {targetProduct && (
              <div className="mb-6 bg-brand-blue/5 border border-brand-blue/20 rounded-xl p-4 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-brand-blue tracking-wider">Active Reference</span>
                  <span className="text-xs font-bold text-brand-heading-2 mt-0.5">{targetProduct.name}</span>
                </div>
                <span className="text-[10px] bg-brand-blue text-white font-bold px-2 py-0.5 rounded-full uppercase">
                  Selected
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col">
                  <label htmlFor="fullName" className="text-xs font-bold text-brand-heading mb-1.5 uppercase tracking-wide">Full Name *</label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Enter your name"
                    className={`bg-brand-lighter border rounded-xl py-3 px-4 text-sm font-light text-brand-body focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red transition-all ${
                      errors.fullName ? 'border-brand-red/60 focus:ring-brand-red' : 'border-brand-border'
                    }`}
                    {...register('fullName', { required: 'Full name is required' })}
                  />
                  {errors.fullName && <span className="text-brand-red text-[11px] font-semibold mt-1">{errors.fullName.message}</span>}
                </div>

                {/* Company Name */}
                <div className="flex flex-col">
                  <label htmlFor="companyName" className="text-xs font-bold text-brand-heading mb-1.5 uppercase tracking-wide">Company Name *</label>
                  <input
                    id="companyName"
                    type="text"
                    placeholder="Enter your company name"
                    className={`bg-brand-lighter border rounded-xl py-3 px-4 text-sm font-light text-brand-body focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red transition-all ${
                      errors.companyName ? 'border-brand-red/60 focus:ring-brand-red' : 'border-brand-border'
                    }`}
                    {...register('companyName', { required: 'Company name is required' })}
                  />
                  {errors.companyName && <span className="text-brand-red text-[11px] font-semibold mt-1">{errors.companyName.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email Address */}
                <div className="flex flex-col">
                  <label htmlFor="emailAddress" className="text-xs font-bold text-brand-heading mb-1.5 uppercase tracking-wide">Email Address *</label>
                  <input
                    id="emailAddress"
                    type="email"
                    placeholder="Enter your email"
                    className={`bg-brand-lighter border rounded-xl py-3 px-4 text-sm font-light text-brand-body focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red transition-all ${
                      errors.emailAddress ? 'border-brand-red/60 focus:ring-brand-red' : 'border-brand-border'
                    }`}
                    {...register('emailAddress', { 
                      required: 'Email address is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.emailAddress && <span className="text-brand-red text-[11px] font-semibold mt-1">{errors.emailAddress.message}</span>}
                </div>

                {/* Phone Number */}
                <div className="flex flex-col">
                  <label htmlFor="phoneNumber" className="text-xs font-bold text-brand-heading mb-1.5 uppercase tracking-wide">Phone Number *</label>
                  <input
                    id="phoneNumber"
                    type="text"
                    placeholder="Enter phone number"
                    className={`bg-brand-lighter border rounded-xl py-3 px-4 text-sm font-light text-brand-body focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red transition-all ${
                      errors.phoneNumber ? 'border-brand-red/60 focus:ring-brand-red' : 'border-brand-border'
                    }`}
                    {...register('phoneNumber', { required: 'Phone number is required' })}
                  />
                  {errors.phoneNumber && <span className="text-brand-red text-[11px] font-semibold mt-1">{errors.phoneNumber.message}</span>}
                </div>
              </div>

              {/* Product Interest Select */}
              <div className="flex flex-col">
                <label htmlFor="productInterest" className="text-xs font-bold text-brand-heading mb-1.5 uppercase tracking-wide">Primary Product Category *</label>
                <select
                  id="productInterest"
                  className="bg-brand-lighter border border-brand-border rounded-xl py-3 px-4 text-sm font-light text-brand-body focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red transition-all"
                  {...register('productInterest')}
                >
                  <option value="propeller-shafts">Propeller Shafts</option>
                  <option value="gdi-pumps">GDI Fuel Pumps</option>
                  <option value="master-cylinders">Clutch Master Cylinders</option>
                  <option value="slave-cylinders">Clutch Slave Cylinders</option>
                  <option value="other">Other / Custom Manufacturing</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="messageText" className="text-xs font-bold text-brand-heading mb-1.5 uppercase tracking-wide">Inquiry Message *</label>
                <textarea
                  id="messageText"
                  rows={5}
                  placeholder="Detail your requirements: specifications, OEM numbers, quantities..."
                  className={`bg-brand-lighter border rounded-xl py-3 px-4 text-sm font-light text-brand-body focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red transition-all resize-none ${
                    errors.messageText ? 'border-brand-red/60 focus:ring-brand-red' : 'border-brand-border'
                  }`}
                  {...register('messageText', { required: 'Inquiry details are required' })}
                />
                {errors.messageText && <span className="text-brand-red text-[11px] font-semibold mt-1">{errors.messageText.message}</span>}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full uppercase tracking-wider text-sm mt-2"
                disabled={isSubmitting}
                icon={<Send size={14} />}
              >
                {isSubmitting ? 'Submitting Inquiry...' : 'Submit Tech Inquiry'}
              </Button>
            </form>

          </div>

        </div>
      </section>

      {/* Interactive Google Map Embed */}
      <section className="w-full h-[450px] border-t border-brand-border bg-brand-light relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111536.85244589947!2d120.57962450000002!3d27.79440615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344f6f71d5b3d687%3A0xc023efd6718d7ec6!2sRuian%2C%20Wenzhou%2C%20Zhejiang%2C%20China!5e0!3m2!1sen!2sus!4v1780386221105!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Transmitek Location Map"
        ></iframe>
      </section>

    </div>
  );
};
