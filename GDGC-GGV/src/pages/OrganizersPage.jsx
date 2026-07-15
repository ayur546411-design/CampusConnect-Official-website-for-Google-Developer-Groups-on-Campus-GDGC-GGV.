import React, { useState } from 'react';
import {
  User,
  Shield,
  Megaphone,
  Rocket,
  Settings,
  ShieldCheck,
  Lightbulb,
  TrendingUp,
  BarChart3,
  Compass,
  Palette,
  Video,
  PenTool,
  Users,
  Cpu,
  Gamepad2,
  Lock,
  Code,
  Cloud,
  Terminal
} from 'lucide-react';

const LinkedinIcon = ({ className = "text-xs font-black" }) => (
  <span className={`font-sans font-black select-none lowercase leading-none ${className}`}>in</span>
);

// Import local assets
import logo from '../assets/logo.png';
import bottomImage from '../assets/bottom-image.png';

// Import core members' photos
import ishantPhoto from '../assets/core members/ishant_yadav.jpg.jpeg';
import divyanshuPhoto from '../assets/core members/divyanshu_mishra.jpeg';
import aditaPhoto from '../assets/core members/Ad.jpeg';
import amanPhoto from '../assets/core members/aman_kishore_pxYq1sd.jpg.jpeg';
import akankshaPhoto from '../assets/core members/ak.jpeg';
import ashishPhoto from '../assets/core members/ashish_gautam_ll5A6QN.jpg.jpeg';
import rishiPhoto from '../assets/core members/rishi_raj_singh_ggv.jpeg';
import shanmukhaPhoto from '../assets/core members/shanmukhavardhan_reddy_ll4uVEc.jpg.jpeg';
import sainathPhoto from '../assets/core members/sainath_kotage.jpg.jpeg';

// Traditional Folkloric Border Patterns using SVG SVGs
const OrangePattern = () => (
  <svg className="w-full h-3.5 rounded-t-2xl opacity-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 12" preserveAspectRatio="none">
    <rect width="100%" height="100%" fill="#fbbc05" />
    <path d="M 0 12 Q 2.5 6 5 12 T 10 12 T 15 12 T 20 12 T 25 12 T 30 12 T 35 12 T 40 12 T 45 12 T 50 12 T 55 12 T 60 12 T 65 12 T 70 12 T 75 12 T 80 12 T 85 12 T 90 12 T 95 12 T 100 12" fill="none" stroke="#fff" strokeWidth="1" />
    <circle cx="5" cy="5" r="1.2" fill="#fff" />
    <circle cx="15" cy="5" r="1.2" fill="#fff" />
    <circle cx="25" cy="5" r="1.2" fill="#fff" />
    <circle cx="35" cy="5" r="1.2" fill="#fff" />
    <circle cx="45" cy="5" r="1.2" fill="#fff" />
    <circle cx="55" cy="5" r="1.2" fill="#fff" />
    <circle cx="65" cy="5" r="1.2" fill="#fff" />
    <circle cx="75" cy="5" r="1.2" fill="#fff" />
    <circle cx="85" cy="5" r="1.2" fill="#fff" />
    <circle cx="95" cy="5" r="1.2" fill="#fff" />
  </svg>
);

const BluePattern = () => (
  <svg className="w-full h-3.5 rounded-t-2xl opacity-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 12" preserveAspectRatio="none">
    <rect width="100%" height="100%" fill="#4285f4" />
    <path d="M 0 0 L 5 8 L 10 0 L 15 8 L 20 0 L 25 8 L 30 0 L 35 8 L 40 0 L 45 8 L 50 0 L 55 8 L 60 0 L 65 8 L 70 0 L 75 8 L 80 0 L 85 8 L 90 0 L 95 8 L 100 0" fill="none" stroke="#fff" strokeWidth="1" />
    <circle cx="5" cy="10" r="1" fill="#fff" />
    <circle cx="15" cy="10" r="1" fill="#fff" />
    <circle cx="25" cy="10" r="1" fill="#fff" />
    <circle cx="35" cy="10" r="1" fill="#fff" />
    <circle cx="45" cy="10" r="1" fill="#fff" />
    <circle cx="55" cy="10" r="1" fill="#fff" />
    <circle cx="65" cy="10" r="1" fill="#fff" />
    <circle cx="75" cy="10" r="1" fill="#fff" />
    <circle cx="85" cy="10" r="1" fill="#fff" />
    <circle cx="95" cy="10" r="1" fill="#fff" />
  </svg>
);

