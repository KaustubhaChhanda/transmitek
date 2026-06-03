import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, RotateCcw, AlertTriangle, Loader2 } from 'lucide-react';

// System prompt describing the business details for the chatbot
const SYSTEM_PROMPT = `
You are the Transmitek AI Assistant, a helpful, precise, and professional customer service representative for Transmitek Transmission Co., Ltd.
Your goal is to answer customer questions about Transmitek accurately and efficiently.
If the question is unrelated to Transmitek, automotive engineering, or auto parts manufacturing, politely redirect the conversation back to Transmitek.

Company Profile:
- Company Name: Transmitek Transmission Co., Ltd.
- Industry: High-tolerance automotive aftermarket parts manufacturing.
- Experience: Over 30 years of manufacturing experience (established in 1996 in Ruian, Zhejiang, China).
- Global Scale: 86% of products are exported to international brands globally.
- Location: Building 2, Dongxin Science & Technology Park, Ruian, Zhejiang, China.
- Key Certifications:
  1. IATF 16949 (Automotive Quality Management System) - crucial for international brand trust.
  2. ISO/IEC 17025 (Testing & Calibration Laboratories) - guarantees laboratory capability.
  - Display and cite these certifications proudly when quality is mentioned.
- Contact Channels:
  - Phone/Technical Line: +86-577-65166299
  - WhatsApp: +8657765166299
  - General Address: Building 2, Dongxin Science & Technology Park, Ruian, China
  - Requesting Quotes: Customers can go to the /contact page and fill out the contact form.

Product Catalog:
1. Propeller Shafts (Drive Shafts / Cardan Shafts):
   - Multi-Axle Propeller Shaft Assembly (OEM: TS-PS-04A, 26061225-C): Built for heavy-duty trucks, commercial vehicles, 4WD utility vehicles. Material: micro-alloy steel. Dynamic balance: ISO 1940 G16 grade. Torque: 4500 N·m.
   - Cardan Drive Shaft Assembly (OEM: TS-PS-CRD, 27060-3D050): Built for SUVs, light trucks, and RWD passenger cars. Friction welded.
   - Driveline Tail Shaft Assembly (OEM: TS-PS-TLS, 37100-4A000): Lightweight carbon-steel/aluminum, 18% weight reduction. Max speed 8000 RPM.
2. High Pressure Fuel Pumps (GDI):
   - HPP2111 (OEM: 0261520552, TS-GDI-HP211): 250 bar pressure. For 1.5T to 2.0T gasoline direct injection engines. DLC-coated plunger.
   - GDI Fuel Pump HPP220A Series (OEM: F01R00NB32): 220 bar pressure. E85 ethanol resistant. For turbo compact passenger vehicles.
   - Industrial GDI Pump Assembly (OEM: TS-GDI-HP300, 12641847-OEM): 300 bar pressure. For large-displacement V6/V8 and performance tuning.
   - Dual-Stage High Pressure Pump (OEM: TS-GDI-HP200): 200 bar pressure. Optimized for hybrid vehicle cold starts.
3. Hydraulic Clutch Master Cylinders:
   - Pre-Filled Clutch Master Cylinder (OEM: TS-CMC-PF15): Pre-filled and pre-bled, reducing installation labor time by 50% without airlocks.
   - Aluminum Clutch Master Cylinder (OEM: TS-CMC-AL19): Forged aluminum body, 19.05mm bore, built for commercial trucks and off-road vehicles.
4. Hydraulic Clutch Slave Cylinders:
   - Concentric Slave Cylinder (CSC) (OEM: TS-CSC-24, 510007310): Integrates slave cylinder and release bearing into one unit. Glass-fiber polyamide housing.
   - Hydraulic Clutch Slave Cylinder (OEM: TS-CSC-RL20): Cast iron/aluminum external setup, M8 brass bleeder valve.
   - Heavy-Duty Clutch Release Bearing Cylinder (OEM: TS-CSC-HD22): Forged aluminum, tested to 2,000,000 actuations. For heavy commercial logistics.

Chat Guidelines:
- Be technical, clear, and professional.
- Keep answers short, conversational, and direct (max 2 short paragraphs, under 120 words).
- DO NOT use markdown headers (like #, ##, ###).
- Use simple bolding **word** for emphasis sparingly.
- Bullet points must be simple using a standard hyphen (-) on a new line.
- ALWAYS use links to guide users. You MUST use standard markdown link syntax like [Products](/products), [About Us](/about), [Contact Us](/contact), or [WhatsApp](wa.me/8657765166299) to provide links in your responses.
- If pricing or inquiries are discussed, provide the [Contact Us](/contact) page link or mention sending an inquiry on the [Products](/products) page.
- Always be polite, respectful, and helpful.
`;

