import { SET_INPUT_TODO, SET_TODOS, DELETE_TODO } from './constants'

export const setInputTodo = payload => {
    return {
        type: SET_INPUT_TODO,
        payload
    }
}

export const setTodos = payload => {
    return {
        type: SET_TODOS,
        payload
    }
}

export const deleteTodo = payload => {
    return {
        type: DELETE_TODO,
        payload
    }
}