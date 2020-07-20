import React, { useReducer } from 'react'
import { SHOW_MANAGE_WINDOW, HIDE_MANAGE_WINDOW, SET_EDITABLE, SET_NOT_EDITABLE } from '../types'
import { DialogContext } from './dialogContext'
import { dialogReducer } from './dialogReducer'

export const DialogState = ({children}) => {
    const initialState = {
        id: '',
        visible: false,
        editable: false
    }
    const [state, dispatch] = useReducer(dialogReducer, initialState)

    const showManageWindow = (id) => dispatch({type: SHOW_MANAGE_WINDOW, payload: id})
    const hideManageWindow = (id) => dispatch({type: HIDE_MANAGE_WINDOW, payload: id})
    const setEditable = () => dispatch({type: SET_EDITABLE})
    const setNotEditable = () => dispatch({type: SET_NOT_EDITABLE})

    return(
        <DialogContext.Provider 
            value={{showManageWindow, hideManageWindow, setEditable, setNotEditable, 
            dialog: state}}>
            {children}
        </DialogContext.Provider>
    )
}