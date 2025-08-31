import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Textarea } from '../components/ui/textarea'
import { Badge } from '../components/ui/badge'

const AiPlanner = () => {
  const suggestions = [
    {
      title: 'Técnica Pomodoro Mejorada',
      description: 'Trabaja 25 minutos seguido de 5 minutos de descanso, con recordatorios amables.',
      type: 'productivity'
    },
    {
      title: 'Sistema de Priorización',
      description: 'Clasifica tus tareas por urgencia y importancia usando la matriz Eisenhower.',
      type: 'organization'
    },
    {
      title: 'Recordatorios Contextuales',
      description: 'Recibe notificaciones basadas en tu ubicación y horario habitual.',
      type: 'reminders'
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-title text-primary">Planificador IA</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Recibe sugerencias personalizadas y planificación inteligente adaptada a tu estilo de trabajo
        </p>
      </div>

      <Card className="cleanmind-card">
        <CardHeader>
          <CardTitle className="text-primary">¿Qué necesitas planificar?</CardTitle>
          <CardDescription>
            Describe tu situación actual y recibe recomendaciones personalizadas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Ej: Tengo muchas tareas pendientes y me cuesta mantener el foco. Necesito ayuda para organizar mi semana..."
            rows={4}
            className="cleanmind-input"
          />
          <Button className="cleanmind-button w-full">
            Obtener Sugerencias
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-title text-primary">Sugerencias Populares</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {suggestions.map((suggestion, index) => (
            <Card key={index} className="cleanmind-card hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{suggestion.title}</CardTitle>
                  <Badge
                    className={
                      suggestion.type === 'productivity' ? 'bg-accent text-accent-foreground' :
                      suggestion.type === 'organization' ? 'bg-primary text-primary-foreground' :
                      'bg-chart-3 text-white'
                    }
                  >
                    {suggestion.type === 'productivity' ? 'Productividad' :
                     suggestion.type === 'organization' ? 'Organización' : 'Recordatorios'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{suggestion.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Implementar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="cleanmind-card bg-muted/20">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-text-medium text-primary mb-2">
            Próximamente: Análisis de Patrones
          </h3>
          <p className="text-muted-foreground">
            La IA aprenderá de tus hábitos y te sugerirá mejoras personalizadas
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default AiPlanner
