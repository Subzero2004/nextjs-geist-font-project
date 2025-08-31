import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

interface Task {
  id: string
  title: string
  description: string
  priority: 'low' | 'medium' | 'high'
  status: 'todo' | 'in-progress' | 'done'
}

const KanbanBoard = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Revisar documentación',
      description: 'Revisar la documentación del proyecto',
      priority: 'medium',
      status: 'todo'
    },
    {
      id: '2',
      title: 'Implementar autenticación',
      description: 'Agregar sistema de login',
      priority: 'high',
      status: 'in-progress'
    },
    {
      id: '3',
      title: 'Diseñar interfaz',
      description: 'Crear mockups de la UI',
      priority: 'low',
      status: 'done'
    }
  ])

  const columns = [
    { id: 'todo', title: 'Por Hacer', color: 'bg-muted' },
    { id: 'in-progress', title: 'En Progreso', color: 'bg-accent/20' },
    { id: 'done', title: 'Completado', color: 'bg-primary/20' }
  ]

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status)
  }

  const moveTask = (taskId: string, newStatus: Task['status']) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    ))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {columns.map(column => (
        <div key={column.id} className={`${column.color} rounded-cleanmind p-4`}>
          <h3 className="font-text-medium text-lg mb-4 text-foreground">
            {column.title}
          </h3>
          <div className="space-y-3">
            {getTasksByStatus(column.id).map(task => (
              <Card key={task.id} className="cleanmind-card cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-sm font-text-medium">{task.title}</CardTitle>
                    <Badge className={`priority-${task.priority} text-xs`}>
                      {task.priority === 'high' ? 'Alta' :
                       task.priority === 'medium' ? 'Media' : 'Baja'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-muted-foreground mb-3">{task.description}</p>
                  <div className="flex gap-2">
                    {column.id !== 'todo' && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => moveTask(task.id, 'todo')}
                        className="text-xs"
                      >
                        ←
                      </Button>
                    )}
                    {column.id !== 'in-progress' && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => moveTask(task.id, 'in-progress')}
                        className="text-xs"
                      >
                        →
                      </Button>
                    )}
                    {column.id !== 'done' && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => moveTask(task.id, 'done')}
                        className="text-xs"
                      >
                        ✓
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default KanbanBoard
