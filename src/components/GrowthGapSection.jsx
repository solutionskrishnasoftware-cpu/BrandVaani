import { useState, useEffect, useRef } from "react";
import { ChevronRight, Target, Zap, BarChart, ArrowRight, TrendingUp, Users, Award, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MarketingReverseSection() {
  const [activeGap, setActiveGap] = useState(0);
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const scrollContentRef = useRef(null);
  const gapItemsRef = useRef([]);
  const statNumbersRef = useRef([]);
  const lineRef = useRef(null);
  const floatingElementsRef = useRef([]);

  const growthGaps = [
    {
      title: "The Creative Budget Drain",
      description: "Beautiful campaigns that fail to convert, wasting resources on aesthetics without ROI. Most brands allocate significant budgets to creative that doesn't drive measurable business outcomes.",
      stat: "67",
      statLabel: "of creative budgets show no measurable return",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "blue",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "The CLTV Erosion",
      description: "Aggressive performance marketing sacrifices long-term customer value for short-term gains. This approach increases acquisition costs while decreasing lifetime value.",
      stat: "3.2",
      statLabel: "higher churn rate from performance-only strategies",
      icon: <Users className="w-6 h-6" />,
      color: "purple",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "The Data Blindspot",
      description: "Analytics track clicks but ignore brand sentiment and emotional connection. Most marketing teams can't connect brand metrics to revenue, leading to optimization for vanity metrics.",
      stat: "82",
      statLabel: "can't connect brand metrics to revenue",
      icon: <Award className="w-6 h-6" />,
      color: "indigo",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  const pillars = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Brand Strategy & Planning",
      subtitle: "Strategic foundation that aligns brand vision with business objectives",
      index: "01",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Creative & Content Engineering",
      subtitle: "Execution framework balancing aesthetics with measurable outcomes",
      index: "02",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Performance & Analytics",
      subtitle: "Measurement system tracking brand sentiment and revenue impact",
      index: "03",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stat numbers
      statNumbersRef.current.forEach((counter, index) => {
        if (counter) {
          gsap.fromTo(counter,
            { textContent: 0 },
            {
              textContent: growthGaps[index].stat,
              duration: 2,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: gapItemsRef.current[index],
                start: "top 80%"
              }
            }
          );
        }
      });

      // Set up scroll triggers for gap items
      gapItemsRef.current.forEach((item, index) => {
        if (item) {
          ScrollTrigger.create({
            trigger: item,
            start: "top 70%",
            end: "bottom 30%",
            onEnter: () => setActiveGap(index),
            onEnterBack: () => setActiveGap(index),
            markers: false
          });

          // Animate individual cards
          gsap.fromTo(item,
            {
              x: 100,
              opacity: 0,
              scale: 0.95
            },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              delay: index * 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

      // Animate sticky section
      gsap.fromTo(".sticky-title-word",
        {
          y: 100,
          opacity: 0,
          filter: "blur(10px)"
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: stickyRef.current,
            start: "top 80%"
          }
        }
      );

      // Animate the connecting line
      if (lineRef.current) {
        gsap.fromTo(lineRef.current,
          {
            scaleY: 0,
            transformOrigin: "top"
          },
          {
            scaleY: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom 40%",
              scrub: 1
            }
          }
        );
      }

      // Create floating elements
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            y: index % 2 === 0 ? -20 : 20,
            duration: 3 + index,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        }
      });

      // Animate framework pillars
      gsap.fromTo(".pillar-card",
        {
          y: 50,
          opacity: 0,
          rotationX: 10
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".framework-section",
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderTitle = () => {
    const title = "Is your marketing stuck in reverse?";
    return title.split(" ").map((word, index) => (
      <span key={index} className="sticky-title-word block">
        <span className={`inline-block ${
          word === "reverse?" ? "text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text" :
          word === "marketing" ? "text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text" :
          "text-gray-900"
        }`}>
          {word}
        </span>
      </span>
    ));
  };

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white text-gray-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div 
          ref={el => floatingElementsRef.current[0] = el}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
        />
        <div 
          ref={el => floatingElementsRef.current[1] = el}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
          style={{animationDelay: '1s'}}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#000_1px,transparent_1px)] bg-[size:80px_100%]" />
        </div>
      </div>

      <div className="relative z-10 max-w-9xl mx-auto px-4 sm:px-6 lg:px-24">
        
        {/* TOP SECTION - Sticky Left + Scroll Right */}
        <div className="min-h-screen flex flex-col lg:flex-row gap-0 lg:gap-16 py-20">
          
          {/* STICKY LEFT SIDE */}
          <div 
            ref={stickyRef}
            className="lg:sticky lg:top-32 lg:h-[calc(100vh-8rem)] lg:w-2/5 flex items-center relative"
          >
            {/* Animated Connecting Line */}
            <div 
              ref={lineRef}
              className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-purple-500/30 to-pink-500/20 transform origin-top hidden lg:block"
            />
            
            <div className="sticky-content space-y-12 w-full pl-8 lg:pl-12">
              {/* Section Label */}
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-purple-500" />
                <span className="text-sm font-medium text-blue-600 uppercase tracking-widest">
                  The Growth Gap
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight">
                {renderTitle()}
              </h1>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-lg max-w-md">
                Most brands face the same paradox: beautiful campaigns that don't drive revenue, 
                and performance marketing that erodes brand value.
              </p>

              {/* Active Indicator */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-px w-8 bg-gradient-to-r from-blue-500 to-purple-500" />
                  <span className="text-sm text-gray-500">Currently Viewing</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {growthGaps[activeGap]?.title}
                </div>
                <div className="flex items-center gap-2">
                  {growthGaps.map((_, index) => (
                    <div 
                      key={index}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        activeGap === index 
                          ? `w-8 bg-gradient-to-r ${growthGaps[index].gradient}`
                          : 'w-2 bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Stats */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                {[
                  { value: "300%", label: "ROI Increase", color: "text-blue-600" },
                  { value: "150+", label: "Brands Transformed", color: "text-purple-600" },
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SCROLLABLE RIGHT SIDE */}
          <div 
            ref={scrollContentRef}
            className="lg:w-3/5 lg:pl-16"
          >
            <div className="space-y-8 lg:space-y-12">
              {growthGaps.map((gap, index) => (
                <div
                  key={index}
                  ref={el => gapItemsRef.current[index] = el}
                  className="group"
                >
                  {/* Gap Card */}
                  <div className={`relative p-8 lg:p-12 border-2 rounded-3xl transition-all duration-700 ${
                    activeGap === index
                      ? `border-transparent bg-gradient-to-br from-white to-gray-50 shadow-2xl scale-[1.02]`
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}>
                    
                    {/* Gradient Border Overlay */}
                    <div className={`absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r ${gap.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                      activeGap === index ? 'opacity-20' : ''
                    }`}>
                      <div className="absolute inset-[2px] rounded-3xl bg-white"></div>
                    </div>
                    
                    {/* Index Badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-white border-2 border-gray-200 flex items-center justify-center shadow-xl z-10">
                      <span className="text-lg font-bold text-gray-800">0{index + 1}</span>
                    </div>

                    {/* Header */}
                    <div className="relative z-10 mb-8">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                        <div className="flex items-center gap-4">
                          <div className={`p-4 rounded-2xl bg-gradient-to-br ${gap.gradient}/10`}>
                            <div className={`bg-gradient-to-r ${gap.gradient} bg-clip-text text-transparent`}>
                              {gap.icon}
                            </div>
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                            {gap.title}
                          </h3>
                        </div>
                        
                        {/* Animated Stat */}
                        <div className="text-right">
                          <div className="flex items-baseline gap-1">
                            <span 
                              ref={el => statNumbersRef.current[index] = el}
                              className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                            >
                              0
                            </span>
                            <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {gap.color === 'blue' ? '%' : 'x'}
                            </span>
                          </div>
                          <div className="text-sm text-gray-500 mt-2">{gap.statLabel}</div>
                        </div>
                      </div>

                      {/* Active Indicator Line */}
                      <div className={`h-1 w-full rounded-full transition-all duration-700 ${
                        activeGap === index 
                          ? `bg-gradient-to-r ${gap.gradient}`
                          : 'bg-gray-200 group-hover:bg-gray-300'
                      }`} />
                    </div>

                    {/* Description */}
                    <div className="relative z-10">
                      <p className="text-gray-600 leading-relaxed text-lg mb-8">
                        {gap.description}
                      </p>

                      {/* Progress Indicator */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gap.gradient}`} />
                          <span className="text-sm font-medium text-gray-500">
                            Scroll to continue
                          </span>
                        </div>
                        <div className="text-sm text-gray-500">
                          {index + 1}/3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FRAMEWORK SECTION */}
        <div className="framework-section py-32 border-t border-gray-200">
          <div className="max-w-9xl mx-auto">
            {/* Section Header */}
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-purple-500" />
                <span className="text-sm font-medium text-blue-600 uppercase tracking-widest">
                  The Solution
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight mb-6">
                <span className="block text-gray-900">The</span>
                <span className="block text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
                  Samanvay
                </span>
                <span className="block text-gray-900">Framework</span>
              </h2>
              
              <p className="text-gray-600 text-lg max-w-2xl">
                Three integrated pillars designed to bridge the gap between 
                brand building and revenue generation.
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="pillar-card group"
                >
                  {/* Pillar Card */}
                  <div className="relative h-full p-8 border-2 border-gray-200 rounded-3xl bg-white hover:border-transparent transition-all duration-500">
                    {/* Gradient Border */}
                    <div className={`absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                      <div className="absolute inset-[2px] rounded-3xl bg-white"></div>
                    </div>
                    
                    {/* Index */}
                    <div className="relative z-10 flex items-center gap-3 mb-6">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${pillar.gradient} flex items-center justify-center`}>
                        <span className="text-sm font-bold text-white">{pillar.index}</span>
                      </div>
                      <div className="h-px w-8 bg-gradient-to-r from-gray-300 to-transparent" />
                    </div>

                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-8">{pillar.subtitle}</p>
                    </div>

                    {/* Arrow */}
                    <div className="relative z-10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-20 pt-12 border-t border-gray-200">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="max-w-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to move forward?
                  </h3>
                  <p className="text-gray-600">
                    Learn how our framework transforms marketing from a cost center 
                    to a growth engine.
                  </p>
                </div>
                
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center gap-3">
                    <span>Explore the Framework</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
        
        /* Animation keyframes */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}