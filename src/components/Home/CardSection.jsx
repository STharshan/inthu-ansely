import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FaCode,
  FaChartLine,
  FaComments,
  FaBullhorn,
  FaLaptopCode,
  FaRobot,
  FaPalette,
  FaArrowRight
} from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const serviceContent = [
  {
    icon: FaLaptopCode,
    title: "Custom Software",
    subtitle: "Tailored. Scalable. Future-Ready.",
    desc: "We build tailor-made software that grows with your business.",
    route: "/customwebsite"
  },
  {
    icon: FaChartLine,
    title: "Digital Transformation",
    subtitle: "Innovate. Adapt. Thrive.",
    desc: "We help modernize your business for the digital age.",
    route: "/digital-transformation"
  },
  {
    icon: FaComments,
    title: "Consultancy",
    subtitle: "Strategy. Guidance. Results.",
    desc: "Strategic insights and actionable plans for growth.",
    route: "/business-consultancy"
  },
  {
    icon: FaBullhorn,
    title: "Digital Marketing",
    subtitle: "Visibility. Traffic. Conversions.",
    desc: "We drive leads and awareness across digital platforms.",
    route: "/digital-marketing"
  },
  {
    icon: FaCode,
    title: "Custom Website",
    subtitle: "Design. Build. Grow.",
    desc: "We design dynamic websites that captivate and engage consumers.",
    code: `class Website {
  constructor() {
    this.owner = "you";
  }
  launch() {
    console.log("Site Live");
  }
}`,
    route: "/customwebsite"
  },
  {
    icon: FaRobot,
    title: "Smart Automation",
    subtitle: "Streamline. Optimise. Scale.",
    desc: "We assess operations and recommend AI-driven solutions to enhance efficiency.",
    route: "/digital-transformation"
  },
  {
    icon: FaPalette,
    title: "Digital Branding",
    subtitle: "Identity. Creativity. Impact.",
    desc: "We amplify your digital brand and broadcast your message to the world.",
    route: "/digital-marketing"
  },
  {
    icon: FaBullhorn,
    title: "Digital Partnerships",
    subtitle: "Collaborate. Amplify. Thrive.",
    desc: "We build strong digital partnerships that foster growth, enhance brand visibility, and create meaningful business connections across digital platforms.",
    route: "/digital-partnership"
  }

]

