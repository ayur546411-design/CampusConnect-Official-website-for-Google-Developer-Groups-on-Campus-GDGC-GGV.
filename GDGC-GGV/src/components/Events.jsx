import React from 'react';

import workshopImg from '../assets/event1.jpg';
import techTalkImg from '../assets/event2.jpg';
import hackathonImg from '../assets/event3.jpg';
import networkingImg from '../assets/event4.jpg';

export default function Events() {
  return (
    <section id="events" className="w-full bg-[#f8f9fa] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="flex items-center gap-0.5 opacity-80">
            <span className="w-2 h-2 rounded-sm bg-[#ea4335] rotate-45 block"></span>
            <span className="w-2 h-2 rounded-sm bg-[#4285f4] rotate-45 block"></span>
            <span className="w-2 h-2 rounded-sm bg-[#34a853] rotate-45 block"></span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black tracking-wider text-[#1a73e8] uppercase text-center font-sans">
            OUR EVENTS
          </h2>

          <div className="flex items-center gap-0.5 opacity-80">
            <span className="w-2 h-2 rounded-sm bg-[#34a853] rotate-45 block"></span>
            <span className="w-2 h-2 rounded-sm bg-[#4285f4] rotate-45 block"></span>
            <span className="w-2 h-2 rounded-sm bg-[#ea4335] rotate-45 block"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 justify-items-center">

          <div className="flex flex-col items-center text-center max-w-[240px] group">
            <div className="w-44 h-44 rounded-full p-1 border-2 border-dashed border-[#ea4335] flex items-center justify-center bg-white mb-6 transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-full overflow-hidden bg-red-50">
                <img
                  src={workshopImg}
                  alt="Workshops"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h3 className="text-xl font-extrabold tracking-wide text-[#ea4335] uppercase mb-3">
              WORKSHOPS
            </h3>

            <p className="text-gray-700 font-medium text-sm leading-relaxed">
              Hands-on learning sessions
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-[240px] group">
            <div className="w-44 h-44 rounded-full p-1 border-2 border-dashed border-[#4285f4] flex items-center justify-center bg-white mb-6 transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-full overflow-hidden bg-blue-50">
                <img
                  src={techTalkImg}
                  alt="Tech Talks"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h3 className="text-xl font-extrabold tracking-wide text-[#4285f4] uppercase mb-3">
              TECH TALKS
            </h3>

            <p className="text-gray-700 font-medium text-sm leading-relaxed">
              Insights from experts & industry leaders
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-[240px] group">
            <div className="w-44 h-44 rounded-full p-1 border-2 border-dashed border-[#34a853] flex items-center justify-center bg-white mb-6 transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-full overflow-hidden bg-green-50">
                <img
                  src={hackathonImg}
                  alt="Hackathons"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h3 className="text-xl font-extrabold tracking-wide text-[#34a853] uppercase mb-3">
              HACKATHONS
            </h3>

            <p className="text-gray-700 font-medium text-sm leading-relaxed">
              Build. Collaborate. Innovate.
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-[240px] group">
            <div className="w-44 h-44 rounded-full p-1 border-2 border-dashed border-[#137333] flex items-center justify-center bg-white mb-6 transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-full overflow-hidden bg-emerald-50">
                <img
                  src={networkingImg}
                  alt="Networking"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h3 className="text-xl font-extrabold tracking-wide text-[#137333] uppercase mb-3">
              NETWORKING
            </h3>

            <p className="text-gray-700 font-medium text-sm leading-relaxed">
              Connect, collaborate and grow
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}