"use client"

import type React from "react"

import { usePreloader } from "@/hooks/usePreloader"
import { Preloader } from "@/components/ui/preloader"

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
