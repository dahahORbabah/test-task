import React, { Suspense, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { NavBar } from './uui/NavBar/NavBar';
import { Giraffes } from './pages/Giraffes/Giraffes';
import styles from './style.module.sass';

function App() {
    
    return(
        <section className={styles.mainContainer}>
            <NavBar />
            <Giraffes />
        </section>
    )
}

export default hot(App)