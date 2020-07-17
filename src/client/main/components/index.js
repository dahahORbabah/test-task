import React, { Suspense, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import UploadExample from './UploadExample';
import styles from'./testSass.module.sass';
function App() {
    
    return (
        <div>
            <h1 className={styles.test}>sass modules work</h1>
            <UploadExample/>
        </div>
    )
}

export default hot(App)