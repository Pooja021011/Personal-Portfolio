import React from 'react';
import { Mail, Phone, MapPin, Sparkles, ChevronRight, FolderOpen, Download, Coffee, Heart, Zap, BookOpen, Code } from 'lucide-react';
import FloatingParticles from './FloatingParticles';
import profile from '../assets/Image_2-removebg-preview.png';

const HomePage = ({ isAnimated, typedText, showParticles, setCurrentPage, darkMode }) => (
  <div className={`min-h-screen pt-20 relative overflow-hidden transition-all duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-purple-50 via-white to-pink-50'}`}>
    {showParticles && <FloatingParticles />}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
    <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className={`transform transition-all duration-1000 lg:pl-8 ${isAnimated ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <div className="mb-6">
            <div className="mb-4 text-left">
              <h1 className={`text-3xl lg:text-4xl font-bold leading-tight transition-colors duration-500 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Hi, I'm
              </h1>
              <div className="relative mt-2 inline-block">
                <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  Pooja Sharma
                </span>
              </div>
            </div>
            <div className={`text-3xl lg:text-4xl mb-2 font-medium transition-colors duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {typedText}
              </span>
              <span className="animate-blink">|</span>
            </div>
            <p className="text-sm text-purple-600 font-medium flex items-center space-x-2">
              <Sparkles size={16} />
              <span>Currently Training at Smart Data Enterprises</span>
            </p>
          </div>
          <p className={`text-xl mb-8 leading-relaxed transition-colors duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Passionate full-stack developer with expertise in{' '}
            <span className="font-semibold text-purple-600">Python</span>,{' '}
            <span className="font-semibold text-blue-600">React.js</span>, and modern web technologies.
            Building innovative solutions with{' '}
            <span className="font-semibold text-pink-600">creativity</span> and{' '}
            <span className="font-semibold text-green-600">precision</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
            <div className={`flex flex-col items-center justify-center space-y-1 p-3 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'}`}>
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-1">
                <Mail className="text-white" size={16} />
              </div>
              <p className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Email</p>
              <p className={`text-xs font-semibold text-center ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>pooja.sharma001011@gmail.com</p>
            </div>
            <div className={`flex flex-col items-center justify-center space-y-1 p-3 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'}`}>
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-1">
                <Phone className="text-white" size={16} />
              </div>
              <p className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Phone</p>
              <p className={`text-xs font-semibold text-center ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>+91 8808354073</p>
            </div>
            <div className={`flex flex-col items-center justify-center space-y-1 p-3 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'}`}>
              <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mb-1">
                <MapPin className="text-white" size={16} />
              </div>
              <p className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Location</p>
              <p className={`text-xs font-semibold text-center ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Lucknow, UP</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button
              onClick={() => setCurrentPage('contact')}
              className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 overflow-hidden flex-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="relative z-10 font-semibold">Get In Touch</span>
              <ChevronRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
            <button
              onClick={() => setCurrentPage('projects')}
              className={`group px-6 py-3 border-2 border-purple-600 rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-xl transform hover:scale-105 flex-1 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}
            >
              <FolderOpen className="group-hover:rotate-12 transition-transform" size={18} />
              <span className="font-semibold">View Projects</span>
            </button>
            <a
              href="/Pooja_Sharma_Resume.pdf"
              download
              className={`group px-6 py-3 border-2 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 flex-1 ${darkMode ? 'bg-gray-800 border-gray-600 text-gray-200 hover:bg-gray-700' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}`}
            >
              <Download className="group-hover:translate-y-1 transition-transform" size={18} />
              <span className="font-semibold">Download Resume</span>
            </a>
          </div>
          <div className="flex items-center mt-8 space-x-6">
            <a 
              href="https://github.com/Pooja021011"
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <svg className={`group-hover:text-purple-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/itspoojasharma/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <svg className={`group-hover:text-blue-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
        <div className={`transform transition-all duration-1000 delay-300 ${isAnimated ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 animate-spin-slow">
              <div className={`w-96 h-96 border-4 rounded-full ${darkMode ? 'border-gray-600' : 'border-purple-200'}`}></div>
            </div>
            <div className="absolute inset-8 animate-spin-reverse">
              <div className={`w-80 h-80 border-4 rounded-full ${darkMode ? 'border-gray-500' : 'border-pink-200'}`}></div>
            </div>
            <div className="absolute inset-16 animate-spin-slow">
              <div className={`w-64 h-64 border-4 rounded-full ${darkMode ? 'border-gray-400' : 'border-blue-200'}`}></div>
            </div>
            <div className={`relative z-10 w-96 h-96 rounded-full flex items-center justify-center shadow-2xl ${darkMode ? 'bg-gradient-to-br from-gray-600 via-gray-500 to-gray-700' : 'bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400'}`}>
              <div className={`w-80 h-80 rounded-full flex items-center justify-center shadow-inner overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <img src={profile} alt="Profile" className="w-full h-full object-contain rounded-full" />
              </div>
            </div>
            <div className="absolute top-20 left-20 animate-float delay-1000">
              <div className={`p-3 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <Coffee className="text-yellow-600" size={24} />
              </div>
            </div>
            <div className="absolute bottom-20 right-20 animate-float delay-2000">
              <div className={`p-3 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <Heart className="text-red-500" size={24} />
              </div>
            </div>
            <div className="absolute top-40 right-10 animate-float delay-3000">
              <div className={`p-3 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <Zap className="text-blue-500" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { number: '15+', label: 'Projects Completed', icon: FolderOpen, color: 'from-purple-500 to-pink-500' },
          { number: '5+', label: 'Technologies', icon: Code, color: 'from-blue-500 to-cyan-500' },
          { number: '2+', label: 'Years Learning', icon: BookOpen, color: 'from-green-500 to-teal-500' },
          { number: '100%', label: 'Dedication', icon: Heart, color: 'from-red-500 to-pink-500' }
        ].map((stat, index) => (
          <div key={index} className={`group text-center p-3 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'}`}>
            <div className={`inline-flex p-1.5 rounded-lg bg-gradient-to-r ${stat.color} mb-2 group-hover:rotate-12 transition-transform`}>
              <stat.icon className="text-white" size={16} />
            </div>
            <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{stat.number}</h3>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
    <style jsx>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      @keyframes blob {
        0%, 100% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
      }
      @keyframes gradient {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes spin-reverse {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
      }
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
      @keyframes slideDown {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-float { animation: float 6s ease-in-out infinite; }
      .animate-blob { animation: blob 7s infinite; }
      .animate-gradient { animation: gradient 3s ease infinite; background-size: 200% 200%; }
      .animate-spin-slow { animation: spin-slow 10s linear infinite; }
      .animate-spin-reverse { animation: spin-reverse 8s linear infinite; }
      .animate-blink { animation: blink 1s infinite; }
      .animate-slideDown { animation: slideDown 0.3s ease-out; }
      .animation-delay-2000 { animation-delay: 2s; }
      .animation-delay-4000 { animation-delay: 4s; }
    `}</style>
  </div>
);

export default HomePage; 