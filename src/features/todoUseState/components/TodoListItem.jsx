import { useState } from "react";

export const TodoListItem = ({todo, uid, setTodos, active}) => {
  const [inputValue, setInputValue] = useState(todo);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  }

  const handleDelete = (uid) => {
    setTodos(({todos}) => ({
      todos:todos.filter(t => t.uid !== uid )
    }));
  }

  const hadleBlur = (uid) => {
    setTodos(({todos}) => ({
      todos:todos.map(t => (t.uid === uid)? {...t,todo:inputValue} : t)
    }));
  }

  const setActive = (id) => {
    console.log(id);
    setTodos(({todos}) => ({
      todos:todos.map(t => (t.uid === id) ? {...t, active: !t.active } : t )
    }))
  }

  return (
    <li className="todo-list-item">
      <input 
        className="list-box"
        type="checkbox"
        checked={active}
        onChange={()=>{setActive(uid)}} />
      <input 
        type="text"
        value={inputValue} 
        onChange={handleChange}
        onBlur={()=>{hadleBlur(uid)}}
        className="list-input "/>
      <button 
        onClick={()=>{handleDelete(uid)}}
        className="btn btn-warning">Borrar</button>
    </li>
  )
}
