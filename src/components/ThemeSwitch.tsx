"use client";

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) {
    return null;
  }

  return (
    <select 
      className="border-2 border-primary-text p-2"
      onChange={e => setTheme(e.target.value)}
      value={theme}
    >
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  )
}
