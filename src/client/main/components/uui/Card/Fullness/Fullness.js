import React from 'react'
import styles from './Fullness.module.sass'

export const Fullness = () => {
    return(
        <div className={styles.mainWrapper}>
            <button className={styles.close}>
                &times;
            </button>
            <span className={styles.status}>
                <p className={styles.title}>75%</p>
                <p className={styles.subtitle}>Заполнение вольера</p>
            </span>
            <div className={styles.trackContainer}>
                <span className={styles.barBackground}>
                    <span className={styles.bar}>
                        <div />
                    </span>
                </span>
                <button className={styles.infoBackground}>
                    <p>Информация</p>
                </button>
            </div>
        </div>
    )
}