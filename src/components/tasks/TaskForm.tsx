import { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

interface TaskFormProps {
  onClose: () => void
}

const TaskForm = ({ onClose }: TaskFormProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium' as 'low' | 'medium' | 'high',
    startDate: '',
    endDate: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the task to your state management or API
    console.log('Nueva tarea:', formData)
    onClose()
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Título de la tarea</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => handleChange('title', e.target.value)}
          placeholder="Ingresa el título de la tarea"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descripción</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleChange('description', e.target.value)}
          placeholder="Describe la tarea en detalle"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="priority">Prioridad</Label>
        <Select value={formData.priority} onValueChange={(value) => handleChange('priority', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona la prioridad" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Baja</SelectItem>
            <SelectItem value="medium">Media</SelectItem>
            <SelectItem value="high">Alta</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="startDate">Fecha de inicio</Label>
          <Input
            id="startDate"
            type="date"
            value={formData.startDate}
            onChange={(e) => handleChange('startDate', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="endDate">Fecha de fin</Label>
          <Input
            id="endDate"
            type="date"
            value={formData.endDate}
            onChange={(e) => handleChange('endDate', e.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancelar
        </Button>
        <Button type="submit" className="cleanmind-button">
          Crear Tarea
        </Button>
      </div>
    </form>
  )
}

export default TaskForm
