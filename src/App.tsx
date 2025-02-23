import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { ThemeToggle } from './components/ThemeToggle';
import { Home } from './pages/Home';
import { GamePage } from './pages/GamePage';
import { Login } from './components/Login';
import { settings } from './config/settings';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [timeLeft, setTimeLeft] = useState(settings.auth.sessionTimeout);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isAuthenticated) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsAuthenticated(false);
            return settings.auth.sessionTimeout;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setTimeLeft(settings.auth.sessionTimeout); // Reset timer when logged out
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isAuthenticated]);

  const handleLogin = (password: string) => {
    if (password === settings.auth.password) {
      setIsAuthenticated(true);
      setTimeLeft(settings.auth.sessionTimeout);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 ${isDark ? 'dark' : ''}`}>
        <ThemeToggle isDark={isDark} toggle={toggleTheme} />
        <Login onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <Router>
      <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 ${isDark ? 'dark' : ''}`}>
        <Header timeLeft={timeLeft} />
        <ThemeToggle isDark={isDark} toggle={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<GamePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;