const ServicesSection = () => {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const [charIndex, setCharIndex] = useState(0)

  const customWebsiteCard = serviceContent.find(item => item.code)

  useEffect(() => {
    if (charIndex < customWebsiteCard.code.length) {
      const timeout = setTimeout(() => {
        setText(customWebsiteCard.code.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 30)
      return () => clearTimeout(timeout)
    } else {
      const pause = setTimeout(() => {
        setCharIndex(0)
        setText('')
      }, 2000)
      return () => clearTimeout(pause)
    }
  }, [charIndex, customWebsiteCard.code])

  const handleReadMore = (route) => {
    navigate(route)
  }

  return (
    <>
      <section
        id="services"
        className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-white overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1E2A40 0%, #0A152A 100%)',
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#3ABEFE]/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our <span className="text-[#3ABEFE]">Services</span>
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Comprehensive digital solutions tailored to elevate your business
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              },
            }}
            className="services-swiper pb-12 sm:pb-16"
          >
            {serviceContent.map((item, index) => {
              const Icon = item.icon
              return (
                <SwiperSlide key={index}>
                  <div className="group rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl backdrop-blur-sm p-6 sm:p-8 flex flex-col transition-all duration-500 hover:border-[#3ABEFE]/50 hover:shadow-[0_0_30px_rgba(58,190,254,0.3)] hover:scale-[1.02] hover:-translate-y-2" style={{ minHeight: '580px', height: '580px' }}>

                    {/* Icon Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-[#3ABEFE]/20 to-[#3ABEFE]/5 border border-[#3ABEFE]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon size={28} className="text-[#3ABEFE] group-hover:rotate-12 transition-transform duration-300" />
                      </div>
                      <div className="w-2 h-2 rounded-full bg-[#3ABEFE] animate-pulse"></div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#3ABEFE] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#3ABEFE] font-medium tracking-wide">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Preview Area - Fixed Height */}
                    <div className="bg-gradient-to-br from-white/5 to-transparent rounded-xl p-4 sm:p-6 mb-6 h-40 sm:h-48 overflow-hidden flex items-center justify-center border border-white/5 group-hover:border-[#3ABEFE]/20 transition-colors duration-300">

                      {/* Custom Software Preview */}
                      {item.title === 'Custom Software' ? (
                        <div className="flex gap-3 items-center">
                          <div className="h-10 w-10 rounded-full bg-[#3ABEFE] animate-ping"></div>
                          <div className="h-10 w-10 rounded-full bg-green-400 animate-pulse"></div>
                          <div className="h-10 w-10 rounded-full bg-yellow-400 animate-bounce"></div>
                        </div>

                        /* Digital Transformation Preview */
                      ) : item.title === 'Digital Transformation' ? (
                        <div className="w-full">
                          <p className="text-xs text-gray-300 mb-3 font-medium">System Upgrade in Progress...</p>
                          <div className="w-full h-4 bg-[#1e3a5f] rounded-full relative overflow-hidden shadow-inner">
                            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#3ABEFE] to-blue-400 animate-progressBar rounded-full"></div>
                          </div>
                          <p className="text-xs text-[#3ABEFE] mt-2 font-semibold">87% Complete</p>
                        </div>

                        /* Consultancy Preview */
                      ) : item.title === 'Consultancy' ? (
                        <div className="flex flex-col gap-2 text-xs sm:text-sm w-full">
                          <div className="bg-[#3ABEFE]/20 text-[#3ABEFE] p-3 rounded-xl self-start max-w-[85%] border border-[#3ABEFE]/30 animate-slideInLeft">
                            "How should we expand?"
                          </div>
                          <div className="bg-green-500/20 text-green-400 p-3 rounded-xl self-end max-w-[85%] border border-green-500/30 animate-slideInRight">
                            "Focus on digital first."
                          </div>
                          <div className="bg-[#3ABEFE]/20 text-[#3ABEFE] p-3 rounded-xl self-start max-w-[85%] border border-[#3ABEFE]/30 animate-slideInLeft animation-delay-300">
                            "Got it, let's plan."
                          </div>
                        </div>

                        /* Digital Marketing Preview */
                      ) : item.title === 'Digital Marketing' ? (
                        <div className="w-full text-left text-white">
                          <h4 className="text-sm font-bold mb-3 text-[#3ABEFE]">Analytics Dashboard</h4>
                          <div className="space-y-3">
                            <div>
                              <div className="mb-1 text-xs flex justify-between text-gray-300">
                                <span>Visitors</span>
                                <span className="font-bold text-[#3ABEFE]">12.4k</span>
                              </div>
                              <div className="w-full h-2 bg-[#1e3a5f] rounded-full relative overflow-hidden">
                                <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#3ABEFE] to-blue-400 w-2/3 rounded-full animate-expandWidth" />
                              </div>
                            </div>
                            <div>
                              <div className="mb-1 text-xs flex justify-between text-gray-300">
                                <span>Conversions</span>
                                <span className="font-bold text-green-400">1.8k</span>
                              </div>
                              <div className="w-full h-2 bg-[#1e3a5f] rounded-full relative overflow-hidden">
                                <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-emerald-400 w-1/3 rounded-full animate-expandWidth animation-delay-150" />
                              </div>
                            </div>
                          </div>
                        </div>

                        /* Smart Automation Preview */
                      ) : item.title === 'Smart Automation' ? (
                        <div className="w-full text-center">
                          <div className="flex flex-col gap-3 items-center">
                            <div className="flex gap-2 sm:gap-3 items-center">
                              <span className="px-3 py-2 bg-[#1e3a5f] rounded-lg text-xs font-semibold border border-white/10">Input</span>
                              <FaArrowRight className="text-[#3ABEFE] animate-pulse" />
                              <span className="px-3 py-2 bg-[#3ABEFE]/30 rounded-lg text-xs font-semibold animate-pulse border border-[#3ABEFE]/50">
                                AI Engine
                              </span>
                              <FaArrowRight className="text-green-400 animate-pulse" />
                              <span className="px-3 py-2 bg-green-500/30 rounded-lg text-xs font-semibold border border-green-500/50">Output</span>
                            </div>
                            <p className="text-gray-300 text-xs italic mt-1">
                              ⚡ Automated in real-time
                            </p>
                          </div>
                        </div>

                        /* Digital Branding Preview */
                      ) : item.title === 'Digital Branding' ? (
                        <div className="flex flex-col items-center w-full">
                          <div className="flex gap-2 w-full justify-center mb-4">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 animate-bounce shadow-lg"></div>
                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 animate-bounce animation-delay-150 shadow-lg"></div>
                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-400 to-green-500 animate-bounce animation-delay-300 shadow-lg"></div>
                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 animate-bounce animation-delay-500 shadow-lg"></div>
                          </div>
                          <p className="text-[#3ABEFE] text-sm font-bold tracking-wide">
                            Vivid • Memorable • Unique
                          </p>
                        </div>

                        /* Custom Website Typewriter Preview */
                      ) : item.code ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <pre className="text-[#3ABEFE] text-xs sm:text-sm font-mono leading-relaxed whitespace-pre-wrap w-full">
                            {text}
                            <span className="animate-blink text-white">|</span>
                          </pre>
                        </div>

                        /* Default Icon Fallback */
                      ) : (
                        <Icon size={56} className="text-[#3ABEFE] animate-pulse-soft" />
                      )}
                    </div>

                    {/* Description - Fixed Height */}
                    <div className="mb-6" style={{ minHeight: '60px' }}>
                      <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Read More Button */}
                    <button
                      onClick={() => handleReadMore(item.route)}
                      className="w-full py-3 sm:py-4 px-6 bg-gradient-to-r from-[#3ABEFE] to-[#2A9EDE] hover:from-[#2A9EDE] hover:to-[#1A7EBE] text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_10px_40px_rgba(58,190,254,0.4)] flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Read More</span>
                      <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-[#3ABEFE] backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border border-white/20 hover:border-[#3ABEFE] -ml-4 sm:-ml-6">
            <span className="text-white text-xl">‹</span>
          </div>
          <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-[#3ABEFE] backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border border-white/20 hover:border-[#3ABEFE] -mr-4 sm:-mr-6">
            <span className="text-white text-xl">›</span>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Typewriter cursor animation */
        @keyframes blink {
          0%, 100% { opacity: 0 }
          50% { opacity: 1 }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
          display: inline-block;
        }

        /* Soft pulse animation */
        @keyframes pulseSoft {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.85;
          }
        }
        .animate-pulse-soft {
          animation: pulseSoft 2s ease-in-out infinite;
        }

        /* Progress bar animation */
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progressBar {
          animation: progressFill 3s ease-in-out infinite;
        }

        /* Width expansion animation */
        @keyframes expandWidth {
          from { width: 0%; }
        }
        .animate-expandWidth {
          animation: expandWidth 1.5s ease-out forwards;
        }

        /* Float animations for background */
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        @keyframes floatDelayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(20px) translateX(-10px); }
        }
        .animate-float-delayed {
          animation: floatDelayed 10s ease-in-out infinite;
        }

        /* Slide in animations */
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.5s ease-out forwards;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out forwards;
        }

        /* Animation delays */
        .animation-delay-150 {
          animation-delay: 150ms;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .delay-150 {
          animation-delay: 150ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }

        /* Swiper customization */
        .services-swiper {
          padding-left: 4px;
          padding-right: 4px;
        }

        .services-swiper :global(.swiper-pagination-bullet) {
          background: rgba(255, 255, 255, 0.5);
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }

        .services-swiper :global(.swiper-pagination-bullet-active) {
          background: #3ABEFE;
          width: 24px;
          border-radius: 5px;
        }

        /* Hide default navigation on mobile */
        @media (max-width: 640px) {
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            display: none;
          }
        }

        /* Ensure equal height cards */
        .services-swiper :global(.swiper-slide) {
          display: flex;
        }

        .services-swiper :global(.swiper-slide > div) {
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default ServicesSection