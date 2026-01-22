import React from 'react';

const CourseCard = ({ module, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-white dark:bg-zinc-900 rounded-[2rem] border border-gray-100 dark:border-zinc-800 overflow-hidden flex flex-col cursor-pointer transition-all hover:shadow-[0_20px_40px_rgba(0,69,239,0.15)] hover:-translate-y-2 active:scale-95 group"
  >
    {/* Header with Royal Blue Gradient */}
    <div className={`h-32 bg-gradient-to-br ${module.gradient} p-6 relative`}>
      <span className="text-4xl absolute bottom-[-20px] right-6 bg-white dark:bg-zinc-800 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
        {module.icon}
      </span>
      <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">
        {module.category}
      </span>
    </div>

    {/* Content */}
    <div className="p-8 pt-10 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#0045EF] transition-colors leading-tight">
        {module.title}
      </h3>
      <p className="text-gray-500 dark:text-zinc-400 text-sm leading-relaxed">
        {module.description}
      </p>
      
      <div className="mt-8 flex items-center text-[#0045EF] font-bold text-xs tracking-widest uppercase italic">
        Start Learning 
        <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
      </div>
    </div>
  </div>
);

export default CourseCard;