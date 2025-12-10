"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote, Award, Heart, ThumbsUp, Zap, ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

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
      color: "from-blue-500 to-cyan-400",
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
      color: "from-blue-600 to-indigo-500",
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
      color: "from-pink-500 to-rose-400",
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
      color: "from-green-500 to-emerald-400",
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
      color: "from-amber-500 to-yellow-400",
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
      color: "from-purple-500 to-violet-400",
      delay: 0.6
    },
  ];

  const stats = [
    { value: "98%", label: "Client Satisfaction", color: "text-blue-500" },
    { value: "3.2x", label: "Average ROI", color: "text-green-500" },
    { value: "400+", label: "Projects Delivered", color: "text-purple-500" },
    { value: "24/7", label: "Support", color: "text-amber-500" },
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
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-cyan-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100/30 to-indigo-100/20 rounded-full blur-3xl"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-700 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest mb-6 border border-blue-200/50 backdrop-blur-sm"
          >
            <Star className="w-4 h-4 fill-blue-500 text-blue-500" />
            Client Testimonials
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-anton text-5xl md:text-6xl lg:text-7xl text-gray-900 uppercase leading-tight mb-6"
          >
            Voices of <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Success</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Don't just take our word for it. Here's what industry leaders and clients have to say about their transformative journey with us.
          </motion.p>
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
              className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
            </button>
            <button
              ref={navigationNextRef}
              className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
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
              // Delay navigation buttons initialization
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
                  <div className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                    {/* Quote Icon Background */}
                    <div className="absolute top-6 left-6 opacity-5">
                      <Quote className="w-24 h-24 text-blue-500" />
                    </div>

                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: testimonial.delay, duration: 0.6 }}
                      className={`absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-r ${testimonial.color} flex items-center justify-center shadow-xl z-10`}
                    >
                      <testimonial.icon className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <Quote className="w-10 h-10 text-blue-400 mb-6" />
                      
                      <p className="text-gray-700 text-lg leading-relaxed mb-8 flex-grow">
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
                            <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-4 pt-8 border-t border-gray-100">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: testimonial.delay + 0.5, type: "spring" }}
                          className={`w-14 h-14 bg-gradient-to-r ${testimonial.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                        >
                          {testimonial.name.charAt(0)}
                        </motion.div>
                        <div>
                          <h4 className="text-gray-900 font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-gray-600 text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}></div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Testimonial Cards Grid (Alternative View) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16"
        >
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl p-8 border border-blue-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Real Results</h3>
                <p className="text-gray-600">Our clients consistently achieve measurable growth and exceptional ROI through our data-driven strategies.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl p-8 border border-purple-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Client First</h3>
                <p className="text-gray-600">We build lasting partnerships based on trust, transparency, and a shared vision for success.</p>
              </div>
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
          <div className="bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-3xl p-12 border border-blue-200/30 backdrop-blur-sm">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Ready to Transform Your Brand?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto"
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
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Start Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 border border-blue-200 shadow-lg"
              >
                View Case Studies
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #3b82f6 1px, transparent 1px),
                            linear-gradient(to bottom, #3b82f6 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          opacity: 0.5 !important;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          transform: scale(1.2) !important;
        }
        
        .swiper-pagination {
          position: relative !important;
          margin-top: 2rem !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;