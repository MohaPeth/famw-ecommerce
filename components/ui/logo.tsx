import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  variant?: "default" | "light"
  size?: "sm" | "md" | "lg"
  className?: string
}

const sizeClasses = {
  sm: "h-12 w-auto",
  md: "h-16 w-auto",
  lg: "h-24 w-auto",
}

export function Logo({ variant = "default", size = "md", className = "" }: LogoProps) {
  const logoSrc = variant === "light" ? "/images/logo-famw-light.png" : "/images/logo-famw.png"

  return (
    <Link href="/" className={`hover:opacity-80 transition-opacity duration-300 ${className}`}>
      <Image
        src={logoSrc || "/placeholder.svg"}
        alt="FAMW - For All My Wolves"
        width={variant === "light" ? 150 : 120}
        height={variant === "light" ? 100 : 80}
        className={sizeClasses[size]}
        priority
      />
    </Link>
  )
}
