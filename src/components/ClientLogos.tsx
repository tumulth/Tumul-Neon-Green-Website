import React from 'react';

export const ClientLogos: React.FC = () => {
  const clients = [
    { name: 'BIMACME', icon: '▲' },
    { name: 'Sangreen Logistics', icon: '◆' },
    { name: 'Sangreen Renewables', icon: '●' },
    { name: 'Siddhivinayak Precast', icon: '■' },
    { name: 'Krisala x Hiranandani', icon: '❖' },
    { name: 'Smart Bazaar', icon: '◈' },
    { name: 'Central Park Hotel', icon: '✦' },
    { name: 'Soma Cafe', icon: '●' },
    { name: 'Bandish Studios', icon: '★' },
  ];

  return (
    <div className="w-full py-10 md:py-14 border-t border-b border-black/10 dark:border-white/10 bg-transparent overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-6 md:gap-10">
        {clients.map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-sm sm:text-base font-semibold font-sans tracking-tight text-[#555] dark:text-[#999] hover:text-[#111] dark:hover:text-white transition-colors"
          >
            <span className="text-[#C8FF00] text-xs">{c.icon}</span>
            <span>{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
