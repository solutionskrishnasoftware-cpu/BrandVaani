"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote, Award, Heart, ThumbsUp, Zap, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aarav Mehta",
      position: "Founder, UrbanCraft",
      content: "BrandVaani completely redefined our brand identity. Our social engagement grew by 400% within weeks, and our customer trust improved drastically.",
      rating: 5,
      avatar: "/images/avatar1.jpg",
      icon: Zap,
      gradient: "from-blue-500 to-cyan-400",
      bgGradient: "from-blue-900/20 to-cyan-900/20",
      delay: 0.1
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Marketing Head, NovaRetail",
      content: "Their strategy-first approach helped us scale our campaigns efficiently. We saw a massive boost in conversions and brand recall.",
      rating: 5,
      avatar: "/images/avatar2.jpg",
      icon: Award,
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-900/20 to-indigo-900/20",
      delay: 0.2
    },
    {
      id: 3,
      name: "Rohan Kapoor",
      position: "CEO, FinMatrix",
      content: "The creative team at BrandVaani is exceptional. Our new brand messaging and content strategy elevated our market positioning significantly.",
      rating: 5,
      avatar: "/images/avatar3.jpg",
      icon: Heart,
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-900/20 to-rose-900/20",
      delay: 0.3
    },
    {
      id: 4,
      name: "Meera Nair",
      position: "Operations Head, StyleHive",
      content: "Their performance marketing framework helped us achieve 3X ROI consistently. A reliable, innovative, and growth-focused team.",
      rating: 5,
      avatar: "/images/avatar4.jpg",
      icon: ThumbsUp,
      gradient: "from-emerald-500 to-green-400",
      bgGradient: "from-emerald-900/20 to-green-900/20",
      delay: 0.4
    },
    {
      id: 5,
      name: "Siddharth Rao",
      position: "Director, Zenith Technologies",
      content: "BrandVaani understood our long-term vision and built a strategic roadmap that transformed our brand into a market leader.",
      rating: 5,
      avatar: "/images/avatar5.jpg",
      icon: Star,
      gradient: "from-amber-500 to-yellow-400",
      bgGradient: "from-amber-900/20 to-yellow-900/20",
      delay: 0.5
    },
    {
      id: 6,
      name: "Ananya Gupta",
      position: "Founder, Bloom Studios",
      content: "From brand storytelling to campaign execution, everything was flawless. Their work helped us unlock new audiences and increase revenue.",
      rating: 5,
      avatar: "/images/avatar6.jpg",
      icon: Quote,
      gradient: "from-violet-500 to-purple-400",
      bgGradient: "from-violet-900/20 to-purple-900/20",
      delay: 0.6
    },
  ];

  const stats = [
    { value: "98%", label: "Client Satisfaction", gradient: "from-blue-500 to-cyan-500" },
    { value: "3.2x", label: "Average ROI", gradient: "from-emerald-500 to-green-500" },
    { value: "400+", label: "Projects Delivered", gradient: "from-purple-500 to-pink-500" },
    { value: "24/7", label: "Support", gradient: "from-amber-500 to-orange-500" },
  ];

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent animate-pulse"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-transparent to-pink-900/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[1px] bg-blue-400/30 rounded-full"
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 text-blue-300 px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-widest mb-6 border border-blue-800/50 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 fill-blue-400 text-blue-400" />
            Client Testimonials
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            Voices of{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Success
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto"
          >
            Don't just take our word for it. Here's what industry leaders and clients have to say about their transformative journey with us.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-b from-gray-800/50 to-gray-900/30 rounded-2xl p-6 border border-gray-800 backdrop-blur-sm">
                <div className="relative z-10">
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Swiper Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="relative"
        >
          {/* Custom Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              ref={navigationPrevRef}
              className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
            </button>
            <button
              ref={navigationNextRef}
              className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
              renderBullet: function (index, className) {
                return `<span class="${className} bg-gradient-to-r from-blue-500 to-cyan-500"></span>`;
              }
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="pb-16"
            onSwiper={(swiper) => {
              setTimeout(() => {
                if (swiper.params.navigation) {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              }, 100);
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="group h-full"
                >
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-blue-800/50 shadow-2xl hover:shadow-blue-900/30 transition-all duration-500 h-full flex flex-col">
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.bgGradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}></div>
                    
                    {/* Quote Icon Background */}
                    <div className="absolute top-6 left-6 opacity-10">
                      <Quote className="w-24 h-24 text-blue-400" />
                    </div>

                    {/* Icon Badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: testimonial.delay, duration: 0.6 }}
                      className={`absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center shadow-2xl z-10 border-2 border-gray-900`}
                    >
                      <testimonial.icon className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <Quote className="w-10 h-10 text-blue-400/50 mb-6" />
                      
                      <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow italic">
                        "{testimonial.content}"
                      </p>

                      {/* Rating */}
                      <div className="flex gap-1 mb-8">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: testimonial.delay + i * 0.1, type: "spring" }}
                          >
                            <Star className="w-6 h-6 fill-amber-400 text-amber-400 drop-shadow-lg" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-4 pt-8 border-t border-gray-800/50">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: testimonial.delay + 0.5, type: "spring" }}
                          className={`w-14 h-14 bg-gradient-to-r ${testimonial.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg border border-gray-800`}
                        >
                          {testimonial.name.charAt(0)}
                        </motion.div>
                        <div>
                          <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-gray-400 text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-blue-500/30 rounded-tl-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-blue-500/30 rounded-br-3xl"></div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16"
        >
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="group relative"
          >
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-3xl p-8 border border-gray-800 backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Real Results</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Our clients consistently achieve measurable growth and exceptional ROI through our data-driven strategies and proven methodologies.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="group relative"
          >
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-3xl p-8 border border-gray-800 backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Client First</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We build lasting partnerships based on trust, transparency, and a shared vision for success. Your growth is our priority.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 border border-gray-800 backdrop-blur-sm overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-900/20 to-purple-900/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-900/20 to-pink-900/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Ready to Transform Your Brand?
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
              >
                Join hundreds of successful brands who've achieved remarkable growth with our expertise.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 shadow-lg overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Start Your Journey</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700 hover:border-blue-500 shadow-lg group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></div>
                  <span className="relative">View Case Studies</span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          opacity: 0.3 !important;
          background: #64748b !important;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          transform: scale(1.2) !important;
          background: linear-gradient(to right, #3b82f6, #06b6d4) !important;
        }
        
        .swiper-pagination {
          position: relative !important;
          margin-top: 2rem !important;
        }
        
        @keyframes gradient-radial {
          0% { opacity: 0.5; }
          50% { opacity: 0.8; }
          100% { opacity: 0.5; }
        }
        
        .bg-gradient-radial {
          animation: gradient-radial 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;