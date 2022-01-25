import { useState, useEffect } from "react";

export default function useDarkMode(){

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {
      setTheme(localStorage.getItem('theme'))  
    }, [])
  
    useEffect(() => {
      localStorage.setItem('theme',theme)
    }, [theme])

    return {
        theme,
        toggleTheme,
      }
}