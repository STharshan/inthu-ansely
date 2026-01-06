import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ClientReview } from "../types/clientReviews";
import { TestimonialCard } from "../molecules/TestimonialCard";

interface TestimonialsGridProps {
  reviews: ClientReview[];
  className?: string;
}

export const TestimonialsGrid: React.FC<TestimonialsGridProps> = ({ reviews, className = "" }) => {
  if (!reviews || reviews.length === 0) return null;

  return (
    <div className={`relative ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          nextEl: ".testimonials-button-next",
          prevEl: ".testimonials-button-prev",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="testimonials-swiper pb-12 sm:pb-16"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <TestimonialCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="testimonials-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border border-white/20 hover:border-white/40 -ml-8 sm:-ml-12 lg:-ml-16">
        <ChevronLeft className="text-white" size={20} />
      </div>
      <div className="testimonials-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border border-white/20 hover:border-white/40 -mr-8 sm:-mr-12 lg:-mr-16">
        <ChevronRight className="text-white" size={20} />
      </div>
    </div>
  );
};
