import React from 'react';
import { User, BookOpen, Code, Briefcase, FolderOpen, MessageSquare, Menu, X, Moon, Sun } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: User, color: 'from-purple-500 to-pink-500' },
  { id: 'about', label: 'About', icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
  { id: 'skills', label: 'Skills', icon: Code, color: 'from-green-500 to-teal-500' },
  { id: 'experience', label: 'Experience', icon: Briefcase, color: 'from-yellow-500 to-orange-500' },
  { id: 'projects', label: 'Projects', icon: FolderOpen, color: 'from-red-500 to-pink-500' },
  { id: 'contact', label: 'Contact', icon: MessageSquare, color: 'from-indigo-500 to-purple-500' }
];

const Navbar = ({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen, darkMode, setDarkMode }) => (
  <nav className={`fixed top-0 w-full backdrop-blur-xl shadow-xl z-50 transition-all border-b ${darkMode ? 'bg-gray-900/95 border-gray-700' : 'bg-white/95 border-purple-100'}`}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-center py-4">
        <div className="relative group inline-block">
          <div className={`text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ${darkMode ? 'drop-shadow-lg' : ''}`}>
            Pooja Sharma ✨
          </div>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-3 items-center">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`relative flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                currentPage === item.id 
                  ? `bg-gradient-to-r ${item.color} text-white shadow-lg` 
                  : `${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-white'} hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500`
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <item.icon size={18} />
              <span className="font-medium text-lg">{item.label}</span>
            </button>
          ))}
          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`ml-4 p-2 rounded-xl hover:scale-110 transition-transform ${darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-600 text-yellow-400' : 'bg-gradient-to-r from-gray-200 to-gray-300 text-purple-600'}`}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative p-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden pb-6 animate-slideDown">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setIsMenuOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-4 rounded-xl transition-all duration-300 mb-2 ${
                currentPage === item.id 
                  ? `bg-gradient-to-r ${item.color} text-white shadow-lg` 
                  : `${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white`
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
          {/* Dark mode toggle for mobile */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-full flex items-center space-x-3 px-4 py-4 rounded-xl transition-all duration-300 mt-4 ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-purple-600'}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span className="font-medium">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      )}
    </div>
  </nav>
);

export default Navbar; 