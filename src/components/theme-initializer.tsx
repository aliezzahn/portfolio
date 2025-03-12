'use client';

import { useEffect } from 'react';

export function ThemeInitializer() {
  useEffect(() => {
    // Check if theme is stored in localStorage
    const storedTheme = localStorage.getItem('theme');

    // Check if user prefers dark mode
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    // Apply theme to document
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return null;
}
