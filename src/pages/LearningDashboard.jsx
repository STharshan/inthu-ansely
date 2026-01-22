import React from 'react';
import { useNavigate } from 'react-router-dom';
import { modulesData } from '../data/modulesData';
import CourseCard from '../components/LearnModule/CourseCard';

const LearningDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-black p-4 md:p-12 font-sans transition-colors duration-500 mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="bg-[#0045EF] text-white p-10 md:p-20 rounded-[3rem] mb-12 shadow-[0_30px_60px_rgba(0,69,239,0.25)] relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-[10px] font-bold tracking-[0.4em] bg-white/20 px-4 py-2 rounded-full uppercase italic mb-6 inline-block">
              Interactive Curriculum
            </span>
            <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter italic">Explore Modules.</h1>
            <p className="text-blue-100 opacity-90 text-lg md:text-xl max-w-xl font-medium">
              Select a specialized module to start your professional learning journey.
            </p>
          </div>
          
          {/* Abstract Shape Background */}
          <div className="absolute right-[-5%] top-[-10%] w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>
        </div>

        {/* Info Bar */}
        <div className="flex items-center justify-between mb-10 px-4">
          <p className="text-gray-500 dark:text-zinc-400 font-bold text-sm tracking-widest uppercase">
            Available Modules ({modulesData.length})
          </p>
          <div className="h-[2px] flex-grow mx-6 bg-gray-200 dark:bg-zinc-800"></div>
        </div>

        {/* Modules Grid - Responsive: 1 on Mobile, 2 on Tablet, 4 on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modulesData.map((course) => (
            <CourseCard 
              key={course.id} 
              module={course} 
              onClick={() => navigate(course.path)} 
            />
          ))}
        </div>

        {/* Footer info */}
        
      </div>
    </div>
  );
};

export default LearningDashboard;