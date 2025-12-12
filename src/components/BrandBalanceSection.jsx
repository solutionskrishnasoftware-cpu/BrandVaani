import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const BrandBalanceSection = () => {
  const sectionRef = useRef(null)
  const leftContentRef = useRef(null)
  const rightContentRef = useRef(null)
  const buttonRef = useRef(null)
  const textElementsRef = useRef([])

  useEffect(() => {
    // Animation for text reveal on scroll
    const ctx = gsap.context(() => {
      // Left content text animation
      const lines = document.querySelectorAll('.text-line')
      lines.forEach((line, i) => {
        gsap.fromTo(line,
          {
            y: 50,
            opacity: 0,
            filter: 'blur(10px)'
          },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1.2,
            delay: i * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Right content fade in
      gsap.fromTo('.right-content',
        {
          x: 100,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Gray to black text animation
      textElementsRef.current.forEach((text, index) => {
        if (text) {
          gsap.fromTo(text,
            {
              color: '#6b7280', // gray-500
              filter: 'blur(2px)'
            },
            {
              color: '#ffffff', // white
              filter: 'blur(0px)',
              duration: 1.5,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: text,
                start: 'top 90%',
                end: 'top 40%',
                scrub: true
              }
            }
          )
        }
      })

      // Button animation
      gsap.fromTo(buttonRef.current,
        {
          scale: 0.8,
          opacity: 0,
          rotation: -5
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 90%',
            end: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Background gradient animation
      gsap.fromTo(sectionRef.current,
        {
          background: 'linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)'
        },
        {
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
          duration: 2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1
          }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative  flex items-center justify-center overflow-hidden bg-black text-white py-24 border-y border-white/10"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] bg-[size:100px_100%] animate-slide-horizontal" />
          <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] bg-[size:100%_100px] animate-slide-vertical" />
        </div>
      </div>

      <div className="relative z-10 max-w-9xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div 
          ref={leftContentRef}
          className="pr-0 lg:pr-16 py-10 lg:py-20"
        >
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/10 text-sm font-medium text-blue-300 mb-4">
              THE BALANCE ACHIEVED
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[68px] font-bold leading-[0.95] tracking-tight uppercase font-['Archivo_Black']">
            <span className="block text-line opacity-0">
              CREATE THE
            </span>
            <span className="block text-line opacity-0 mt-2">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  BALANCE
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 origin-left transition-transform duration-1000 group-hover:scale-x-100"></span>
              </span>
            </span>
            <span className="block text-line opacity-0 mt-4">
              BETWEEN BRAND &
            </span>
            <span className="block text-line opacity-0">
              REVENUE
            </span>
          </h1>

          <div className="mt-12">
            <p 
              ref={el => textElementsRef.current[0] = el}
              className="text-xl font-medium uppercase text-gray-300 tracking-wider leading-relaxed"
            >
              GET THE SAMANVAY:
            </p>
            <p 
              ref={el => textElementsRef.current[1] = el}
              className="text-2xl md:text-3xl font-bold uppercase mt-2 text-gray-300 tracking-tight"
            >
              BRAND-TO-REVENUE
            </p>
            <p 
              ref={el => textElementsRef.current[2] = el}
              className="text-2xl md:text-3xl font-bold uppercase text-gray-300 tracking-tight"
            >
              ACCELERATION FRAMEWORK
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div 
          ref={rightContentRef}
          className="right-content pl-0 lg:pl-16 border-0 lg:border-l border-white/20 flex flex-col justify-center relative"
        >
          {/* Animated Border */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-0 bg-gradient-to-b from-transparent via-blue-500 to-transparent lg:block hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-pulse"></div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
              <p 
                ref={el => textElementsRef.current[3] = el}
                className="text-2xl lg:text-3xl font-light leading-relaxed text-gray-300 max-w-lg"
              >
                Most brands struggle because their beautiful campaigns don't drive sales,
                and their performance marketing erodes their brand.
                <span className="block mt-4 font-bold text-white">
                  We don't.
                </span>
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                {['Brand Strategy', 'Revenue Growth', 'Market Leadership'].map((item, index) => (
                  <div 
                    key={item}
                    className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:scale-105"
                  >
                    <span className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                ref={buttonRef}
                className="group relative px-10 py-4 mt-8 rounded-full text-white font-semibold text-lg overflow-hidden transition-all duration-500 hover:scale-105"
              >
                {/* Button Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 group-hover:from-blue-600/30 group-hover:via-purple-600/30 group-hover:to-pink-600/30 transition-all duration-500"></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-full bg-black"></div>
                </div>
                
                {/* Button Content */}
                <div className="relative flex items-center justify-center gap-3">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                    Explore SAMANVAY
                  </span>
                  <div className="relative w-6 h-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm group-hover:blur-md transition-all duration-500"></div>
                    <div className="relative w-6 h-6 flex items-center justify-center">
                      <span className="text-xl font-bold transform group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

      </div>

    
      {/* Add custom styles for animations */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@300;400;500;600;700&display=swap');
        
        @keyframes slide-horizontal {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(100px); }
        }
        
        @keyframes slide-vertical {
          0% { transform: translateY(-100px); }
          100% { transform: translateY(100px); }
        }
        
        .animate-slide-horizontal {
          animation: slide-horizontal 20s linear infinite;
        }
        
        .animate-slide-vertical {
          animation: slide-vertical 15s linear infinite;
        }
        
        .font-archivo-black {
          font-family: 'Archivo Black', sans-serif;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </section>
  )
}

export default BrandBalanceSection