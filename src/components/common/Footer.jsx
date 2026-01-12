import React, { useEffect, useState, useRef } from 'react';
import Logo from '../../assets/logo.png'; 

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const headingStyle = "text-[11px] font-black uppercase tracking-[0.2em] text-[#0A2540] hover:text-[#2EC4B6] transition-all duration-300 hover:translate-x-1";

  return (
    <footer ref={footerRef} className="bg-[#F8FAFC] w-full pb-10 font-sans text-[#0A2540] transition-all duration-1000">
      <hr className="border-t border-gray-200 w-[90%] max-w-[1200px] mx-auto mb-12" />
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-10">
        {/* Brand */}
        <div className={`flex flex-col gap-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Wise Life" className="h-9 w-auto object-contain" />
            <h3 className="text-xl font-black tracking-tight">WISE LIFE</h3>
          </div>
          <p className="text-sm leading-relaxed text-gray-600 font-medium">Innovating professional solutions for the ease of life. Providing quality and excellence in every project.</p>
          <a href="https://www.wiselifee.com" target="_blank" rel="noreferrer" className="text-sm font-bold hover:text-[#2EC4B6] transition-colors w-fit">www.wiselifee.com</a>
        </div>

        {/* Navigation */}
        <div className={`flex flex-col gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className={headingStyle}>Company</h4>
          <nav className="flex flex-col gap-2 text-sm font-semibold">
            <a href="/" className="hover:text-[#2EC4B6] transition-colors w-fit">Home</a>
            <a href="/about" className="hover:text-[#2EC4B6] transition-colors w-fit">About Us</a>
            <a href="/services" className="hover:text-[#2EC4B6] transition-colors w-fit">Services</a>
            <a href="/contact" className="hover:text-[#2EC4B6] transition-colors w-fit">Contact</a>
          </nav>
        </div>

        {/* Address & Phone */}
        <div className={`flex flex-col gap-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <h4 className={headingStyle}>Address</h4>
          <p className="text-sm leading-relaxed text-gray-600 font-medium">602, 74 Downtown,<br />Baner, Pune - 411045</p>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#0A2540]">Phone</span>
            <a href="tel:+910000000000" className="text-sm font-bold text-gray-600 hover:text-[#2EC4B6]
             transition-colors w-fit">+91 7796 711 722 /+91 7875 711 722</a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className={`max-w-[1200px] mx-auto mt-16 px-5 pt-6 border-t border-gray-200 flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-widest transition-opacity duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p>© 2026 WISE LIFE. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-[#0A2540]">Privacy Policy</a>
          <a href="#" className="hover:text-[#0A2540]">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;