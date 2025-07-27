import React from 'react';
import { MessageSquare, Mail, Phone, MapPin, ChevronRight, Sparkles, User, Coffee } from 'lucide-react';
import FloatingParticles from './FloatingParticles';


const ContactPage = ({ contactForm, setContactForm, contacts, handleContactSubmit, darkMode, isSubmitting }) => (
  <div className={`min-h-screen pt-24 relative overflow-hidden transition-all duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-indigo-50 via-white to-purple-50'}`}>
    <FloatingParticles />
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Connect!
            </span> 
          <span className="ml-3">
          🤝
          </span>
        </h1>
        <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Ready to collaborate on your next project? Let's create something amazing together!
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className={`backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'}`}>
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
              <MessageSquare className="text-white" size={28} />
            </div>
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Contact Information</h2>
          </div>
          <div className="space-y-6">
            {[
              { icon: Mail, label: 'Email', value: 'pooja.sharma001011@gmail.com', color: 'from-purple-500 to-pink-500', action: 'mailto:pooja.sharma001011@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+91 8808354073', color: 'from-blue-500 to-cyan-500', action: 'tel:+918808354073' },
              { icon: MapPin, label: 'Location', value: 'Lucknow (226021), Uttar Pradesh', color: 'from-green-500 to-teal-500', action: '#' },
              { icon: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>, label: 'LinkedIn', value: 'Connect with me', color: 'from-blue-600 to-blue-700', action: 'https://www.linkedin.com/in/itspoojasharma/' },
              { icon: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>, label: 'GitHub', value: 'View my repositories', color: 'from-gray-600 to-gray-800', action: 'https://github.com/Pooja021011' }
            ].map((item, index) => (
              <a
                key={index}
                href={item.action}
                target={item.action.startsWith('http') ? '_blank' : '_self'}
                rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group flex items-center space-x-4 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
              >
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${item.color} group-hover:animate-pulse`}>
                  <item.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <p className={`font-semibold text-lg ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{item.label}</p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.value}</p>
                </div>
                <ChevronRight className={`group-hover:text-purple-600 group-hover:translate-x-1 transition-all ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} size={20} />
              </a>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className={`text-center p-4 rounded-2xl ${darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-600' : 'bg-gradient-to-r from-purple-50 to-pink-50'}`}>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">24h</div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Response Time</div>
            </div>
            <div className={`text-center p-4 rounded-2xl ${darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-600' : 'bg-gradient-to-r from-blue-50 to-cyan-50'}`}>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">100%</div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Project Success</div>
            </div>
          </div>
        </div>
        <div className={`backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'}`}>
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl">
              <Sparkles className="text-white" size={28} />
            </div>
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Send Message</h2>
          </div>
          <div className="space-y-6">
            <div className="group">
              <label className={`block text-sm font-semibold mb-3 flex items-center space-x-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <User size={16} />
                <span>Full Name</span>
              </label>
              <input
                type="text"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className={`w-full px-6 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 backdrop-blur-sm ${darkMode ? 'border-gray-600 bg-gray-700/80 text-gray-200 placeholder-gray-400' : 'border-gray-200 bg-white/80 text-gray-900 placeholder-gray-500'}`}
                placeholder="Enter your full name"
              />
            </div>
            <div className="group">
              <label className={`block text-sm font-semibold mb-3 flex items-center space-x-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <Mail size={16} />
                <span>Email Address</span>
              </label>
              <input
                type="email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className={`w-full px-6 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 backdrop-blur-sm ${darkMode ? 'border-gray-600 bg-gray-700/80 text-gray-200 placeholder-gray-400' : 'border-gray-200 bg-white/80 text-gray-900 placeholder-gray-500'}`}
                placeholder="your.email@example.com"
              />
            </div>
            <div className="group">
              <label className={`block text-sm font-semibold mb-3 flex items-center space-x-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <MessageSquare size={16} />
                <span>Message</span>
              </label>
              <textarea
                rows={6}
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className={`w-full px-6 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 resize-none backdrop-blur-sm ${darkMode ? 'border-gray-600 bg-gray-700/80 text-gray-200 placeholder-gray-400' : 'border-gray-200 bg-white/80 text-gray-900 placeholder-gray-500'}`}
                placeholder="Tell me about your project, ideas, or just say hello! 👋"
              />
            </div>
            <button
              onClick={handleContactSubmit}
              disabled={isSubmitting}
              className={`group w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white py-4 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 relative overflow-hidden ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white relative z-10"></div>
                  <span className="relative z-10 font-bold text-lg">Sending...</span>
                </>
              ) : (
                <>
                  <Sparkles className="relative z-10 group-hover:rotate-180 transition-transform duration-500" size={20} />
                  <span className="relative z-10 font-bold text-lg">Send Message</span>
                  <ChevronRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
                </>
              )}
            </button>
          </div>
          {contacts.length > 0 && (
            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl animate-fadeIn">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-500 rounded-full">
                  <span className="text-white text-lg">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-green-800">Message Sent Successfully! 🎉</h3>
                  <p className="text-sm text-green-600">
                    Thank you for reaching out! I'll get back to you within 24 hours.
                  </p>
                  <p className="text-xs text-green-500 mt-1">
                    Total messages received: {contacts.length}
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className={`mt-8 p-6 rounded-2xl ${darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-600' : 'bg-gradient-to-r from-blue-50 to-purple-50'}`}>
            <div className="text-center">
              <h3 className={`font-bold mb-2 flex items-center justify-center space-x-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                <Coffee size={20} />
                <span>Let's grab a virtual coffee!</span>
              </h3>
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm always excited to discuss new opportunities and innovative projects.
              </p>
              <div className="flex justify-center space-x-2">
                <span className="animate-bounce">☕</span>
                <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>💻</span>
                <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🚀</span>
              </div>
              <div className="mt-4">
                <a
                  href="/contact-view"
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${darkMode ? 'bg-gray-600 text-gray-200 hover:bg-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  <span>📊</span>
                  <span>Admin Dashboard</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`mt-20 backdrop-blur-sm p-8 rounded-3xl shadow-xl ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions ❓
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Quick answers to common questions</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              q: "What technologies do you specialize in?",
              a: "I specialize in Python, React.js, Django, Flask, and modern web technologies. I'm also learning AI/ML and data science.",
              icon: "🔧"
            },
            {
              q: "Are you available for freelance projects?",
              a: "Yes! I'm currently open to freelance opportunities and internships. Feel free to reach out with your project details.",
              icon: "💼"
            },
            {
              q: "What's your typical response time?",
              a: "I usually respond to messages within 24 hours. For urgent inquiries, feel free to call me directly.",
              icon: "⏰"
            },
            {
              q: "Do you work on both frontend and backend?",
              a: "Absolutely! I'm a full-stack developer with experience in both frontend (React, HTML/CSS/JS) and backend (Python, Django, Flask) development.",
              icon: "⚡"
            }
          ].map((faq, index) => (
            <div key={index} className={`group p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="flex items-start space-x-4">
                <span className="text-2xl group-hover:animate-bounce">{faq.icon}</span>
                <div>
                  <h3 className={`font-bold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{faq.q}</h3>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
      `}</style>
    </div>
  </div>
);

export default ContactPage;

