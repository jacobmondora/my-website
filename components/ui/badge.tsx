

export function Badge({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold bg-blue-600 text-white ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}