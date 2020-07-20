import { SHOW_MANAGE_WINDOW, HIDE_MANAGE_WINDOW, SET_EDITABLE, SET_NOT_EDITABLE } from '../types'

const handlers = {
    [SHOW_MANAGE_WINDOW]: (state, {payload}) => ({
        ...state, visible: true, id: payload
    }),
    [HIDE_MANAGE_WINDOW]: (state, {payload}) => ({
        ...state, visible: state.id == payload ? false : true, id: payload
    }),
    [SET_EDITABLE]: (state, {payload}) => ({
        ...state, visible: false, editable: true, id: payload
    }),
    [SET_NOT_EDITABLE]: (state, {payload}) => ({
        ...state, editable: false, id: payload
    }),

    DEFAULT: state => state
}

export const dialogReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    console.log(state);
    console.log(action.type);
    return handle(state, action)
}