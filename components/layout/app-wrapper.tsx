"use client"

import type React from "react"
import dynamic from "next/dynamic"

import { usePreloader } from "@/hooks/usePreloader"

// Dynamically import Preloader to prevent hydration mismatch
const Preloader = dynamic(() => import("@/components/ui/preloader").then(mod => ({ default: mod.Preloader })), {
  ssr: false
})

interface AppWrapperProps {
  children: React.ReactNode
}

export function AppWrapper({ children }: AppWrapperProps) {
  const { isLoading, setIsLoading } = usePreloader(2500)

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>{children}</div>
    </>
  )
}