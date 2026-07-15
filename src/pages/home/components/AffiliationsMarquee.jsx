import React from 'react';
import { motion } from 'framer-motion';

// --- INLINE SVG COMPONENTS FOR HIGH-FIDELITY AFFILIATION LOGOS ---
const KPKBoardLogo = () => (
  <svg className="w-10 h-10 text-secondary" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="4" />
    <path d="M50 15 L25 45 H75 Z" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.2" />
    <path d="M30 55 H70 V75 H30 Z" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.1" />
    <line x1="50" y1="45" x2="50" y2="75" stroke="currentColor" strokeWidth="3" />
    <circle cx="50" cy="30" r="4" fill="currentColor" />
  </svg>
);

const OxfordLogo = () => (
  <svg className="w-10 h-10 text-primary" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="22" y="18" width="56" height="64" rx="6" stroke="currentColor" strokeWidth="4" />
    <path d="M22 36 H78" stroke="currentColor" strokeWidth="3" />
    <path d="M22 54 H78" stroke="currentColor" strokeWidth="3" />
    <path d="M38 72 H62" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <circle cx="50" cy="27" r="4" fill="currentColor" />
  </svg>
);

const CambridgeLogo = () => (
  <svg className="w-10 h-10 text-[#002f6c]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 12 L82 30 V70 L50 88 L18 70 V30 Z" stroke="currentColor" strokeWidth="4" fill="currentColor" fillOpacity="0.15" />
    <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="3" />
    <line x1="50" y1="20" x2="50" y2="34" stroke="currentColor" strokeWidth="3" />
    <line x1="50" y1="66" x2="50" y2="80" stroke="currentColor" strokeWidth="3" />
    <path d="M30 40 L40 46" stroke="currentColor" strokeWidth="3" />
    <path d="M70 40 L60 46" stroke="currentColor" strokeWidth="3" />
  </svg>
);

const BritishCouncilLogo = () => (
  <svg className="w-16 h-8 text-[#003087]" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="16" height="16" rx="2" fill="currentColor" />
    <rect x="34" y="10" width="16" height="16" rx="2" fill="currentColor" />
    <rect x="58" y="10" width="16" height="16" rx="2" fill="currentColor" />
    <rect x="82" y="10" width="16" height="16" rx="2" fill="currentColor" />
  </svg>
);

const MicrosoftLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="36" height="36" fill="#F25022" />
    <rect x="54" y="10" width="36" height="36" fill="#7FBA00" />
    <rect x="10" y="54" width="36" height="36" fill="#00A4EF" />
    <rect x="54" y="54" width="36" height="36" fill="#FFB900" />
  </svg>
);

export default function AffiliationsMarquee() {
  const affiliations = [
    { name: "KPK Board Peshawar", type: "BISE Board", logo: <KPKBoardLogo /> },
    { name: "Oxford University Press", type: "Curriculum Partner", logo: <OxfordLogo /> },
    { name: "Cambridge Assessment", type: "Int. Standard", logo: <CambridgeLogo /> },
    { name: "British Council", type: "Language Partner", logo: <BritishCouncilLogo /> },
    { name: "Microsoft Showcase School", type: "EdTech Excellence", logo: <MicrosoftLogo /> }
  ];

  return (
    <section className="bg-surface-containerLow py-12 border-y border-outline-variant/10 relative overflow-hidden select-none">
      {/* Soft Left and Right Gradient Fades to mask entry and exit */}
      <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-surface-containerLow to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-surface-containerLow to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 mb-6">
        <span className="text-secondary tracking-widest text-[10px] font-bold uppercase text-center block mb-2">Accredited & Registered With</span>
      </div>

      {/* Outer scrolling track */}
      <div className="relative w-full overflow-hidden flex items-center py-4">
        <motion.div
          className="flex whitespace-nowrap gap-16 shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25 // 25s loop speed
          }}
        >
          {/* List Copy 1 */}
          <div className="flex gap-16 items-center shrink-0">
            {affiliations.map((item, idx) => (
              <div
                key={`copy1-${idx}`}
                className="flex items-center gap-4 text-primary opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="bg-white p-2 rounded-lg border border-outline-variant/10 shadow-sm flex items-center justify-center shrink-0">
                  {item.logo}
                </div>
                <div className="flex flex-col text-left shrink-0">
                  <span className="font-serif font-bold text-sm tracking-wide text-primary leading-tight">
                    {item.name}
                  </span>
                  <span className="text-[9px] text-text-variant/60 font-sans tracking-wider uppercase font-semibold leading-none mt-0.5">
                    {item.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* List Copy 2 (identical copy to make the train marquee loop seamlessly) */}
          <div className="flex gap-16 items-center shrink-0">
            {affiliations.map((item, idx) => (
              <div
                key={`copy2-${idx}`}
                className="flex items-center gap-4 text-primary opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="bg-white p-2 rounded-lg border border-outline-variant/10 shadow-sm flex items-center justify-center shrink-0">
                  {item.logo}
                </div>
                <div className="flex flex-col text-left shrink-0">
                  <span className="font-serif font-bold text-sm tracking-wide text-primary leading-tight">
                    {item.name}
                  </span>
                  <span className="text-[9px] text-text-variant/60 font-sans tracking-wider uppercase font-semibold leading-none mt-0.5">
                    {item.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
