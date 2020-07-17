import React from 'react';
import styles from './CompanyInfo.module.sass';

export const CompanyInfo = () => {
    return(
        <div className={styles.infoWrapper}>
            {/* upload image from server */}
            <img src=''/>
            <div>
                <p className={styles.title}>Ферма Заслуженных Жирафов</p>
                <p className={styles.subtitle}>России и СНГ</p>
            </div>
        </div>
    )
}