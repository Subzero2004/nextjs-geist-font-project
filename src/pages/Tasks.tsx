import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Button } from '../components/ui/button'
import KanbanBoard from '../components/tasks/KanbanBoard'
import GanttView from '../components/tasks/GanttView'
import TaskForm from '../components/tasks/TaskForm'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog'

const Tasks = () => {
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-title text-primary">Gestión de Tareas</h1>
          <p className="text-muted-foreground">
            Organiza y visualiza tus tareas de manera efectiva
          </p>
        </div>
        
        <Dialog open={isTaskFormOpen} onOpenChange={setIsTaskFormOpen}>
          <DialogTrigger asChild>
            <Button className="cleanmind-button">
              Nueva Tarea
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Crear Nueva Tarea</DialogTitle>
            </DialogHeader>
            <TaskForm onClose={() => setIsTaskFormOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="kanban" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="kanban">Vista Kanban</TabsTrigger>
          <TabsTrigger value="gantt">Vista Gantt</TabsTrigger>
        </TabsList>
        
        <TabsContent value="kanban" className="mt-6">
          <KanbanBoard />
        </TabsContent>
        
        <TabsContent value="gantt" className="mt-6">
          <GanttView />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Tasks
