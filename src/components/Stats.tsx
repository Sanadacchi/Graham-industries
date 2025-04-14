const Stats = () => {
  return (
    <section className="bg-black py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4">100+ COMPANIES SATISFIED</h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-16">
          Hire us and see the <span className="text-red-500">limitless</span> possibilities of AI
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-[29px]">
          {/* Innovative Solutions Card */}
          <div className="bg-[#111] p-6 md:p-8 rounded-2xl w-full md:w-[322px] h-auto md:h-[213px]">
            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6">
              <svg viewBox="0 0 24 24" fill="#FFD700" className="w-full h-full">
                <path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm1-5h-2v2h2v-2zm-1-9.5L2 8.4V15.6L12 22.5l10-6.9V8.4L12 1z" />
              </svg>
            </div>
            <p className="text-lg md:text-[20px] text-white mb-4">Innovative yet practical solutions</p>
          </div>

          {/* Full-cycle Development Card */}
          <div className="bg-[#111] p-6 md:p-8 rounded-2xl w-full md:w-[322px] h-auto md:h-[213px]">
            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6">
              <svg viewBox="0 0 24 24" fill="#FFD700" className="w-full h-full">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <p className="text-lg md:text-[20px] text-white mb-4">Full-cycle development and support</p>
          </div>

          {/* Ethical AI Card */}
          <div className="bg-[#111] p-6 md:p-8 rounded-2xl w-full md:w-[322px] h-auto md:h-[213px]">
            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6">
              <svg viewBox="0 0 24 24" fill="#FFD700" className="w-full h-full">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
            </div>
            <p className="text-lg md:text-[20px] text-white mb-4">Ethical, secure, and scalable AI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;