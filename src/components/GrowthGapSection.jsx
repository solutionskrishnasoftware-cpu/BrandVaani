import { useState } from "react";
import { 
  Target, Palette, BarChart3, ChevronRight, Zap, 
  TrendingUp, Shield, Sparkles, ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function CombinedSection() {
  const [activeProblem, setActiveProblem] = useState(0);
  
  const problems = [
    {
      id: 1,
      title: "Budget Drain",
      description: "Creative spending without ROI tracking",
      icon: <Zap className="w-5 h-5" />,
      color: "from-orange-500 to-amber-500",
      stat: "73% of brands"
    },
    {
      id: 2,
      title: "CLTV Erosion",
      description: "Customer lifetime value declining",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      stat: "42% of companies"
    },
    {
      id: 3,
      title: "Data Blindspot",
      description: "Drowning in data, lacking insights",
      icon: <Shield className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
      stat: "65% of marketers"
    }
  ];

  const pillars = [
    {
      id: 1,
      icon: <Target className="w-8 h-8" />,
      title: "Strategy",
      subtitle: "The Blueprint",
      description: "Data-driven positioning and market intelligence",
      color: "from-blue-600 to-cyan-500",
      features: ["Market Analysis", "Brand Positioning", "Planning"]
    },
    {
      id: 2,
      icon: <Palette className="w-8 h-8" />,
      title: "Creative",
      subtitle: "The Execution",
      description: "High-impact solutions that resonate",
      color: "from-purple-600 to-pink-500",
      features: ["Visual Identity", "Content", "Campaigns"]
    },
    {
      id: 3,
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics",
      subtitle: "The Results",
      description: "Real-time tracking for measurable outcomes",
      color: "from-green-600 to-emerald-500",
      features: ["ROI Tracking", "Performance", "Optimization"]
    }
  ];

  return (
    <div className="w-full bg-white relative overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-purple-50 to-pink-50 rounded-full blur-3xl opacity-30"></div>
      
      {/* Floating Dots */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3 + i, repeat: Infinity }}
          className={`absolute w-2 h-2 rounded-full ${
            i === 0 ? 'bg-blue-300 top-20 left-10' : 
            i === 1 ? 'bg-purple-300 top-40 right-20' : 
            'bg-cyan-300 bottom-20 left-20'
          }`}
        />
      ))}

      {/* Compact Combined Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        
        {/* Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-full text-sm font-medium mb-4 border border-blue-100"
          >
            <Sparkles className="w-4 h-4" />
            Growth Transformation
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Bridge Your
        
              Growth Gap
            
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform marketing challenges into strategic advantages with our integrated framework.
          </p>
        </motion.div>

        {/* Problems - Compact Cards */}
        <div className="mb-16 lg:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -4 }}
                onClick={() => setActiveProblem(index)}
                className={`relative cursor-pointer ${
                  activeProblem === index ? 'lg:scale-[1.02]' : ''
                }`}
              >
                {/* Card */}
                <div className={`bg-white rounded-2xl p-6 border-2 transition-all duration-300 ${
                  activeProblem === index 
                    ? 'border-blue-500 shadow-lg' 
                    : 'border-gray-100 hover:border-blue-200'
                }`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${problem.color} p-3 flex items-center justify-center`}>
                      <div className="text-white">{problem.icon}</div>
                    </div>
                    <div className="text-2xl font-bold text-gray-200">0{problem.id}</div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {problem.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3">
                    {problem.description}
                  </p>

                  {/* Stat */}
                  <div className="text-lg font-bold text-gray-900">
                    {problem.stat}
                  </div>

                  {/* Active Indicator */}
                  {activeProblem === index && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solution Framework - Compact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              The <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Samanvay</span> Solution
            </h2>
            <p className="text-gray-600">
              Three integrated pillars for seamless growth
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                {/* Pillar Card */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} p-3 flex items-center justify-center`}>
                      <div className="text-white">{pillar.icon}</div>
                    </div>
                    <div className="text-4xl font-bold text-gray-200">
                      {pillar.id}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {pillar.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-full text-sm font-medium mb-3">
                    {pillar.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4">
                    {pillar.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {pillar.features.map((feature, fIndex) => (
                      <motion.div
                        key={fIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + fIndex * 0.1 }}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="mt-6 flex items-center gap-2 text-blue-600 font-medium text-sm group/btn">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 lg:mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 lg:p-8 border border-blue-100">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Growth Cycle</h3>
                <p className="text-gray-600 text-sm">
                  Strategic insights inform execution, which drives performance, refining strategy.
                </p>
              </div>
              
              {/* Flow Icons */}
              <div className="flex items-center gap-4">
                {pillars.map((pillar, index) => (
                  <div key={pillar.id} className="flex items-center">
                    <div className="text-center">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-2`}>
                        <div className="text-white font-bold text-xs">
                          {pillar.id}
                        </div>
                      </div>
                      <div className="text-xs font-medium text-gray-700">
                        {pillar.title}
                      </div>
                    </div>
                    {index < pillars.length - 1 && (
                      <div className="w-6 h-px bg-gradient-to-r from-blue-400 to-purple-400"></div>
                    )}
                  </div>
                ))}
                <div className="ml-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium rounded-lg">
                  ↻ Loop
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 lg:mt-16"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
            Start Your Transformation
          </button>
          <p className="text-gray-500 text-sm mt-3">
            Get a free growth gap analysis with your first consultation
          </p>
        </motion.div>
      </div>
    </div>
  );
}