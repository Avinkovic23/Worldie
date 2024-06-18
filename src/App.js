import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Country from './pages/Country';
import NotFound from './pages/NotFound';
import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  };
  const [theme, setTheme] = useState(getInitialTheme);
  const toggleTheme = () => {
    setTheme((curr) => {
      const newTheme = curr === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className={`App ${theme}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:id' element={<Country />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
