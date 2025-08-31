import { Routes, Route } from 'react-router-dom'
import { useThemeStore } from './store/themeStore'
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import AiPlanner from './pages/AiPlanner'
import NotFound from './pages/NotFound'
import { Toaster } from './components/ui/sonner'

function App() {
  const { isDark } = useThemeStore()

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/ai-planner" element={<AiPlanner />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
        <Toaster />
      </div>
    </div>
  )
}

export default App
