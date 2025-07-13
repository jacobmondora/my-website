import * as React from "react"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "secondary" | "outline"
}

export function Badge({
  className = "",
  children,
  variant = "outline",
  ...props
}: BadgeProps) {
  const variantStyles = {
    secondary: "bg-blue-600 text-white",
    outline: "border border-blue-300 text-blue-300",
  }

  return (
    <div
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
