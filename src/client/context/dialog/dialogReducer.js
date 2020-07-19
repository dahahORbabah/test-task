import { SHOW_MANAGE_WINDOW, HIDE_MANAGE_WINDOW } from '../types'

const handlers = {
    [SHOW_MANAGE_WINDOW]: state => ({...state, visible: true}),
    [HIDE_MANAGE_WINDOW]: state => ({...state, visible: false}),
    DEFAULT: state => state
}

export const dialogReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    console.log(state);
    console.log(action.type);
    return handle(state, action)
}