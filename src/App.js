import './App.css';
import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import AdminContactsDashboard from './components/contactView';

// Create Theme Context
export const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('portfolio-darkmode');
    return saved ? JSON.parse(saved) : false;
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('portfolio-darkmode', JSON.stringify(newMode));
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route path="/contact-view" element={<AdminContactsDashboard />} />
            </Routes>
          </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
