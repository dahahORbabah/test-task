import React from 'react'
// import { useHTTP } from '../../../../hooks/http.hook'
import styles from './Giraffes.module.sass'
import { AddGiraffe } from './AddGiraffe'
import { GiraffesList } from './GiraffesList'

export const Giraffes = () => {
    // const { loading, error, request } = useHTTP()
    return(
        <section className={styles.mainWrapper}>
            <AddGiraffe />
            <GiraffesList />
        </section>
    )
}