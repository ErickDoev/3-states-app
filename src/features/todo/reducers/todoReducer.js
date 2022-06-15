import { notesData as data } from '../../data/notesData'
import { types } from '../types/types'

const initialState = {
  todos: data,
  isOpenModal: false
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.todoNew:
      return {
        todos: [...state, action.payload],
      }

    case types.todoDelete:
      return {
        todos: state.todos.filter((todo) => todo.uid !== action.payload),
      }

    case types.todoUpdate:
      return {
        todos: state.todos.map((todo) =>
          todo.uid === action.payload.id
            ? { ...todo, todo: action.payload.newTodo.todo }
            : todo,
        ),
      }

    case types.todoToogledAll:
      return {
        todos: state.todos.map((todo) => ({ ...todo, active: action.payload })),
      }

    case types.todoActive:
      return {
        todos: state.todos.map((todo) =>
          todo.uid === action.payload
            ? { ...todo, active: !todo.active }
            : todo,
        ),
      }

    case types.todoDeleteAll:
      return {
        todos: [],
      }

    case types.todoDeleteActives:
      return {
        todos: state.todos.filter((todo) => todo.active !== true),
      }
    
    case types.openModal: 
      return {
        ...state,
        isOpenModal: !state.isOpenModal
      }
    
    case types.noteAddNote: 
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }

    default:
      return state
  }
}
