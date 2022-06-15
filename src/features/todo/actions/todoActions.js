import { types } from '../types/types'

export const addNewTodo = (todo) => ({
  type: types.todoNew,
  payload: {
    uid: new Date().getTime(),
    name: todo,
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
  type: types.openModal
})

export const addNewNote = (note) => ({
  type: types.noteAddNote,
  payload: {
    ...note,
    uid: new Date().getTime(),
    fullDate: new Date().getTime(),
    active: false
  }
})