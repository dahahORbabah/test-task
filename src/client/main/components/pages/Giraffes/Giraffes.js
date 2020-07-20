import React from 'react'
import { Header } from '../../uui/Header/Header'
import { AddGiraffe } from './AddGiraffe'
import { GiraffesList } from './GiraffesList'
import styles from './Giraffes.module.sass'
import { DialogState } from '../../../../context/dialog/DialogState'
import { GiraffesState } from '../../../../context/giraffes/GiraffesState'

export const Giraffes = () => {
    return(
        <GiraffesState>
            <DialogState>
                <section className={styles.mainWrapper}>
                    <Header />
                    <AddGiraffe />
                    <GiraffesList />
                </section>
            </DialogState>
        </GiraffesState>
    )
}