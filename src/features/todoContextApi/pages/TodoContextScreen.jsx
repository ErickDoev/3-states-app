import { useReducer } from 'react'
import { TodoButtons } from '../components/TodoButtons'
import { TodoInput } from '../components/TodoInput'
import { TodoList } from '../components/TodoList'
import { TodoContext } from '../context/TodoContext'
import { todoReducer } from '../reducers/todoReducer'
import { AddNewNote } from '../ui/buttons/AddNewNote'
import { NotesModal } from '../ui/modals/NotesModal'
import { data } from '../../data/todoData'
import { notesData } from '../../data/notesData'

const initialState = {
  getTodos: data,
  getNotes: notesData,
  ui: {
    isActiveModal: false,
    isActiveEditModal: false,
  }
}

export const TodoContextScreen = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className="todo-page">
        <div className="todo-page-content">
          <h1 className="text-white text-center">Todo ContextApi</h1>
          <div className="todo-list-container">
            <TodoInput />
            <TodoList />
          </div>
          <TodoButtons />
        </div>
        <AddNewNote />
        <NotesModal />
      </div>
    </TodoContext.Provider>
  )
}
