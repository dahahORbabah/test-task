import React, { useReducer } from 'react'
import { SHOW_MANAGE_WINDOW, HIDE_MANAGE_WINDOW } from '../types'
import { DialogContext } from './dialogContext'
import { dialogReducer } from './dialogReducer'

export const DialogState = ({children}) => {
    const initialState = {
        visible: false
    }
    const [state, dispatch] = useReducer(dialogReducer, initialState)

    const showManageWindow = () => dispatch({type: SHOW_MANAGE_WINDOW})
    const hideManageWindow = () => dispatch({type: HIDE_MANAGE_WINDOW})

    return(
        <DialogContext.Provider 
            value={{showManageWindow, hideManageWindow, dialog: state}}>
            {children}
        </DialogContext.Provider>
    )
}