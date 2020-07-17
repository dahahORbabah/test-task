import React from 'react'
import styles from './Giraffes.module.sass'
import { Card } from '../../uui/Card/Card'

export const GiraffesList = () => {
    return(
        <div className={styles.giraffeListContainer}>
            <Card type='giraffe' />
        </div>
    )
}