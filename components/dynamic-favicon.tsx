'use client'

import { useEffect } from 'react'

export default function DynamicFavicon() {
  useEffect(() => {
    const setFavicon = (theme: string) => {
      const favicon = document.querySelector("link[rel='icon']") || document.createElement('link')
      favicon.setAttribute('rel', 'icon')
      favicon.setAttribute('type', 'image/x-icon')
      favicon.setAttribute('href', theme === 'dark' ? '/faviconwhite.ico' : '/faviconblack.ico')
      document.head.appendChild(favicon)
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setFavicon(mediaQuery.matches ? 'dark' : 'light')

    mediaQuery.addEventListener('change', (e) => {
      setFavicon(e.matches ? 'dark' : 'light')
    })

    return () => {
      mediaQuery.removeEventListener('change', () => {})
    }
  }, [])

  return null
}
