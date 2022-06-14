import { useState } from "react";

export const TodoButtons = ({setTodos}) => {

  const [toogle, setToogle] = useState(true);

  const deleteAllTodos = () => {
    setTodos(state => ({
      todos:[]
    }));
  }

  const deleteActiveTodos = () => {
    setTodos(state => ({
      todos:state.todos.filter(t => t.active !== true )
    }));
  }

  const toogleTodos = (toogle) => {
    setTodos(state => ({
      todos:state.todos.map(t => ({...t, active: toogle}))
    }));
    setToogle(state => !state);
  }

  return (
    <div>
      <button className="btn btn-danger" onClick={deleteAllTodos}>Borrar todos</button>
      <button className="btn btn-danger" onClick={deleteActiveTodos}>Borrar seleccionados</button>
      <button className="btn btn-danger" onClick={()=>{toogleTodos(toogle)}}>Seleccionar todos</button>
    </div>
  )
}
