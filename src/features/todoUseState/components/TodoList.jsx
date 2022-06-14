import { TodoButtons } from "./TodoButtons";
import { TodoListItem } from "./TodoListItem"

export const TodoList = ({todos, setTodos}) => {
  const {todos:items} = todos;

  

  return (
    <div className="todo-list-content">
        <ul>
        {
          items.map(t => (
            <TodoListItem 
              key={t.uid}
              uid={t.uid}
              todo={t.todo}
              active={t.active}
              setTodos={setTodos}/>
          ))
        }
        </ul>
        <div className="mt-4">
          <TodoButtons setTodos={setTodos} />
        </div>
    </div>
  )
}
