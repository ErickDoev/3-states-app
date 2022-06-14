import { useState } from "react";
import { data } from "../../data/todoData";
import { TodoInput } from "../components/TodoInput"

export const TodoUseStateScreen = () => {

  const [initialState, setInitialState] = useState({
    todos: data
  });

  return (
    <div className="todo-page">
      <div className="todo-page-content mb-2">
        <h1 className="text-center mb-4 text-white">Todo con useState</h1>
        <div className="todo-list-container">
          <TodoInput 
            todos={initialState} 
            setTodos={setInitialState}/>
        </div>
      </div>
    </div>
  )
}


// export const CounterExample = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <p>{ count }</p>
//       <button onClick={() => { setCount(count +1 ) }}>
//         Incrementar
//       </button>

//       <CounterChild counter={ count } setCount={setCount}/>
//     </>
//   )
// }

// export const CounterChild = ({ counter, setCount }) => {

//   const increment = () => {
//     setCount(count + 1)
//   }

//   const decrement = () => {
//     setCount(state => state - 1 )
//   }

//   return (
//     <>
//       <p>{ counter }</p>
//       <button onClick={increment}> Incrementar </button>
//       <button onClick={decrement}> Decrementar </button>
//     </>
//   )
// }



