import { useState, useEffect } from "react";

export default function useDarkMode(){

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
      setTheme(JSON.parse(localStorage.getItem('theme')))  
    }, [])
  
    useEffect(() => {
      localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme])

    return {
        theme,
        toggleTheme,
      }
}