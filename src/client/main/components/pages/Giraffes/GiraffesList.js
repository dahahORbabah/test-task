import React, { useState, useCallback, useEffect, useContext } from 'react'
import styles from './Giraffes.module.sass'
import { useHTTP } from '../../../../hooks/http.hook'
import { GiraffeCard } from '../../uui/Card/GiraffeCard/GiraffeCard'
import { GiraffesContext } from '../../../../context/giraffes/giraffesContext'

export const GiraffesList = () => {
    const { loading } = useHTTP()
    const { fetchGiraffes, giraffes } = useContext(GiraffesContext)

    useEffect(() => {
        fetchGiraffes()
    }, [])

    if (!loading && giraffes) {
        console.log(giraffes);
        return (
            <ul className={styles.giraffeListContainer}>
                {giraffes.map((giraffe, index) => 
                    <li className={styles.giraffeCardWrapper} key={index}>
                        <GiraffeCard id={index} giraffe={giraffe} />
                    </li>
                )}
            </ul>
        )
    } else return 'empty list'
}