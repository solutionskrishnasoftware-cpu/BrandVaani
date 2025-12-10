import { useState, useEffect } from "react";
import {
  FileText, Users, Target, Newspaper, Mail,
  Menu, X, ChevronDown, Search, Sparkles,
  ArrowUpRight, Instagram, Linkedin, Twitter,
  Home, Briefcase, Zap, TrendingUp, BookOpen,
  MessageSquare, ExternalLink, Star
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Single Post",
      icon: <FileText className="w-4 h-4" />,
      href: "#",
      badge: "New"
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
      badge: "Trending"
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
    <div className="flex items-center gap-3">
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >


      </motion.div>
      <div className="flex flex-col">
        <img
          src="/logo/Logo-900-x-300-3.png"
          class="w-40 filter brightness-0"
        />
        <span className="text-xs text-gray-500">Recreate. Rebrand. Reinvent.</span>
      </div>
    </div>
  );

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl'
            : 'bg-white/90 backdrop-blur-lg'
          }`}
      >
        <div className="max-w-9xl mx-auto px-4 sm:px-20">
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
                    className="flex items-center gap-2 px-4 py-3 text-gray-700 hover:text-gray-900 font-medium rounded-xl hover:bg-gray-50 transition-all duration-200 group"
                  >
                    <span className="text-blue-500">{item.icon}</span>
                    <span>{item.name}</span>

                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''
                        }`} />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                      >
                        <div className="p-2">
                          {item.dropdown.map((dropdownItem, idx) => (
                            <a
                              key={idx}
                              href="#"
                              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors duration-200 group/item"
                            >
                              <span className="text-blue-500">{dropdownItem.icon}</span>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">{dropdownItem.name}</span>
                                  {dropdownItem.badge && (
                                    <span className="px-2 py-0.5 text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full">
                                      {dropdownItem.badge}
                                    </span>
                                  )}
                                </div>
                                {dropdownItem.description && (
                                  <p className="text-xs text-gray-500 mt-1">
                                    {dropdownItem.description}
                                  </p>
                                )}
                              </div>
                              <ArrowUpRight className="w-4 h-4 text-gray-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-3">

              {/* Divider */}
              <div className="h-6 w-px bg-gray-300"></div>

              {/* Primary CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2"
              >
                Get Started
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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
              className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <div key={item.name} className="space-y-1">
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-blue-500">{item.icon}</span>
                        <span className="font-medium">{item.name}</span>
                        {item.badge && (
                          <span className="px-2 py-0.5 text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.dropdown && (
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''
                          }`} />
                      )}
                    </a>

                    {/* Mobile Dropdown */}
                    {item.dropdown && activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-10 space-y-1 bg-gray-50 rounded-xl p-2"
                      >
                        {item.dropdown.map((dropdownItem, idx) => (
                          <a
                            key={idx}
                            href="#"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-white rounded-lg transition-colors"
                          >
                            <span className="text-blue-500">{dropdownItem.icon}</span>
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
                  </div>
                ))}

                {/* Mobile CTA Buttons */}
                <div className="pt-6 border-t border-gray-200 space-y-4">

                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-4 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                      <Search className="w-4 h-4" />
                      Search
                    </button>
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

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;