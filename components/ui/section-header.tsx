interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-20 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{title}</h2>
      {subtitle && <p className="text-gray-400 text-lg">{subtitle}</p>}
    </div>
  )
}
