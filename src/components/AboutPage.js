import React from 'react';
import { BookOpen, Star } from 'lucide-react';
import FloatingParticles from './FloatingParticles';

const AboutPage = ({ darkMode }) => (
  <div className={`min-h-screen pt-24 relative overflow-hidden transition-all duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
    <FloatingParticles />
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </span>
          <span className="ml-3">✨</span>
        </h1>
        <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Passionate developer on a journey to create amazing digital experiences
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Education */}
        <div className={`backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'}`}>
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
              <BookOpen className="text-white" size={28} />
            </div>
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Education Journey</h2>
          </div>
          <div className="space-y-8">
            <div className="relative pl-8 border-l-4 border-purple-500">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full animate-pulse"></div>
              <div className={`rounded-2xl p-6 ${darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-600' : 'bg-gradient-to-r from-purple-50 to-pink-50'}`}>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Master of Computer Application</h3>
                <p className="text-purple-600 font-semibold text-lg">Lal Bahadur Shastri Institute</p>
                <p className={`mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Lucknow, Uttar Pradesh</p>
                <div className="flex items-center space-x-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    8.0 CGPA
                  </span>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>2023 – 2025</span>
                </div>
              </div>
            </div>
            <div className="relative pl-8 border-l-4 border-blue-500">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
              <div className={`rounded-2xl p-6 ${darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-600' : 'bg-gradient-to-r from-blue-50 to-cyan-50'}`}>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Bachelor of Computer Application</h3>
                <p className="text-blue-600 font-semibold text-lg">M D College Barabanki</p>
                <p className={`mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Uttar Pradesh</p>
                <div className="flex items-center space-x-4">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    7.5 CGPA
                  </span>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>2019 – 2022</span>
                </div>
              </div>
            </div>
            <div className="relative pl-8 border-l-4 border-green-500">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
              <div className={`rounded-2xl p-6 ${darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-600' : 'bg-gradient-to-r from-green-50 to-emerald-50'}`}>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>12th Standard</h3>
                <p className="text-green-600 font-semibold text-lg">KHMGIC</p>
                <p className={`mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Lucknow, Uttar Pradesh</p>
                <div className="flex items-center space-x-4">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    69.2%
                  </span>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>2019</span>
                </div>
              </div>
            </div>
            <div className="relative pl-8 border-l-4 border-orange-500">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-orange-500 rounded-full animate-pulse"></div>
              <div className={`rounded-2xl p-6 ${darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-600' : 'bg-gradient-to-r from-orange-50 to-yellow-50'}`}>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>10th Standard</h3>
                <p className="text-orange-600 font-semibold text-lg">KHMGIC</p>
                <p className={`mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Lucknow, Uttar Pradesh</p>
                <div className="flex items-center space-x-4">
                  <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    77.66%
                  </span>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>2017</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Strengths and Languages */}
        <div className={`backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'}`}>
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl">
              <Star className="text-white" size={28} />
            </div>
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Core Strengths</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { text: 'Hardworking and focused', icon: '💪', color: 'from-red-500 to-pink-500' },
              { text: 'Quick to learn and adapt', icon: '🚀', color: 'from-blue-500 to-purple-500' },
              { text: 'Flexible environments', icon: '🌟', color: 'from-green-500 to-teal-500' },
              { text: 'Supportive team player', icon: '🤝', color: 'from-yellow-500 to-orange-500' }
            ].map((strength, index) => (
              <div key={index} className={`group p-4 bg-gradient-to-r ${strength.color} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1`}>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl group-hover:animate-bounce">{strength.icon}</span>
                  <span className="text-white font-semibold">{strength.text}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={`rounded-2xl p-6 ${darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-600' : 'bg-gradient-to-r from-indigo-50 to-purple-50'}`}>
            <h3 className={`text-xl font-bold mb-4 flex items-center space-x-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              <span>🌍</span>
              <span>Languages Known</span>
            </h3>
            <div className="flex space-x-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-transform cursor-pointer">
                हिंदी (Hindi)
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-transform cursor-pointer">
                English
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Personal interests */}
      <div className={`backdrop-blur-sm p-8 rounded-3xl shadow-xl ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'}`}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
           <span className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent '>What Drives Me </span>
            <span> 🎯</span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Beyond coding, here's what keeps me motivated and inspired
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Problem Solving', desc: 'Love tackling complex challenges with creative solutions', icon: '🧩', color: 'from-purple-500 to-pink-500' },
            { title: 'Continuous Learning', desc: 'Always exploring new technologies and frameworks', icon: '📚', color: 'from-blue-500 to-cyan-500' },
            { title: 'Innovation', desc: 'Building products that make a real difference', icon: '💡', color: 'from-green-500 to-teal-500' }
          ].map((item, index) => (
            <div key={index} className={`group text-center p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${item.color} mb-4 group-hover:animate-bounce`}>
                <span className="text-3xl">{item.icon}</span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{item.title}</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage; 