import { Link, useLocation } from 'react-router-dom'
import { cn } from '../../lib/utils'

const Sidebar = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Inicio', description: 'Panel principal' },
    { path: '/tasks', label: 'Tareas', description: 'Organizar y gestionar' },
    { path: '/ai-planner', label: 'IA Planner', description: 'Planificación inteligente' },
  ]

  return (
    <aside className="w-64 bg-card border-r border-border h-[calc(100vh-73px)] p-4">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              'block p-3 rounded-cleanmind transition-colors hover:bg-muted/50',
              location.pathname === item.path
                ? 'bg-primary text-primary-foreground'
                : 'text-foreground hover:text-foreground'
            )}
          >
            <div className="font-text-medium">{item.label}</div>
            <div className="text-sm opacity-70">{item.description}</div>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
