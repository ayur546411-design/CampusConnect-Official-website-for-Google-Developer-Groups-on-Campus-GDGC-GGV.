import React from 'react';
import socialConnectImg from '../assets/contact.png'; 

export default function ContactMap() {
  
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      brandColor: "group-hover:text-[#0a66c2]",
      hoverBg: "hover:bg-[#0a66c2]/10 hover:border-[#0a66c2]/30",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      brandColor: "group-hover:text-[#e1306c]",
      hoverBg: "hover:bg-[#e1306c]/10 hover:border-[#e1306c]/30",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: "X (Twitter)",
      url: "https://x.com",
      brandColor: "group-hover:text-black",
      hoverBg: "hover:bg-gray-100 hover:border-gray-300",
      svg: (
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      brandColor: "group-hover:text-[#ff0000]",
      hoverBg: "hover:bg-[#ff0000]/10 hover:border-[#ff0000]/30",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      url: "https://github.com",
      brandColor: "group-hover:text-[#24292e]",
      hoverBg: "hover:bg-[#24292e]/10 hover:border-[#24292e]/30",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch font-sans tracking-wide">
       
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-6 md:p-8 flex flex-col justify-between space-y-4 text-left group hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
         
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#4285f4] to-[#34a853]"></div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-xl font-black text-[#202124] tracking-tight uppercase flex items-center gap-2">
            <span className="text-[#4285f4]">📍</span> Get In Touch
          </h3>
          <p className="text-xs text-[#5f6368] font-medium">
            Find our primary operation center on campus. Click below to scale navigation.
          </p>
          <button 
            onClick={() => window.open("https://maps.google.com/?q=Guru+Ghasidas+Vishwavidyalaya+Bilaspur")}
            className="text-xs font-bold text-[#4285f4] hover:text-blue-700 flex items-center gap-1.5 bg-blue-50/60 px-3 py-1.5 rounded-xl border border-blue-100/40 transition-all cursor-pointer mt-2"
          >
            <span>Open in Google Maps</span>
            <span className="text-[10px]">↗</span>
          </button>
        </div>
 
        <div className="w-full h-[280px] md:h-[320px] rounded-2xl overflow-hidden border border-gray-100 shadow-inner bg-gray-50/50 relative p-1 mt-2">
          <iframe 
            title="GGV Campus Hub Location Pin"
            
            src="https://maps.google.com/maps?q=Guru%20Ghasidas%20Vishwavidyalaya%20Bilaspur&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full rounded-xl border-0 relative z-10"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
 
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-6 md:p-8 flex flex-col justify-between space-y-4 text-left group hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
         
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#fbbc05] to-[#ea4335]"></div>

        <div className="space-y-2 pt-2 z-10">
          <h3 className="text-xl font-black text-[#202124] tracking-tight uppercase flex items-center gap-2">
            <span className="text-[#ea4335]">🌐</span> Social Connect
          </h3>
          <p className="text-xs text-[#5f6368] leading-relaxed max-w-md">
            Follow us on our social media platforms and stay fully connected with everything going on across the community.
          </p>
        </div>
 
        <div className="flex flex-wrap gap-2.5 z-10">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-xl bg-gray-50/70 border border-gray-200/50 flex items-center justify-center text-gray-500 transition-all duration-300 transform group/btn hover:-translate-y-0.5 shadow-sm ${social.hoverBg} ${social.brandColor}`}
              title={social.name}
            >
              {social.svg}
            </a>
          ))}
           
          <div className="w-10 h-10 rounded-xl bg-blue-50/60 text-[#4285f4] border border-blue-100/30 flex items-center justify-center font-mono font-black text-xs select-none">
            &lt;/&gt;
          </div>
        </div>
 
        <div className="w-full h-[180px] md:h-[220px] bg-gray-50/40 border border-gray-100 rounded-2xl flex items-center justify-center overflow-hidden z-10 relative mt-2">
          <img 
            src={socialConnectImg} 
            alt="Community team collaboration illustration graphic" 
            
            className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.03] transition-transform duration-700 group-hover:scale-103"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.insertAdjacentHTML('afterend', '<div class="text-xs font-bold text-gray-300">GDGC Community Connect Network</div>');
            }}
          />
        </div>

        
        <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-blue-50/30 rounded-full blur-3xl pointer-events-none"></div>
      </div>

    </div>
  );
}