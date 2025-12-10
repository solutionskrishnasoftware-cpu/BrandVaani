import React, { useState, useEffect } from "react";
import { 
  Target, 
  TrendingUp, 
  Users, 
  Award, 
  BarChart,
  Palette,
  Heart,
  Zap,
  Shield,
  Clock,
  DollarSign,
  MessageSquare,
  Rocket,
  Brain,
  Eye,
  Megaphone,
  ChevronRight
} from "lucide-react";

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState('strategy');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const strategyMetrics = [
    { icon: <TrendingUp className="w-5 h-5" />, label: "Brand Growth", value: "3.5x", trend: "+250%", positive: true },
    { icon: <Users className="w-5 h-5" />, label: "Audience Reach", value: "1.2M+", trend: "+180%", positive: true },
    { icon: <DollarSign className="w-5 h-5" />, label: "Average ROI", value: "4.2x", trend: "+42%", positive: true },
    { icon: <BarChart className="w-5 h-5" />, label: "Engagement Rate", value: "8.7%", trend: "+65%", positive: true }
  ];

  const brandingStack = {
    identity: [
      { name: "Logo Design", proficiency: 98, projects: 156 },
      { name: "Brand Voice", proficiency: 95, projects: 142 },
      { name: "Visual System", proficiency: 97, projects: 138 },
      { name: "Brand Guidelines", proficiency: 96, projects: 134 }
    ],
    digital: [
      { name: "Social Media", proficiency: 99, projects: 189 },
      { name: "Content Strategy", proficiency: 94, projects: 167 },
      { name: "Website Design", proficiency: 96, projects: 145 },
      { name: "Digital Campaigns", proficiency: 97, projects: 178 }
    ]
  };

  const campaignStats = [
    { phase: "Awareness", completed: 234, current: 18, color: "from-green-400 to-cyan-400" },
    { phase: "Consideration", completed: 198, current: 24, color: "from-green-500 to-emerald-500" },
    { phase: "Conversion", completed: 176, current: 16, color: "from-cyan-400 to-blue-400" },
    { phase: "Loyalty", completed: 152, current: 12, color: "from-green-400 to-teal-400" }
  ];

  const performanceMetrics = [
    { metric: "Client Retention", value: 96, target: 85, icon: <Heart className="w-4 h-4" /> },
    { metric: "Campaign Success", value: 92, target: 80, icon: <Zap className="w-4 h-4" /> },
    { metric: "Brand Recall", value: 88, target: 75, icon: <Eye className="w-4 h-4" /> },
    { metric: "Lead Quality", value: 94, target: 80, icon: <Shield className="w-4 h-4" /> }
  ];

  return (
    <section className="px-6 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#00dc82 1px, transparent 1px),
                            linear-gradient(90deg, #00dc82 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating Brand Elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <Target size={100} />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Brain size={100} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 bg-gray-800/50 backdrop-blur-lg text-green-400 px-6 py-3 rounded-2xl text-sm font-mono mb-6 border border-gray-700/50">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            BRANDVAANI DASHBOARD - BRANDING + STRATEGY + MARKETING
          </div>
          
          <h2 className="font-anton text-5xl md:text-6xl text-white uppercase mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">BRANDING</span> + 
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> STRATEGY</span> + 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> MARKETING</span>
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed font-light max-w-3xl">
            We transform brands with data-driven strategies, creative excellence, and measurable results. 
            Our holistic approach ensures your brand not only looks good but performs exceptionally in the market.
          </p>
        </div>

        {/* Dashboard Tabs */}
        <div className="flex gap-2 mb-8">
          {[
            { id: 'strategy', label: 'STRATEGY', icon: <Brain className="w-4 h-4" /> },
            { id: 'branding', label: 'BRANDING', icon: <Palette className="w-4 h-4" /> },
            { id: 'marketing', label: 'MARKETING', icon: <Megaphone className="w-4 h-4" /> },
            { id: 'performance', label: 'PERFORMANCE', icon: <BarChart className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-gray-800/50 text-gray-400 hover:text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Strategy & Insights */}
        {activeTab === 'strategy' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {strategyMetrics.map((metric, index) => (
              <div key={index} className="group bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/30 transition-all duration-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-gray-700/50 text-green-400">
                    {metric.icon}
                  </div>
                  <span className={`text-xs font-mono px-2 py-1 rounded ${
                    metric.positive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {metric.trend}
                  </span>
                </div>
                <div className="text-2xl font-mono font-bold text-white mb-1">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
                <div className="w-full bg-gray-700/50 rounded-full h-1 mt-3">
                  <div className="h-1 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-1000" 
                       style={{ width: `${80 + index * 5}%` }}></div>
                </div>
              </div>
            ))}
            
            <div className="md:col-span-2 lg:col-span-4 bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 mt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-green-400 font-mono text-lg mb-4">STRATEGIC FRAMEWORK</h3>
                  <p className="text-gray-400 mb-4">
                    We combine market intelligence, consumer insights, and competitive analysis to create winning strategies that drive brand growth and market leadership.
                  </p>
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm">
                    ANALYZE OUR APPROACH
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-center p-4 bg-gray-700/50 rounded-xl border border-green-500/20">
                    <div className="text-2xl font-mono font-bold text-green-400 mb-1">360°</div>
                    <div className="text-sm text-gray-400">ANALYSIS</div>
                  </div>
                  <div className="text-center p-4 bg-gray-700/50 rounded-xl border border-cyan-500/20">
                    <div className="text-2xl font-mono font-bold text-cyan-400 mb-1">DATA</div>
                    <div className="text-sm text-gray-400">DRIVEN</div>
                  </div>
                  <div className="text-center p-4 bg-gray-700/50 rounded-xl border border-blue-500/20">
                    <div className="text-2xl font-mono font-bold text-blue-400 mb-1">AGILE</div>
                    <div className="text-sm text-gray-400">EXECUTION</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Branding Excellence */}
        {activeTab === 'branding' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-green-400 font-mono text-lg mb-6 flex items-center gap-3">
                <Palette className="w-5 h-5" />
                BRAND IDENTITY
              </h3>
              <div className="space-y-4">
                {brandingStack.identity.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{item.name}</span>
                      <span className="text-green-400 font-mono text-sm">{item.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-1000"
                        style={{ width: `${item.proficiency}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 font-mono">Delivered for {item.projects} brands</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-cyan-400 font-mono text-lg mb-6 flex items-center gap-3">
                <Megaphone className="w-5 h-5" />
                DIGITAL PRESENCE
              </h3>
              <div className="space-y-4">
                {brandingStack.digital.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{item.name}</span>
                      <span className="text-cyan-400 font-mono text-sm">{item.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-1000"
                        style={{ width: `${item.proficiency}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 font-mono">Executed {item.projects} campaigns</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Marketing Results */}
        {activeTab === 'marketing' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {campaignStats.map((stat, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 group hover:border-green-500/30 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className={`text-3xl font-mono font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.completed}
                  </div>
                  <div className="text-gray-300 font-medium mb-1">{stat.phase}</div>
                  <div className="text-green-400 text-sm font-mono">+{stat.current} active</div>
                  <div className="w-16 h-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full mx-auto mt-3">
                    <div 
                      className="h-1 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-1000"
                      style={{ width: `${90 - index * 5}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Performance Metrics */}
        {activeTab === 'performance' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gray-700/50 text-green-400">
                    {metric.icon}
                  </div>
                  <span className="text-gray-300 font-medium text-sm">{metric.metric}</span>
                </div>
                <div className="flex items-end gap-2 mb-2">
                  <div className="text-2xl font-mono font-bold text-white">{metric.value}%</div>
                  <div className="text-green-400 text-sm font-mono mb-1">▲ {(metric.value - metric.target).toFixed(1)}%</div>
                </div>
                <div className="text-xs text-gray-500">Target: {metric.target}%</div>
                <div className="w-full bg-gray-700/50 rounded-full h-2 mt-3">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-1000"
                    style={{ width: `${metric.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}

    
        {/* Brand Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gray-700/50 flex items-center justify-center text-green-400 mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-3">Strategic Vision</h4>
            <p className="text-gray-400">
              We develop comprehensive branding strategies that align with your business goals and market positioning.
            </p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gray-700/50 flex items-center justify-center text-cyan-400 mb-4">
              <Rocket className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-3">Creative Execution</h4>
            <p className="text-gray-400">
              From concept to campaign, we deliver creative solutions that resonate with your audience and drive results.
            </p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gray-700/50 flex items-center justify-center text-blue-400 mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-3">Measurable Growth</h4>
            <p className="text-gray-400">
              We focus on ROI-driven marketing with transparent reporting and continuous optimization for maximum impact.
            </p>
          </div>
        </div>

        {/* Live Status Bar */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-4 border border-gray-700/50 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm font-mono gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400">SYSTEM: OPTIMAL</span>
              </div>
              <span className="text-gray-400">Active Campaigns: <span className="text-white">24</span></span>
              <span className="text-gray-400">Team Online: <span className="text-white">18/20</span></span>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <span>Campaigns Today: <span className="text-white">7</span></span>
              <span>Content Created: <span className="text-white">142</span></span>
              <span>Success Rate: <span className="text-green-400">99.7%</span></span>
            </div>
          </div>
        </div>

        {/* Tech/Brand Badges */}
        <div className="flex flex-wrap gap-3 justify-center mt-8">
          {['Brand Strategy', 'Digital Marketing', 'Social Media', 'Content Creation', 'SEO', 'PPC', 'Analytics', 'ROI Tracking'].map((item) => (
            <div key={item} className="px-4 py-2 bg-gray-800/50 backdrop-blur-lg rounded-full border border-gray-700/50 text-gray-300 text-sm font-mono hover:border-green-500/30 transition-colors">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;