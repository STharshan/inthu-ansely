import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { JobPosition } from "../components/types/careers";
import { getJobById } from "../constants/careers";
import { CareerDetailHeader } from "../components/organisms/CareerDetailHeader";
import { CareerDetailContent } from "../components/organisms/CareerDetailContent";

const CareerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<JobPosition | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      navigate("/careers");
      return;
    }

    const foundJob = getJobById(id);
    if (!foundJob) {
      navigate("/careers");
      return;
    }

    setJob(foundJob);
    setLoading(false);
  }, [id, navigate]);

  if (loading || !job) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center transition-colors duration-300">
        <p className="text-gray-600 dark:text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <CareerDetailHeader job={job} />
      <CareerDetailContent job={job} />
    </div>
  );
};

export default CareerDetail;
