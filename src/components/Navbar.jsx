import { useState, useEffect } from "react";
import {
  FileText, Users, Target, Newspaper, Mail,
  Menu, X, ChevronDown, Search, Sparkles,
  ArrowUpRight, Instagram, Linkedin, Twitter,
  Home, Briefcase, Zap, TrendingUp, BookOpen,
  MessageSquare, ExternalLink, Star, Moon, Sun
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Single Post",
      icon: <FileText className="w-4 h-4" />,
      href: "#",
      badge: "New",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "About",
      icon: <Users className="w-4 h-4" />,
      href: "#",
      dropdown: [
        { name: "Our Story", icon: <Sparkles className="w-4 h-4" /> },
        { name: "Team", icon: <Users className="w-4 h-4" /> },
        { name: "Values", icon: <Star className="w-4 h-4" /> },
        { name: "Milestones", icon: <TrendingUp className="w-4 h-4" /> },
      ]
    },
    {
      name: "Services",
      icon: <Target className="w-4 h-4" />,
      href: "#",
      badge: "Featured",
      color: "from-blue-500 to-cyan-500",
      dropdown: [
        {
          name: "Brand Strategy",
          icon: <Sparkles className="w-4 h-4" />,
          description: "Craft compelling brand narratives"
        },
        {
          name: "Digital Marketing",
          icon: <TrendingUp className="w-4 h-4" />,
          description: "Drive growth with data"
        },
        {
          name: "Content Creation",
          icon: <BookOpen className="w-4 h-4" />,
          description: "Engaging storytelling"
        },
        {
          name: "Growth Hacking",
          icon: <Zap className="w-4 h-4" />,
          badge: "Popular"
        },
      ]
    },
    {
      name: "News Flash",
      icon: <Newspaper className="w-4 h-4" />,
      href: "#",
      badge: "Trending",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Contact",
      icon: <Mail className="w-4 h-4" />,
      href: "#",
      dropdown: [
        { name: "Get Quote", icon: <MessageSquare className="w-4 h-4" /> },
        { name: "Support", icon: <Users className="w-4 h-4" /> },
        { name: "Partnership", icon: <Briefcase className="w-4 h-4" /> },
      ]
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-4 h-4" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-4 h-4" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-4 h-4" />, href: "#", label: "Twitter" }
  ];

  const Logo = () => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-3"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-20 rounded-full"></div>
      
      </div>
      <div className="flex flex-col">
        <div className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent">
          BrandVaani
        </div>
        <span className="text-xs text-white/60">Recreate. Rebrand. Reinvent.</span>
      </div>
    </motion.div>
  );

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/30'
            : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-sm'
        }`}
      >
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <Logo />
              </a>
            </div>

            {/* Desktop Navigation Center */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-3 text-white/90 hover:text-white font-medium rounded-xl transition-all duration-300 group relative ${
                      activeDropdown === index ? 'text-white bg-white/5' : ''
                    }`}
                  >
                    {/* Animated underline */}
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    
                    <span className={`${item.color ? `bg-gradient-to-r ${item.color}` : 'text-blue-400'} bg-clip-text text-transparent`}>
                      {item.icon}
                    </span>
                    <span className="relative">{item.name}</span>

                 

                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === index ? 'rotate-180 text-blue-400' : 'text-white/40'
                      }`} />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
                      >
                        <div className="p-2">
                          {item.dropdown.map((dropdownItem, idx) => (
                            <motion.a
                              key={idx}
                              href="#"
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/5 rounded-xl transition-all duration-300 group/item"
                            >
                              <span className="text-blue-400">{dropdownItem.icon}</span>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-white">{dropdownItem.name}</span>
                                  {dropdownItem.badge && (
                                    <span className="px-2 py-0.5 text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full">
                                      {dropdownItem.badge}
                                    </span>
                                  )}
                                </div>
                                {dropdownItem.description && (
                                  <p className="text-xs text-gray-400 mt-1">
                                    {dropdownItem.description}
                                  </p>
                                )}
                              </div>
                              <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover/item:text-blue-400 transition-colors" />
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-4">
            

              {/* Primary CTA */}
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 60px rgba(59, 130, 246, 0.3)",
                  background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 relative overflow-hidden group"
              >
                {/* Animated shimmer effect */}
                <div className="absolute inset-0 translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
                <span className="relative">Get Started</span>
                <ArrowUpRight className="w-4 h-4 relative" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <div key={item.name} className="space-y-1">
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-4 py-3 text-white hover:bg-white/5 rounded-xl transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`${item.color ? `bg-gradient-to-r ${item.color}` : 'text-blue-400'} bg-clip-text text-transparent`}>
                          {item.icon}
                        </span>
                        <span className="font-medium">{item.name}</span>
                        {item.badge && (
                          <span className={`px-2 py-0.5 text-xs bg-gradient-to-r ${
                            item.color || 'from-blue-500 to-purple-500'
                          } text-white rounded-full`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.dropdown && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === index ? 'rotate-180' : ''
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setActiveDropdown(activeDropdown === index ? null : index);
                          }}
                        />
                      )}
                    </a>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {item.dropdown && activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-10 space-y-1 bg-white/5 rounded-xl p-2"
                        >
                          {item.dropdown.map((dropdownItem, idx) => (
                            <a
                              key={idx}
                              href="#"
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/10 rounded-lg transition-colors"
                            >
                              <span className="text-blue-400">{dropdownItem.icon}</span>
                              <span className="font-medium">{dropdownItem.name}</span>
                              {dropdownItem.badge && (
                                <span className="ml-auto px-2 py-0.5 text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full">
                                  {dropdownItem.badge}
                                </span>
                              )}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Mobile CTA Buttons */}
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {socialLinks.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.href}
                          className="p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className="p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                  
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    >
                      Get Started
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-start justify-center pt-32 px-4"
            onClick={() => setSearchOpen(false)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
            <motion.div
              initial={{ y: -50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -50, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search anything..."
                  autoFocus
                  className="w-full px-6 py-4 pl-14 bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white text-sm font-medium px-3 py-1 rounded-lg hover:bg-white/5"
                >
                  ESC
                </button>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/10 p-4"
              >
                <p className="text-gray-400 text-sm">Try searching for: <span className="text-blue-400">services</span>, <span className="text-purple-400">blog posts</span>, <span className="text-green-400">contact</span></p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

  
    </>
  );
};

export default Navbar;