import React, { useState, useEffect } from "react";
import { ArrowUpRight, Star, Target, TrendingUp, Zap, Shield, Users } from "lucide-react";
import { Laptop, Code, Smartphone, ShoppingCart, Megaphone, Briefcase, PenTool } from "lucide-react";

const services = [
    {
      title: "Web Design & Development",
      description: "Modern, responsive websites designed to enhance user experience and business growth.",
      icon: <Laptop size={24} />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      stats: "100+ Projects"
    },
    {
      title: "Software Development",
      description: "Custom software solutions tailored to meet your business needs with efficiency and scale.",
      icon: <Code size={24} />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      stats: "50+ Solutions"
    },
    {
      title: "Mobile App Development",
      description: "User-friendly mobile apps for Android & iOS to engage customers anytime, anywhere.",
      icon: <Smartphone size={24} />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      stats: "30+ Apps"
    },
    {
      title: "E-Commerce Solutions",
      description: "Scalable online stores with secure payments and smooth shopping experiences.",
      icon: <ShoppingCart size={24} />,
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
      stats: "20+ Stores"
    },
    {
      title: "Digital Marketing",
      description: "Boost your brand visibility with targeted campaigns, SEO, and online advertising strategies.",
      icon: <Megaphone size={24} />,
      color: "from-red-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-red-50 to-rose-50",
      stats: "5x ROI"
    },
    {
      title: "Social Media Management",
      description: "Engage your audience with consistent, creative, and impactful social media strategies.",
      icon: <Users size={24} />,
      color: "from-indigo-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-violet-50",
      stats: "2M+ Followers"
    },
    {
      title: "Sourcing & Placement",
      description: "Connecting businesses with skilled talent through effective hiring solutions.",
      icon: <Briefcase size={24} />,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-teal-50 to-cyan-50",
      stats: "500+ Placements"
    },
    {
      title: "Graphic Design",
      description: "Creative and visually appealing designs to strengthen brand identity and communications.",
      icon: <PenTool size={24} />,
      color: "from-pink-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-purple-50",
      stats: "100+ Designs"
    },
  ];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className=" px-6 py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto ">
        {/* Heading Section */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            PREMIUM SERVICES
            <Star className="w-4 h-4" />
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-gray-900 uppercase leading-none mb-6">
          Build <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Smart</span> Solutions
          </h2>
          
          <p className="text-xl w-[60%] text-gray-600  leading-relaxed">
          Delivering high-quality software, mobile apps, and web solutions to help businesses grow, 
  streamline operations, and achieve digital transformation with measurable results.
          </p>

          {/* Stats Bar */}
          <div className="flex gap-8 mt-12">
            <div className="">
              <div className="font-anton text-3xl text-gray-900">500+</div>
              <div className="text-sm text-gray-500">Clients Worldwide</div>
            </div>
            <div className="">
              <div className="font-anton text-3xl text-gray-900">98%</div>
              <div className="text-sm text-gray-500">Success Rate</div>
            </div>
            <div className="">
              <div className="font-anton text-3xl text-gray-900">24/7</div>
              <div className="text-sm text-gray-500">Support</div>
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative ${service.bgColor} p-8 rounded-3xl border border-white/50 backdrop-blur-sm transition-all duration-500 hover:scale-105  hover:border-white/80`}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon Container */}
              <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="font-anton text-2xl text-gray-900 uppercase mb-4 leading-tight group-hover:text-gray-800 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                {service.description}
              </p>

              {/* Stats Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                {service.stats}
              </div>

              {/* Action Button */}
              <div className="flex items-center justify-between">
                <button className="flex items-center gap-2 text-gray-700 group-hover:text-gray-900 font-medium transition-colors">
                  Learn More
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                
                {/* Hover Effect Circle */}
                <div className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center group-hover:bg-white/80 transition-colors">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.color} group-hover:scale-110 transition-transform`}></div>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

      
       
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-10 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default ServicesSection;