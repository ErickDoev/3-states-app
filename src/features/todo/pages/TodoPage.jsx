import React from 'react'
import { TodoActionButtons } from '../components/TodoActionButtons'
import { TodoList } from '../components/TodoList'
import { Provider } from 'react-redux'
import { store } from '../store/store.js'


export const TodoPage = () => {
  return (
    <Provider store={store}>
        <div className='todo-page'>
          <div className='todo-page-content'>
            <h1 className='text-center mb-4 title-white'>Todo App Ejemplo </h1>
            <TodoList />
            <TodoActionButtons />
          </div>
        </div>
    </Provider>
    
  )
}
