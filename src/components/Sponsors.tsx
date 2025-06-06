

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Sponsors = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect((): (() => void) => {
    const slider = sliderRef.current;
    if (!slider) return () => {};

    const totalWidth = slider.scrollWidth;
    const animation = gsap.to(slider, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
      repeat: -1
    });

    return () => animation.kill();
  }, []);
  return (
    <section className="bg-black py-12 md:py-20 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex justify-center">CLIENTS</h2>
      <div className="overflow-x-hidden">
        <div ref={sliderRef} className="flex gap-3 md:gap-5 min-w-max p-2">
          <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex-shrink-0">
            <img className="w-full h-full object-cover rounded-lg" src="/assets/slider-images/dragon_1.jpg" alt="Dragon 1" />
          </div>
          <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex-shrink-0">
            <img className="w-full h-full object-cover rounded-lg" src="/assets/slider-images/dragon_2.jpg" alt="Dragon 2" />
          </div>
          <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex-shrink-0">
            <img className="w-full h-full object-cover rounded-lg" src="/assets/slider-images/dragon_3.jpg" alt="Dragon 3" />
          </div>
          <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex-shrink-0">
            <img className="w-full h-full object-cover rounded-lg" src="/assets/slider-images/dragon_4.jpg" alt="Dragon 4" />
          </div>
          <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex-shrink-0">
            <img className="w-full h-full object-cover rounded-lg" src="/assets/slider-images/dragon_5.jpg" alt="Dragon 5" />
          </div>
          <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex-shrink-0">
            <img className="w-full h-full object-cover rounded-lg" src="/assets/slider-images/dragon_6.jpg" alt="Dragon 6" />
          </div>
          <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex-shrink-0">
            <img className="w-full h-full object-cover rounded-lg" src="/assets/slider-images/dragon_7.jpg" alt="Dragon 7" />
          </div>
          <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex-shrink-0">
            <img className="w-full h-full object-cover rounded-lg" src="/assets/slider-images/dragon_8.jpg" alt="Dragon 8" />
          </div>
          <div className="w-[200px] h-[200px] flex-shrink-0">
            <img className="w-full h-full object-cover rounded-lg" src="/assets/slider-images/dragon_9.jpg" alt="Dragon 9" />
          </div>
          <div className="w-[200px] h-[200px] flex-shrink-0">
            <img className="w-full h-full object-cover rounded-lg" src="/assets/slider-images/dragon_10.jpg" alt="Dragon 10" />
          </div>
          <div className="w-[200px] h-[200px] flex-shrink-0">
            <img className="w-full h-full object-cover rounded-lg" src="/assets/slider-images/dragon_1.jpg" alt="Dragon 1" />
          </div>
          <div className="w-[200px] h-[200px] flex-shrink-0">
            <img className="w-full h-full object-cover rounded-lg" src="/assets/slider-images/dragon_2.jpg" alt="Dragon 2" />
          </div>
          <div className="w-[200px] h-[200px] flex-shrink-0">
            <img className="w-full h-full object-cover rounded-lg" src="/assets/slider-images/dragon_3.jpg" alt="Dragon 3" />
          </div>
          <div className="w-[200px] h-[200px] flex-shrink-0">
            <img className="w-full h-full object-cover rounded-lg" src="/assets/slider-images/dragon_4.jpg" alt="Dragon 4" />
          </div>
          <div className="w-[200px] h-[200px] flex-shrink-0">
            <img className="w-full h-full object-cover rounded-lg" src="/assets/slider-images/dragon_5.jpg" alt="Dragon 5" />
          </div>
          <div className="w-[200px] h-[200px] flex-shrink-0">
            <img className="w-full h-full object-cover rounded-lg" src="/assets/slider-images/dragon_6.jpg" alt="Dragon 6" />
          </div>
          <div className="w-[200px] h-[200px] flex-shrink-0">
            <img className="w-full h-full object-cover rounded-lg" src="/assets/slider-images/dragon_7.jpg" alt="Dragon 7" />
          </div>
          <div className="w-[200px] h-[200px] flex-shrink-0">
            <img className="w-full h-full object-cover rounded-lg" src="/assets/slider-images/dragon_8.jpg" alt="Dragon 8" />
          </div>
          <div className="w-[200px] h-[200px] flex-shrink-0">
            <img className="w-full h-full object-cover rounded-lg" src="/assets/slider-images/dragon_9.jpg" alt="Dragon 9" />
          </div>
          <div className="w-[200px] h-[200px] flex-shrink-0">
            <img className="w-full h-full object-cover rounded-lg" src="/assets/slider-images/dragon_10.jpg" alt="Dragon 10" />
          </div>
        </div>
      </div>
      <footer className="h-auto mt-20 border-t bg-[#151414] w-full">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-lg mb-2 sm:mb-4">About</h3>
            <p className="text-gray-400 text-sm">At Graham Industries, we specialize in developing and integrating cutting-edge artificial intelligence into everyday technology.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-lg mb-2 sm:mb-4">Quick Links</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>FAQ</li>
              <li>PRICING</li>
              <li>T&C</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-lg mb-2 sm:mb-4">Contact</h3>
            <p className="text-gray-400 text-sm">bakana.graham@gmail.com</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-lg mb-2 sm:mb-4">Follow us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};


export default Sponsors;