import React from 'react'
import styles from './Giraffes.module.sass'
import { AddGiraffe } from './AddGiraffe'
import { GiraffesList } from './GiraffesList'

export const Giraffes = () => {
    return(
        <section className={styles.mainWrapper}>
            <AddGiraffe />
            <GiraffesList />
        </section>
    )
}