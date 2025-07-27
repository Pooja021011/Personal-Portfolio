import React from 'react';
import { Calendar, Star } from 'lucide-react';
import FloatingParticles from './FloatingParticles';

const ExperiencePage = ({ experience, darkMode }) => (
  <div className={`min-h-screen pt-24 relative overflow-hidden transition-all duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-yellow-50 via-white to-orange-50'}`}>
    <FloatingParticles />
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 ">
          <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Professional Journey  
          </span> 
          <span className="ml-3">💼</span>
        </h1>
        <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Building expertise through hands-on training and real-world experience
        </p>
      </div>
      <div className="space-y-12">
        {experience.map((exp, index) => (
          <div 
            key={index} 
            className={`group relative backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-102 ${
              index % 2 === 0 ? 'lg:ml-12' : 'lg:mr-12'
            } ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'}`}
          >
            <div className={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r ${exp.gradient} rounded-2xl rotate-12 group-hover:rotate-45 transition-transform duration-500 opacity-20`}></div>
            <div className={`absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r ${exp.gradient} rounded-full opacity-30 group-hover:scale-150 transition-transform duration-500`}></div>
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-4 bg-gradient-to-r ${exp.gradient} rounded-2xl group-hover:animate-bounce`}>
                    <span className="text-3xl">{exp.icon}</span>
                  </div>
                  <div>
                    <h3 className={`text-2xl lg:text-3xl font-bold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{exp.title}</h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent mb-1`}>
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full inline-block">
                      {exp.type}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 mt-4 lg:mt-0">
                  <Calendar className="text-gray-400" size={20} />
                  <span className="font-medium bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
                    {exp.period}
                  </span>
                </div>
              </div>
              <div className={`rounded-2xl p-6 mb-6 ${darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-600' : 'bg-gradient-to-r from-gray-50 to-gray-100'}`}>
                <p className={`leading-relaxed text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{exp.description}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {(index === 0 ? [
                  { label: 'Technologies', value: 'AI/ML, MERN Stack', icon: '🔧' },
                  { label: 'Duration', value: '6 Months', icon: '⏱️' },
                  { label: 'Focus', value: 'Real-time Apps', icon: '🎯' }
                ] : [
                  { label: 'Technologies', value: 'Python, Django, Flask', icon: '🔧' },
                  { label: 'Duration', value: '1 Year', icon: '⏱️' },
                  { label: 'Focus', value: 'Full Stack Dev', icon: '🎯' }
                ]).map((highlight, idx) => (
                  <div key={idx} className={`group/highlight p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                    <div className="flex items-center space-x-3">
                      <span className="text-xl group-hover/highlight:animate-bounce">{highlight.icon}</span>
                      <div>
                        <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{highlight.label}</p>
                        <p className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{highlight.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={`mt-6 pt-6 border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                <h4 className={`text-lg font-semibold mb-3 flex items-center space-x-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  <Star className="text-yellow-500" size={20} />
                  <span>Key Skills Developed</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(index === 0 ? [
                    'Machine Learning', 'React.js', 'Node.js', 'DBMS', 'Project Management'
                  ] : [
                    'Python Development', 'Django Framework', 'Flask', 'MySQL', 'Web Technologies'
                  ]).map((skill, skillIdx) => (
                    <span 
                      key={skillIdx} 
                      className={`bg-gradient-to-r ${exp.gradient} text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={`mt-20 backdrop-blur-sm p-8 rounded-3xl shadow-xl ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold  mb-4">
            <span className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>Certifications & Achievements </span>
            <span>🏆</span>
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Recognized expertise and continuous learning</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { 
              title: 'Full Stack Web Development Certificate', 
              issuer: 'CEPTA, Noida', 
              year: '2022', 
              skills: ['Python', 'Django', 'MySQL', 'Front-end'],
              color: 'from-blue-500 to-cyan-500',
              icon: '🎓'
            },
            { 
              title: 'Software Engineering Training', 
              issuer: 'Smart Data Enterprises', 
              year: '2025', 
              skills: ['AI/ML', 'MERN Stack', 'DBMS', 'Project Work'],
              color: 'from-green-500 to-teal-500',
              icon: '💻'
            }
          ].map((cert, index) => (
            <div key={index} className={`group p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="flex items-start space-x-4 mb-4">
                <div className={`p-3 bg-gradient-to-r ${cert.color} rounded-xl group-hover:animate-pulse`}>
                  <span className="text-2xl">{cert.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{cert.title}</h3>
                  <p className={`font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent mb-1`}>
                    {cert.issuer}
                  </p>
                  <span className={`text-sm px-3 py-1 rounded-full ${darkMode ? 'text-gray-300 bg-gray-600' : 'text-gray-500 bg-gray-100'}`}>
                    {cert.year}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx} 
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${darkMode ? 'bg-gray-600 text-gray-200 hover:bg-gray-500' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ExperiencePage; 