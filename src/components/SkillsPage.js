import React from 'react';
// import { Star } from 'lucide-react';
import FloatingParticles from './FloatingParticles';

const SkillsPage = ({ skills, darkMode }) => (
  <div className={`min-h-screen pt-24 relative overflow-hidden transition-all duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-green-50 via-white to-blue-50'}`}>
    <FloatingParticles />
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Arsenal  
          </span> 
          <span className="ml-3">🚀</span>
        </h1>
        <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          A comprehensive toolkit built through dedication, practice, and passion for technology
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, skillData], index) => (
          <div 
            key={category} 
            className={`group backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-700 hover:scale-105 hover:rotate-1 ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'}`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${skillData.color} group-hover:animate-spin transition-all duration-500`}>
                <skillData.icon className="text-white" size={32} />
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{skillData.title}</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{skillData.items.length} skills</p>
              </div>
            </div>
            <div className="space-y-3">
              {skillData.items.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className={`group/item relative p-4 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-102 cursor-pointer ${darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500' : 'bg-gradient-to-r from-gray-50 to-gray-100 hover:from-white hover:to-gray-50'}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${skillData.color} rounded-xl opacity-0 group-hover/item:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative flex items-center justify-between">
                    <span className={`font-medium transition-colors ${darkMode ? 'text-gray-200 group-hover/item:text-white' : 'text-gray-700 group-hover/item:text-gray-900'}`}>
                      {skill}
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i < (skill.includes('Advanced') ? 5 : skill.includes('Core') ? 4 : 3) 
                              ? `bg-gradient-to-r ${skillData.color}` 
                              : 'bg-gray-200'
                          }`}
                          style={{ animationDelay: `${i * 100}ms` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={`mt-6 pt-6 border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between text-sm">
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Proficiency Level</span>
                <div className="flex items-center space-x-2">
                  <div className={`w-16 h-2 bg-gradient-to-r ${skillData.color} rounded-full`}></div>
                  <span className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    {category === 'languages' ? '85%' : 
                     category === 'frameworks' ? '80%' :
                     category === 'databases' ? '75%' :
                     category === 'tools' ? '90%' :
                     category === 'aiml' ? '70%' : '85%'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={`mt-20 backdrop-blur-sm p-8 rounded-3xl shadow-xl ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'}`}>
        <h2 className="text-3xl font-bold text-center mb-12 ">
          <span className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>Learning Journey Timeline </span>
          <span className='ml-3'>📈</span>
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
          {[
            { year: '2019', skill: 'Started with C Programming', icon: '👶' },
            { year: '2020', skill: 'Mastered Python Fundamentals', icon: '🐍' },
            { year: '2021', skill: 'Web Development with HTML/CSS/JS', icon: '🌐' },
            { year: '2022', skill: 'Database Management & SQL', icon: '🗄️' },
            { year: '2023', skill: 'React.js & Modern Frameworks', icon: '⚛️' },
            { year: '2024', skill: 'AI/ML & Data Science', icon: '🤖' },
            { year: '2025', skill: 'Full Stack Development', icon: '🚀' }
          ].map((item, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className={`group p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl group-hover:animate-bounce">{item.icon}</span>
                    <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {item.year}
                    </span>
                  </div>
                  <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{item.skill}</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SkillsPage; 