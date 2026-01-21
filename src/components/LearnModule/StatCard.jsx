import React from 'react';

const StatCard = ({ icon, count, label }) => (
  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 flex items-center space-x-4 flex-1">
    <div className="text-2xl h-12 w-12 flex items-center justify-center bg-[#0045EF]/10 text-[#0045EF] rounded-xl">
      {icon}
    </div>
    <div>
      <h3 className="text-3xl font-bold text-gray-800 dark:text-white">{count}</h3>
      <p className="text-gray-500 dark:text-zinc-400 text-sm font-medium">{label}</p>
    </div>
  </div>
);

export default StatCard;