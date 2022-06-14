import { useSelector } from 'react-redux'
import { TodoInput } from './TodoInput'
import { TodoListItem } from './TodoListItem'

export const TodoList = () => {
  const { todos } = useSelector(state => state.todos)

  return (
    <div className='todo-list-container'>
      <TodoInput />
      <div className='todo-list-content'>
        <ul>
          { todos.map((e) => (
            <TodoListItem
              key={e.uid}
              id={e.uid}
              todo={e.todo}
              active={e.active}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
