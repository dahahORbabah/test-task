import { ADD_GIRAFFE, FETCH_GIRAFFES, EDIT_GIRAFFE } from '../types'

const handlers = {
    [ADD_GIRAFFE]: (state, {payload}) => ({
        ...state, giraffes: [...state.giraffes, payload]
    }),
    [FETCH_GIRAFFES]: (state, {payload}) => ({
        ...state, giraffes: payload
    }),
    [EDIT_GIRAFFE]: (state, {payload}) => ({
        ...state, giraffes: [...state.giraffes, payload]
    }),

    DEFAULT: state => state
}

export const giraffesReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}