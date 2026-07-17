import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, CheckCircle, Bell } from 'lucide-react';

export default function LMSPromotion() {
  const [appNotificationIndex, setAppNotificationIndex] = useState(0);

  const appNotifications = [
    { title: "🔔 Physics Homework", body: "New assignment added: Thermodynamics. Due Friday." },
    { title: "📈 Mid-Term Results", body: "Math Result: 94/100 (Grade A+). Click to view details." },
    { title: "🚌 Transit Update", body: "Bus Route 4 has left University Town. ETA 2:35 PM." },
    { title: "📢 Principal's Message", body: "Tomorrow will be a colorful clothes day for junior wing." }
  ];

  useEffect(() => {
    const notifyTimer = setInterval(() => {
      setAppNotificationIndex((prev) => (prev + 1) % appNotifications.length);
    }, 3800);
    return () => clearInterval(notifyTimer);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full min-h-[850px] lg:h-[90vh] flex items-center bg-primary text-white overflow-hidden border-y border-white/5 py-16 lg:py-0 select-none"
    >
      {/* Immersive Decorative Backdrops */}
      <div className="absolute -bottom-48 -left-24 w-[500px] h-[500px] rounded-full bg-secondary/15 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute -top-48 -right-24 w-[600px] h-[600px] rounded-full bg-[#4361ee]/20 blur-[150px] pointer-events-none z-0"></div>

      {/* Grid container kept at standard max-width to center content while background stays full-screen */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full relative z-10">
        
        {/* Column A: App Info & Stores */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-2 block">
            Smart Learning, Anytime, Anywhere
          </span>

          <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
            Pen & Page LMS <br />& Mobile App
          </h2>

          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-xl font-light">
            Bridging communications and learning. Our custom Parent-Student Portal provides live grade reports, daily attendance tallies, homework sheets, and direct messages with teachers right in your pocket.
          </p>

          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10 w-full max-w-xl">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
              <span className="text-sm md:text-base font-sans font-medium">Real-time Grades & Scores</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
              <span className="text-sm md:text-base font-sans font-medium">RFID-Linked Attendance</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
              <span className="text-sm md:text-base font-sans font-medium">Downloadable Assignments</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
              <span className="text-sm md:text-base font-sans font-medium">Direct Admin Chat Support</span>
            </div>
          </div>

          {/* Authentic App Store & Google Play Buttons */}
          <div className="flex flex-wrap gap-4 w-full">
            {/* App Store (Apple) */}
            <a 
              href="#download" 
              className="bg-black border border-white/10 hover:border-white/30 transition-all rounded-xl py-2.5 px-5 flex items-center gap-3 hover:-translate-y-1 transform shadow-xl shadow-black/30 select-none"
            >
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.62.71-1.16 1.85-1.01 2.96 1.09.08 2.21-.57 2.94-1.39z" />
              </svg>
              <div className="text-left leading-none">
                <span className="block text-[9px] font-sans font-medium uppercase tracking-wider text-white/60 mb-0.5">Download on the</span>
                <span className="block text-base font-sans font-bold text-white tracking-tight">App Store</span>
              </div>
            </a>

            {/* Google Play */}
            <a 
              href="#download" 
              className="bg-black border border-white/10 hover:border-white/30 transition-all rounded-xl py-2.5 px-5 flex items-center gap-3 hover:-translate-y-1 transform shadow-xl shadow-black/30 select-none"
            >
              <svg className="w-7 h-7" viewBox="0 0 48 48">
                <path fill="#4caf50" d="M35.6,24.4L11,38.6c-0.6,0.3-1.3,0.1-1.6-0.5C9.1,37.6,9,37.1,9,36.6V11.4c0-0.7,0.5-1.3,1.2-1.4c0.5-0.1,1,0.1,1.4,0.3l24.6,14.2c0.6,0.3,0.8,1,0.5,1.6C36.4,23.8,36,24.1,35.6,24.4z" />
                <path fill="#ff9800" d="M11,10L35.6,24.2c0.6,0.3,0.8,1,0.5,1.6c-0.3,0.3-0.7,0.6-1.1,0.8L11,38V10z" />
                <path fill="#f44336" d="M9,11.4v25.2c0,0.7,0.5,1.3,1.2,1.4c0.5,0.1,1-0.1,1.4-0.3L35.6,24L9,11.4z" />
                <path fill="#2196f3" d="M9,11.4L22.8,24L9,36.6V11.4z" />
              </svg>
              <div className="text-left leading-none">
                <span className="block text-[9px] font-sans font-medium uppercase tracking-wider text-white/60 mb-0.5">GET IT ON</span>
                <span className="block text-base font-sans font-bold text-white tracking-tight">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        {/* Column B: Scaled CSS Phone Mockup */}
        <div className="lg:col-span-5 flex justify-center items-center w-full mt-8 lg:mt-0">
          <div className="w-[280px] h-[540px] sm:w-[310px] sm:h-[600px] bg-[#0c1424] border-[8px] sm:border-[10px] border-slate-800 rounded-[38px] sm:rounded-[46px] shadow-2xl relative overflow-hidden flex flex-col justify-between p-4 sm:p-4.5 select-none">

            {/* Notch Camera */}
            <div className="w-28 h-4.5 bg-slate-800 rounded-b-2xl absolute top-0 left-1/2 -translate-x-1/2 z-30"></div>

            {/* App UI Header */}
            <div className="flex justify-between items-center px-2 pt-4 pb-3 border-b border-white/5 z-20 shrink-0">
              <div className="flex items-center gap-1.5">
                <div className="w-5.5 h-5.5 bg-secondary text-primary font-serif font-black text-[11px] rounded-md flex items-center justify-center">
                  PP
                </div>
                <span className="text-xs font-serif font-bold text-white tracking-wide">Pen & Page</span>
              </div>
              <div className="relative">
                <Bell className="w-4 h-4 text-white/70" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#0c1424]"></span>
              </div>
            </div>

            {/* App UI Scroll Area */}
            <div className="flex-grow flex flex-col gap-4.5 py-4.5 px-1 overflow-hidden z-20 text-left">

              {/* Simulated Student Profile */}
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=200&auto=format&fit=crop"
                  alt="Student Avatar"
                  className="w-11 h-11 rounded-full object-cover border border-secondary/20"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">Ahmad Ali</h4>
                  <span className="text-[10px] text-white/60">Class 10 - Matric</span>
                </div>
              </div>

              {/* Simulated Attendance Widget */}
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between shrink-0">
                <div>
                  <span className="text-[9px] text-white/50 block font-semibold tracking-wider">ATTENDANCE</span>
                  <span className="text-sm font-serif font-bold text-white">96% Present</span>
                  <span className="text-[9px] text-emerald-400 block mt-1">Excellent Status</span>
                </div>

                {/* Conic progress path */}
                <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-white/10"
                      strokeWidth="3.2"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <motion.path
                      className="text-secondary"
                      strokeWidth="3.2"
                      strokeDasharray="96, 100"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 0.96 }}
                      transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
                    />
                  </svg>
                  <span className="absolute text-[9px] text-white font-bold font-sans">96%</span>
                </div>
              </div>

              {/* Simulated Grade Analytics Chart */}
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shrink-0">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[9px] text-white/50 font-semibold block tracking-wider">MIDTERM GRADES</span>
                  <span className="text-[9px] text-secondary font-medium">View Report</span>
                </div>
                <div className="flex justify-around items-end h-20 pt-2 gap-2">
                  {/* Math Bar */}
                  <div className="flex flex-col items-center flex-grow">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "92%" }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="w-4.5 bg-secondary/85 rounded-t-sm"
                    />
                    <span className="text-[8px] text-white/70 mt-1">Math</span>
                  </div>
                  {/* Physics Bar */}
                  <div className="flex flex-col items-center flex-grow">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "95%" }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
                      className="w-4.5 bg-blue-500/85 rounded-t-sm"
                    />
                    <span className="text-[8px] text-white/70 mt-1">Phys</span>
                  </div>
                  {/* Chemistry Bar */}
                  <div className="flex flex-col items-center flex-grow">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "88%" }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                      className="w-4.5 bg-purple-500/85 rounded-t-sm"
                    />
                    <span className="text-[8px] text-white/70 mt-1">Chem</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Simulated Notification Stack at Bottom of Phone */}
            <div className="h-20 relative w-full px-1 overflow-hidden z-25 shrink-0 flex items-center justify-center">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={appNotificationIndex}
                  initial={{ y: 35, opacity: 0, scale: 0.95 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -35, opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="absolute inset-x-1 p-2.5 bg-secondary border border-secondary-fixedDim rounded-xl text-primary flex items-start gap-2.5 shadow-lg"
                >
                  <div className="bg-primary text-white p-1 rounded-lg shrink-0">
                    <Bell className="w-3.5 h-3.5" />
                  </div>
                  <div className="overflow-hidden">
                    <h5 className="text-[10px] font-bold tracking-wide leading-none mb-1">
                      {appNotifications[appNotificationIndex].title}
                    </h5>
                    <p className="text-[9px] text-primary/80 line-clamp-2 leading-tight font-sans">
                      {appNotifications[appNotificationIndex].body}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="w-24 h-1 bg-white/20 rounded-full mx-auto mt-2 shrink-0 z-20"></div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}