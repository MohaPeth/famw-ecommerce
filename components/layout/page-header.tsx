interface PageHeaderProps {
  title: string
  subtitle?: string
  icon?: string
}

export function PageHeader({ title, subtitle, icon }: PageHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
      {icon && <div className="text-6xl mb-8">{icon}</div>}
      {subtitle && <p className="text-gray-400 text-lg">{subtitle}</p>}
    </div>
  )
}
