import React, { useState, useEffect } from 'react'
import {
  FaCode,
  FaChartLine,
  FaComments,
  FaBullhorn,
  FaLaptopCode,
  FaRobot,
  FaPalette
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
  },
  {
    icon: FaChartLine,
    title: "Digital Transformation",
    subtitle: "Innovate. Adapt. Thrive.",
    desc: "We help modernize your business for the digital age.",
  },
  {
    icon: FaComments,
    title: "Consultancy",
    subtitle: "Strategy. Guidance. Results.",
    desc: "Strategic insights and actionable plans for growth.",
  },
  {
    icon: FaBullhorn,
    title: "Digital Marketing",
    subtitle: "Visibility. Traffic. Conversions.",
    desc: "We drive leads and awareness across digital platforms.",
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
  },
  {
    icon: FaRobot,
    title: "Smart Automation",
    subtitle: "Streamline. Optimise. Scale.",
    desc: "We assess operations and recommend AI-driven solutions to enhance efficiency.",
  },
  {
    icon: FaPalette,
    title: "Digital Branding",
    subtitle: "Identity. Creativity. Impact.",
    desc: "We amplify your digital brand and broadcast your message to the world.",
  }
]

const ServicesSection = () => {
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

  return (
    <>
      <section
        id="services"
        className="relative px-4 sm:px-6 lg:px-8 py-20 text-white"
        style={{
          background: 'linear-gradient(135deg, #1E2A40 0%, #0A152A 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {serviceContent.map((item, index) => {
              const Icon = item.icon
              return (
                <SwiperSlide key={index}>
                  <div className="rounded-lg bg-white/5 border border-white/10 shadow-xl h-full backdrop-blur p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-[#3ABEFE] mb-6">{item.subtitle}</p>
                      <div className="bg-white/5 rounded-lg p-6 mb-6 h-48 overflow-hidden flex items-center justify-center w-full">
                        {/* Special dashboard preview for Digital Marketing */}
                        {item.title === 'Digital Marketing' ? (
                          <div className="w-full text-left text-white">
                            <h4 className="text-sm font-semibold mb-2">Analytics Overview</h4>
                            <div className="mb-1 text-xs flex justify-between text-[#3ABEFE]">
                              <span>Visitors</span>
                              <span>12.4k</span>
                            </div>
                            <div className="w-full h-2 bg-[#1e3a5f] rounded mb-3 relative overflow-hidden">
                              <div className="absolute top-0 left-0 h-full bg-[#3ABEFE] w-2/3 rounded" />
                            </div>
                            <div className="mb-1 text-xs flex justify-between text-[#3ABEFE]">
                              <span>Conversions</span>
                              <span>1.8k (14.5%)</span>
                            </div>
                            <div className="w-full h-2 bg-[#1e3a5f] rounded mb-3 relative overflow-hidden">
                              <div className="absolute top-0 left-0 h-full bg-green-400 w-1/4 rounded" />
                            </div>
                            <div className="text-xs text-gray-400 italic">Real-time tracking enabled</div>
                          </div>
                        ) : item.code ? (
                          <pre className="text-[#3ABEFE] text-xs font-mono leading-snug h-full whitespace-pre-wrap w-full">
                            {text}
                            <span className="animate-blink">|</span>
                          </pre>
                        ) : (
                          <Icon size={48} className="text-[#3ABEFE] animate-pulse-soft" />
                        )}
                      </div>
                    </div>
                    <p className="text-white/80">{item.desc}</p>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 0 }
          50% { opacity: 1 }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
          display: inline-block;
        }

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
      `}</style>
    </>
  )
}

export default ServicesSection
