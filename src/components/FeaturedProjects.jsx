"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCreative } from "swiper/modules";
import { ArrowUpRight, ExternalLink, TrendingUp, Users, Target, BarChart } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

const projects = [
  {
    title: "BRANDVAANI SEO GROWTH ENGINE",
    description: "Boosted brand visibility using advanced SEO frameworks, on-page optimisation, high-authority link building, and intent-driven keyword strategies.",
    image: "https://cdn.dribbble.com/userupload/15023900/file/original-ccf7358e67c02f6c2b8b2aae66554e49.png?resize=2048x1536&vertical=center",
    category: "SEO & Organic Growth",
    results: ["+320% Organic Traffic", "18x Keyword Rankings", "220% Higher Conversions"],
    tech: ["SEO Suite", "Google Analytics", "Search Console"],
    liveUrl: "https://brandvaani.in/",
    resultsMetrics: [
      { icon: <TrendingUp className="w-4 h-4" />, value: "320%", label: "Traffic Growth" },
      { icon: <Users className="w-4 h-4" />, value: "220%", label: "Conversions" },
      { icon: <Target className="w-4 h-4" />, value: "18x", label: "Rankings" }
    ]
  },

  {
    title: "LUXURY BRAND CAMPAIGN – BRANDVAANI",
    description: "Executed a premium marketing campaign for a luxury brand with personalized storytelling, AI-driven audience segmentation, and cross-platform creative assets.",
    image: "https://cdn.dribbble.com/userupload/16839775/file/original-8525fb86505cc39003fb206ea3b68119.png?resize=2048x1536&vertical=center",
    category: "Brand Strategy & Creative Campaigns",
    results: ["+450% Engagement", "2.5M+ Brand Reach", "5x CTR Improvement"],
    tech: ["Meta Ads", "Google Ads", "AI Targeting Engine"],
    liveUrl: "https://brandvaani.in/",
    resultsMetrics: [
      { icon: <BarChart className="w-4 h-4" />, value: "450%", label: "Engagement" },
      { icon: <Users className="w-4 h-4" />, value: "2.5M+", label: "Reach" },
      { icon: <Target className="w-4 h-4" />, value: "5x", label: "CTR" }
    ]
  },

  {
    title: "BRANDVAANI BUSINESS BOOST PROGRAM",
    description: "A full-funnel digital transformation project delivering sustainable lead generation with smart automation, targeted funnels, and performance-driven content.",
    image: "https://cdn.dribbble.com/userupload/14620509/file/original-c54dae5db1f3d079a519efaaa70ef3bc.png?resize=2048x1536&vertical=center",
    category: "Digital Marketing & Growth",
    results: ["+280% Qualified Leads", "40% Ad Cost Reduction", "98% Client Satisfaction"],
    tech: ["CRM Funnels", "Meta Business Suite", "Automated Lead Pipelines"],
    liveUrl: "https://brandvaani.in/",
    resultsMetrics: [
      { icon: <TrendingUp className="w-4 h-4" />, value: "280%", label: "Leads Growth" },
      { icon: <Target className="w-4 h-4" />, value: "40%", label: "Cost Saved" },
      { icon: <Users className="w-4 h-4" />, value: "98%", label: "Satisfaction" }
    ]
  },

  {
    title: "AI-DRIVEN MARKET INSIGHTS PLATFORM",
    description: "Developed an AI tool for brands to understand consumer behaviour, predict trends, and optimize campaigns with real-time analytics.",
    image: "https://cdn.dribbble.com/userupload/14816708/file/original-1fcb47b32338de7ddc0dca78677fe60b.png?resize=2048x1536&vertical=center",
    category: "AI & Brand Intelligence",
    results: ["90% Predictive Accuracy", "12x Faster Insights", "Brand Sentiment Tracking"],
    tech: ["Python", "Machine Learning", "Dashboard Analytics"],
    liveUrl: "https://brandvaani.in/",
    resultsMetrics: [
      { icon: <BarChart className="w-4 h-4" />, value: "90%", label: "Accuracy" },
      { icon: <TrendingUp className="w-4 h-4" />, value: "12x", label: "Speed" },
      { icon: <Target className="w-4 h-4" />, value: "24/7", label: "Tracking" }
    ]
  }
];

const FeaturedProjects = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Heading with Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6 border border-blue-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Featured Campaigns
            </div>
            
            <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 uppercase leading-tight mb-6">
              Brand <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mr-2">Success</span> 
              Stories
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed">
              Discover how BrandVaani transforms brands with data-driven strategies, creative excellence, and measurable marketing results that drive real business growth.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center lg:justify-end gap-4">
            <button
              ref={navigationPrevRef}
              className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-300 flex items-center justify-center group transition-all duration-300 hover:-translate-x-1"
            >
              <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              ref={navigationNextRef}
              className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-300 flex items-center justify-center group transition-all duration-300 hover:translate-x-1"
            >
              <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay, EffectCreative]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            effect="creative"
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            className=""
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="group w-full relative bg-white rounded-3xl transition-all duration-500 hover:-translate-y-4 overflow-hidden border border-gray-100">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-72">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-bold rounded-full border border-blue-100">
                        {project.category}
                      </span>
                    </div>

                    {/* CTA Button */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white/90 backdrop-blur-sm text-blue-600 text-sm font-semibold rounded-full hover:bg-white transition-colors flex items-center gap-2 border border-blue-100"
                      >
                        View Campaign
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-anton text-xl sm:text-2xl text-gray-900 uppercase mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Results Metrics - Grid Layout */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {project.resultsMetrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                          <div className="text-blue-500 flex justify-center mb-1">
                            {metric.icon}
                          </div>
                          <div className="font-bold text-gray-900 text-lg">{metric.value}</div>
                          <div className="text-xs text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Results Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.results.map((result, resultIndex) => (
                        <span key={resultIndex} className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 text-xs font-medium rounded-lg border border-blue-100">
                          {result}
                        </span>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-gray-100 gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors group/btn"
                      >
                        View Detailed Case Study
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                      
                      <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                        Request Similar Strategy
                      </button>
                    </div>
                  </div>

                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <div key={index} className="w-8 h-2 bg-gray-200 rounded-full hover:bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 cursor-pointer"></div>
            ))}
          </div>
        </div>

        {/* Brand Success Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
          {[
            { number: "500+", label: "Brands Transformed", gradient: "from-blue-500 to-purple-500" },
            { number: "3.5x", label: "Average ROI", gradient: "from-green-500 to-emerald-500" },
            { number: "98.7%", label: "Client Satisfaction", gradient: "from-purple-500 to-pink-500" },
            { number: "250M+", label: "Audience Reach", gradient: "from-orange-500 to-amber-500" }
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
              <div className="relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300">
                <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm sm:text-base">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;