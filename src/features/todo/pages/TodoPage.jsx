import React from 'react'
import { TodoList } from '../components/TodoList'
import { Provider } from 'react-redux'
import { store } from '../store/store.js'
import { AddNewNote } from '../ui/buttons/AddNewNote'
import { NotesModal } from '../ui/modals/NotesModal'


export const TodoPage = () => {
  return (
    <Provider store={store}>
        <div className='todo-page'>
          <div className='todo-page-content'>
            <h1 className='text-center mb-4 title-white'>Todo App Ejemplo </h1>
            <TodoList />
          </div>
          <AddNewNote />
          <NotesModal />
        </div>
    </Provider>
    
  )
}
