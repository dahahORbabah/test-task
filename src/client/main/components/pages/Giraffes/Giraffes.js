import React from 'react'
import { Header } from '../../uui/Header/Header'
import { AddGiraffe } from './AddGiraffe'
import { GiraffesList } from './GiraffesList'
import styles from './Giraffes.module.sass'
import { DialogState } from '../../../../context/dialog/DialogState'
import { GiraffesState } from '../../../../context/giraffes/GiraffesState'
import { Fullness } from '../../uui/Card/Fullness/Fullness'
import { Updates } from '../../uui/Card/Updates/Updates'

export const Giraffes = () => {
    return(
        <GiraffesState>
            <DialogState>
                <section className={styles.mainWrapper}>
                    <Header />
                    <AddGiraffe />
                    <GiraffesList />
                    <div className={styles.infoWrapper}>
                        <Updates />
                        <Fullness />
                    </div>
                </section>
            </DialogState>
        </GiraffesState>
    )
}