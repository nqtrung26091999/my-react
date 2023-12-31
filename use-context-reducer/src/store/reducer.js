import { SET_INPUT_TODO, SET_TODOS, DELETE_TODO } from './constants'

export const initState = {
    inputTodo: '',
    todos: []
}

export default function reducer(state, action) {
    switch(action.type) {
        case SET_INPUT_TODO:
            return {
                ...state,
                inputTodo: action.payload
            }
        case SET_TODOS:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            const newTodos = [...state.todos]
            newTodos.splice(action.payload, 1)
            return {
                ...state,
                todos: newTodos
            }
    }
}