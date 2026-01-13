import React, { useEffect, useState, useRef } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen bg-[#0B2C4D] flex flex-col items-center pt-[80px] pb-20 px-5 font-sans text-white overflow-hidden"
    >
      
      {/* Header Section */}
      <div className={`text-center mb-10 transition-all duration-1000 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}>
        <h1 className="text-4xl md:text-5xl font-black mb-3 tracking-tight text-[#F8FAFC]">Contact Us</h1>
        <div className={`h-1 bg-[#2EC4B6] mx-auto mb-4 transition-all duration-1000 ${
          isVisible ? 'w-12' : 'w-0'
        }`}></div>
        <p className="text-gray-300 text-lg font-medium">
          Wise Life — We innovate solutions for the ease of life.
        </p>
      </div>

      {/* Main Form Container */}
      <div className={`w-full max-w-[950px] bg-white p-10 rounded-3xl border border-[#102A43]/10 text-black 
      shadow-lg transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
      }`}>
        
        <h2 className="text-center text-xs font-bold uppercase tracking-[0.2em] mb-10 text-[#0B2C4D]">
          Send us a message
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-12" onSubmit={(e) => e.preventDefault()}>
          
          {/* Column 1: Identity & Contact Info */}
          <div className={`flex flex-col gap-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-black uppercase tracking-wider text-[#0B2C4D]">Full Name</label>
              <input type="text" placeholder="Name" className="border-b-2 border-gray-100 py-2 outline-none 
              focus:border-[#2EC4B6] transition-colors bg-transparent" />
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-black uppercase tracking-wider text-[#0B2C4D]">Email Address</label>
              <input type="email" placeholder="Email" className="border-b-2 border-gray-100 py-2 
              outline-none focus:border-[#2EC4B6] transition-colors bg-transparent" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-black uppercase tracking-wider text-[#0B2C4D]">Phone Number</label>
              <input type="tel" placeholder="+91 00000 00000" className="border-b-2 border-gray-100 py-2 
              outline-none focus:border-[#2EC4B6] transition-colors bg-transparent" />
            </div>

            {/* NEW: Address Input Field */}
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-black uppercase tracking-wider
               text-[#0B2C4D]">Address</label>
              <input 
                type="text" 
                placeholder="Address" 
                className="border-b-2 border-gray-100 py-2 outline-none focus:border-[#2EC4B6] 
                transition-colors bg-transparent" 
              />
            </div>
          </div>

          {/* Column 2: Message & Map */}
          <div className={`flex flex-col gap-6 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-black uppercase tracking-wider text-[#0B2C4D]">Message</label>
              <textarea placeholder="How can we help?" rows="3" className="border border-gray-50 bg-gray-50 
              rounded-xl p-4 outline-none focus:border-[#2EC4B6] transition-colors resize-none text-sm"></textarea>
            </div>
            
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black uppercase tracking-wider text-[#0B2C4D]">Location</label>
              <div className="w-full h-[180px] rounded-2xl overflow-hidden border-2 border-gray-100 shadow-inner">
              <iframe 
                title="Office Location" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.355104443906!2d73.781105775988!3d18.55804566802613!2m3!1f0
                !2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf589780c4c3%3A0x217fe83432efd790!2s74%20DOWN%20TOWN%20By%20AURA%
                20Realtors!5e0!3m2!1sen!2sin!4v1705060000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
            
            <button type="submit" className="bg-[#2EC4B6] text-white py-3 rounded-xl text-[11px] font-bold uppercase 
            tracking-widest hover:bg-[#0B2C4D] transition-all shadow-lg active:scale-95">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;