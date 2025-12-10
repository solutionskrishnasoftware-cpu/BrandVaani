import { useState } from "react";
import { 
  Target, Palette, BarChart3, ArrowRight, Zap, 
  TrendingUp, Shield, Sparkles, Circle, ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function CombinedSection() {
  const [activeProblem, setActiveProblem] = useState(0);
  
  const problems = [
    {
      id: 1,
      title: "Budget Drain",
      description: "Creative spending without ROI tracking",
      icon: <Zap className="w-5 h-5" />,
      color: "text-orange-500",
      bg: "bg-orange-50",
      border: "border-orange-200",
      stat: "73%"
    },
    {
      id: 2,
      title: "CLTV Erosion",
      description: "Customer lifetime value declining",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-200",
      stat: "42%"
    },
    {
      id: 3,
      title: "Data Blindspot",
      description: "Drowning in data, lacking insights",
      icon: <Shield className="w-5 h-5" />,
      color: "text-purple-500",
      bg: "bg-purple-50",
      border: "border-purple-200",
      stat: "65%"
    }
  ];

  const pillars = [
    {
      id: 1,
      icon: <Target className="w-6 h-6" />,
      title: "Strategy",
      description: "Data-driven positioning and market intelligence",
      color: "text-blue-600",
      bg: "bg-blue-100",
      border: "border-blue-200"
    },
    {
      id: 2,
      icon: <Palette className="w-6 h-6" />,
      title: "Creative",
      description: "High-impact solutions that resonate",
      color: "text-purple-600",
      bg: "bg-purple-100",
      border: "border-purple-200"
    },
    {
      id: 3,
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics",
      description: "Real-time tracking for measurable outcomes",
      color: "text-emerald-600",
      bg: "bg-emerald-100",
      border: "border-emerald-200"
    }
  ];

  const successStats = [
    "3.5x Average ROI", "98% Client Satisfaction", "500+ Brands Transformed", 
    "250M+ Audience Reach", "24/7 Support", "Award Winning", 
    "Data-Driven Results", "360° Strategy", "AI-Powered Insights"
  ];

  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Growth Transformation
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Bridge Your
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Growth Gap
            </span>
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Transform marketing challenges into strategic advantages with our integrated framework.
          </p>
        </motion.div>

        {/* Marquee Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-2">
            <Marquee 
              speed={40} 
              gradient={false}
              className="py-4"
            >
              <div className="flex items-center gap-8 px-8">
                {successStats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${index % 3 === 0 ? 'bg-blue-500' : index % 3 === 1 ? 'bg-purple-500' : 'bg-pink-500'}`} />
                    <span className="text-gray-700 font-medium whitespace-nowrap">{stat}</span>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </motion.div>

        {/* Problems - Minimal Design */}
        <div className="mb-20">
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="text-sm text-gray-500 font-medium">COMMON GROWTH CHALLENGES</div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setActiveProblem(index)}
                className="group cursor-pointer"
              >
                {/* Content Container */}
                <div className={`relative ${problem.bg} rounded-2xl p-6 border ${problem.border} transition-all duration-300 ${activeProblem === index ? 'ring-2 ring-blue-500' : ''}`}>
                  
                  {/* Icon and Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${problem.bg} ${problem.color}`}>
                      {problem.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-200">0{problem.id}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {problem.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4">
                    {problem.description}
                  </p>

                  {/* Stat */}
                  <div className="text-2xl font-bold text-gray-900">
                    {problem.stat}
                  </div>

                  {/* Hover Arrow */}
                  <div className="mt-4 flex items-center gap-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Learn solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solution Framework */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              The <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Samanvay</span> Framework
            </h2>
            <p className="text-gray-600">
              Three integrated pillars for seamless growth
            </p>
          </div>

          {/* Pillars - Vertical Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-emerald-200 hidden md:block"></div>
            
            {/* Pillars */}
            <div className="space-y-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-6 top-6 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -translate-x-1/2 z-10 hidden md:block"></div>

                  {/* Content */}
                  <div className="ml-0 md:ml-12">
                    <div className="flex items-start gap-6">
                      {/* Number */}
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-xl ${pillar.bg} border ${pillar.border} flex items-center justify-center ${pillar.color}`}>
                          <div className="font-bold text-lg">{pillar.id}</div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 rounded-lg ${pillar.bg} ${pillar.color}`}>
                            {pillar.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {pillar.title}
                          </h3>
                        </div>
                        
                        <p className="text-gray-600 mb-4">
                          {pillar.description}
                        </p>
                        
                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {["Market Intelligence", "Creative Solutions", "Performance Tracking"].map((item, i) => (
                            <span key={i} className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
                              {item}
                            </span>
                          ))}
                        </div>

                        <button className="flex items-center gap-2 text-blue-600 font-medium group/btn">
                          Explore pillar
                          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
            <span>Start Your Transformation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Get a free growth gap analysis with your first consultation
          </p>
        </motion.div>
      </div>
    </div>
  );
}