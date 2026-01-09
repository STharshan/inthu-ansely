import React, { useState } from 'react';
import { CareersJobListingsProps } from '../types/careers';
import { JobListingCard } from '../molecules/JobListingCard';

export const CareersJobListings: React.FC<CareersJobListingsProps> = ({
  jobs,
  className = '',
}) => {
  const [openJobId, setOpenJobId] = useState<string | null>(
    jobs.length > 0 ? jobs[0].id : null
  );

  const handleToggle = (jobId: string) => {
    setOpenJobId(openJobId === jobId ? null : jobId);
  };

  return (
    <section
      className={`bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-4">
          {jobs.map((job) => (
            <JobListingCard
              key={job.id}
              job={job}
              isOpen={openJobId === job.id}
              onToggle={() => handleToggle(job.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
