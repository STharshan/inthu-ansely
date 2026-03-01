import React from 'react';

const CTASection = () => {
  return (
    <div className="w-full bg-white dark:bg-black  h-80 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Blue Card */}
        <div className="relative overflow-hidden bg-[#0045EF] rounded-3xl p-10 md:p-20 text-center text-white">
          {/* Liquid Bubble Background Effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Start your 14-day free trial
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-12 opacity-90">
              Automate campaign management.
            </p>

            {/* Input Group */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto mb-10">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-white/20 border border-white/30 rounded-xl py-4 px-6 text-white placeholder:text-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all backdrop-blur-sm"
              />
              <button className="w-full sm:w-auto bg-white text-blue-600 font-bold py-4 px-10 rounded-xl hover:bg-blue-50 transition-all shadow-lg whitespace-nowrap">
                Get started
              </button>
            </div>

            {/* Features with Check Icons */}
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-blue-50">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;