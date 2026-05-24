import React, { useState } from 'react';

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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* --- LEFT SIDE: INFO FEED CARDS (5 Cols) --- */}
      <div className="lg:col-span-5 space-y-6 text-left">
        <div className="space-y-3">
          <span className="text-sm font-bold text-[#4285f4] tracking-widest uppercase block">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#202124] tracking-tight leading-none">
            Connect With Us
          </h2>
          <p className="text-[#5f6368] text-base leading-relaxed max-w-sm pt-2">
            Have questions about bootcamps, community paths, or event timelines? Send us a note!
          </p>
        </div>

        <div className="space-y-4 max-w-md">
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#4285f4] flex-shrink-0 font-bold text-xl">✉️</div>
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Us</h4>
              <p className="text-sm font-bold text-[#202124] break-all">gdgc.ggv@gmail.com</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#34a853] flex-shrink-0 font-bold text-xl">📍</div>
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Our Campus</h4>
              <p className="text-sm font-bold text-[#202124]">Guru Ghasidas Vishwavidyalaya, Bilaspur</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- RIGHT SIDE: CONTRAST INPUT FORM (7 Cols) --- */}
      <div className="lg:col-span-7 w-full">
        <div className="w-full bg-white rounded-[2.5rem] border border-gray-100/80 shadow-md p-8 md:p-10 max-w-2xl mx-auto text-left">
          <h3 className="text-2xl font-bold text-[#202124] mb-1">Send a Message</h3>
          <p className="text-xs text-gray-400 font-medium mb-6">We typically respond to inquiries within 24 hours.</p>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#3c4043] tracking-wide block">Your Name</label>
              <input 
                type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe"
                className="w-full px-4 py-3.5 bg-gray-50/60 focus:bg-white rounded-xl border border-gray-200 focus:border-[#4285f4] focus:ring-2 focus:ring-blue-100/50 transition-all outline-none text-sm text-gray-800 font-medium"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#3c4043] tracking-wide block">Email Address</label>
              <input 
                type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="johndoe@example.com"
                className="w-full px-4 py-3.5 bg-gray-50/60 focus:bg-white rounded-xl border border-gray-200 focus:border-[#4285f4] focus:ring-2 focus:ring-blue-100/50 transition-all outline-none text-sm text-gray-800 font-medium"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#3c4043] tracking-wide block">Message Context</label>
              <textarea 
                name="message" required rows="4" value={formData.message} onChange={handleChange} placeholder="Type your message details here..."
                className="w-full px-4 py-3.5 bg-gray-50/60 focus:bg-white rounded-xl border border-gray-200 focus:border-[#4285f4] focus:ring-2 focus:ring-blue-100/50 transition-all outline-none text-sm text-gray-800 font-medium resize-none"
              ></textarea>
            </div>

            <button type="submit" className="w-full text-center bg-[#4285f4] hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-sm transition-all active:scale-[0.98] cursor-pointer text-sm uppercase tracking-wider">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}