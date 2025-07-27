import React, { useState, useEffect } from 'react';
import { useTheme } from '../App';
import Navbar from './Navbar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import ExperiencePage from './ExperiencePage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';


const Portfolio = () => {
  // API Configuration
  const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  // Use theme context instead of local state
  const { darkMode, toggleDarkMode } = useTheme();

  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contacts, setContacts] = useState([]);
  const [isAnimated, setIsAnimated] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showParticles, setShowParticles] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const titles = ['Web Developer', 'Python Developer', 'React Developer', 'Full Stack Developer'];
  const [currentTitle, setCurrentTitle] = useState(0);

  // Load contacts from API or localStorage
  const loadContacts = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/contact`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.contacts) {
          setContacts(data.contacts);
          // Also save to localStorage as backup
          localStorage.setItem('portfolio-contacts', JSON.stringify(data.contacts));
          return;
        }
      }
    } catch (error) {
      console.log('API not available, loading from localStorage:', error.message);
    }

    // Fallback to localStorage if API fails
    const savedContacts = localStorage.getItem('portfolio-contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  };

  useEffect(() => {
    setIsAnimated(true);
    loadContacts();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // Save dark mode preference
    localStorage.setItem('portfolio-darkmode', JSON.stringify(darkMode));
    // Apply dark class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    let typingInterval;
    let erasingInterval;
    let timeoutId;

    // Typing animation
    const typeTitle = () => {
      const title = titles[currentTitle];
      let typeIndex = 0;

      // Clear any existing text
      setTypedText('');

      typingInterval = setInterval(() => {
        if (typeIndex <= title.length) {
          setTypedText(title.substring(0, typeIndex));
          typeIndex++;
        } else {
          clearInterval(typingInterval);
          // Wait 2 seconds before starting to erase
          timeoutId = setTimeout(() => {
            let eraseIndex = title.length;
            erasingInterval = setInterval(() => {
              if (eraseIndex >= 0) {
                setTypedText(title.substring(0, eraseIndex));
                eraseIndex--;
              } else {
                clearInterval(erasingInterval);
                // Move to next title
                setCurrentTitle((prev) => (prev + 1) % titles.length);
              }
            }, 50);
          }, 2000);
        }
      }, 100);
    };

    typeTitle();

    // Cleanup function
    return () => {
      if (typingInterval) clearInterval(typingInterval);
      if (erasingInterval) clearInterval(erasingInterval);
      if (timeoutId) clearTimeout(timeoutId);
    };
    // eslint-disable-next-line
  }, [currentTitle]);

  // Skills, projects, experience data (same as before)
  const skills = {
    languages: {
      title: 'Programming Languages',
      items: ['Python (Core & Advanced)', 'JavaScript', 'C', 'C++', 'Java'],
      icon: require('lucide-react').Code,
      color: 'from-purple-500 to-pink-500'
    },
    frameworks: {
      title: 'Frameworks & Libraries',
      items: ['Django', 'Flask', 'React.js', 'Node.js', 'Bootstrap'],
      icon: require('lucide-react').Palette,
      color: 'from-blue-500 to-cyan-500'
    },
    databases: {
      title: 'Databases',
      items: ['MySQL', 'SQLite', 'MongoDB'],
      icon: require('lucide-react').Database,
      color: 'from-green-500 to-teal-500'
    },
    tools: {
      title: 'Development Tools',
      items: ['Git', 'GitHub', 'VS Code', 'PyCharm', 'Jupyter Notebook', 'IntelliJ IDEA'],
      icon: require('lucide-react').BookOpen,
      color: 'from-orange-500 to-red-500'
    },
    aiml: {
      title: 'AI/ML Concepts',
      items: ['Data Preprocessing', 'Model Building', 'Supervised Learning', 'Unsupervised Learning'],
      icon: require('lucide-react').Award,
      color: 'from-indigo-500 to-purple-500'
    },
    libraries: {
      title: 'Python Libraries',
      items: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
      icon: require('lucide-react').Star,
      color: 'from-yellow-500 to-orange-500'
    }
  };

  const projects = [
    {
      title: 'Tourist Management System',
      period: 'Feb 2025 – May 2025',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      description: 'Web-based tourism management portal with separate user and admin panels. Features real-time booking, destination/package management, and feedback modules.',
      type: 'College Major Project - MCA',
      gradient: 'from-blue-500 to-purple-500',
      icon: '🏖️'
    },
    {
      title: 'Hospital Management System',
      period: 'Feb 2022 – May 2022',
      tech: ['Python', 'Tkinter', 'SQLite3'],
      description: 'Desktop application for hospital operations including patient records, doctor details, and appointment scheduling with user authentication.',
      type: 'College Major Project - BCA',
      gradient: 'from-green-500 to-teal-500',
      icon: '🏥'
    }
  ];

  const experience = [
    {
      title: 'Smart Data Campus Drive cum Training Program',
      company: 'Smart Data Enterprises, Mohali',
      period: 'Feb 2025 – July 2025',
      type: 'Software Engineering Training',
      description: 'Hands-on training in AI/ML, React.js, Node.js, and DBMS. Built real-time applications using MERN stack and machine learning models.',
      gradient: 'from-purple-500 to-pink-500',
      icon: '🚀'
    },
    {
      title: 'Full Stack Web Development – Python',
      company: 'CEPTA, Noida',
      period: '2021 – 2022',
      type: '1-year Training Program',
      description: 'Comprehensive training in Python-based full-stack web development, covering Flask, Django, MySQL, and front-end technologies.',
      gradient: 'from-blue-500 to-cyan-500',
      icon: '💻'
    }
  ];

  // Contact form handler with API integration
  const handleContactSubmit = async (e) => {
    if (e) e.preventDefault();

    // Prevent double submission
    if (isSubmitting) return;

    // Basic validation
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      alert('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactForm.email)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Make API call to save contact
      const response = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contactForm.name.trim(),
          email: contactForm.email.trim(),
          message: contactForm.message.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Add to contacts array for immediate UI update
        const newContact = data.contact || {
          id: Date.now(),
          name: contactForm.name.trim(),
          email: contactForm.email.trim(),
          message: contactForm.message.trim(),
          createdAt: new Date().toISOString()
        };

        const updatedContacts = [...contacts, newContact];
        setContacts(updatedContacts);

        // Also store in localStorage as backup
        localStorage.setItem('portfolio-contacts', JSON.stringify(updatedContacts));

        // Clear form
        setContactForm({
          name: '',
          email: '',
          message: ''
        });

        // Show success message
        alert('Message sent successfully! 🎉 Thank you for reaching out. I\'ll get back to you within 24 hours.');

        console.log('Contact saved successfully:', newContact);
      } else {
        // Handle API errors
        const errorMessage = data.error || data.message || 'Failed to send message. Please try again.';
        alert(errorMessage);
        console.error('API Error:', data);
      }
    } catch (error) {
      console.error('Network error:', error);

      // Fallback to localStorage if API fails
      try {
        const newContact = {
          id: Date.now(),
          name: contactForm.name.trim(),
          email: contactForm.email.trim(),
          message: contactForm.message.trim(),
          createdAt: new Date().toISOString(),
          offline: true
        };
        const updatedContacts = [...contacts, newContact];
        setContacts(updatedContacts);
        localStorage.setItem('portfolio-contacts', JSON.stringify(updatedContacts));

        setContactForm({ name: '', email: '', message: '' });
        alert('Network error occurred, but your message has been saved locally. 📱 Please try again later for server submission.');
      } catch (fallbackError) {
        alert('Network error. Please check your connection and try again.');
        console.error('Fallback error:', fallbackError);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage isAnimated={isAnimated} typedText={typedText} showParticles={showParticles} setCurrentPage={setCurrentPage} darkMode={darkMode} />;
      case 'about':
        return <AboutPage darkMode={darkMode} />;
      case 'skills':
        return <SkillsPage skills={skills} darkMode={darkMode} />;
      case 'experience':
        return <ExperiencePage experience={experience} darkMode={darkMode} />;
      case 'projects':
        return <ProjectsPage projects={projects} darkMode={darkMode} />;
      case 'contact':
        return <ContactPage contactForm={contactForm} setContactForm={setContactForm} contacts={contacts} handleContactSubmit={handleContactSubmit} darkMode={darkMode} isSubmitting={isSubmitting} />;
      default:
        return <HomePage isAnimated={isAnimated} typedText={typedText} showParticles={showParticles} setCurrentPage={setCurrentPage} darkMode={darkMode} />;
    }
  };

  return (
    <div className={`min-h-screen relative ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} darkMode={darkMode} setDarkMode={toggleDarkMode} />
      {renderCurrentPage()}
      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 z-40 group flex items-center justify-center"
      >
        <span className="rotate-[-90deg] group-hover:animate-bounce text-xl font-bold" style={{ display: 'inline-block' }}>&#8250;</span>
      </button>
      {/* Particles toggle */}
      <button
        onClick={() => setShowParticles(!showParticles)}
        className={`fixed bottom-8 left-8 p-4 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 z-40 ${darkMode ? 'bg-gray-800/90 text-yellow-400' : 'bg-white/90 text-purple-600'}`}
        title={showParticles ? 'Hide particles' : 'Show particles'}
      >
        {showParticles ? '✨' : '💫'}
      </button>

    </div>
  );
};

export default Portfolio;