import { ADD_GIRAFFE, FETCH_GIRAFFES, EDIT_GIRAFFE, REMOVE_GIRAFFE, SHOW_NEW_FORM, HIDE_NEW_FORM } from '../types'

const handlers = {
    [ADD_GIRAFFE]: (state, {payload}) => ({
        ...state, giraffes: [...state.giraffes, payload]
    }),
    [FETCH_GIRAFFES]: (state, {payload}) => ({
        ...state, giraffes: payload
    }),
    [EDIT_GIRAFFE]: (state, {payload}) => ({
        ...state, giraffes: state.giraffes.map(giraffe => giraffe._id == payload._id ? payload : giraffe)
    }),
    [REMOVE_GIRAFFE]: (state, {payload}) => ({
        ...state, giraffes: state.giraffes.filter(giraffe => giraffe.id !== payload)
    }),
    [SHOW_NEW_FORM]: state => ({
        ...state, visible: true
    }),
    [HIDE_NEW_FORM]: state => ({
        ...state, visible: false
    }),

    DEFAULT: state => state
}

export const giraffesReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    // console.log(state);
    // console.log(action.type);
    return handle(state, action)
}