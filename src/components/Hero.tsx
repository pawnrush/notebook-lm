'use client';

import { motion } from 'framer-motion';
import { Play, Download, CheckCircle, Shield, Users, Target } from 'lucide-react';

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-slate-800 mb-6">
          Empowering Special Education Teachers with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
            Google&apos;s NotebookLM
          </span>
        </h1>
        <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
          A comprehensive 75-minute interactive training that teaches special education teachers 
          how to use AI tools ethically and effectively for IEPs, BIPs, administrative tasks, 
          and differentiated instruction.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Play className="h-6 w-6" />
            <span>Start Presentation</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center space-x-2 bg-white text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-slate-300 hover:border-slate-400 transition-all duration-200"
          >
            <Download className="h-6 w-6" />
            <span>Download Resources</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Interactive Learning</h3>
          <p className="text-slate-600 mb-4">
            Comprehensive interactive session designed specifically for special education 
            professionals, following the Human-AI-Human instructional model.
          </p>
          <ul className="text-sm text-slate-600 space-y-2">
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Engaging polls and quizzes
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Discussion boards
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Hands-on activities
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="bg-teal-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
            <Shield className="h-8 w-8 text-teal-600" />
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Ethical AI Focus</h3>
          <p className="text-slate-600 mb-4">
            Comprehensive guidance on ethical AI use, student privacy protection, 
            and de-identification best practices for FERPA compliance.
          </p>
          <ul className="text-sm text-slate-600 space-y-2">
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Privacy protection strategies
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              FERPA compliance guidelines
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Professional judgment integration
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
            <Target className="h-8 w-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Practical Applications</h3>
          <p className="text-slate-600 mb-4">
            Immediate, actionable strategies for integrating AI tools into your 
            daily special education practice with real-world examples.
          </p>
          <ul className="text-sm text-slate-600 space-y-2">
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              IEP documentation automation
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              BIP data analysis
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Administrative efficiency
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl p-8"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">What You&apos;ll Learn</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Core Applications</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>IEP documentation and progress reporting automation</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Behavior Intervention Plan (BIP) data analysis and support</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Administrative efficiency for emails, reports, and meetings</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Academic and social-emotional differentiation strategies</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Advanced Skills</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Ethical AI use and professional judgment integration</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Advanced prompting techniques and workflow optimization</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>30-day implementation plan with daily activities</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Comprehensive resource library and practice materials</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