const RedPattern = () => (
  <svg className="w-full h-3.5 rounded-t-2xl opacity-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 12" preserveAspectRatio="none">
    <rect width="100%" height="100%" fill="#ea4335" />
    <path d="M 0 6 C 5 0, 5 12, 10 6 C 15 0, 15 12, 20 6 C 25 0, 25 12, 30 6 C 35 0, 35 12, 40 6 C 45 0, 45 12, 50 6 C 55 0, 55 12, 60 6 C 65 0, 65 12, 70 6 C 75 0, 75 12, 80 6 C 85 0, 85 12, 90 6 C 95 0, 95 12, 100 6" fill="none" stroke="#fff" strokeWidth="1" />
  </svg>
);

// Decorative Marigold/Flower SVGs for "THE TEAMS" section header
const DecorativeFlower = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-[#34a853]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C11.5 2 11 3 11 4.5S11.5 7 12 7s1-1 1-2.5S12.5 2 12 2zm0 13c-.5 0-1 1-1 2.5s.5 2.5 1 2.5 1-1 1-2.5-.5-2.5-1-2.5zm-5-3c0-.5-1-1-2.5-1S2 11.5 2 12s1 1 2.5 1 2.5-.5 2.5-1zm13 0c0-.5-1-1-2.5-1S15 11.5 15 12s1 1 2.5 1 2.5-.5 2.5-1zm-9.5-3.5c-.35.35-.35.95 0 1.3s.95.35 1.3 0c.35-.35.35-.95 0-1.3s-.95-.35-1.3 0zm4.4 4.4c-.35.35-.35.95 0 1.3s.95.35 1.3 0c.35-.35.35-.95 0-1.3s-.95-.35-1.3 0z" fill="#ea4335" />
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" fill="#fbbc05" />
    <path d="M12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" fill="#4285f4" />
  </svg>
);

