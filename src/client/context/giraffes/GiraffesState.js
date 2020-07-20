import React, { useReducer } from 'react'
import { ADD_GIRAFFE, FETCH_GIRAFFES, EDIT_GIRAFFE } from '../types'
import axios from 'axios'
import { giraffesReducer } from './giraffesReducer'
import { GiraffesContext } from './giraffesContext'
import giraffe from '../../../server/models/giraffe'

export const GiraffesState = ({children}) => {
    const initialState = {
        giraffes: []
    }
    const [state, dispatch] = useReducer(giraffesReducer, initialState)

    const fetchGiraffes = async () => {
        const res = await axios.get('/api/giraffe')
        const payload = res.data

        dispatch({type: FETCH_GIRAFFES, payload})
    }
    
    const addGiraffe = async (giraffe) => {
        try {
            const res = await axios.post('/api/giraffe', giraffe)
            const payload = {
                ...giraffe,
                id: res.data.id
            }

            dispatch({type: ADD_GIRAFFE, payload})
        } catch (e) {
            throw new Error(e.message)
        }
    }

    const updateGiraffe = async (id, giraffe) => {
        try {
            const res = await axios.put(`/api/giraffe/${id}`, giraffe)
            const payload ={
                ...giraffe,
                id: res.data.id
            }

            console.log(payload);

            dispatch({type: EDIT_GIRAFFE, payload})
        } catch (e) {
            throw new Error(e.message)
        }
    }

    return(
        <GiraffesContext.Provider value={{
            addGiraffe, fetchGiraffes, updateGiraffe,
            giraffes: state.giraffes
        }}>
            {children}
        </GiraffesContext.Provider>
    )
}