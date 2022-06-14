import { types } from '../types/todoTypes'

export const addNewNote = ({title, note}) => ({
  type: types.noteNew,
  payload: {
    uid: new Date().getTime(),
    title,
    note,
    fullDate: new Date().getTime(),
    active: false,
  },
})

export const deleteNote = (id) => ({
  type: types.noteDelete,
  payload: id,
})

export const updateNote = (id, newNote) => ({
  type: types.noteUpdate,
  payload: {
    id,
    ...newNote,
  },
})

export const setActiveNote = (id) => ({
  type: types.noteActive,
  payload: id,
})

export const setActiveModalNote = (note) => ({
  type: types.noteModalActive,
  payload : {
    ...note
  }
})

export const setAllToogleNote = (toogle) => ({
  type: types.noteToogledAll,
  payload: toogle,
})

export const deleteAllNote = () => ({
  type: types.noteDeleteAll,
})

export const deleteActivedNote = () => ({
  type: types.noteDeleteActives,
})

//antiguas acciones todo
export const addNewTodo = (todo) => ({
  type: types.noteNew,
  payload: {
    uid: new Date().getTime(),
    todo,
    active: false,
  },
})

export const deleteTodo = (id) => ({
  type: types.todoDelete,
  payload: id,
})

export const updateTodo = (id, newTodo) => ({
  type: types.todoUpdate,
  payload: {
    id,
    newTodo,
  },
})

export const setActiveTodo = (id) => ({
  type: types.todoActive,
  payload: id,
})

export const setAllToogleTodo = (toogle) => ({
  type: types.todoToogledAll,
  payload: toogle,
})

export const deleteAllTodos = () => ({
  type: types.todoDeleteAll,
})

export const deleteActivedTodos = () => ({
  type: types.todoDeleteActives,
})


export const openModal = () => ({
  type: types.uiOpenModal,
})
