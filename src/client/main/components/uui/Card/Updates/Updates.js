import React from 'react'
import styles from './Updates.module.sass'

export const Updates = () => {
    return(
        <div className={styles.tableWrapper}>
            <div className={styles.headerWrapper}>
                <span className={styles.titleWrapper}>
                    <p className={styles.title}>Обновления</p>
                    <button className={styles.close}>
                        &times;
                    </button>
                </span>
            </div>
            <ul className={styles.row}>
                    <li className={styles.headerItem}>Дата</li>
                    <li className={styles.headerItem}>Действие</li>
                    <li className={styles.headerItem}>Жираф</li>
                    <li className={styles.headerItem}>Статус</li>
                </ul>
            <div className={styles.headWrapper}>
                <ul className={styles.row}>
                    <li className={styles.bodyItem}>01 июня 2020</li>
                    <li className={styles.bodyItem}>Новый жираф</li>
                    <li className={styles.bodyItem}>Пряник</li>
                    <li className={`${styles.bodyItem} ${styles.status} ${styles.waiting}`}>Ожидается</li>
                </ul>
            </div>
            <div className={styles.headWrapper}>
                <ul className={styles.row}>
                    <li className={styles.bodyItem}>20 апр 2020</li>
                    <li className={styles.bodyItem}>Новый жираф</li>
                    <li className={styles.bodyItem}>Матильда</li>
                    <li className={`${styles.bodyItem} ${styles.status} ${styles.realized}`}>Выполнено</li>
                </ul>
            </div>
            <div className={styles.headWrapper}>
                <ul className={styles.row}>
                    <li className={styles.bodyItem}>15 апр 2020</li>
                    <li className={styles.bodyItem}>Редактировать</li>
                    <li className={styles.bodyItem}>Шнур</li>
                    <li className={`${styles.bodyItem} ${styles.status} ${styles.notCommit}`}>Не подтвержден</li>
                </ul>
            </div>
            <div className={styles.headWrapper}>
                <ul className={styles.row}>
                    <li className={styles.bodyItem}>05 апр 2020</li>
                    <li className={styles.bodyItem}>Удалить</li>
                    <li className={styles.bodyItem}>Ракета</li>
                    <li className={`${styles.bodyItem} ${styles.status} ${styles.realized}`}>Выполнено</li>
                </ul>
            </div>
            <div className={styles.headWrapper}>
                <ul className={styles.row}>
                    <li className={styles.bodyItem}>04 апр 2020</li>
                    <li className={styles.bodyItem}>Перевод</li>
                    <li className={styles.bodyItem}>Леонид</li>
                    <li className={`${styles.bodyItem} ${styles.status} ${styles.denied}`}>Отклонено</li>
                </ul>
            </div>
        </div>
    )
}