export default function OrganizersPage() {
  const [activeTeam, setActiveTeam] = useState(0);

  // Core Members Data
  const coreMembers = [
    {
      name: "Ishant Yadav",
      role: "GDGC Lead",
      dept: "CS/IT",
      photo: ishantPhoto,
      bg: "bg-[#FDDA16]",
      pattern: "orange",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Divyanshu Mishra",
      role: "Tech Lead",
      dept: "Information Technology",
      photo: divyanshuPhoto,
      bg: "bg-[#C4C4C4]",
      pattern: "blue",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Adita Singh",
      role: "Community Lead",
      dept: "Information Technology",
      photo: aditaPhoto,
      bg: "bg-gray-50",
      pattern: "red",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Aman Kishore",
      role: "Event Coordination Lead",
      dept: "Information Technology",
      photo: amanPhoto,
      bg: "bg-gray-50",
      pattern: "orange",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Akanksha Gujral",
      role: "Marketing and PR lead",
      dept: "CS/IT",
      photo: akankshaPhoto,
      bg: "bg-gray-50",
      pattern: "orange",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Ashish Gautam",
      role: "Head Of Operations",
      dept: "Computer Science and Engineering",
      photo: ashishPhoto,
      bg: "bg-gray-50",
      pattern: "blue",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Rishi Raj Singh",
      role: "Partnership Coordination lead",
      dept: "CS/IT",
      photo: rishiPhoto,
      bg: "bg-gray-50",
      pattern: "red",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Shanmukhavardhan Reddy",
      role: "Tech Lead",
      dept: "Electronics",
      photo: shanmukhaPhoto,
      bg: "bg-gray-50",
      pattern: "orange",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Sainath Kotage",
      role: "Creative Lead",
      dept: "Information Technology",
      photo: sainathPhoto,
      bg: "bg-gray-50",
      pattern: "blue",
      linkedin: "https://linkedin.com"
    }
  ];

  // Team Details Data (10 Teams)
  const teamsData = [
    {
      id: 1,
      name: "GRAPHIC DESIGN TEAM",
      icon: Palette,
      color: "text-[#34a853]",
      bgColor: "bg-[#34a853]/8",
      borderColor: "border-[#34a853]",
      hoverBg: "hover:bg-[#34a853]/5",
      desc: "The Graphic Design Team shapes the visual identity of GDGC GGV, creating branding assets, posters, event flyers, and digital marketing materials.",
      leads: [
        { name: "Palak Dev Bhagat", role: "Graphic Design Lead", desc: "Electrical Engineering : Second Year" },
        { name: "Atish Barik", role: "Co-Lead", desc: "Electronics and Communication Engineering : Second Year" }
      ],
      executives: [
        { name: "Manash Shukla", desc: "Mechanical Engineering : Second Year" },
        { name: "Ojaswi Chaurasiya", desc: "B.C.A : Second Year" },
        { name: "Kunal Rathore", desc: "B.C.A : Second Year" },
        { name: "Anuksha Pathak", desc: "Chemical Engineering : First Year" },
        { name: "Drishti Shrivastava", desc: "Information Technology Engineering : First Year" },
        { name: "Lily Sharma", desc: "Information Technology Engineering : First Year" },
        { name: "Sonal Pravin Tembhurne", desc: "Industrial and Production Engineering : First Year" }
      ]
    },
    {
      id: 2,
      name: "UI/UX TEAM",
      icon: PenTool,
      color: "text-[#fbbc05]",
      bgColor: "bg-[#fbbc05]/8",
      borderColor: "border-[#fbbc05]",
      hoverBg: "hover:bg-[#fbbc05]/5",
      desc: "The UI/UX Team focuses on user research, wireframing, and high-fidelity prototyping to build intuitive, user-friendly, and accessible interfaces for our digital products.",
      leads: [
        { name: "Harsh Srivastava", role: "UI/UX Lead", desc: "B.C.A : Third Year" },
        { name: "Ayush Kumar", role: "Co-Lead", desc: "Information Technology Engineering : Second Year" }
      ],
      executives: [
        { name: "Abhishek Jaiswal", desc: "Computer Science & Engineering : Second Year" },
        { name: "Mandakni", desc: "Electrical Engineering : Second Year" },
        { name: "Harsh Sahu", desc: "VFX Engineering : First Year" },
        { name: "Darsh Pamnani", desc: "B.Sc CS & IT : First Year" },
        { name: "Sakshi Surajkumar Ghosh", desc: "B.Sc CS & IT : First Year" },
        { name: "Harshita Yadav", desc: "Electronics and Communication Engineering : Second Year" }
      ]
    },
    {
      id: 3,
      name: "CONTENT TEAM",
      icon: Megaphone,
      color: "text-[#ea4335]",
      bgColor: "bg-[#ea4335]/8",
      borderColor: "border-[#ea4335]",
      hoverBg: "hover:bg-[#ea4335]/5",
      desc: "The Content Team drafts copy, prepares newsletters, manages public communications, and curates social media content to share the club's story.",
      leads: [
        { name: "Arpita Jaiswal", role: "Content Lead", desc: "Chemical Engineering : Second Year" },
        { name: "Saumil Kurre", role: "Co-Lead", desc: "B.C.A : Second Year" }
      ],
      executives: [
        { name: "Amit Lovanshi", desc: "Computer Science & Engineering : Second Year" },
        { name: "Gatha Agrawal", desc: "Information Technology Engineering : Second Year" },
        { name: "Pratik Jadhav", desc: "Electrical Engineering : First Year" },
        { name: "Divya Singh", desc: "VFX Engineering : First Year" },
        { name: "Pranaya Reddy", desc: "Computer Science & Engineering : Second Year" },
        { name: "Heer Kapadia", desc: "Information Technology Engineering : Second Year" }
      ]
    },
    {
      id: 4,
      name: "VISUAL MEDIA TEAM",
      icon: Video,
      color: "text-[#4285f4]",
      bgColor: "bg-[#4285f4]/8",
      borderColor: "border-[#4285f4]",
      hoverBg: "hover:bg-[#4285f4]/5",
      desc: "The Visual Media Team handles photography, videography, and post-production editing for all GDGC GGV sessions, capture key moments, and create promotional video reels.",
      leads: [
        { name: "Jeet", role: "Visual Media Lead", desc: "Computer Science & Engineering : Second Year" },
        { name: "Aditya Dewangan", role: "Co-Lead", desc: "AI & DS Engineering : First Year" }
      ],
      executives: [
        { name: "Kuldeep Dhruw", desc: "B.C.A : First Year" },
        { name: "Priyanshu Singh Bais", desc: "B.C.A : First Year" },
        { name: "Lokesh Kumar Burman", desc: "B.C.A : First Year" },
        { name: "Vijay Chandan", desc: "B.C.A : Second Year" },
        { name: "Praveen Sahu", desc: "VFX Engineering : First Year" },
        { name: "Harshit Sahu", desc: "B.Sc. CS & IT : First Year" },
        { name: "Ansuman Mistry", desc: "B.C.A : Second Year" },
        { name: "Divyansh Sahay", desc: "VFX Engineering : First Year" }
      ]
    },
    {
      id: 5,
      name: "CO-ORDINATION TEAM",
      icon: Users,
      color: "text-[#009688]",
      bgColor: "bg-[#009688]/8",
      borderColor: "border-[#009688]",
      hoverBg: "hover:bg-[#009688]/5",
      desc: "The Co-ordination Team plans schedules, coordinates logistics, manages guest onboarding, and ensures the smooth execution of all on-ground activities and events.",
      leads: [
        { name: "Arth Sharma", role: "Co-ordination Lead", desc: "BCA : Second Year" },
        { name: "Sachin Verma", role: "Co-Lead", desc: "Information Technology Engineering : Second Year" }
      ],
      executives: [
        { name: "Pratham Singh", desc: "BCA : Second Year" },
        { name: "Nikhil Bhadani", desc: "Computer Science & Engineering : First Year" },
        { name: "Mohit Kumar", desc: "Computer Science & Engineering : First Year" },
        { name: "Pinkesh Kumar Mishra", desc: "Information Technology Engineering : First Year" },
        { name: "Bhupendra Maravi", desc: "BCA : First Year" },
        { name: "Udaya Chandra Praska", desc: "B.Sc. CS & IT : First Year" },
        { name: "Chetan Kumar Singh", desc: "AI & DS Engineering : First Year" },
        { name: "Vaibhav kumar", desc: "Information Technology Engineering : First Year" },
        { name: "Diksha Patel", desc: "Bsc. CS & IT : 3rd Year" }
      ]
    },
    {
      id: 6,
      name: "AI/ML TEAM",
      icon: Cpu,
      color: "text-[#fbbc05]",
      bgColor: "bg-[#fbbc05]/8",
      borderColor: "border-[#fbbc05]",
      hoverBg: "hover:bg-[#fbbc05]/5",
      desc: "The AI/ML Team explores artificial intelligence, machine learning, and data science, hosting hands-on workshops and building intelligent systems.",
      leads: [
        { name: "Aditya Pandey", role: "AI/ML Lead", desc: "Computer Science & Engineering : Third Year" },
        { name: "Ashutosh Sahu", role: "Co-Lead", desc: "Computer Science & Engineering : Second Year" }
      ],
      executives: [
        { name: "Akanchha", desc: "Chemical Engineering : First Year" },
        { name: "Sk Hasham Hashmi", desc: "AI & DS Engineering : First Year" },
        { name: "Anshika Dubey", desc: "B.C.A : First Year" },
        { name: "Aryan Kumar Shaw", desc: "Electronics and Communication Engineering : First Year" },
        { name: "Saurabh Yadav", desc: "B.C.A : Second Year" },
        { name: "Gulshan Kumar", desc: "Information Technology Engineering : First Year" },
        { name: "Sarthak Shukla", desc: "B.Sc. CS & IT : Third Year" }
      ]
    },
    {
      id: 7,
      name: "GAME DEVELOPMENT TEAM",
      icon: Gamepad2,
      color: "text-[#ea4335]",
      bgColor: "bg-[#ea4335]/8",
      borderColor: "border-[#ea4335]",
      hoverBg: "hover:bg-[#ea4335]/5",
      desc: "The Game Development Team works on game design, 2D/3D physics, rendering pipelines, and builds interactive games using Unity and Unreal Engine.",
      leads: [
        { name: "Chhayansh Sahu", role: "Game Dev Lead", desc: "Electronics and Communication Engineering : Third Year" },
        { name: "Niraj Dhore", role: "Co-Lead", desc: "Information Technology Engineering : Third Year" }
      ],
      executives: [
        { name: "Shreyansh Sharma", desc: "Electronics and Communication Engineering : Second Year" },
        { name: "Prachee Kashyap", desc: "Information Technology Engineering : Second Year" },
        { name: "Sanket Srivastava", desc: "VFX Engineering : First Year" },
        { name: "Priyanshu Sharma", desc: "B.Sc CS & IT : First Year" },
        { name: "Om Kumar", desc: "VFX Engineering : First Year" },
        { name: "Singh Krishna Harisahay", desc: "Electronics and Communication Engineering : First Year" }
      ]
    },
    {
      id: 8,
      name: "CYBER SECURITY TEAM",
      icon: Lock,
      color: "text-[#34a853]",
      bgColor: "bg-[#34a853]/8",
      borderColor: "border-[#34a853]",
      hoverBg: "hover:bg-[#34a853]/5",
      desc: "The Cyber Security Team educates students on network security, ethical hacking, cryptography, and safe online practices.",
      leads: [
        { name: "Vivek Swami", role: "Cyber Security Lead", desc: "Computer Science & Engineering : Second Year" },
        { name: "Anushree Bhattacharya", role: "Co-Lead", desc: "Information Technology Engineering : Second Year" }
      ],
      executives: [
        { name: "Tanish Samir", desc: "Electrical Engineering : Second Year" },
        { name: "Sundaram Kumar", desc: "B.C.A : Second Year" },
        { name: "Aditya Kumar Jha", desc: "B.C.A : First Year" },
        { name: "Sanskriti", desc: "B.C.A : First Year" },
        { name: "Vishvdev Singh", desc: "B.C.A : First Year" },
        { name: "Om SanjayKumar Rokde", desc: "Chemical Engineering : First Year" }
      ]
    },
    {
      id: 9,
      name: "WEB DEVELOPMENT TEAM",
      icon: Code,
      color: "text-[#4285f4]",
      bgColor: "bg-[#4285f4]/8",
      borderColor: "border-[#4285f4]",
      hoverBg: "hover:bg-[#4285f4]/5",
      desc: "The Web Development Team designs and builds fully responsive, interactive, and high-performance websites and web applications for GDGC GGV.",
      leads: [
        { name: "Shriyansh Thakur", role: "Web Dev Lead", desc: "Electronics and Communication Engineering : Third Year" },
        { name: "Yog Raisagar", role: "Co-Lead", desc: "B.C.A : Second Year" }
      ],
      executives: [
        { name: "Simran Raj", desc: "B.C.A : First Year" },
        { name: "Bhaskar Patel", desc: "Information Technology Engineering : First Year" },
        { name: "Rahul Upadhyay", desc: "Information Technology Engineering : First Year" },
        { name: "Gaurav Singh", desc: "Electronics and Communication Engineering : Second Year" },
        { name: "Pratham Mishra", desc: "Computer Science & Engineering : Second Year" },
        { name: "Aashish Prem", desc: "B.Sc. CS & IT : First Year" },
        { name: "Nitin Maurya", desc: "Computer Science & Engineering : Second Year" },
        { name: "Raunak Chandravanshi", desc: "B.Sc. CS & IT : Second Year" }
      ]
    },
    {
      id: 10,
      name: "CLOUD COMPUTING TEAM",
      icon: Cloud,
      color: "text-[#009688]",
      bgColor: "bg-[#009688]/8",
      borderColor: "border-[#009688]",
      hoverBg: "hover:bg-[#009688]/5",
      desc: "The Cloud Computing Team teaches virtualization, serverless computing, backend deployments, and helps students get certified on Google Cloud Platform (GCP).",
      leads: [
        { name: "Nikhil Barman", role: "Cloud Lead", desc: "B.C.A : Third Year" },
        { name: "Hitesh Rajpurohit", role: "Co-Lead", desc: "B.Sc CS & IT : Second Year" }
      ],
      executives: [
        { name: "Awantika Chauhan", desc: "Information Technology Engineering : Second Year" },
        { name: "Seha Parasher", desc: "B.C.A : Second Year" },
        { name: "Richchik Bardhan", desc: "Chemical Engineering : First Year" },
        { name: "Abhinav Prasad", desc: "B.C.A : First Year" },
        { name: "Sankalp Raj Oraon", desc: "B.C.A : First Year" },
        { name: "Mayank Kaushik", desc: "B.C.A : First Year" },
        { name: "Sneha Shukla", desc: "Chemical Engineering : Second Year" }
      ]
    },
    {
      id: 11,
      name: "OPEN SOURCE & COMPETITIVE PROGRAMING TEAM",
      icon: Terminal,
      color: "text-[#ea4335]",
      bgColor: "bg-[#ea4335]/8",
      borderColor: "border-[#ea4335]",
      hoverBg: "hover:bg-[#ea4335]/5",
      desc: "The Open Source & Competitive Programming Team focuses on algorithms, data structures, coding challenges, and active contributions to global open-source software.",
      leads: [
        { name: "Vivek Kumar", role: "OS & CP Lead", desc: "Information Technology Engineering : Third Year" },
        { name: "Abhijeet Kumar", role: "Co-Lead", desc: "Computer Science & Engineering : Second Year" }
      ],
      executives: [
        { name: "Suraj Kumar", desc: "Computer Science & Engineering : Second Year" },
        { name: "Rishabh Anand", desc: "Computer Science & Engineering : Second Year" },
        { name: "Abhishek Kumar", desc: "Computer Science & Engineering : Second Year" },
        { name: "Ashwani Kumar", desc: "Information Technology Engineering : Second Year" },
        { name: "Priyanshu Raj", desc: "Information Technology Engineering : First Year" },
        { name: "Udaya Chandra Praska", desc: "B.Sc. CS & IT : First Year" },
        { name: "Radheshyam Chaudhary", desc: "Information Technology Engineering : First Year" }
      ]
    }
  ];

  const currentTeamData = teamsData[activeTeam];

  return (
    <div className="w-full bg-[#fbfbfa] min-h-screen py-10 font-sans tracking-wide">

      {/* 1. MEET OUR TEAM HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-black text-[#0f172a] uppercase tracking-tight flex items-center justify-center gap-3">
          Meet Our <span className="text-[#ea4335]">Team</span>
        </h1>
        {/* GDG Accent Multi-color Dots/Lines Divider */}
        <div className="flex items-center gap-1.5 justify-center mt-4">
          <span className="w-12 h-1 bg-[#4285f4] rounded-full"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#34a853]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#fbbc05]"></span>
          <span className="w-12 h-1 bg-[#ea4335] rounded-full"></span>
        </div>
      </div>

      {/* 2. CORE TEAM LEADS GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {coreMembers.map((member, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-3xl border border-gray-200/60 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all duration-300 relative group"
              >
                {/* Folkloric Colorful Ribbon Top Border */}
                {member.pattern === "orange" && <OrangePattern />}
                {member.pattern === "blue" && <BluePattern />}
                {member.pattern === "red" && <RedPattern />}

                {/* Photo container / Placeholder */}
                <div className="p-5 flex justify-center items-center">
                  <div className={`w-full aspect-square rounded-2xl ${member.bg} flex items-center justify-center overflow-hidden border border-gray-100 shadow-inner relative`}>
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      // Empty card pattern outline
                      <div className="w-full h-full bg-white/40 flex items-center justify-center border-2 border-dashed border-gray-200/60 rounded-2xl">
                        <User className="w-16 h-16 text-gray-300/80" strokeWidth={1} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Member details */}
                <div className="px-5 pb-5 pt-1 flex flex-col items-start flex-grow relative">
                  <h3 className="text-xl font-black text-[#202124] tracking-tight mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-gray-700 mb-0.5">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-400 font-medium">
                    {member.dept}
                  </p>

                  {/* LinkedIn Icon Button */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-5 right-5 w-8 h-8 rounded-full border border-[#4285f4]/30 hover:border-[#4285f4] flex items-center justify-center text-[#4285f4] hover:bg-[#4285f4]/5 transition-all active:scale-95"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <LinkedinIcon className="text-[#4285f4] text-xs font-black" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. THE TEAMS TABS SELECTOR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-center gap-3 mb-8">
          <DecorativeFlower />
          <h2 className="text-3xl font-black text-[#0f172a] uppercase tracking-wider text-center">
            THE <span className="text-[#fbbc05]">TEAMS</span>
          </h2>
          <div className="rotate-180 flex items-center justify-center">
            <DecorativeFlower />
          </div>
        </div>

        {/* Team selector buttons centered */}
        <div className="flex md:flex-wrap overflow-x-auto no-scrollbar flex-row md:justify-center gap-3.5 pb-3 -mx-4 px-4 sm:mx-0 sm:px-0">
          {teamsData.map((team, index) => {
            const IconComponent = team.icon;
            const isActive = activeTeam === index;
            return (
              <button
                key={team.id}
                onClick={() => setActiveTeam(index)}
                className={`flex-shrink-0 flex items-center gap-3 px-4 py-3.5 rounded-xl border font-bold text-sm transition-all duration-200 cursor-pointer text-left active:scale-95 ${isActive
                  ? `${team.bgColor} ${team.borderColor} ${team.color} shadow-sm border-2`
                  : `bg-white border-gray-200/80 text-gray-600 ${team.hoverBg} hover:text-gray-900`
                  }`}
              >
                <div className={`p-1.5 rounded-lg ${isActive ? 'bg-white' : 'bg-gray-100'} flex items-center justify-center flex-shrink-0`}>
                  <IconComponent className={`w-4 h-4 ${isActive ? team.color : 'text-gray-500'}`} />
                </div>
                <span>{team.name.replace(" TEAM", "")}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. TEAM DETAILS AND EXECUTIVES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-[2.5rem] border border-gray-200 shadow-sm p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

            {/* Left Side: Team Information & Leads */}
            <div className="lg:col-span-4 flex flex-col space-y-7">
              <div className="space-y-3">
                <h3 className="text-2xl font-black text-[#0f172a] uppercase tracking-tight">
                  {currentTeamData.name}
                </h3>
                {/* Accent line under team name */}
                <div className="flex items-center gap-1">
                  <span className="w-8 h-1 bg-[#4285f4] rounded-full"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34a853]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fbbc05]"></span>
                  <span className="w-8 h-1 bg-[#ea4335] rounded-full"></span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed pt-2">
                  {currentTeamData.desc}
                </p>
              </div>

              {/* Lead Cards */}
              <div className="space-y-4">
                {currentTeamData.leads.map((lead, idx) => (
                  <div
                    key={idx}
                    className="bg-[#f8fafd] border border-gray-100 rounded-2xl p-4 flex items-start gap-4 hover:shadow-sm transition-all duration-200 relative"
                  >
                    {/* Blue user profile avatar */}
                    <div className="w-10 h-10 rounded-full bg-[#4285f4] flex items-center justify-center text-white flex-shrink-0">
                      <User className="w-5 h-5 fill-current" />
                    </div>

                    <div className="flex-grow pr-6">
                      <h4 className="text-sm font-black text-[#202124] tracking-tight">
                        {lead.name}
                      </h4>
                      <p className="text-xs font-semibold text-gray-500 mb-1.5">
                        {lead.role}
                      </p>
                      <p className="text-xs text-gray-400 leading-normal font-medium">
                        {lead.desc}
                      </p>
                    </div>

                    {/* LinkedIn Button */}
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 text-[#4285f4] hover:text-blue-700 transition-colors flex items-center justify-center border border-[#4285f4]/30 rounded-full w-7 h-7 hover:bg-[#4285f4]/5"
                      aria-label={`${lead.name} LinkedIn Profile`}
                    >
                      <LinkedinIcon className="text-[#4285f4] text-[11px] font-black" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle Divider for large screens */}
            <div className="hidden lg:block lg:col-span-1 flex justify-center">
              <div className="w-px h-full bg-gray-100"></div>
            </div>

            {/* Right Side: Executives Grid */}
            <div className="lg:col-span-7 flex flex-col">

              {/* Divider with centered EXECUTIVES text */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex-grow h-px bg-gray-200/80"></div>
                <span className="text-gray-400 font-bold uppercase tracking-wider text-[11px]">
                  EXECUTIVES
                </span>
                <div className="flex-grow h-px bg-gray-200/80"></div>
              </div>

              {/* Grid of 6 executives */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {currentTeamData.executives.map((exec, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col justify-between hover:shadow-md hover:border-gray-200 transition-all duration-300 min-h-[145px] relative group"
                  >
                    <div>
                      {/* Avatar */}
                      <div className="w-8 h-8 rounded-full bg-[#4285f4] flex items-center justify-center text-white mb-3">
                        <User className="w-4 h-4 fill-current" />
                      </div>
                      <h4 className="text-sm font-black text-[#202124] tracking-tight truncate">
                        {exec.name}
                      </h4>
                      <p className="text-xs text-gray-400 font-medium leading-normal mt-1 pr-2 line-clamp-3">
                        {exec.desc}
                      </p>
                    </div>

                    {/* LinkedIn Button */}
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 text-[#4285f4]/50 group-hover:text-[#4285f4] hover:text-blue-700 transition-colors flex items-center justify-center border border-[#4285f4]/30 rounded-full w-6 h-6 hover:bg-[#4285f4]/5"
                      aria-label={`${exec.name} LinkedIn Profile`}
                    >
                      <LinkedinIcon className="text-[#4285f4] text-[10px] font-black" />
                    </a>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* 5. TRADITIONAL TRIBAL BORDER BANNER AT THE BOTTOM */}
      <div className="w-full relative overflow-hidden mt-6">
        <img
          src={bottomImage}
          alt="Traditional tribal geometric decorative border"
          className="w-full h-auto object-cover max-h-16 md:max-h-24 opacity-95"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

    </div>
  );
}
