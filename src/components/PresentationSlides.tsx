'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

const PresentationSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'title_slide',
      title: 'Title and Welcome',
      number: 1,
      content: {
        title: 'Empowering Special Education Teachers with Google\'s NotebookLM',
        subtitle: 'A Human-AI-Human Approach',
        description: 'Welcome to this interactive 75-minute training session designed specifically for special education professionals. Today, we\'ll explore how to ethically and effectively integrate AI tools into your practice while maintaining the human expertise that makes you irreplaceable.',
        bullets: [
          'Interactive learning experience with hands-on practice',
          'Focus on ethical AI use and student privacy protection',
          'Practical applications for daily special education tasks',
          'Human-AI-Human instructional model throughout'
        ]
      }
    },
    {
      id: 'agenda_slide',
      title: 'Our Journey Today',
      number: 2,
      content: {
        title: 'Our Journey Today: Navigating AI in Special Education',
        subtitle: 'Interactive Learning Roadmap',
        description: 'This comprehensive session will guide you through practical AI integration while maintaining ethical standards and professional expertise.',
        bullets: [
          'Four core application domains (IEPs, BIPs, Admin, Differentiation)',
          'Live demonstrations and hands-on practice activities',
          'Ethics and privacy protection strategies',
          'Interactive quizzes and collaborative discussions',
          '30-day implementation plan for sustained success'
        ]
      }
    },
    {
      id: 'iep_documentation',
      title: 'Streamlining IEPs',
      number: 3,
      content: {
        title: 'Streamlining IEPs: AI-Powered Documentation',
        subtitle: 'Enhancing Efficiency While Maintaining Quality',
        description: 'Learn how NotebookLM can transform your IEP documentation process, from initial assessments to progress monitoring, while ensuring compliance and personalization.',
        bullets: [
          'Automated data synthesis from multiple assessment sources',
          'Goal generation based on student-specific needs and standards',
          'Progress tracking and report generation',
          'Compliance checking and quality assurance',
          'Time-saving templates and workflow optimization'
        ]
      }
    },
    {
      id: 'bip_support',
      title: 'Enhancing BIPs',
      number: 4,
      content: {
        title: 'Enhancing BIPs: Data-Driven Interventions',
        subtitle: 'Evidence-Based Behavior Support',
        description: 'Discover how AI can help analyze behavioral patterns, suggest evidence-based interventions, and track progress for more effective Behavior Intervention Plans.',
        bullets: [
          'Pattern recognition in behavioral data collection',
          'Evidence-based intervention strategy recommendations',
          'Progress monitoring and data visualization',
          'Functional behavior assessment support',
          'Collaborative team communication tools'
        ]
      }
    },
    {
      id: 'admin_efficiency',
      title: 'Boosting Efficiency',
      number: 5,
      content: {
        title: 'Boosting Efficiency: Emails, Reports, Meetings',
        subtitle: 'Streamlining Administrative Tasks',
        description: 'Transform your administrative workflow with AI assistance for communication, documentation, and meeting management while maintaining professional standards.',
        bullets: [
          'Professional email drafting and response templates',
          'Meeting notes summarization and action item extraction',
          'Report generation and data compilation',
          'Parent communication enhancement',
          'Time management and workflow optimization'
        ]
      }
    },
    {
      id: 'differentiation',
      title: 'Personalized Learning',
      number: 6,
      content: {
        title: 'Personalized Learning: Differentiating for Every Student',
        subtitle: 'Tailored Educational Experiences',
        description: 'Explore how AI can help create personalized learning materials and support social-emotional development based on individual student profiles and needs.',
        bullets: [
          'Adaptive content creation for diverse learning styles',
          'Social-emotional learning support strategies',
          'Individualized accommodation recommendations',
          'Multi-sensory learning material development',
          'Progress tracking across multiple domains'
        ]
      }
    },
    {
      id: 'live_demo',
      title: 'NotebookLM in Action',
      number: 7,
      content: {
        title: 'NotebookLM in Action: Live Demo',
        subtitle: 'Seeing AI Tools in Practice',
        description: 'Experience a live demonstration of NotebookLM features specifically relevant to special education contexts, with focus on practical application and immediate usability.',
        bullets: [
          'Real-time document analysis and summarization',
          'Interactive Q&A with educational content',
          'Data synthesis from multiple sources',
          'Template creation and customization',
          'Workflow integration demonstrations'
        ]
      }
    },
    {
      id: 'prompt_chaining',
      title: 'Mastering Prompts',
      number: 8,
      content: {
        title: 'Mastering Prompts: The Art of AI Collaboration',
        subtitle: 'Effective Communication with AI',
        description: 'Learn the art of prompt engineering and chaining techniques to get the most accurate and useful responses from AI tools for your specific needs.',
        bullets: [
          'Fundamental principles of effective prompting',
          'Sequential prompt chaining for complex tasks',
          'Context setting and role specification',
          'Iterative refinement strategies',
          'Quality control and output evaluation'
        ]
      }
    },
    {
      id: 'ethics',
      title: 'Ethical AI',
      number: 9,
      content: {
        title: 'Ethical AI: Protecting Student Privacy',
        subtitle: 'Professional Standards and Responsibilities',
        description: 'Understand the ethical implications of AI use in education, with specific focus on student privacy, FERPA compliance, and maintaining professional judgment.',
        bullets: [
          'FERPA compliance and privacy protection strategies',
          'Bias recognition and mitigation techniques',
          'Professional judgment vs. AI recommendations',
          'Transparency and accountability in AI use',
          'Ethical decision-making frameworks'
        ]
      }
    },
    {
      id: 'deidentification',
      title: 'De-Identification Best Practices',
      number: 10,
      content: {
        title: 'De-Identification Best Practices',
        subtitle: 'Protecting Student Information',
        description: 'Master the essential techniques for de-identifying student data before using AI tools, ensuring privacy protection while maintaining data utility.',
        bullets: [
          'Systematic approach to data de-identification',
          'Identifying and removing direct identifiers',
          'Handling indirect identifiers and quasi-identifiers',
          'Verification and quality control processes',
          'Documentation and audit trail maintenance'
        ]
      }
    },
    {
      id: 'quiz',
      title: 'Test Your Knowledge',
      number: 11,
      content: {
        title: 'Test Your Knowledge: AI in SPED',
        subtitle: 'Interactive Assessment',
        description: 'Evaluate your understanding of AI applications in special education through this interactive quiz covering ethics, applications, and best practices.',
        bullets: [
          'Question 1: Privacy and FERPA compliance scenarios',
          'Question 2: Appropriate AI use cases in special education',
          'Question 3: Ethical decision-making situations',
          'Question 4: Professional judgment vs. AI recommendations',
          'Immediate feedback and explanation for each response'
        ]
      }
    },
    {
      id: 'discussion',
      title: 'Open Dialogue',
      number: 12,
      content: {
        title: 'Open Dialogue: AI\'s Impact on SPED',
        subtitle: 'Collaborative Reflection',
        description: 'Engage in facilitated discussion about the opportunities and challenges of AI integration in special education practice.',
        bullets: [
          'Opportunities: Enhanced efficiency and personalization',
          'Concerns: Privacy, bias, and over-reliance risks',
          'Implementation challenges and solutions',
          'Professional development needs and resources',
          'Future vision for AI in special education'
        ]
      }
    },
    {
      id: 'workflow',
      title: 'Optimizing Your Workflow',
      number: 13,
      content: {
        title: 'Optimizing Your Workflow: Task, Case, Hybrid',
        subtitle: 'Organizational Models for Success',
        description: 'Explore different approaches to organizing your AI-enhanced workflow, from task-based to case-based to hybrid models.',
        bullets: [
          'Task-based approach: Organizing by function (IEPs, BIPs, etc.)',
          'Case-based approach: Student-centered organization',
          'Hybrid model: Combining both approaches effectively',
          'Workflow automation and template creation',
          'Quality control and continuous improvement'
        ]
      }
    },
    {
      id: 'implementation',
      title: 'Your AI Journey',
      number: 14,
      content: {
        title: 'Your AI Journey: Next Steps & Action Plan',
        subtitle: '30-Day Implementation Strategy',
        description: 'Receive a structured 30-day plan for gradually integrating NotebookLM into your practice, with daily activities and milestone checkpoints.',
        bullets: [
          'Week 1: Setup, privacy training, and basic exploration',
          'Week 2: First applications with sample data',
          'Week 3: Integration with real workflows',
          'Week 4: Optimization and advanced techniques',
          'Ongoing support resources and community connections'
        ]
      }
    },
    {
      id: 'resources',
      title: 'Continuous Growth',
      number: 15,
      content: {
        title: 'Continuous Growth: Resources & Reflections',
        subtitle: 'Your Learning Journey Continues',
        description: 'Access comprehensive resources for continued learning and implementation, plus reflection on key takeaways from today\'s session.',
        bullets: [
          'Complete resource library with guides and templates',
          'Practice materials and sandbox environments',
          'Professional development pathways',
          'Community connections and ongoing support',
          'Commitment to ethical, student-centered AI use'
        ]
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="max-w-6xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Interactive Presentation</h1>
          <div className="text-slate-600">
            Slide {currentSlideData.number} of {slides.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 rounded-full h-2 mb-8">
          <div 
            className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>

        {/* Slide Navigation Thumbnails */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-2 mb-8">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`p-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <div className="flex items-center space-x-1">
                <Home className="h-3 w-3" />
                <span>{slide.title}</span>
              </div>
              <div className="text-xs opacity-75">{slide.number}</div>
            </button>
          ))}
        </div>

        {/* Main Slide Content */}
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg">
              <Home className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-800">{currentSlideData.content.title}</h2>
              <p className="text-lg text-slate-600">{currentSlideData.content.subtitle}</p>
            </div>
          </div>

          <p className="text-slate-700 text-lg mb-6 leading-relaxed">
            {currentSlideData.content.description}
          </p>

          <ul className="space-y-3">
            {currentSlideData.content.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-slate-700">{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              currentSlide === 0
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Previous</span>
          </button>

          <div className="text-center">
            <div className="text-sm text-slate-600 mb-1">Progress</div>
            <div className="text-lg font-semibold text-slate-800">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              currentSlide === slides.length - 1
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700'
            }`}
          >
            <span>Next</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default PresentationSlides;