// Helper for local keyword matching when API key is not configured
const getLocalFallbackResponse = (input: string): string => {
  const lower = input.toLowerCase();
  if (lower.includes('product') || lower.includes('make') || lower.includes('manufacture') || lower.includes('catalog')) {
    return "Transmitek primarily produces high-performance automotive aftermarket parts:\n\n1. **Propeller Shafts / Cardan Shafts** (Multi-Axle, Cardan, and Driveline Tail assemblies)\n2. **High-Pressure GDI Fuel Pumps** (HPP2111, HPP220A, and High-Displacement pumps)\n3. **Clutch Master Cylinders** (Pre-filled drop-in assemblies and forged aluminum types)\n4. **Clutch Slave Cylinders** (Concentric Slave Cylinders (CSC) and external slave cylinders)\n\nWhich of these categories are you interested in?";
  }
  if (lower.includes('certif') || lower.includes('quality') || lower.includes('iatf') || lower.includes('iso') || lower.includes('standards')) {
    return "At Transmitek, quality is our top priority. We hold key international certifications:\n\n- **IATF 16949** (Automotive Quality Management System)\n- **ISO/IEC 17025** (Testing and Calibration Laboratory certification)\n\nWe perform extensive laboratory tests including dynamic balancing (ISO 1940 G16) and 2,000,000 cycle durability testing on our clutch components. 86% of our products are supplied directly to international brand suppliers.";
  }
  if (lower.includes('location') || lower.includes('where') || lower.includes('address') || lower.includes('china')) {
    return "We are based in China's automotive aftermarket manufacturing center:\n\n**Address:**\nBuilding 2, Dongxin Science & Technology Park, Ruian, Zhejiang, China.\n\nWe coordinate global logistics to deliver propeller shafts and fuel systems anywhere in the world.";
  }
  if (lower.includes('contact') || lower.includes('phone') || lower.includes('email') || lower.includes('whatsapp') || lower.includes('call')) {
    return "You can get in touch with our engineering and sales teams through:\n\n- **Landline:** +86-577-65166299\n- **WhatsApp:** [+8657765166299](https://wa.me/8657765166299)\n- **Email:** sales@transmitek.com\n- **Office Hours:** Monday to Saturday, 8:00 AM - 5:30 PM (GMT+8)\n\nYou can also click the green WhatsApp float button on the screen or fill out the contact form on our [Contact Page](/contact).";
  }
  if (lower.includes('quote') || lower.includes('price') || lower.includes('cost') || lower.includes('inquiry')) {
    return "To get a detailed quote or place a custom OEM order:\n\n1. Visit our [Contact Page](/contact) and fill out the inquiry form.\n2. Go to the [Products Page](/products) and click the **'Send Inquiry'** button on any product card, which will pre-fill the form with its part numbers and specs.\n3. Alternatively, you can message our sales team on WhatsApp directly by clicking the green float icon.";
  }
  return "Thank you for reaching out! To enable full conversational AI powered by Groq (Llama 3.1), please configure your API key in the `.env` file by adding:\n`VITE_GROQ_API_KEY=your_key_here`\n\nMeanwhile, feel free to ask me about our **products**, **certifications**, **contact info**, or **location**!";
};

const WELCOME_TEXT = "Hello! Welcome to Transmitek Transmission Co., Ltd. I'm your AI Technical Assistant. Ask me anything about our propeller shafts, GDI fuel pumps, clutch cylinders, or quality standards!";

