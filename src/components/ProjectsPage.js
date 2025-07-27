import React from 'react';
import { FolderOpen, Calendar, Code, ExternalLink } from 'lucide-react';
import FloatingParticles from './FloatingParticles';

const ProjectsPage = ({ projects, darkMode }) => (
  <div className={`min-h-screen pt-24 relative overflow-hidden transition-all duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-purple-50 via-white to-pink-50'}`}>
    <FloatingParticles />
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 ">
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">Featured Projects</span>
          <span className="ml-3">🚀</span>
        </h1>
        <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Showcasing creativity, technical skills, and problem-solving abilities through real-world applications
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`group relative backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:rotate-1 ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'}`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 rounded-3xl group-hover:opacity-10 transition-opacity duration-500`}></div>
            <div className="absolute -top-6 -right-6 text-6xl group-hover:animate-bounce">
              {project.icon}
            </div>
            <div className="relative z-10">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-2 bg-gradient-to-r ${project.gradient} rounded-lg`}>
                    <FolderOpen className="text-white" size={20} />
                  </div>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-500'}`}>
                    {project.type}
                  </span>
                </div>
                <h3 className={`text-2xl lg:text-3xl font-bold mb-3 group-hover:text-purple-600 transition-colors ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {project.title}
                </h3>
                <div className={`flex items-center space-x-2 mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  <Calendar size={16} />
                  <span className="text-sm font-medium">{project.period}</span>
                </div>
              </div>
              <div className={`rounded-2xl p-6 mb-6 ${darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-600' : 'bg-gradient-to-r from-gray-50 to-gray-100'}`}>
                <p className={`leading-relaxed text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{project.description}</p>
              </div>
              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-3 flex items-center space-x-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  <Code size={20} />
                  <span>Technologies Used</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={`bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform cursor-pointer shadow-md`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {(index === 0 ? [
                  { label: 'User Panels', value: 'Admin + User', icon: '👥' },
                  { label: 'Features', value: 'Real-time Booking', icon: '📅' },
                  { label: 'Database', value: 'MySQL', icon: '🗄️' },
                  { label: 'Type', value: 'Web Application', icon: '🌐' }
                ] : [
                  { label: 'Platform', value: 'Desktop App', icon: '💻' },
                  { label: 'GUI', value: 'Tkinter', icon: '🖼️' },
                  { label: 'Database', value: 'SQLite3', icon: '🗄️' },
                  { label: 'Features', value: 'CRUD Operations', icon: '⚙️' }
                ]).map((highlight, idx) => (
                  <div key={idx} className={`p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{highlight.icon}</span>
                      <div>
                        <p className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{highlight.label}</p>
                        <p className={`text-sm font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{highlight.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex space-x-4">
                <button className={`group/btn flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  <ExternalLink className="group-hover/btn:rotate-45 transition-transform" size={18} />
                  <span className="font-semibold">View Project</span>
                </button>
                <button className={`flex items-center space-x-2 px-6 py-3 border-2 rounded-xl hover:border-purple-500 hover:text-purple-600 transition-all duration-300 transform hover:scale-105 ${darkMode ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-700'}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="font-semibold">Source Code</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={`backdrop-blur-sm p-8 rounded-3xl shadow-xl ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>More Projects Coming Soon!</span> 
            <span className='ml-3'>🔮</span>
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Currently working on exciting new projects</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'E-commerce Platform', tech: 'MERN Stack', status: 'In Progress', progress: 60, icon: '🛒' },
            { title: 'AI Chatbot', tech: 'Python + ML', status: 'Planning', progress: 20, icon: '🤖' },
            { title: 'Portfolio Dashboard', tech: 'React + Analytics', status: 'Completed', progress: 100, icon: '📊' }
          ].map((project, index) => (
            <div key={index} className={`group p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="text-center mb-4">
                <span className="text-4xl group-hover:animate-bounce inline-block">{project.icon}</span>
                <h3 className={`text-lg font-bold mt-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{project.title}</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{project.tech}</p>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Progress</span>
                  <span className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{project.progress}%</span>
                </div>
                <div className={`w-full rounded-full h-2 ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                project.status === 'Completed' ? 'bg-green-100 text-green-700' :
                project.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectsPage; 