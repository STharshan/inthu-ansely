import React from "react";

const ProjectChallenges = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Image Section */}
        <div className="w-full overflow-hidden rounded-2xl">
          <img
            src="/a1.jpg"
            alt="Project Visual"
            className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Label */}
          <div className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 mt-2"></span>
            <p className="text-xl font-medium text-gray-700">
              Challenges
            </p>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-3xl font-medium text-gray-900">
              Their existing website was slow, unresponsive, and lacked the
              luxury appeal their brand represented.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Poor navigation and checkout experience led to high bounce rates
              and lost sales.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectChallenges;
