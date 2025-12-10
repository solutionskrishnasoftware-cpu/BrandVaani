import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ArrowRight, Play, Target, TrendingUp, Sparkles } from "lucide-react";
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
    stats: ["3.5x ROI", "98% Satisfaction"]
  },
  {
    id: 2,
    title: "DIGITAL GROWTH",
    subtitle: "DATA-DRIVEN MARKETING EXCELLENCE",
    description: "Achieve sustainable growth with our analytics-powered approach and performance-driven strategies.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=800&fit=crop&q=80",
    buttonText: "EXPLORE STRATEGIES",
    badge: "PERFORMANCE PROVEN",
    stats: ["500+ Brands", "250M+ Reach"]
  },
  {
    id: 3,
    title: "CREATIVE EXCELLENCE",
    subtitle: "COMPELLING BRAND STORYTELLING",
    description: "Stand out in the market with innovative design and storytelling that resonates with your audience.",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&h=800&fit=crop&q=80",
    buttonText: "VIEW PORTFOLIO",
    badge: "AWARD WINNING",
    stats: ["360° Approach", "AI-Powered"]
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
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white !opacity-40 !w-3 !h-1 !mx-1 !rounded-sm",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-gradient-to-r !from-blue-500 !to-purple-500 !opacity-100 !w-10"
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="hero-swiper group"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[50vh] lg:h-[80vh] min-h-[540px] max-h-[700px] overflow-hidden">
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
                  <div className="max-w-2xl">
                    {/* Badge */}
                    {slide.badge && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 text-white text-sm font-normal tracking-wider mb-8">
                        <Sparkles className="w-3 h-3" />
                        {slide.badge}
                      </div>
                    )}

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                      {slide.title}
                    </h1>


                    {/* Description */}
                    <p className="text-lg text-white/90 mb-10 max-w-xl leading-relaxed tracking-wide">
                      {slide.description}
                    </p>

                    {/* Stats */}


                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                      <button className="group/btn bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-base font-semibold tracking-wide transition-all duration-300 flex items-center gap-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/25">
                        {slide.buttonText}
                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                      <button className="group/btn border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-normal tracking-wide transition-all duration-300 flex items-center gap-3 rounded-lg">
                        WATCH CASE STUDY
                        <Play className="w-4 h-4 transform group-hover/btn:scale-110 transition-transform" />
                      </button>
                    </div>

                    {/* Framework Indicators */}
                    <div className="flex gap-6 mt-12">
                      {[
                        { icon: <Target className="w-4 h-4" />, label: "Strategy" },
                        { icon: <Sparkles className="w-4 h-4" />, label: "Creative" },
                        { icon: <TrendingUp className="w-4 h-4" />, label: "Analytics" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-white/80">
                          {item.icon}
                          <span className="text-sm">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide Number */}
              <div className="absolute bottom-8 right-8 text-white text-sm tracking-wide opacity-60">
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
          bottom: 40px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          content: none !important;
        }
        @media (max-width: 768px) {
          .swiper-pagination {
            bottom: 30px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;