import { useThemeStore } from '../../store/themeStore'
import { Button } from '../ui/button'

const Navbar = () => {
  const { isDark, toggleTheme } = useThemeStore()

  return (
    <nav className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-title text-primary">CleanMind</h1>
          <p className="text-sm text-muted-foreground">Mente Limpia, Conciencia Tranquila</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleTheme}
            className="cleanmind-button"
          >
            {isDark ? 'Tema Claro' : 'Tema Oscuro'}
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
