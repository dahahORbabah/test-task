import React, { useReducer } from 'react'
import { SHOW_MANAGE_WINDOW, HIDE_MANAGE_WINDOW, EDIT_GIRAFFE } from '../types'
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
    const setEditable = () => dispatch({type: EDIT_GIRAFFE})

    return(
        <DialogContext.Provider 
            value={{showManageWindow, hideManageWindow, setEditable, dialog: state}}>
            {children}
        </DialogContext.Provider>
    )
}