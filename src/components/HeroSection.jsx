import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ArrowRight, Play, Target, TrendingUp, Sparkles, ChevronRight, ChevronLeft } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "BRAND TRANSFORMATION",
    subtitle: "STRATEGY + CREATIVITY + ANALYTICS",
    description: "Transform your brand with our proven 3-pillar framework that drives measurable growth and market leadership.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=800&fit=crop&q=80",
    buttonText: "START TRANSFORMATION",
    badge: "STRATEGY FOCUSED",
    stats: ["3.5x ROI", "98% Satisfaction"],
    mobileImg: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1200&fit=crop&q=80"
  },
  {
    id: 2,
    title: "DIGITAL GROWTH",
    subtitle: "DATA-DRIVEN MARKETING",
    description: "Achieve sustainable growth with our analytics-powered approach and performance-driven strategies.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=800&fit=crop&q=80",
    buttonText: "EXPLORE STRATEGIES",
    badge: "PERFORMANCE PROVEN",
    stats: ["500+ Brands", "250M+ Reach"],
    mobileImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1200&fit=crop&q=80"
  },
  {
    id: 3,
    title: "CREATIVE EXCELLENCE",
    subtitle: "BRAND STORYTELLING",
    description: "Stand out in the market with innovative design and storytelling that resonates with your audience.",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&h=800&fit=crop&q=80",
    buttonText: "VIEW PORTFOLIO",
    badge: "AWARD WINNING",
    stats: ["360° Approach", "AI-Powered"],
    mobileImg: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=1200&fit=crop&q=80"
  }
];

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
      
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="hero-swiper group"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[70vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] min-h-[500px] sm:min-h-[540px] max-h-[900px] overflow-hidden">
              {/* Background Image - Different for Mobile/Desktop */}
              <div className="absolute inset-0">
                {/* Mobile Image */}
                <img
                  src={slide.mobileImg || slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover md:hidden"
                  loading="eager"
                />
                {/* Desktop Image */}
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover hidden md:block"
                  loading="eager"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/30 md:from-black/60 md:via-black/40 md:to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:from-black/30" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
                  <div className="max-w-full sm:max-w-xl md:max-w-2xl mx-auto sm:mx-0">
                    {/* Badge - Mobile Optimized */}
                    {slide.badge && (
                      <div className="inline-flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-medium tracking-wide mb-4 sm:mb-6 md:mb-8 rounded-lg">
                        <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        <span className="truncate">{slide.badge}</span>
                      </div>
                    )}

                    {/* Title - Mobile Responsive */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-[1.2] sm:leading-[1.1] tracking-tight">
                      {slide.title}
                    </h1>

                    {/* Subtitle - Mobile Responsive */}
                    <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl text-white font-normal mb-3 sm:mb-4 md:mb-6 opacity-95 tracking-wide max-w-full sm:max-w-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {slide.subtitle}
                    </h2>

                    {/* Description - Mobile Responsive */}
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 md:mb-10 max-w-full sm:max-w-md md:max-w-xl leading-relaxed tracking-wide">
                      {slide.description}
                    </p>

                   

                    {/* CTA Buttons - Mobile Optimized */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
                      <button className="group/btn w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-4 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/25">
                        <span className="truncate">{slide.buttonText}</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 transform group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                      <button className="group/btn w-full sm:w-auto border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 text-sm sm:text-base font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 rounded-lg">
                        <span className="truncate">CASE STUDY</span>
                        <Play className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 transform group-hover/btn:scale-110 transition-transform" />
                      </button>
                    </div>

                    {/* Framework Indicators - Mobile Optimized */}
                    <div className="flex flex-wrap gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12">
                      {[
                        { icon: <Target className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Strategy" },
                        { icon: <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Creative" },
                        { icon: <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Analytics" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 sm:gap-2 text-white/80">
                          {item.icon}
                          <span className="text-xs sm:text-sm whitespace-nowrap">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide Number - Mobile Optimized */}
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 text-white text-xs sm:text-sm tracking-wide opacity-60">
                {slide.id.toString().padStart(2, '0')}
              </div>
            </div>
          </SwiperSlide>
        ))}

  
      
      </Swiper>


    

      {/* Custom Styles */}
      <style jsx>{`
        .hero-swiper {
          --swiper-navigation-size: 20px;
        }
        .swiper-pagination {
          bottom: 80px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          content: none !important;
        }
        
        @media (min-width: 640px) {
          .swiper-pagination {
            bottom: 60px !important;
            gap: 8px;
          }
        }
        
        @media (min-width: 768px) {
          .swiper-pagination {
            bottom: 50px !important;
          }
        }
        
        @media (min-width: 1024px) {
          .swiper-pagination {
            bottom: 40px !important;
          }
        }
        
        /* Touch-friendly sizes for mobile */
        @media (max-width: 640px) {
          .swiper-slide button {
            min-height: 44px; /* Minimum touch target size */
          }
          
          .swiper-pagination-bullet {
            min-width: 24px;
            min-height: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;