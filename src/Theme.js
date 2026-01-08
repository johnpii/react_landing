import { useLayoutEffect, useState } from 'react';

const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  
   useLayoutEffect(() => {

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme])

  return { theme, setTheme }
}

export default Theme;