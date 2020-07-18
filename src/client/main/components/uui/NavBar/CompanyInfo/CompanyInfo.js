import React from 'react';
import styles from './CompanyInfo.module.sass';

export const CompanyInfo = () => {
    return(
        <div className={styles.infoWrapper}>
            <img src='/images/giraffe_logo'/>
            <div className={styles.info}>
                <p className={styles.title}>Ферма Заслуженных Жирафов</p>
                <p className={styles.subtitle}>России и СНГ</p>
            </div>
        </div>
    )
}