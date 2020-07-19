import React from 'react'
import { Header } from '../../uui/Header/Header'
import { AddGiraffe } from './AddGiraffe'
import { GiraffesList } from './GiraffesList'
import styles from './Giraffes.module.sass'

export const Giraffes = () => {
    return(
        <section className={styles.mainWrapper}>
            <Header />
            <AddGiraffe />
            <GiraffesList />
        </section>
    )
}