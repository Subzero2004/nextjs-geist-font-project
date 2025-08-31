import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Progress } from '../ui/progress'

interface Task {
  id: string
  title: string
  description: string
  priority: 'low' | 'medium' | 'high'
  status: 'todo' | 'in-progress' | 'done'
  startDate: string
  endDate: string
  progress: number
}

const GanttView = () => {
  const tasks: Task[] = [
    {
      id: '1',
      title: 'Revisar documentación',
      description: 'Revisar la documentación del proyecto',
      priority: 'medium',
      status: 'todo',
      startDate: '2024-01-01',
      endDate: '2024-01-05',
      progress: 0
    },
    {
      id: '2',
      title: 'Implementar autenticación',
      description: 'Agregar sistema de login',
      priority: 'high',
      status: 'in-progress',
      startDate: '2024-01-03',
      endDate: '2024-01-10',
      progress: 60
    },
    {
      id: '3',
      title: 'Diseñar interfaz',
      description: 'Crear mockups de la UI',
      priority: 'low',
      status: 'done',
      startDate: '2024-01-02',
      endDate: '2024-01-08',
      progress: 100
    }
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-12 gap-4 text-sm font-text-medium text-muted-foreground mb-4">
        <div className="col-span-4">Tarea</div>
        <div className="col-span-2">Fechas</div>
        <div className="col-span-2">Progreso</div>
        <div className="col-span-2">Estado</div>
        <div className="col-span-2">Prioridad</div>
      </div>

      {tasks.map(task => (
        <Card key={task.id} className="cleanmind-card">
          <CardContent className="p-4">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-4">
                <h4 className="font-text-medium text-foreground">{task.title}</h4>
                <p className="text-sm text-muted-foreground">{task.description}</p>
              </div>

              <div className="col-span-2 text-sm text-muted-foreground">
                <div>{formatDate(task.startDate)} - {formatDate(task.endDate)}</div>
              </div>

              <div className="col-span-2">
                <div className="flex items-center space-x-2">
                  <Progress value={task.progress} className="flex-1" />
                  <span className="text-sm text-muted-foreground">{task.progress}%</span>
                </div>
              </div>

              <div className="col-span-2">
                <Badge
                  className={
                    task.status === 'done' ? 'bg-primary text-primary-foreground' :
                    task.status === 'in-progress' ? 'bg-accent text-accent-foreground' :
                    'bg-muted text-muted-foreground'
                  }
                >
                  {task.status === 'done' ? 'Completado' :
                   task.status === 'in-progress' ? 'En Progreso' : 'Por Hacer'}
                </Badge>
              </div>

              <div className="col-span-2">
                <Badge className={`priority-${task.priority}`}>
                  {task.priority === 'high' ? 'Alta' :
                   task.priority === 'medium' ? 'Media' : 'Baja'}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default GanttView
