import React from "react";
import { CareersPageProps } from "../types/careers";
import { CareersHeader } from "./CareersHeader";
import { CareersJobListings } from "./CareersJobListings";
import { CareersFooter } from "./CareersFooter";
import { jobPositions } from "../../constants/careers";

export const CareersPage: React.FC<CareersPageProps> = ({ className = "" }) => {
  return (
    <div
      className={`min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 ${className}`}
    >
      <CareersHeader />
      <CareersJobListings jobs={jobPositions} />
      <CareersFooter />
    </div>
  );
};
