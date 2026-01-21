import React, { useState } from 'react';
import { initialModulesData } from '../data/modulesData';
import StatCard from '../components/LearnModule/StatCard';
import CourseCard from '../components/LearnModule/CourseCard';
import CourseDetail from '../components/LearnModule/CourseDetail';

const LearningDashboard = () => {
  const [courses, setCourses] = useState(initialModulesData);
  const [activeId, setActiveId] = useState(null);

  // Logic to update progress from 0 to 100
  const handleUpdate = (id) => {
    const updated = courses.map(c => 
      c.id === id ? { ...c, progress: 100, status: "Completed" } : c
    );
    setCourses(updated);
    alert("Skill Unlocked! Progress Updated to 100%.");
  };

  const selected = courses.find(c => c.id === activeId);
  const completed = courses.filter(c => c.progress === 100).length;

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-black p-4 md:p-14 font-sans text-gray-900 dark:text-white transition-colors duration-500 mt-10">
      {selected ? (
        <CourseDetail 
          course={selected} 
          onBack={() => setActiveId(null)} 
          onUpdateProgress={handleUpdate}
        />
      ) : (
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="bg-[#0045EF] text-white p-10 md:p-16 rounded-[3rem] mb-12 shadow-[0_20px_50px_rgba(0,69,239,0.3)] relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[10px] font-bold tracking-[0.3em] bg-white/20 px-4 py-2 rounded-full uppercase italic mb-6 inline-block">Learning Management System</span>
              <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter italic">Master Your Skills</h1>
              <p className="text-blue-100 max-w-md text-base md:text-lg font-medium opacity-90">Experience premium learning with interactive progress tracking.</p>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
              <svg width="400" height="400" viewBox="0 0 200 200"><path fill="currentColor" d="M40,-62C53,-54,64,-41,71,-26C78,-11,81,5,77,19C73,33,62,45,49,54C36,63,21,69,5,72C-11,75,-25,75,-38,68C-51,61,-63,47,-69,32C-75,17,-75,1,-70,-14C-65,-29,-55,-43,-42,-51C-29,-59,-14,-61,1,-62C16,-63,31,-63,40,-62Z" transform="translate(100 100)" /></svg>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="flex flex-col md:flex-row gap-6 mb-16">
            <StatCard count={courses.length} label="Total Courses" icon="📚" />
            <StatCard count={completed} label="Finished" icon="🎓" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <CourseCard 
                key={course.id} 
                module={course} 
                onClick={() => setActiveId(course.id)} 
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LearningDashboard;