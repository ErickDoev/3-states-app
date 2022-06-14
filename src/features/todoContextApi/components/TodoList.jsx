import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { TodoListItem } from '../components/TodoListItem'

export const TodoList = () => {
  const { state } = useContext(TodoContext)
  const { getNotes } = state

  return (
    <div className="notes-container">
      {getNotes.map((todo) => (
        <TodoListItem
          key={todo.uid}
          uid={todo.uid}
          title={todo.title}
          active={todo.active}
          note={todo.note}
          date={todo.fullDate}
        />
      ))}
    </div>
  )
}
