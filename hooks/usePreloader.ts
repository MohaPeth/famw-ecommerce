"use client"

import { useState, useEffect } from "react"

export function usePreloader(minLoadTime = 2000) {
  const [isLoading, setIsLoading] = useState(true)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const startTime = Date.now()

    // Wait for page to be ready
    const handleLoad = () => {
      setIsReady(true)
    }

    // Check if page is already loaded
    if (document.readyState === "complete") {
      setIsReady(true)
    } else {
      window.addEventListener("load", handleLoad)
    }

    // Ensure minimum loading time
    const timer = setTimeout(() => {
      const elapsedTime = Date.now() - startTime
      if (elapsedTime >= minLoadTime && isReady) {
        setIsLoading(false)
      }
    }, minLoadTime)

    return () => {
      window.removeEventListener("load", handleLoad)
      clearTimeout(timer)
    }
  }, [minLoadTime, isReady])

  // Check if both conditions are met
  useEffect(() => {
    if (isReady && !isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isReady, isLoading])

  return { isLoading, setIsLoading }
}
