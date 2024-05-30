"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

// Retrieve the stored value; if none, use 'light'.
const getFromLocalStorage = () => {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    const value = localStorage.getItem('theme');
    return value || 'light';
  }
  return 'light'; // Default value if not in a browser environment
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = getFromLocalStorage();
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  // Function to toggle the theme
  const toggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};