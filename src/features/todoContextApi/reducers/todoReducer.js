import { types } from '../types/todoTypes'

export const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case types.noteNew:
      return {
        ...state,
        getNotes: [...state.getNotes, action.payload],
      }

    case types.noteDelete:
      return {
        ...state,
        getNotes: state.getNotes.filter((note) => note.uid !== action.payload),
      }

    case types.noteUpdate:
      console.log(action.payload);
      return {
        ...state,
        getNotes: state.getNotes.map((note) =>
          note.uid === action.payload.id
            ? { ...note, title: action.payload.title, note: action.payload.note} 
            : note,
        ),
      }

    case types.noteActive:
      return {
        ...state,
        getTodos: state.getTodos.map((todo) =>
          todo.uid === action.payload
            ? { ...todo, active: !todo.active }
            : todo,
        ),
      }

    case types.noteToogledAll:
      return {
        ...state,
        getTodos: state.getTodos.map((todo) => ({
          ...todo,
          active: action.payload,
        })),
      }

    case types.noteDeleteAll:
      return {
        ...state,
        getTodos: [],
      }

    case types.noteDeleteActives:
      return {
        ...state,
        getTodos: state.getTodos.filter((todo) => todo.active !== true),
      }

    case types.uiOpenModal:
      return {
        ...state,
        ui: {
          ...state.ui,
          isActiveModal: !state.ui.isActiveModal,
        },
      }
    
    case types.noteModalActive:
      return {
        ...state,
        active: action.payload
      }

    default:
      return state
  }
}
