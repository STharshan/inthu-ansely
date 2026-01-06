import React from "react";
import WallScrollContainer from "../Animations/WallScrollContainer";
import { upPhotoList1 } from "./info";

export default function DynamicPictureWall() {
  return (
    <WallScrollContainer>
      {upPhotoList1.map((image) => (
        <div
          key={image.id}
          className="group relative flex-shrink-0 transform transition-all duration-500 ease-in-out hover:scale-105"
        >
          <div className="h-[400px] w-[300px] rounded-2xl border border-gray-200/20 bg-gray-200 dark:border-gray-700/30 dark:bg-gray-900/50 p-2 shadow-lg backdrop-blur-lg transition-colors duration-500">
            <div className="relative flex h-full w-full flex-col gap-1 overflow-hidden rounded-xl border border-gray-300/10 dark:border-gray-700/20 shadow-2xl bg-white/90 dark:bg-black/80 transition-colors duration-500">

              {/* BACKGROUND IMAGE */}
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-0"
              />

              {/* MAIN IMAGE */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-xl transition-all duration-700 ease-in-out group-hover:scale-110"
              />

              {/* BOTTOM GRADIENT INFO */}
              <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-lg font-bold text-black dark:text-white transition-colors duration-500">
                  {image.alt}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-500">
                  author: @{image.author}
                </p>
              </div>

            </div>
          </div>
        </div>
      ))}
    </WallScrollContainer>
  );
}
