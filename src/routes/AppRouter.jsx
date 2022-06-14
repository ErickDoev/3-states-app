import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { TodoPage } from '../features/todo/pages/TodoPage'
import { TodoUseStateScreen } from '../features/todoUseState/pages/TodoUseStateScreen'
import { TodoContextScreen } from '../features/todoContextApi/pages/TodoContextScreen'
import { TodoReduxScreen } from '../features/todoRedux/pages/TodoReduxScreen'
import { Navbar } from '../features/shared/ui/Navbar/Navbar'
import { DashboardScreen } from '../features/dashboard/pages/DashboardScreen'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<DashboardScreen />} />
          <Route path="/redux" element={<TodoPage />} />
          <Route path="/useState" element={<TodoUseStateScreen />} />
          <Route path="/context" element={<TodoContextScreen />} />
          {/* <Route path="/redux" element={<TodoReduxScreen />}/> */}
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