// Custom parser to render bold text and links dynamically inside chat bubbles
const formatMessage = (text: string, sender: 'user' | 'bot') => {
  const parts: (string | React.ReactNode)[] = [];
  let currentIndex = 0;
  
  // Matches bold (**text**), markdown links ([label](url)), HTTP/HTTPS links (https?://...), bare WhatsApp links (wa.me/...), WWW links (www...), and internal routes (/products, etc.)
  const regex = /(\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)|(https?:\/\/[^\s\)]+)|(wa\.me\/[^\s\)]+)|(www\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,}[^\s\)]*)|(\/(?:products|about|contact)\b))/g;
  
  let match;
  while ((match = regex.exec(text)) !== null) {
    const matchIndex = match.index;
    
    if (matchIndex > currentIndex) {
      parts.push(text.substring(currentIndex, matchIndex));
    }
    
    if (match[2] !== undefined) {
      // Bold matches
      parts.push(
        <strong
          key={matchIndex}
          className={`font-bold ${sender === 'user' ? 'text-white underline' : 'text-brand-red'}`}
        >
          {match[2]}
        </strong>
      );
    } else {
      // Link matches (Markdown links, plain http/https links, plain wa.me links, plain www links, or internal paths)
      const isMarkdown = match[3] !== undefined && match[4] !== undefined;
      const linkLabel = isMarkdown ? match[3] : (match[5] || match[6] || match[7] || match[8] || '');
      let linkUrl = isMarkdown ? match[4].trim() : (match[5] || match[6] || match[7] || match[8] || '').trim();

      // Normalize external URLs to include the https protocol if missing (prevents relative link pollution)
      if (!linkUrl.startsWith('/') && !linkUrl.startsWith('http://') && !linkUrl.startsWith('https://')) {
        linkUrl = 'https://' + linkUrl;
      }

      // Sanitize WhatsApp URLs: strip hyphens/spaces to prevent "dynamic link not found" errors
      if (linkUrl.includes('wa.me/') || linkUrl.includes('whatsapp.com')) {
        const waParts = linkUrl.split('wa.me/');
        if (waParts.length > 1) {
          const cleanPhone = waParts[1].replace(/[^0-9]/g, '');
          linkUrl = 'https://wa.me/' + cleanPhone;
        } else {
          const sendParts = linkUrl.split('phone=');
          if (sendParts.length > 1) {
            const cleanPhone = sendParts[1].split('&')[0].replace(/[^0-9]/g, '');
            linkUrl = 'https://wa.me/' + cleanPhone;
          }
        }
      }

      const isInternal = linkUrl.startsWith('/');
      
      if (isInternal) {
        parts.push(
          <a
            key={matchIndex}
            href={linkUrl}
            className={`font-semibold px-2 py-0.5 rounded-lg transition-all duration-200 text-xs mx-0.5 inline-block border cursor-pointer ${
              sender === 'user'
                ? 'bg-white/10 text-white border-white/20 hover:bg-white hover:text-brand-red hover:border-white'
                : 'bg-brand-red/10 text-brand-red border-brand-red/10 hover:bg-brand-red hover:text-white hover:border-brand-red'
            }`}
          >
            {linkLabel}
          </a>
        );
      } else {
        parts.push(
          <a
            key={matchIndex}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-semibold px-2 py-0.5 rounded-lg transition-all duration-200 text-xs mx-0.5 inline-flex items-center gap-0.5 border cursor-pointer ${
              sender === 'user'
                ? 'bg-white/10 text-white border-white/20 hover:bg-white hover:text-brand-blue hover:border-white'
                : 'bg-brand-blue/10 text-brand-blue border-brand-blue/10 hover:bg-brand-blue hover:text-white hover:border-brand-blue'
            }`}
          >
            {linkLabel}
            <span className="text-[10px] opacity-85">↗</span>
          </a>
        );
      }
    }
    
    currentIndex = regex.lastIndex;
  }
  
  if (currentIndex < text.length) {
    parts.push(text.substring(currentIndex));
  }
  
  return parts.length > 0 ? parts : text;
};

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
  isWarning?: boolean;
}

export const ChatbotAndWhatsapp: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: WELCOME_TEXT,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsgId = Date.now().toString();
    const newUserMsg: Message = {
      id: userMsgId,
      sender: 'user',
      text,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY;
      const isConfigured = apiKey && apiKey !== 'YOUR_GROQ_API_KEY_HERE';

      if (!isConfigured) {
        // Fallback response with explanation
        setTimeout(() => {
          const fallbackText = getLocalFallbackResponse(text);
          setMessages((prev) => [
            ...prev,
            {
              id: (Date.now() + 1).toString(),
              sender: 'bot',
              text: `⚠️ **Demo Fallback Mode** (Groq API Key not configured in .env):\n\n${fallbackText}`,
              timestamp: new Date(),
              isWarning: true
            }
          ]);
          setIsLoading(false);
        }, 800);
        return;
      }

      // Map conversation history for Groq API
      const history = messages
        .filter((m) => !m.isWarning && m.id !== 'welcome')
        .map((m) => ({
          role: m.sender === 'user' ? ('user' as const) : ('assistant' as const),
          content: m.text
        }));

      history.push({ role: 'user', content: text });

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...history
          ],
          temperature: 0.5,
          max_tokens: 600
        })
      });

      if (!response.ok) {
        throw new Error('Groq API Error');
      }

      const data = await response.json();
      const botResponseText = data.choices[0]?.message?.content || "I couldn't process that response. Please try again.";

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'bot',
          text: botResponseText,
          timestamp: new Date()
        }
      ]);
    } catch (error) {
      console.error('Chatbot API call failed:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'bot',
          text: "Sorry, I experienced a connection issue while communicating with the server. Please check your network or try again.",
          timestamp: new Date(),
          isWarning: true
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: WELCOME_TEXT,
        timestamp: new Date()
      }
    ]);
  };

  const suggestions = [
    "What products do you make?",
    "Show me your certifications",
    "Where are you located?",
    "How do I request a quote?"
  ];

  return (
    <>
      {/* ── Fixed Floating Controls Container ── */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-row gap-3 items-center pointer-events-none">
        
        {/* ── WhatsApp Button ── */}
        <motion.a
          href="https://wa.me/8657765166299"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="pointer-events-auto w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center text-white relative group cursor-pointer hover:shadow-emerald-500/20"
        >
          {/* Pulsing ring animation around WhatsApp button */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none group-hover:animate-none" />
          
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current relative z-10">
            <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.458 3.48 1.332 5.006l-1.42 5.185 5.305-1.392c1.474.804 3.125 1.226 4.79 1.228h.004c5.503 0 9.985-4.482 9.987-9.99 0-2.668-1.037-5.176-2.926-7.067-1.888-1.888-4.397-2.928-7.084-2.928zm5.83 14.175c-.24.675-1.4 1.29-1.92 1.35-.492.057-.96.284-3.12-.585-2.766-1.11-4.544-3.92-4.682-4.103-.138-.184-1.12-1.492-1.12-2.846 0-1.354.707-2.02.96-2.285.24-.265.53-.33.707-.33.177 0 .354.002.508.01.162.008.38-.06.592.46.22.54.75 1.83.815 1.96.065.13.11.282.023.46-.087.18-.13.295-.26.444-.13.15-.27.336-.386.45-.127.126-.26.265-.113.52.148.25.66 1.09 1.417 1.765.975.87 1.79 1.137 2.046 1.265.256.127.406.106.556-.065.15-.17.647-.75.82-.998.175-.25.35-.208.59-.12.24.088 1.524.72 1.787.85.263.13.438.196.503.31.065.112.065.65-.175 1.326z"/>
          </svg>
          
          {/* Tooltip floating above */}
          <div className="absolute bottom-16 right-0 bg-brand-dark/95 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-semibold border border-brand-border-dark flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Chat on WhatsApp
          </div>
        </motion.a>

        {/* ── Chatbot Float Toggle Button ── */}
        <motion.button
          onClick={() => setIsChatOpen(!isChatOpen)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="pointer-events-auto w-14 h-14 bg-gradient-to-tr from-brand-red to-brand-red-dark rounded-full shadow-lg flex items-center justify-center text-white relative group cursor-pointer hover:shadow-brand-red/20 focus:outline-none"
        >
          {isChatOpen ? <X size={24} /> : <MessageSquare size={24} />}
          
          {/* Online green indicator dot */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full animate-ping opacity-75" />
          
          {/* Tooltip floating above */}
          <div className="absolute bottom-16 right-0 bg-brand-dark/95 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-semibold border border-brand-border-dark flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            AI Assistant Online
          </div>
        </motion.button>
      </div>

      {/* ── Chat Dialog Modal Drawer ── */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 w-[calc(100vw-3rem)] sm:w-[350px] h-[450px] max-h-[75vh] z-50 rounded-2xl shadow-2xl border border-brand-border bg-white flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-white px-4 py-3 flex items-center justify-between text-brand-heading border-b border-brand-border">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-7 h-7 bg-brand-red/10 border border-brand-red/20 rounded-full flex items-center justify-center font-semibold text-brand-red text-xs">
                    T
                  </div>
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 rounded-full border border-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-xs text-brand-heading-2">Transmitek AI</h3>
                  <p className="text-[9px] text-brand-muted flex items-center gap-1">
                    Support Assistant
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-1.5">
                {/* Clear Chat Button */}
                <button
                  onClick={handleClearChat}
                  title="Clear Conversation"
                  className="p-1.5 hover:bg-brand-light rounded-lg text-brand-muted hover:text-brand-red transition-all cursor-pointer"
                >
                  <RotateCcw size={14} />
                </button>
                {/* Close Button */}
                <button
                  onClick={() => setIsChatOpen(false)}
                  title="Close Chat"
                  className="p-1.5 hover:bg-brand-light rounded-lg text-brand-muted hover:text-brand-red transition-all cursor-pointer"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Conversation Messages Box */}
            <div className="flex-grow overflow-y-auto p-3 bg-brand-lighter/50 space-y-3 scroll-smooth">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed break-words ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-br from-brand-red to-brand-red-dark text-white rounded-br-none shadow-sm shadow-brand-red/15'
                        : msg.isWarning
                        ? 'bg-amber-50 border border-amber-200 text-brand-body rounded-bl-none flex flex-col gap-1.5'
                        : 'bg-white border border-brand-border text-brand-body rounded-bl-none shadow-sm shadow-black/5'
                    }`}
                  >
                    {msg.isWarning && (
                      <div className="flex items-center gap-1.5 text-amber-700 font-bold border-b border-amber-200/60 pb-1 mb-1">
                        <AlertTriangle size={14} />
                        Notice
                      </div>
                    )}
                    <p className="whitespace-pre-wrap break-words">{formatMessage(msg.text, msg.sender)}</p>
                    <span
                      className={`block text-[9px] mt-1.5 text-right ${
                        msg.sender === 'user' ? 'text-white/60' : 'text-brand-muted/70'
                      }`}
                    >
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing Loader Indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-brand-border rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-2 shadow-sm shadow-black/5 text-brand-muted text-[13px]">
                    <Loader2 size={14} className="animate-spin text-brand-red" />
                    Analyzing request...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Built-in Suggestion Buttons */}
            {messages.length === 1 && (
              <div className="px-4 py-2 border-t border-brand-border bg-white flex flex-wrap gap-1.5">
                {suggestions.map((sug, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(sug)}
                    className="text-[11px] font-semibold bg-brand-light text-brand-muted hover:bg-brand-red/10 hover:text-brand-red border border-brand-border hover:border-brand-red/30 px-2.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            )}

            {/* Input Footer Area */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 border-t border-brand-border bg-white flex gap-2 items-center"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about propeller shafts, pumps..."
                disabled={isLoading}
                className="flex-grow bg-brand-lighter border border-brand-border rounded-xl px-4 py-2 text-[13px] focus:outline-none focus:border-brand-red/50 transition-colors placeholder:text-brand-muted/60 text-brand-body"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="w-9 h-9 bg-brand-red text-white hover:bg-brand-red-dark disabled:bg-brand-light disabled:text-brand-muted/50 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
