import React, { useState, useRef } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  Building, 
  Building2, 
  Pencil, 
  MapPin, 
  UploadCloud, 
  Lock, 
  Trash2, 
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  MessageSquareCode
} from 'lucide-react';
import bottomImage from '../assets/bottom-image.png';
import welcomeIllu from '../assets/join community.png';

export default function JoinPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    yearSemester: '',
    branch: '',
    whyJoin: '',
    college: 'Guru Ghasidas Vishwavidyalaya',
    city: ''
  });
  
  const [resumeFile, setResumeFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const validateFile = (file) => {
    if (!file) return false;
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
      alert("Unsupported file type. Please upload a PDF, DOC, or DOCX file.");
      return false;
    }

    if (file.size > maxSize) {
      alert("File is too large. Maximum size allowed is 5MB.");
      return false;
    }

    return true;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        setResumeFile(file);
      }
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        setResumeFile(file);
      }
    }
  };

  const handleFileDelete = (e) => {
    e.stopPropagation();
    setResumeFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate fields
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.yearSemester) newErrors.yearSemester = "Please select Year/Semester";
    if (!formData.branch) newErrors.branch = "Please select Branch/Department";
    if (!formData.whyJoin.trim()) newErrors.whyJoin = "This field is required";
    if (!formData.college.trim()) newErrors.college = "College name is required";
    if (!formData.city.trim()) newErrors.city = "City is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to first error
      const firstErrorKey = Object.keys(newErrors)[0];
      const el = document.getElementsByName(firstErrorKey)[0];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Success response
    setSubmitSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      yearSemester: '',
      branch: '',
      whyJoin: '',
      college: 'Guru Ghasidas Vishwavidyalaya',
      city: ''
    });
    setResumeFile(null);
    setSubmitSuccess(false);
    setErrors({});
  };

  if (submitSuccess) {
    return (
      <div className="w-full bg-[#f8fafd] py-20 px-4 flex justify-center items-center font-sans">
        <div className="max-w-xl w-full bg-white rounded-[2.5rem] border border-gray-100 shadow-xl p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-500 via-red-500 to-green-500"></div>
          
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto text-[#34a853] animate-bounce">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <h2 className="text-3xl font-black text-[#202124] tracking-tight">
            Registration Successful!
          </h2>
          
          <p className="text-gray-600 leading-relaxed text-[15px]">
            Thank you, <strong className="text-blue-600">{formData.fullName}</strong>, for applying to join GDGC GGV. 
            We have received your application, and our community leads will review your details soon. 
            Keep an eye on your email (<strong className="text-gray-800">{formData.email}</strong>) for updates!
          </p>

          <div className="pt-4">
            <button 
              onClick={resetForm}
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer"
            >
              Submit Another Response
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full bg-[#f8fafd] font-sans pb-16">
      
      {/* 1. WELCOME BANNER SECTION */}
      <div className="w-full h-auto overflow-hidden bg-gray-50 relative group flex justify-center items-center border-b border-gray-100 mb-4">
        <img
          src={welcomeIllu}
          alt="GDGC GGV Community Welcome Banner"
          className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.005]"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.insertAdjacentHTML('afterend', `
              <div class="w-full h-64 flex flex-col items-center justify-center bg-gray-50 border-b border-dashed border-gray-200 text-gray-400 p-6">
                <svg class="w-16 h-16 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-sm font-bold uppercase tracking-wider">Join community Banner Asset</span>
              </div>
            `);
          }}
        />
      </div>

      {/* 2. REGISTRATION FORM CONTAINER */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <form onSubmit={handleSubmit} className="space-y-12">

          {/* ================= SECTION 01: PERSONAL INFO ================= */}
          <div className="space-y-6">
            
            {/* Header with Dotted Horizontal Line */}
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#188038] text-white flex items-center justify-center font-bold text-sm">
                  01
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#202124] tracking-tight">
                  Personal Info
                </h3>
              </div>
              <div className="flex-grow border-t-2 border-dotted border-gray-300 ml-4"></div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Full Name */}
              <div className="md:col-span-6">
                <div className={`flex items-center gap-3.5 px-5 py-3.5 rounded-2xl border bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100/50 transition-all ${errors.fullName ? 'border-red-500 ring-4 ring-red-100/50' : 'border-gray-200'}`}>
                  <User className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <div className="flex-grow flex flex-col items-start justify-center gap-1">
                    <label className="text-xs font-bold text-gray-400 tracking-wider uppercase select-none flex items-center">
                      Full Name <span className="text-red-500 ml-1 font-bold text-[13px]">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name" 
                      className="w-full bg-transparent border-none outline-none text-base text-gray-800 placeholder-gray-400 p-0 m-0 focus:ring-0 font-medium"
                    />
                  </div>
                </div>
                {errors.fullName && <p className="text-red-500 text-xs mt-1.5 text-left font-semibold">{errors.fullName}</p>}
              </div>

              {/* Email Address */}
              <div className="md:col-span-6">
                <div className={`flex items-center gap-3.5 px-5 py-3.5 rounded-2xl border bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100/50 transition-all ${errors.email ? 'border-red-500 ring-4 ring-red-100/50' : 'border-gray-200'}`}>
                  <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <div className="flex-grow flex flex-col items-start justify-center gap-1">
                    <label className="text-xs font-bold text-gray-400 tracking-wider uppercase select-none flex items-center">
                      Email Address <span className="text-red-500 ml-1 font-bold text-[13px]">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email" 
                      className="w-full bg-transparent border-none outline-none text-base text-gray-800 placeholder-gray-400 p-0 m-0 focus:ring-0 font-medium"
                    />
                  </div>
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1.5 text-left font-semibold">{errors.email}</p>}
              </div>

              {/* Phone Number (Wider in design: 8 cols) */}
              <div className="md:col-span-8">
                <div className={`flex items-center gap-3.5 px-5 py-3.5 rounded-2xl border bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100/50 transition-all ${errors.phone ? 'border-red-500 ring-4 ring-red-100/50' : 'border-gray-200'}`}>
                  <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <div className="flex-grow flex flex-col items-start justify-center gap-1">
                    <label className="text-xs font-bold text-gray-400 tracking-wider uppercase select-none flex items-center">
                      Phone Number <span className="text-red-500 ml-1 font-bold text-[13px]">*</span>
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number" 
                      className="w-full bg-transparent border-none outline-none text-base text-gray-800 placeholder-gray-400 p-0 m-0 focus:ring-0 font-medium"
                    />
                  </div>
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1.5 text-left font-semibold">{errors.phone}</p>}
              </div>

              {/* Year / Semester (Narrower in design: 4 cols) */}
              <div className="md:col-span-4">
                <div className={`flex items-center gap-3.5 px-5 py-3.5 rounded-2xl border bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100/50 transition-all ${errors.yearSemester ? 'border-red-500 ring-4 ring-red-100/50' : 'border-gray-200'}`}>
                  <GraduationCap className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <div className="flex-grow flex flex-col items-start justify-center gap-1 relative pr-6 w-full">
                    <label className="text-xs font-bold text-gray-400 tracking-wider uppercase select-none flex items-center">
                      Year / Semester <span className="text-red-500 ml-1 font-bold text-[13px]">*</span>
                    </label>
                    <select 
                      name="yearSemester"
                      value={formData.yearSemester}
                      onChange={handleChange}
                      className="w-full bg-transparent border-none outline-none text-base text-gray-800 placeholder-gray-400 p-0 m-0 focus:ring-0 font-medium cursor-pointer appearance-none"
                    >
                      <option value="" disabled>Select</option>
                      <option value="1st Year (Sem 1)">1st Year (Sem 1)</option>
                      <option value="1st Year (Sem 2)">1st Year (Sem 2)</option>
                      <option value="2nd Year (Sem 3)">2nd Year (Sem 3)</option>
                      <option value="2nd Year (Sem 4)">2nd Year (Sem 4)</option>
                      <option value="3rd Year (Sem 5)">3rd Year (Sem 5)</option>
                      <option value="3rd Year (Sem 6)">3rd Year (Sem 6)</option>
                      <option value="4th Year (Sem 7)">4th Year (Sem 7)</option>
                      <option value="4th Year (Sem 8)">4th Year (Sem 8)</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-0 bottom-1.5 pointer-events-none" />
                  </div>
                </div>
                {errors.yearSemester && <p className="text-red-500 text-xs mt-1.5 text-left font-semibold">{errors.yearSemester}</p>}
              </div>

              {/* Branch / Department (Full width) */}
              <div className="md:col-span-12">
                <div className={`flex items-center gap-3.5 px-5 py-3.5 rounded-2xl border bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100/50 transition-all ${errors.branch ? 'border-red-500 ring-4 ring-red-100/50' : 'border-gray-200'}`}>
                  <Building className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <div className="flex-grow flex flex-col items-start justify-center gap-1 relative pr-6 w-full">
                    <label className="text-xs font-bold text-gray-400 tracking-wider uppercase select-none flex items-center">
                      Branch / Department <span className="text-red-500 ml-1 font-bold text-[13px]">*</span>
                    </label>
                    <select 
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      className="w-full bg-transparent border-none outline-none text-base text-gray-800 placeholder-gray-400 p-0 m-0 focus:ring-0 font-medium cursor-pointer appearance-none"
                    >
                      <option value="" disabled>Select your branch</option>
                      <option value="Computer Science & Engineering">Computer Science & Engineering (CSE)</option>
                      <option value="Information Technology">Information Technology (IT)</option>
                      <option value="Electronics & Communication Engineering">Electronics & Communication Engineering (ECE)</option>
                      <option value="Mechanical Engineering">Mechanical Engineering</option>
                      <option value="Civil Engineering">Civil Engineering</option>
                      <option value="Chemical Engineering">Chemical Engineering</option>
                      <option value="Industrial & Production Engineering">Industrial & Production Engineering (IPE)</option>
                      <option value="Pure/Applied Sciences (B.Sc, M.Sc)">Pure/Applied Sciences (B.Sc, M.Sc)</option>
                      <option value="Commerce & Management">Commerce & Management</option>
                      <option value="Other">Other / Non-Engineering</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-0 bottom-1.5 pointer-events-none" />
                  </div>
                </div>
                {errors.branch && <p className="text-red-500 text-xs mt-1.5 text-left font-semibold">{errors.branch}</p>}
              </div>

              {/* Why join GDGC GGV (Full width) */}
              <div className="md:col-span-12">
                <div className={`flex items-start gap-3.5 px-5 py-4 rounded-2xl border bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100/50 transition-all ${errors.whyJoin ? 'border-red-500 ring-4 ring-red-100/50' : 'border-gray-200'}`}>
                  <Pencil className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1.5" />
                  <div className="flex-grow flex flex-col items-start justify-center gap-1.5 w-full">
                    <label className="text-xs font-bold text-gray-400 tracking-wider uppercase select-none flex items-center mb-0.5">
                      Why do you want to join GDGC GGV? <span className="text-red-500 ml-1 font-bold text-[13px]">*</span>
                    </label>
                    <textarea 
                      name="whyJoin"
                      value={formData.whyJoin}
                      onChange={handleChange}
                      placeholder="Tell us a few words about yourself..." 
                      rows="3"
                      className="w-full bg-transparent border-none outline-none text-base text-gray-800 placeholder-gray-400 p-0 m-0 focus:ring-0 font-medium resize-none min-h-[100px]"
                    />
                  </div>
                </div>
                {errors.whyJoin && <p className="text-red-500 text-xs mt-1.5 text-left font-semibold">{errors.whyJoin}</p>}
              </div>

            </div>
          </div>

          {/* ================= SECTION 02: CONTACT INFO ================= */}
          <div className="space-y-6">
            
            {/* Header with Dotted Horizontal Line */}
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#1a73e8] text-white flex items-center justify-center font-bold text-sm">
                  02
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#202124] tracking-tight">
                  Contact Info
                </h3>
              </div>
              <div className="flex-grow border-t-2 border-dotted border-gray-300 ml-4"></div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 gap-6">
              
              {/* College / University */}
              <div>
                <div className={`flex items-center gap-3.5 px-5 py-3.5 rounded-2xl border bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100/50 transition-all ${errors.college ? 'border-red-500 ring-4 ring-red-100/50' : 'border-gray-200'}`}>
                  <Building2 className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <div className="flex-grow flex flex-col items-start justify-center gap-1">
                    <label className="text-xs font-bold text-gray-400 tracking-wider uppercase select-none flex items-center">
                      College / University <span className="text-red-500 ml-1 font-bold text-[13px]">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      placeholder="Enter your college / university name" 
                      className="w-full bg-transparent border-none outline-none text-base text-gray-800 placeholder-gray-400 p-0 m-0 focus:ring-0 font-medium"
                    />
                  </div>
                </div>
                {errors.college && <p className="text-red-500 text-xs mt-1.5 text-left font-semibold">{errors.college}</p>}
              </div>

              {/* City */}
              <div>
                <div className={`flex items-center gap-3.5 px-5 py-3.5 rounded-2xl border bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100/50 transition-all ${errors.city ? 'border-red-500 ring-4 ring-red-100/50' : 'border-gray-200'}`}>
                  <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <div className="flex-grow flex flex-col items-start justify-center gap-1">
                    <label className="text-xs font-bold text-gray-400 tracking-wider uppercase select-none flex items-center">
                      City <span className="text-red-500 ml-1 font-bold text-[13px]">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter your city" 
                      className="w-full bg-transparent border-none outline-none text-base text-gray-800 placeholder-gray-400 p-0 m-0 focus:ring-0 font-medium"
                    />
                  </div>
                </div>
                {errors.city && <p className="text-red-500 text-xs mt-1.5 text-left font-semibold">{errors.city}</p>}
              </div>

            </div>
          </div>

          {/* ================= SECTION 03: UPLOAD YOUR RESUME ================= */}
          <div className="space-y-6">
            
            {/* Header with Dotted Horizontal Line */}
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#f29900] text-white flex items-center justify-center font-bold text-sm">
                  03
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#202124] tracking-tight">
                  Upload Your Resume
                </h3>
              </div>
              <div className="flex-grow border-t-2 border-dotted border-gray-300 ml-4"></div>
            </div>

            {/* Drop Zone Box */}
            <div className="relative">
              
              {/* Optional background plants decoration as absolute items */}
              <div className="absolute left-4 bottom-2 pointer-events-none opacity-20 hidden sm:block">
                <svg className="w-10 h-20 text-[#137333]" viewBox="0 0 40 80" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 70 V10 C20 10, 30 20, 20 30 C10 40, 20 50, 20 70 Z" />
                  <path d="M20 50 C28 45, 32 35, 20 30" />
                  <path d="M20 40 C12 35, 8 25, 20 20" />
                </svg>
              </div>
              
              <div className="absolute right-4 bottom-2 pointer-events-none opacity-20 hidden sm:block">
                <svg className="w-10 h-20 text-[#137333]" viewBox="0 0 40 80" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 70 V10 C20 10, 10 20, 20 30 C30 40, 20 50, 20 70 Z" />
                  <path d="M20 50 C12 45, 8 35, 20 30" />
                  <path d="M20 40 C28 35, 32 25, 20 20" />
                </svg>
              </div>

              {/* Main Dotted File Box */}
              <div
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current.click()}
                className={`w-full border-2 border-dashed rounded-[1.8rem] py-10 px-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center space-y-4 bg-white/60 backdrop-blur-xs
                  ${dragActive ? 'border-blue-500 bg-blue-50/30' : 'border-[#f29900]/70 hover:border-[#f29900] hover:bg-yellow-50/10'}
                  ${resumeFile ? 'border-green-500 bg-green-50/10' : ''}
                `}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />

                {/* Cloud/Upload Icon */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors 
                  ${resumeFile ? 'bg-green-50 text-green-500' : 'bg-orange-50/80 text-[#f29900]'}
                `}>
                  <UploadCloud className="w-9 h-9" />
                </div>

                {resumeFile ? (
                  <div className="space-y-2 max-w-md">
                    <p className="text-sm font-bold text-gray-800">
                      Successfully Selected:
                    </p>
                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 px-4 py-2 rounded-xl text-green-700 text-sm font-semibold max-w-full">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate max-w-[200px] sm:max-w-xs">{resumeFile.name}</span>
                      <button 
                        onClick={handleFileDelete}
                        className="p-1 hover:bg-green-100 rounded-full text-red-500 cursor-pointer ml-1"
                        title="Remove file"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-[11px] text-gray-400">
                      ({(resumeFile.size / (1024 * 1024)).toFixed(2)} MB)
                    </p>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-gray-700">
                      Click to upload your resume
                    </p>
                    <p className="text-xs text-gray-400 font-semibold">
                      PDF, DOC, DOCX (Max. 5MB)
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Lock / Safe Message */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-gray-400 pt-2">
              <Lock className="w-3.5 h-3.5" />
              <span>Your information is safe with us.</span>
            </div>

            {/* Submit Button Block */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white text-base font-bold rounded-full shadow-lg hover:shadow-xl transition-all active:scale-[0.97] cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 translate-y-[0.5px]" />
                <span>SUBMIT</span>
              </button>
            </div>

          </div>
        </form>
      </div>

      {/* Decorative Bottom Divider Banner */}
      <div className="w-full overflow-hidden flex justify-center items-center mt-16">
        <img 
          src={bottomImage} 
          alt="Bottom Divider Pattern" 
          className="w-full h-8 sm:h-10 object-cover object-center"
        />
      </div>

    </section>
  );
}
