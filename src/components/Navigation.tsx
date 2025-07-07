'use client';

import { motion } from 'framer-motion';
import { Home, Presentation, Download, Info } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation = ({ currentPage, setCurrentPage }: NavigationProps) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home, color: 'bg-green-500' },
    { id: 'presentation', label: 'Presentation', icon: Presentation, color: 'bg-blue-500' },
    { id: 'resources', label: 'Resources', icon: Download, color: 'bg-orange-500' },
    { id: 'about', label: 'About', icon: Info, color: 'bg-purple-500' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-white shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-1 py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? `${item.color} text-white shadow-lg`
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

