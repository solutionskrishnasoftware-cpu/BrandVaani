"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
const faqs = [
  {
    question: "What services does BrandVaani offer?",
    answer:
      "BrandVaani specializes in brand strategy, social media management, content marketing, performance marketing (PPC), creative design, and full-scale digital growth solutions tailored for businesses at every stage."
  },
  {
    question: "How can I get in touch with BrandVaani?",
    answer:
      "You can reach us through our website’s contact form or email us directly at hello@brandvaani.in. Our team will get back to you within 24 hours."
  },
  {
    question: "Does BrandVaani offer customized branding and marketing solutions?",
    answer:
      "Absolutely. Every brand is unique, and our strategies are crafted based on your goals, audience, and market position. Whether you need a full rebrand or targeted performance campaigns, we tailor each service to your needs."
  },
  {
    question: "How does your pricing work?",
    answer:
      "Pricing depends on the scope of services—branding, content, ads, or complete growth management. We offer flexible monthly retainers and project-based pricing. Contact us to get a personalized quote."
  },
  {
    question: "Can BrandVaani help scale my brand’s digital presence?",
    answer:
      "Yes! Our Brand-to-Revenue framework ensures measurable growth through strategic branding, optimized campaigns, storytelling, and continuous performance analysis."
  }
];


const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Enhanced Header */}
        <div className=" mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg ">
            Find quick answers to common questions about our services and processes
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl  transition-all duration-300 border ${
                openIndex === index 
                  ? "border-blue-200 shadow-blue-100" 
                  : "border-gray-100"
              }`}
            >
              <button
                className="w-full flex justify-between items-center px-8 py-6 text-left group"
                onClick={() => toggleFaq(index)}
              >
                <span className={`font-semibold text-lg transition-colors ${
                  openIndex === index ? "text-blue-600" : "text-gray-800 group-hover:text-blue-500"
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${
                  openIndex === index 
                    ? "bg-blue-100 text-blue-600 rotate-180" 
                    : "bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-500"
                }`}>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              {/* Animated content */}
              <div className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <div className="px-8 pb-6">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mb-4"></div>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Faqs;