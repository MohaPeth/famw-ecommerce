import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-yellow-500 to-yellow-400 text-black hover:from-yellow-600 hover:to-yellow-500 shadow-lg hover:shadow-yellow-500/25 border-0",
        destructive:
          "bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-700 hover:to-red-600 shadow-lg hover:shadow-red-500/25 border-0",
        outline:
          "border-2 border-gray-600 bg-transparent text-gray-300 hover:border-yellow-500 hover:text-yellow-500 hover:bg-yellow-500/5 shadow-md hover:shadow-lg",
        secondary:
          "bg-gradient-to-r from-gray-800 to-gray-700 text-famw-cream border border-gray-600 hover:from-gray-700 hover:to-gray-600 hover:border-yellow-500 shadow-md hover:shadow-lg",
        ghost: "text-gray-300 hover:bg-gray-800 hover:text-yellow-500 rounded-lg",
        link: "text-yellow-500 underline-offset-4 hover:underline hover:text-yellow-400",
        premium:
          "bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-black hover:from-yellow-600 hover:via-yellow-500 hover:to-yellow-600 shadow-xl hover:shadow-yellow-500/30 border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700 hover:before:translate-x-[100%]",
        danger:
          "bg-gradient-to-r from-red-500 to-red-400 text-white hover:from-red-600 hover:to-red-500 shadow-lg hover:shadow-red-500/25 border-0",
        success:
          "bg-gradient-to-r from-green-500 to-green-400 text-white hover:from-green-600 hover:to-green-500 shadow-lg hover:shadow-green-500/25 border-0",
        dark: "bg-gradient-to-r from-gray-900 to-black text-famw-cream border border-gray-700 hover:border-yellow-500 hover:from-gray-800 hover:to-gray-900 shadow-lg hover:shadow-xl",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
