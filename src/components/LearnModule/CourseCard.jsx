import React from 'react';

const CourseCard = ({ module, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden flex flex-col cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95"
  >
    {/* Gradient Header using #0045EF base */}
    <div className={`h-40 bg-[#0045EF] bg-gradient-to-br ${module.gradient} p-6 relative`}>
      {module.progress === 100 && (
        <span className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 dark:text-white px-3 py-1 rounded-full text-[10px] font-bold">✓ COMPLETED</span>
      )}
      <span className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold uppercase">
        {module.category}
      </span>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">{module.title}</h3>
      <p className="text-gray-500 dark:text-zinc-400 text-sm mb-6 line-clamp-2">{module.description}</p>
      
      {/* Progress Section */}
      <div className="mt-auto">
        <div className="flex justify-between text-[10px] font-bold mb-2 uppercase tracking-widest text-gray-400 dark:text-zinc-500">
          <span>Your Progress</span>
          <span className="text-[#0045EF] dark:text-blue-400">{module.progress}%</span>
        </div>
        <div className="w-full bg-gray-100 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-[#0045EF] h-full transition-all duration-1000 ease-out" 
            style={{ width: `${module.progress}%` }} 
          />
        </div>
      </div>
    </div>
  </div>
);

export default CourseCard;