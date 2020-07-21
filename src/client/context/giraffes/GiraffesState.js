import React, { useReducer } from 'react'
import { ADD_GIRAFFE, FETCH_GIRAFFES, EDIT_GIRAFFE, REMOVE_GIRAFFE, SHOW_NEW_FORM, HIDE_NEW_FORM } from '../types'
import axios from 'axios'
import { giraffesReducer } from './giraffesReducer'
import { GiraffesContext } from './giraffesContext'

export const GiraffesState = ({children}) => {
    const initialState = {
        giraffes: [],
        visible: false
    }
    const [state, dispatch] = useReducer(giraffesReducer, initialState)

    const fetchGiraffes = async () => {
        const res = await axios.get('/api/giraffe')
        const payload = res.data

        dispatch({type: FETCH_GIRAFFES, payload})
    }
    
    const addGiraffe = async (giraffe) => {
        try {
            const res = await axios.post('/api/giraffe', giraffe, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const payload = {
                ...giraffe,
                _id: res.data._id
            }

            dispatch({type: ADD_GIRAFFE, payload})

            // fetchGiraffes()
        } catch (e) {
            throw new Error(e.message)
        }
    }

    const updateGiraffe = async (id, giraffe) => {
        try {
            await axios.put(`/api/giraffe/${id}`, giraffe)
            const payload ={
                ...giraffe,
                _id: id
            }

            dispatch({type: EDIT_GIRAFFE, payload})

            fetchGiraffes()
        } catch (e) {
            throw new Error(e.message)
        }
    }

    const removeGiraffe = async (id) => {
        try {
            await axios.delete(`/api/giraffe/${id}`)

            dispatch({type: REMOVE_GIRAFFE, payload: id})

            fetchGiraffes()
        } catch (e) {
            throw new Error(e.message)
        }
    }

    const showNewForm = () => dispatch({type: SHOW_NEW_FORM})
    const hideNewForm = () => dispatch({type: HIDE_NEW_FORM})

    return(
        <GiraffesContext.Provider value={{
            addGiraffe, fetchGiraffes, updateGiraffe, 
            removeGiraffe, showNewForm, hideNewForm,
            giraffes: state.giraffes, visible: state.visible
        }}>
            {children}
        </GiraffesContext.Provider>
    )
}