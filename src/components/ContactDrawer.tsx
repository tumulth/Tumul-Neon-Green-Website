import React, { useState } from 'react';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactDrawer: React.FC<ContactDrawerProps> = ({ isOpen, onClose }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Brand Identity']);
  const [timeline, setTimeline] = useState('Q2 2026');
  const [budget, setBudget] = useState('$5k – $15k');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brief, setBrief] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const availableServices = [
    'Brand Identity',
    'Visual Systems',
    'Digital Design',
    'Art Direction',
    'Social & Editorial',
    'Motion Design'
  ];

  const handleToggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('tumul41@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  const handleDrawerWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-[110] flex justify-end bg-black/75 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        data-lenis-prevent="true"
        onWheel={handleDrawerWheel}
        className="relative w-full max-w-2xl bg-[#F5F4F0] dark:bg-[#121210] text-[#111111] dark:text-[#F5F4F0] h-full overflow-y-auto shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 overscroll-contain transition-colors duration-300"
        style={{
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 bg-[#F5F4F0]/95 dark:bg-[#121210]/95 backdrop-blur-md border-b border-[#111111]/10 dark:border-white/10 px-6 md:px-10 py-5 flex items-center justify-between">
          <div>
            <span className="font-mono text-[10px] tracking-widest text-[#8A8A84] dark:text-[#888] uppercase block">
              INITIATE COLLABORATION
            </span>
            <span className="text-lg font-bold uppercase tracking-tight text-[#111111] dark:text-[#F5F4F0]">
              Start a Conversation
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-[#111111]/20 dark:border-white/20 flex items-center justify-center text-[#111111] dark:text-[#F5F4F0] hover:bg-[#111111] dark:hover:bg-[#C8FF00] hover:text-white dark:hover:text-black transition-colors"
            data-cursor="arrow"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 flex flex-col gap-8 flex-1">
          {/* Quick Direct Email Pill */}
          <div className="bg-[#EAE8E2] dark:bg-[#1A1A18] p-6 border border-[#111111]/10 dark:border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="font-mono text-xs text-[#8A8A84] dark:text-[#888] block mb-1">
                DIRECT INBOX
              </span>
              <span className="font-mono text-sm sm:text-base font-bold text-[#111111] dark:text-[#F5F4F0]">
                tumul41@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-2 text-xs font-mono font-medium border border-[#111111] dark:border-white/30 bg-white dark:bg-[#242420] text-[#111] dark:text-[#F5F4F0] hover:bg-[#111111] dark:hover:bg-[#C8FF00] hover:text-white dark:hover:text-black transition-colors"
                data-cursor="arrow"
              >
                {copiedEmail ? 'COPIED ✓' : 'COPY EMAIL'}
              </button>
              <a
                href="mailto:tumul41@gmail.com?subject=Project%20Inquiry%20via%20Portfolio"
                className="px-3.5 py-2 text-xs font-mono font-medium bg-[#111111] dark:bg-[#C8FF00] text-white dark:text-black hover:bg-[#C8FF00] hover:text-[#111111] dark:hover:bg-white transition-colors"
                data-cursor="arrow"
              >
                MAILTO ↗
              </a>
            </div>
          </div>

          {submitted ? (
            <div className="p-10 text-center bg-white dark:bg-[#1A1A18] border border-[#111111]/10 dark:border-white/10 my-auto flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#C8FF00] text-black flex items-center justify-center text-xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-serif text-[#111111] dark:text-[#F5F4F0]">Brief Received</h3>
              <p className="text-sm text-[#8A8A84] dark:text-[#AAA] max-w-md">
                Thank you, {name || 'collaborator'}. Tumul will review your project parameters and respond within 24 hours from Pune (IST).
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 text-xs font-mono font-bold uppercase bg-[#111111] dark:bg-[#C8FF00] text-white dark:text-black hover:bg-[#C8FF00] hover:text-[#111111] dark:hover:bg-white"
              >
                EDIT PARAMETERS
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#8A8A84] dark:text-[#888] mb-3">
                  01 / WHAT CAN WE BUILD TOGETHER?
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableServices.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => handleToggleService(service)}
                        className={`px-3.5 py-2 text-xs font-mono transition-all border ${
                          isSelected
                            ? 'bg-[#111111] dark:bg-[#C8FF00] text-[#F5F4F0] dark:text-black border-[#111111] dark:border-[#C8FF00] font-bold'
                            : 'bg-white dark:bg-[#1E1E1C] text-[#111111] dark:text-[#F5F4F0] border-[#111111]/15 dark:border-white/15 hover:border-[#111111] dark:hover:border-[#C8FF00]'
                        }`}
                      >
                        {service} {isSelected && '✓'}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Timeline & Budget Range */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#8A8A84] dark:text-[#888] mb-2">
                    02 / TIMELINE
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full bg-white dark:bg-[#1E1E1C] border border-[#111111]/20 dark:border-white/20 px-3 py-2.5 text-xs font-mono text-[#111111] dark:text-[#F5F4F0] focus:outline-none focus:border-[#C8FF00]"
                  >
                    <option value="Immediate (This Month)">Immediate (This Month)</option>
                    <option value="Q2 2026">Q2 2026</option>
                    <option value="Q3 2026">Q3 2026</option>
                    <option value="Exploratory / Later">Exploratory / Later</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#8A8A84] dark:text-[#888] mb-2">
                    03 / ESTIMATED BUDGET
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-white dark:bg-[#1E1E1C] border border-[#111111]/20 dark:border-white/20 px-3 py-2.5 text-xs font-mono text-[#111111] dark:text-[#F5F4F0] focus:outline-none focus:border-[#C8FF00]"
                  >
                    <option value="$3k – $6k">$3k – $6k</option>
                    <option value="$6k – $15k">$6k – $15k</option>
                    <option value="$15k – $35k">$15k – $35k</option>
                    <option value="$35k+ / Retainer">$35k+ / Retainer</option>
                  </select>
                </div>
              </div>

              {/* Contact Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#8A8A84] dark:text-[#888] mb-2">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Elena Rostova"
                    className="w-full bg-white dark:bg-[#1E1E1C] border border-[#111111]/20 dark:border-white/20 px-3.5 py-2.5 text-xs text-[#111111] dark:text-[#F5F4F0] placeholder:text-[#8A8A84] dark:placeholder:text-[#666] focus:outline-none focus:border-[#C8FF00]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#8A8A84] dark:text-[#888] mb-2">
                    WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="elena@studio.com"
                    className="w-full bg-white dark:bg-[#1E1E1C] border border-[#111111]/20 dark:border-white/20 px-3.5 py-2.5 text-xs text-[#111111] dark:text-[#F5F4F0] placeholder:text-[#8A8A84] dark:placeholder:text-[#666] focus:outline-none focus:border-[#C8FF00]"
                  />
                </div>
              </div>

              {/* Brief Description */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#8A8A84] dark:text-[#888] mb-2">
                  PROJECT SCOPE OR CHALLENGE *
                </label>
                <textarea
                  required
                  rows={4}
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  placeholder="Tell me about your brand, current challenges, and what you aim to achieve..."
                  className="w-full bg-white dark:bg-[#1E1E1C] border border-[#111111]/20 dark:border-white/20 p-3.5 text-xs text-[#111111] dark:text-[#F5F4F0] placeholder:text-[#8A8A84] dark:placeholder:text-[#666] focus:outline-none focus:border-[#C8FF00] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#111111] dark:bg-[#C8FF00] text-[#F5F4F0] dark:text-[#111111] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#C8FF00] hover:text-[#111111] dark:hover:bg-white transition-colors duration-200 mt-2 shadow-lg"
                data-cursor="arrow"
              >
                SUBMIT INQUIRY BRIEF →
              </button>
            </form>
          )}

          {/* Availability note */}
          <div className="pt-4 border-t border-[#111111]/10 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-[#8A8A84] dark:text-[#888]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8FF00]" />
              <span className="text-[#111111] dark:text-[#F5F4F0]">OPEN FOR SELECT COMMISSIONS</span>
            </div>
            <span>PUNE, INDIA</span>
          </div>
        </div>
      </div>
    </div>
  );
};
