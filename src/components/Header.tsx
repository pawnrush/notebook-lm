'use client';

import { motion } from 'framer-motion';
import { Brain, BookOpen, Users } from 'lucide-react';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-slate-800 to-blue-900 text-white py-6"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-teal-400" />
              <BookOpen className="h-8 w-8 text-orange-400" />
              <Users className="h-8 w-8 text-teal-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">NotebookLM for Special Education</h1>
              <p className="text-slate-300 text-sm">Empowering Teachers with AI-Powered Tools</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400">75</div>
              <div className="text-xs text-slate-300">Minutes Interactive Training</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">15</div>
              <div className="text-xs text-slate-300">Slides Comprehensive Content</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400">6</div>
              <div className="text-xs text-slate-300">Resources Downloadable Guides</div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

