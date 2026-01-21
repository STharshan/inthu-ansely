import React from 'react';

const CourseDetail = ({ course, onBack, onUpdateProgress }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button onClick={onBack} className="mb-8 font-bold text-xs tracking-widest text-[#0045EF] flex items-center gap-2 hover:opacity-70 transition-all">
        ← BACK TO DASHBOARD
      </button>

      <div className="rounded-[2.5rem] bg-[#0045EF] p-8 md:p-12 text-white mb-8 shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter leading-tight">{course.title}</h1>
          <p className="opacity-80 text-sm md:text-lg max-w-xl">{course.description}</p>
        </div>
        {/* Decorative circle */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-[2rem] p-6 md:p-10 border border-gray-100 dark:border-zinc-800 transition-colors shadow-xl">
        <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white italic underline decoration-[#0045EF] decoration-4 underline-offset-8">Course Curriculum</h2>
        
        <div className="space-y-4">
          {course.lessons.map((lesson, i) => (
            <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 dark:bg-zinc-800/50 rounded-2xl border border-gray-100 dark:border-zinc-700/50 hover:border-[#0045EF] transition-all group">
              <span className="w-8 h-8 flex items-center justify-center bg-white dark:bg-zinc-700 rounded-full text-xs font-bold text-[#0045EF] shadow-sm">{i + 1}</span>
              <span className="font-semibold text-gray-700 dark:text-zinc-200">{lesson}</span>
            </div>
          ))}
        </div>

        {course.progress < 100 ? (
          <button 
            onClick={() => onUpdateProgress(course.id)}
            className="w-full mt-12 bg-[#0045EF] hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-lg shadow-lg shadow-blue-500/30 transition-all active:scale-95"
          >
            FINISH COURSE & UPDATE PROGRESS 🚀
          </button>
        ) : (
          <div className="mt-12 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl text-center">
            <p className="text-green-600 dark:text-green-400 font-bold">🎉 Course already completed!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;