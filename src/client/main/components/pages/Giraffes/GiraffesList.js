import React, { useState, useCallback, useEffect } from 'react'
import styles from './Giraffes.module.sass'
import { useHTTP } from '../../../../hooks/http.hook'
import { GiraffeCard } from '../../uui/Card/GiraffeCard/GiraffeCard'

export const GiraffesList = () => {
    const { loading, request } = useHTTP()
    const [giraffes, setGiraffes] = useState([{ 
        name: '', 
        // gender: '', weight: '', height: '', color: '', diet: '', character: '' 
    }]) 

    const getGiragges = useCallback(async () => {
        try {
            const data = await request('/api/giraffe', 'GET', null)
            // console.log(data);
            setGiraffes(data)
        } catch (e) { }
    }, [request])

    // as ready
    useEffect(() => {
        getGiragges()
    }, [getGiragges])

    if (!loading && giraffes) {
        return (
            giraffes.map((giraffe, index) => 
                <GiraffeCard key={index} giraffe={giraffe} />
            )
        )
    } else return 'empty list'
}