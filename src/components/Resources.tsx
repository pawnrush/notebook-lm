'use client';

import { motion } from 'framer-motion';
import { Download, FileText, BookOpen, Package, Calendar, Shield } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      title: "NotebookLM Quick Start Guide",
      description: "Complete setup and basic usage guide with step-by-step instructions for getting started with NotebookLM in special education contexts.",
      icon: BookOpen,
      file: "NotebookLM_Quick_Start_Guide.pdf",
      size: "2.1 MB",
      pages: "20+ pages"
    },
    {
      title: "Professional Prompting Guide",
      description: "Comprehensive templates and examples for effective AI communication, specifically designed for special education applications.",
      icon: FileText,
      file: "Professional_Prompting_Guide.pdf",
      size: "1.8 MB",
      pages: "25+ pages"
    },
    {
      title: "De-Identification Cheat Sheet",
      description: "Quick reference guide for protecting student privacy when using AI tools, with practical examples and best practices.",
      icon: Shield,
      file: "De_Identification_Cheat_Sheet.pdf",
      size: "0.9 MB",
      pages: "8 pages"
    },
    {
      title: "Prompt Library",
      description: "Extensive collection of prompts organized by domain and complexity level, from beginner to advanced applications.",
      icon: FileText,
      file: "Prompt_Library.pdf",
      size: "2.3 MB",
      pages: "15+ pages"
    },
    {
      title: "30-Day Implementation Plan",
      description: "Structured daily activities and milestones for successfully integrating NotebookLM into your special education practice.",
      icon: Calendar,
      file: "30_Day_Implementation_Plan.pdf",
      size: "1.7 MB",
      pages: "20+ pages"
    },
    {
      title: "Sandbox Starter Kit",
      description: "Complete practice materials including fictional data sets, scenarios, and templates for safe experimentation.",
      icon: Package,
      file: "Sandbox_Starter_Kit.zip",
      size: "1.2 MB",
      pages: "Multiple files"
    }
  ];

  const handleDownload = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-6xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Comprehensive Resource Library
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Download all the materials you need to successfully implement NotebookLM in your 
            special education practice. Each resource is designed to support your journey 
            from beginner to advanced user.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800">{resource.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <span>{resource.size}</span>
                      <span>•</span>
                      <span>{resource.pages}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {resource.description}
                </p>
                
                <button
                  onClick={() => handleDownload(resource.file)}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200"
                >
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Usage Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8 border-l-4 border-blue-600"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-6">How to Use These Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Getting Started (Week 1)</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Begin with the <strong>Quick Start Guide</strong> for setup</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Review the <strong>De-Identification Cheat Sheet</strong> for privacy</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Practice with the <strong>Sandbox Starter Kit</strong> materials</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Building Skills (Week 2-4)</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Use the <strong>Professional Prompting Guide</strong> for better results</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Reference the <strong>Prompt Library</strong> for specific tasks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Follow the <strong>30-Day Implementation Plan</strong> daily</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Support Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Additional Support</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Continuous Learning</h3>
              <p className="text-slate-600 text-sm">
                These resources are designed to grow with you. Return to them as your skills develop 
                and your needs evolve.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Privacy First</h3>
              <p className="text-slate-600 text-sm">
                All materials emphasize student privacy protection and ethical AI use as 
                fundamental principles.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Complete Package</h3>
              <p className="text-slate-600 text-sm">
                Everything you need for successful AI integration, from basic setup to 
                advanced applications.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Resources;

