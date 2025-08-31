import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-title text-primary">Bienvenido a CleanMind</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Una aplicación diseñada para organizar tareas y reducir la carga cognitiva, 
          especialmente útil para personas con TAG/TDAH.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="cleanmind-card">
          <CardHeader>
            <CardTitle className="text-primary">Organización Simple</CardTitle>
            <CardDescription>
              Gestiona tus tareas de manera visual y accesible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Utiliza tableros Kanban y vistas Gantt para organizar tu trabajo de forma intuitiva.
            </p>
            <Link to="/tasks">
              <Button className="cleanmind-button w-full">
                Ver Tareas
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="cleanmind-card">
          <CardHeader>
            <CardTitle className="text-accent">IA Empática</CardTitle>
            <CardDescription>
              Planificación inteligente y recordatorios amables
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Recibe sugerencias personalizadas y recordatorios que entienden tu ritmo de trabajo.
            </p>
            <Link to="/ai-planner">
              <Button className="cleanmind-button w-full">
                Planificar con IA
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="cleanmind-card">
          <CardHeader>
            <CardTitle className="text-chart-3">Accesibilidad</CardTitle>
            <CardDescription>
              Diseñado pensando en la neurodiversidad
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Interfaz clara, colores calmantes y navegación intuitiva para reducir el estrés cognitivo.
            </p>
            <Button className="cleanmind-button w-full" disabled>
              Configurar Preferencias
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted/20 rounded-cleanmind-lg p-8 text-center">
        <h2 className="text-2xl font-title text-primary mb-4">
          Reduce la Carga Cognitiva
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          CleanMind está diseñado específicamente para ayudar a personas con TAG/TDAH a organizar 
          sus pensamientos y tareas de manera efectiva, pero es útil para cualquier persona que 
          busque una mente más clara y organizada.
        </p>
      </div>
    </div>
  )
}

export default Home
