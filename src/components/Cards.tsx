

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Remove unused type declaration

const Cards = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const animations = cardRefs.current.map((card) => {
      if (!card) return null;

      const outline = card.querySelector('.card-outline');
      const rect = outline?.querySelector('rect');
      if (!rect) return null;

      const length = rect.getTotalLength();

      gsap.set(rect, {
        strokeDasharray: length,
        strokeDashoffset: length
      });

      const tl = gsap.timeline({ paused: true });
      tl.to(rect, {
        strokeDashoffset: 0,
        duration: 1,
        ease: 'power2.out'
      });

      const handleEnter = () => tl.play();
      const handleLeave = () => tl.reverse();

      card.addEventListener('mouseenter', handleEnter);
      card.addEventListener('mouseleave', handleLeave);

      return { card, handleEnter, handleLeave, timeline: tl };
    }).filter(Boolean) as Array<{
      card: HTMLDivElement;
      handleEnter: () => void;
      handleLeave: () => void;
      timeline: gsap.core.Timeline;
    }>;

    return () => {
      animations.forEach(({ card, handleEnter, handleLeave, timeline }) => {
        card.removeEventListener('mouseenter', handleEnter);
        card.removeEventListener('mouseleave', handleLeave);
        timeline.kill();
      });
    };
  }, []);

  return (
    <section className="bg-black py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[52px]">
        {/* Left Column - Small Cards */}
        <div className="flex flex-col gap-6 md:gap-[57px]">
          <div ref={(el) => { cardRefs.current[0] = el }} className="relative bg-[#111] p-6 rounded-2xl w-full md:w-[271px] h-[170px]">
            <svg className="card-outline absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <rect width="100%" height="100%" rx="16" fill="none" stroke="#FF69B4" strokeWidth="2" />
            </svg>
            <div className="w-10 h-10 mb-4">
              <svg viewBox="0 0 24 24" fill="#FF69B4" className="w-full h-full">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">AI Integration</h3>
            <p className="text-gray-400 text-sm">Smart automation and workflow integration.</p>
          </div>
          <div ref={(el) => { cardRefs.current[1] = el }} className="relative bg-[#111] p-6 rounded-2xl w-full md:w-[271px] h-[170px]">
            <svg className="card-outline absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <rect width="100%" height="100%" rx="16" fill="none" stroke="#4DD0E1" strokeWidth="2" />
            </svg>
            <div className="w-10 h-10 mb-4">
              <svg viewBox="0 0 24 24" fill="#4DD0E1" className="w-full h-full">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Custom AI</h3>
            <p className="text-gray-400 text-sm">Tailored intelligent systems.</p>
          </div>
        </div>

        {/* Center Column - Tall Card */}
        <div ref={(el) => { cardRefs.current[2] = el }} className="relative bg-[#111] p-8 rounded-2xl w-full md:w-[295px] h-[406px]">
          <svg className="card-outline absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <rect width="100%" height="100%" rx="16" fill="none" stroke="#7B68EE" strokeWidth="2" />
          </svg>
          <div className="w-12 h-12 mb-6">
            <svg viewBox="0 0 24 24" fill="#7B68EE" className="w-full h-full">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">GRAHAM INDUSTRIES</h3>
          <p className="text-gray-400">We are taking AI to unprecedented heights, pushing boundaries that many deemed impossible. Join us on this transformative journey as we redefine what's possible with artificial intelligence.</p>
        </div>

        {/* Right Column - Large Cards */}
        <div className="flex flex-col gap-[48px]">
          <div ref={(el) => { cardRefs.current[3] = el }} className="relative bg-[#111] p-6 rounded-2xl w-[353px] h-[179px]">
            <svg className="card-outline absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <rect width="100%" height="100%" rx="16" fill="none" stroke="#FFD700" strokeWidth="2" />
            </svg>
            <div className="w-10 h-10 mb-4">
              <svg viewBox="0 0 24 24" fill="#FFD700" className="w-full h-full">
                <path d="M23 8c0 1.1-.9 2-2 2a1.7 1.7 0 0 1-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">ML & Analytics</h3>
            <p className="text-gray-400 text-sm">Advanced machine learning and real-time analytics solutions.</p>
          </div>
          <div ref={(el) => { cardRefs.current[4] = el }} className="relative bg-[#111] p-6 rounded-2xl w-[353px] h-[179px]">
            <svg className="card-outline absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <rect width="100%" height="100%" rx="16" fill="none" stroke="#FF6B6B" strokeWidth="2" />
            </svg>
            <div className="w-10 h-10 mb-4">
              <svg viewBox="0 0 24 24" fill="#FF6B6B" className="w-full h-full">
                <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.5 2.54l2.6 1.53c.56-1.24.9-2.62.9-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">AI Products</h3>
            <p className="text-gray-400 text-sm">Smart solutions designed for real-world impact.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;