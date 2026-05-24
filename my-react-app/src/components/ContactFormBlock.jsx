import React, { useState } from 'react';
import contactHeroImg  from '../assets/contactHeroImg2.png';

export default function ContactFormBlock() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your request has been successfully submitted to the core team.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full space-y-12">
      
     
      <div className="w-full h-[280px] md:h-[380px] rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden bg-gray-50">
        <img 
          src={contactHeroImg} 
          alt="GDGC GGV Community Past Session Banner" 
          className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.02]"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.insertAdjacentHTML('afterend', '<div class="w-full h-full flex items-center justify-center bg-gray-100 text-sm font-bold text-gray-400">Community Gallery Banner Asset</div>');
          }}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch pt-2">
         
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left">
          <div className="space-y-3">
            <span className="text-sm font-bold text-[#34a853] tracking-widest uppercase block">
              GET IN TOUCH
            </span>
            <h3 className="text-3xl font-black text-[#202124] tracking-tight">
              Contact Channels
            </h3>
            <p className="text-[#5f6368] text-[15px] leading-relaxed max-w-sm">
              Prefer direct mail loops? Use our channels to reach out to specific operational branches on campus.
            </p>
          </div>
 
          <div className="space-y-4 max-w-md w-full flex-grow flex flex-col justify-center">
            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-5 group hover:border-blue-100 hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-50/60 flex items-center justify-center text-[#4285f4] flex-shrink-0 font-bold text-2xl group-hover:scale-110 transition-transform">
                ✉️
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Email Us</h4>
                <p className="text-base font-bold text-[#202124] break-all tracking-tight">gdgc.ggv@gmail.com</p>
              </div>
            </div>
 
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-5 group hover:border-green-100 hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-green-50/60 flex items-center justify-center text-[#34a853] flex-shrink-0 font-bold text-2xl group-hover:scale-110 transition-transform">
                📍
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Our Campus</h4>
                <p className="text-base font-bold text-[#202124] tracking-tight">Guru Ghasidas Vishwavidyalaya, Bilaspur</p>
              </div>
            </div>
          </div>
        </div>
 
        <div className="lg:col-span-7 w-full">
          <div className="w-full bg-white rounded-[2.5rem] border border-gray-100/90 shadow-md p-8 md:p-10 max-w-2xl mx-auto text-left relative overflow-hidden">
             
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#4285f4] via-[#ea4335] to-[#fbbc05]"></div>

            <h3 className="text-2xl font-bold text-[#202124] mb-1">Send a Message</h3>
            <p className="text-xs text-gray-400 font-medium mb-6">Fields marked with * are required to secure your line.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Box Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3c4043] tracking-wide block">Your Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="John Doe"
                  className="w-full px-4 py-3.5 bg-gray-50/50 focus:bg-white rounded-xl border border-gray-200/80 focus:border-[#4285f4] focus:ring-4 focus:ring-blue-100/40 transition-all outline-none text-sm text-gray-800 font-medium placeholder-gray-400"
                />
              </div>
 
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3c4043] tracking-wide block">Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="johndoe@example.com"
                  className="w-full px-4 py-3.5 bg-gray-50/50 focus:bg-white rounded-xl border border-gray-200/80 focus:border-[#4285f4] focus:ring-4 focus:ring-blue-100/40 transition-all outline-none text-sm text-gray-800 font-medium placeholder-gray-400"
                />
              </div>
 
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3c4043] tracking-wide block">Message Context *</label>
                <textarea 
                  name="message" 
                  required 
                  rows="4" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Type your core query details here..."
                  className="w-full px-4 py-3.5 bg-gray-50/50 focus:bg-white rounded-xl border border-gray-200/80 focus:border-[#4285f4] focus:ring-4 focus:ring-blue-100/40 transition-all outline-none text-sm text-gray-800 font-medium resize-none placeholder-gray-400 min-h-[110px]"
                ></textarea>
              </div>
 
              <button 
                type="submit" 
                className="w-full text-center bg-[#4285f4] hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer text-xs uppercase tracking-widest mt-2"
              >
                Submit Form
              </button>
            </form>
          </div>
        </div>

      </div>

    </div>
  );
}