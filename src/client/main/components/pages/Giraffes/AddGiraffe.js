import React, { useState } from 'react'
import { useHTTP } from '../../../../hooks/http.hook'
import styles from './Giraffes.module.sass'

export const AddGiraffe = () => {
    const { loading, request } = useHTTP()
    const [form, setForm] = useState({
        name: '', 
        // gender: '', weight: '', height: '', color: '', diet: '', character: ''
    })

    const changeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const addHandler = () => {
        console.log('open new giraffe form')
        console.log(form);
    }

    const saveHandler = async () => {
        try {
            const data = await request('/api/giraffe', 'POST', {...form})
            console.log('Giraffe', data);
        } catch (e) { }
    }

    const renderAddGiraffeForm = () => {
        return(
            <div className={styles.formWrapper}>
                {/* <input type='file' /> */}
                <input
                    id='name' 
                    type='text' 
                    placeholder='Имя'
                    name='name'
                    value={form.name}
                    onChange={changeHandler}
                />
                {/* <input
                    id='gender' 
                    type='text' 
                    placeholder='-'
                    name='gender'
                    value={form.gender}
                    onChange={changeHandler}
                />
                <input
                    id='weight' 
                    type='text' 
                    placeholder='-'
                    name='weight'
                    value={form.weight}
                    onChange={changeHandler}
                />
                <input
                    id='height' 
                    type='text' 
                    placeholder='-'
                    name='height'
                    value={form.height}
                    onChange={changeHandler}
                />
                <input
                    id='color' 
                    type='text' 
                    // placeholder='color'
                    name='color'
                    value={form.color}
                    onChange={changeHandler}
                />
                <input 
                    id='diet'
                    type='text' 
                    // placeholder='diet'
                    name='diet'
                    value={form.diet}
                    onChange={changeHandler}
                />
                <input 
                    id='character' 
                    type='text' 
                    // placeholder='character' 
                    name='character'
                    value={form.character}
                    onChange={changeHandler}
                /> */}
                <button 
                    onClick={saveHandler}
                    disabled={loading}
                >
                    Сохранить
                </button>
            </div>
        )
    }

    return(
        <>
            <div className={styles.addGiraffeContainer}>
                <p className={styles.title}>Жирафы</p>
                <button
                    className={styles.addBtn} 
                    onClick={addHandler}
                    disabled={loading}
                >
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="37" height="37" rx="18.5" fill="#668663" />
                        <svg width="16" height="21" viewBox="0 0 16 21" fill="none">
                            <path d="M14.625 6.5625C14.9297 6.5625 15.1875 6.67969 15.3984 6.91406C15.6328 7.125 15.75 7.38281 15.75 7.6875V8.8125C15.75 9.11719 15.6328 9.38672 15.3984 9.62109C15.1875 9.83203 14.9297 9.9375 14.625 9.9375H9.5625V15C9.5625 15.3047 9.44531 15.5625 9.21094 15.7734C9 16.0078 8.74219 16.125 8.4375 16.125H7.3125C7.00781 16.125 6.73828 16.0078 6.50391 15.7734C6.29297 15.5625 6.1875 15.3047 6.1875 15V9.9375H1.125C0.820312 9.9375 0.550781 9.83203 0.316406 9.62109C0.105469 9.38672 0 9.11719 0 8.8125V7.6875C0 7.38281 0.105469 7.125 0.316406 6.91406C0.550781 6.67969 0.820312 6.5625 1.125 6.5625H6.1875V1.5C6.1875 1.19531 6.29297 0.9375 6.50391 0.726562C6.73828 0.492187 7.00781 0.375 7.3125 0.375H8.4375C8.74219 0.375 9 0.492187 9.21094 0.726562C9.44531 0.9375 9.5625 1.19531 9.5625 1.5V6.5625H14.625Z" fill="white"/>
                        </svg>                
                    </svg>
                </button>
            </div>
            {/* make dynamic with redux */}
            {renderAddGiraffeForm()}
        </>
    )
}