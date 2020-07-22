import React, { useState, useCallback, useEffect, useContext } from 'react'
import styles from './Giraffes.module.sass'
import { GiraffeCard } from '../../uui/Card/GiraffeCard/GiraffeCard'
import { GiraffesContext } from '../../../../context/giraffes/giraffesContext'

export const GiraffesList = () => {
    const { fetchGiraffes, giraffes, visible } = useContext(GiraffesContext)

    useEffect(() => {
        fetchGiraffes()
    }, [])

    const newGiraffeForm = () => {
        return(
            <li className={styles.giraffeCardWrapper} key={'newGiraffe'}>
                <GiraffeCard giraffe={{ }} />
            </li>
        )
    }

    if (giraffes) {
        return (
            <ul className={styles.giraffeListContainer}>
                {visible && newGiraffeForm()}
                {giraffes.map((giraffe) => 
                    <li className={styles.giraffeCardWrapper} key={giraffe._id}>
                        <GiraffeCard giraffe={giraffe} />
                    </li>
                )}
            </ul>
        )
    } else return null
}