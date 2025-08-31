import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Card className="cleanmind-card max-w-md w-full text-center">
        <CardHeader>
          <CardTitle className="text-6xl font-title text-primary mb-4">404</CardTitle>
          <CardDescription className="text-xl">
            Página no encontrada
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Link to="/">
              <Button className="cleanmind-button">
                Ir al Inicio
              </Button>
            </Link>
            <Link to="/tasks">
              <Button variant="outline">
                Ver Tareas
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default NotFound
