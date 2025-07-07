'use client';

import { motion } from 'framer-motion';
import { Target, Users, Shield, Clock, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            About This Training
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Designed specifically for special education professionals who want to integrate 
            AI tools ethically and effectively while maintaining their essential human expertise.
          </p>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl p-8 mb-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              To empower special education teachers with the knowledge, skills, and confidence 
              to use AI tools as powerful assistants while maintaining the human-centered, 
              ethical approach that defines excellent special education practice.
            </p>
          </div>
        </motion.div>

        {/* Key Principles */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Core Principles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Privacy First</h3>
              <p className="text-slate-600">
                Student privacy and FERPA compliance are non-negotiable. Every technique 
                taught prioritizes protecting student information while maximizing educational benefit.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-teal-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Human-Centered</h3>
              <p className="text-slate-600">
                AI enhances your professional expertise—it never replaces it. Your judgment, 
                experience, and relationship with students remain at the center of all decisions.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Practical Focus</h3>
              <p className="text-slate-600">
                Every concept is immediately applicable to real special education contexts. 
                No theoretical fluff—just practical tools you can use tomorrow.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Adult Learning</h3>
              <p className="text-slate-600">
                Designed using adult learning principles with interactive elements, 
                immediate relevance, and respect for your professional experience.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Evidence-Based</h3>
              <p className="text-slate-600">
                All recommendations are grounded in special education best practices 
                and current research on effective AI integration in educational settings.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Time-Efficient</h3>
              <p className="text-slate-600">
                Respects your busy schedule with focused, efficient training that 
                delivers maximum value in minimal time while ensuring thorough understanding.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Training Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Training Overview</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">What Makes This Different</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Specifically designed for special education contexts and challenges</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Comprehensive privacy protection and ethical framework</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Interactive elements designed for adult professional learners</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Complete implementation support with 30-day structured plan</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Learning Outcomes</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Confident use of NotebookLM for IEP and BIP development</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Streamlined administrative workflows saving 2-3 hours weekly</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Enhanced differentiation capabilities for diverse learners</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Ethical AI use framework for ongoing professional practice</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Instructional Design */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Human-AI-Human Model</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                H
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Human Expertise</h3>
              <p className="text-slate-600">
                Your professional knowledge, experience, and judgment form the foundation. 
                You bring the context, understanding, and decision-making capability.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                AI
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">AI Assistance</h3>
              <p className="text-slate-600">
                AI tools enhance your capabilities by processing information, identifying patterns, 
                and generating drafts that you review and refine.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                H
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Human Oversight</h3>
              <p className="text-slate-600">
                You maintain control, making final decisions, ensuring quality, 
                and adapting AI outputs to meet your students&apos; unique needs.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-slate-700 italic">
              &quot;AI amplifies human intelligence—it doesn&apos;t replace it. In special education, 
              the human connection and professional judgment remain irreplaceable.&quot;
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;

