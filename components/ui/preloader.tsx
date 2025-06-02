"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface PreloaderProps {
  onComplete?: () => void
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsLoading(false)
            onComplete?.()
          }, 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(interval)
  }, [onComplete])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-yellow-500 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse delay-700" />
      </div>

      <div className="relative z-10 text-center">
        {/* Logo with animation */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl animate-pulse" />
          <div className="relative transform transition-all duration-1000 hover:scale-105">
            <Image
              src="/images/logo-famw.png"
              alt="FAMW - For All My Wolves"
              width={200}
              height={150}
              className="h-32 w-auto mx-auto animate-fade-in"
              priority
            />
          </div>
        </div>

        {/* Loading text */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-famw-cream mb-2 animate-fade-in-up">FAMW</h2>
          <p className="text-gray-400 text-sm animate-fade-in-up delay-300">For All My Wolves</p>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto mb-6">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Loading...</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce delay-100" />
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce delay-200" />
        </div>

        {/* Philosophy text */}
        <div className="mt-8 max-w-md mx-auto">
          <p className="text-gray-500 text-xs italic font-serif animate-fade-in-up delay-500">
            "Ce n'est pas du simple textile. C'est une présence."
          </p>
        </div>
      </div>
    </div>
  )
}
