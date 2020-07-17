import React from 'react';
import { CompanyInfo } from './CompanyInfo/CompanyInfo';
import styles from './NavBar.module.sass';

export const NavBar = () => {
    return(
        <section className={styles.navWrapper}>
            <CompanyInfo />
        </section>
    )
}