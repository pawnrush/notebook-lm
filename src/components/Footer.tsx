'use client';

import { motion } from 'framer-motion';
import { Brain, BookOpen, Users, Heart, Shield, Target } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-slate-800 to-blue-900 text-white mt-16"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-6 w-6 text-teal-400" />
              <BookOpen className="h-6 w-6 text-orange-400" />
              <Users className="h-6 w-6 text-teal-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">NotebookLM for Special Education</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Empowering special education teachers with ethical AI tools that enhance 
              human expertise while maintaining student-centered, privacy-first practices.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-red-400" />
                <span className="text-sm text-slate-300">Made with care for educators</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Training Components</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• 15 Interactive Slides</li>
              <li>• Live Demonstrations</li>
              <li>• Hands-on Practice</li>
              <li>• Ethics & Privacy Focus</li>
              <li>• 30-Day Implementation</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources Included</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Quick Start Guide</li>
              <li>• Prompting Guide</li>
              <li>• Privacy Cheat Sheet</li>
              <li>• Prompt Library</li>
              <li>• Practice Materials</li>
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <h4 className="text-lg font-semibold mb-6 text-center">Our Core Values</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Shield className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <h5 className="font-semibold mb-2">Privacy First</h5>
              <p className="text-sm text-slate-300">
                Student privacy and FERPA compliance in every recommendation
              </p>
            </div>
            <div className="text-center">
              <Heart className="h-8 w-8 text-red-400 mx-auto mb-2" />
              <h5 className="font-semibold mb-2">Human-Centered</h5>
              <p className="text-sm text-slate-300">
                AI enhances your expertise—never replaces your professional judgment
              </p>
            </div>
            <div className="text-center">
              <Target className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <h5 className="font-semibold mb-2">Practical Focus</h5>
              <p className="text-sm text-slate-300">
                Immediately applicable tools for real special education contexts
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-300 mb-4 md:mb-0">
              <p>&copy; 2025 NotebookLM Special Education Training.</p>
              <p className="text-sm mt-1">Designed for special education professionals who care about ethical AI use.</p>
            </div>
            <div className="text-slate-300 text-sm">
              <p>Version 1.0 • July 2025</p>
              <p>Human-AI-Human Instructional Model</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-700 mt-6 pt-6">
          <div className="bg-slate-700 rounded-lg p-4">
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Important:</strong> This training is designed to supplement, not replace, professional judgment 
              and expertise in special education. Always follow your district&apos;s policies regarding AI use, 
              maintain FERPA compliance, and prioritize student privacy in all applications. AI tools should 
              enhance your professional practice while keeping human oversight and decision-making at the center 
              of all educational decisions.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

