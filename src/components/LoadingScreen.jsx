import { useState, useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const phases = [
    {
      pct: 0,
      phase: "Initializing",
      label: "DWI NURHIDAYAT",
      sub: "",
    },
    {
      pct: 25,
      phase: "Loading Home",
      label: "HOME",
      sub: "Preparing landing page...",
    },
    {
      pct: 50,
      phase: "Loading About",
      label: "ABOUT",
      sub: "Loading profile...",
    },
    {
      pct: 75,
      phase: "Loading Projects",
      label: "PROJECTS",
      sub: "Fetching portfolio...",
    },
    {
      pct: 100,
      phase: "Loading Contact",
      label: "CONTACT",
      sub: "Ready to launch.",
    },
  ];

  const current = phases[phaseIndex];

  const totalBlocks = 20;
  const activeBlocks = Math.round((current.pct / 100) * totalBlocks);

  useEffect(() => {
    if (phaseIndex >= phases.length - 1) {
      const finish = setTimeout(() => {
        onComplete();
      }, 900);

      return () => clearTimeout(finish);
    }

    const timer = setTimeout(() => {
      setVisible(false);

      setTimeout(() => {
        setPhaseIndex((i) => i + 1);
        setVisible(true);
      }, 250);
    }, 1000);

    return () => clearTimeout(timer);
  }, [phaseIndex, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black px-6 font-mono">

      <div className="w-full max-w-md">

        {/* Header */}
        <div
          className="transition-all duration-300"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateY(0px)"
              : "translateY(8px)",
          }}
        >
          <p className="text-blue-500 tracking-[4px] uppercase text-xs mb-3">
            {current.phase}
          </p>

          <h1 className="text-3xl font-bold tracking-[6px] text-white">
            {current.label}
          </h1>

          <p className="mt-2 text-slate-500 text-sm tracking-widest">
            {current.sub}
          </p>
        </div>

        {/* Percentage */}
        <div className="flex justify-between items-center mt-10 mb-3">

          <span className="text-slate-600 uppercase text-xs tracking-[3px]">
            Progress
          </span>

          <span className="text-blue-400 text-sm font-semibold">
            {current.pct}%
          </span>

        </div>

        {/* Segmented Progress */}
        <div className="flex gap-[4px]">

          {[...Array(totalBlocks)].map((_, i) => (
            <div
              key={i}
              className={`
                h-4
                flex-1
                rounded-sm
                transition-all
                duration-500
                ${
                  i < activeBlocks
                    ? "bg-blue-500"
                    : "bg-slate-800"
                }
                ${
                  i === activeBlocks - 1
                    ? "animate-pulse shadow-[0_0_15px_#3b82f6]"
                    : ""
                }
              `}
            />
          ))}

        </div>

        {/* Footer */}
        <div className="flex justify-between mt-8 text-[11px] tracking-widest">

          <span className="text-slate-600">
            SYSTEM STATUS
          </span>

          <span className="text-green-400">
            {current.pct === 100 ? "READY" : "LOADING"}
          </span>

        </div>

      </div>
    </div>
  );
};