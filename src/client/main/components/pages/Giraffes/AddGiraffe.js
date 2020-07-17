import React from 'react'
import styles from './Giraffes.module.sass'

export const AddGiraffe = () => {
    const handleAddButton = (event) => {
        console.log('open new giraffe form')
    }

    const handleSaveBtn = (event) => {
        console.log(event.target);
    }

    const renderAddGiraffeForm = () => {
        return(
            <div className={styles.formWrapper}>
                <input type='file' />
                <input
                    id='name' 
                    type='text' 
                    placeholder='Имя'
                    name='name'
                    // value={}
                />
                <input
                    id='gender' 
                    type='text' 
                    placeholder='-'
                    name='gender'
                    // value={}
                />
                <input
                    id='weight' 
                    type='text' 
                    placeholder='-'
                    name='weight'
                    // value={}
                />
                <input
                    id='height' 
                    type='text' 
                    placeholder='-'
                    name='height'
                    // value={}
                />
                <input
                    id='color' 
                    type='text' 
                    // placeholder='color'
                    name='color'
                    // value={}
                />
                <input 
                    id='diet'
                    type='text' 
                    // placeholder='diet'
                    name='diet'
                    // value={}
                />
                <input 
                    id='character' 
                    type='text' 
                    // placeholder='character' 
                    name='character'
                    // value={}
                />
                <button onClick={handleSaveBtn}>
                    Сохранить
                </button>
            </div>
        )
    }

    return(
        <>
            <div className={styles.addGiraffeContainer}>
                <p className={styles.title}>Жирафы</p>
                <button onClick={handleAddButton}>add G</button>
            </div>
            {/* make dynamic with redux */}
            {renderAddGiraffeForm()}
        </>
    )
}