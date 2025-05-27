"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"

interface FloatingCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  href?: string
  onClick?: () => void
  isInverted?: boolean
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  children,
  className = "",
  delay = 0,
  href,
  onClick,
  isInverted = false,
}) => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setMounted(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  const cardContent = (
    <Card
      className={`
        floating-card cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-2xl
        ${isInverted ? "bg-black/10 border-black/20 hover:border-yellow-400/50" : "bg-white/10 border-white/20 hover:border-cyan-400/50"}
        backdrop-blur-md
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${className}
      `}
      onClick={onClick}
    >
      <CardContent className="p-4">{children}</CardContent>
    </Card>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {cardContent}
      </a>
    )
  }

  return cardContent
}

export default FloatingCard
