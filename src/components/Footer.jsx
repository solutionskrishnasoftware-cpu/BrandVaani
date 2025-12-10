
import React from "react";
import { Heart, Code2, Mail, Github, Twitter, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://facebook.com/kss-team",
      label: "Facebook"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com/kss-team",
      label: "Instagram"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/kss-team",
      label: "Twitter"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/company/kss-team",
      label: "LinkedIn"
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: "https://youtube.com/@kss-team",
      label: "YouTube"
    }
  ];

  const footerLinks = {
    "Quick Links": [
      { name: "Single Post", href: "/single-post" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "News Flash", href: "/news" },
      { name: "Contact", href: "/contact" }
    ],
    "Our Services": [
      { name: "Social Media", href: "/services/social-media" },
      { name: "PPC", href: "/services/ppc" },
      { name: "Content Marketing", href: "/services/content-marketing" },
      { name: "Strategy", href: "/services/strategy" }
    ],
    "Resources": [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" }
    ]
  };

  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border-t border-gray-700/50 rounded-t-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">

          {/* Brand Section - Span 4 columns */}
          <div className="lg:col-span-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3 mb-4">

                <div className="flex flex-col">
                  <img
                    src="https://brandvaani.in/wp-content/uploads/2025/10/Logo-900-x-300-3.png"
                    className="w-40 filter invert brightness-200 saturate-0"

                    alt="BrandVaani Logo"
                  />

                  <span className="text-sm text-gray-400">Branding • Strategy • Growth</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                BrandVaani empowers businesses to grow with strategic branding,
                performance-driven marketing, and compelling digital experiences
                that inspire engagement and deliver measurable results.
              </p>

              {/* Social Media - Follow Us Section */}
              <div className="pt-4">
                <h3 className="text-gray-300 font-semibold mb-4 flex items-center gap-2">
                  <span>Follow Us</span>
                  <div className="w-8 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
                </h3>
                <div className="flex items-center gap-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 text-gray-400 hover:text-white hover:bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all duration-300 group relative overflow-hidden"
                      aria-label={link.label}
                    >
                      {link.icon}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/10 group-hover:to-blue-600/5 transition-all duration-300"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links Sections - Span 8 columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category} className="space-y-4">
                  <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-gray-700/50 inline-block">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center gap-2 group"
                        >
                          <div className="w-1 h-1 bg-gray-600 group-hover:bg-blue-400 rounded-full transition-all duration-300"></div>
                          <span>{link.name}</span>
                          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider with Gradient */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700/50"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-gray-900">
              <Code2 className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-gray-500 text-sm text-center md:text-left">
            <p>&copy; {currentYear} brandvaani. All rights reserved.</p>
          </div>

          {/* Crafted with love */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
            <span>by</span>
            <span className="text-blue-400 font-medium hover:text-blue-300 transition-colors cursor-pointer relative group">
              KSS Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 group-hover:w-full transition-all duration-300"></span>
            </span>
          </div>

          {/* Additional Links */}
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <a
              href="/privacy"
              className="hover:text-blue-400 transition-colors hover:underline hover:underline-offset-2"
            >
              Privacy Policy
            </a>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <a
              href="/terms"
              className="hover:text-blue-400 transition-colors hover:underline hover:underline-offset-2"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;