import { useSelector } from 'react-redux'
import { TodoListItem } from './TodoListItem'

export const TodoList = () => {
  const { todos } = useSelector(state => state.todos)

  return (
    <div className='notes-container'>
          {todos.map((e) => (
            <TodoListItem
              key={e.uid}
              id={e.uid}
              title={e.title}
              note={e.note}
              fullDate={e.fullDate}
              active={e.active}
            />
          ))}
    </div>
  )
}
