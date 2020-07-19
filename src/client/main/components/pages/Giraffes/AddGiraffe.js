import React, { useState } from 'react'
import { useHTTP } from '../../../../hooks/http.hook'
import styles from './Giraffes.module.sass'

export const AddGiraffe = () => {
    const { loading, request } = useHTTP()
    const [form, setForm] = useState({
        name: '', sex: '', weight: '', height: '', color: '', diet: '', character: ''
    })

    const changeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const addHandler = () => {
        console.log('open new giraffe form')
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
                    id='sex' 
                    type='text' 
                    placeholder='-'
                    name='sex'
                    value={form.sex}
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
                        <rect width="37" height="37" rx="18.5" fill="#668663"/>
                        <path d="M25.625 16.5625C25.9297 16.5625 26.1875 16.6797 26.3984 16.9141C26.6328 17.125 26.75 17.3828 26.75 17.6875V18.8125C26.75 19.1172 26.6328 19.3867 26.3984 19.6211C26.1875 19.832 25.9297 19.9375 25.625 19.9375H20.5625V25C20.5625 25.3047 20.4453 25.5625 20.2109 25.7734C20 26.0078 19.7422 26.125 19.4375 26.125H18.3125C18.0078 26.125 17.7383 26.0078 17.5039 25.7734C17.293 25.5625 17.1875 25.3047 17.1875 25V19.9375H12.125C11.8203 19.9375 11.5508 19.832 11.3164 19.6211C11.1055 19.3867 11 19.1172 11 18.8125V17.6875C11 17.3828 11.1055 17.125 11.3164 16.9141C11.5508 16.6797 11.8203 16.5625 12.125 16.5625H17.1875V11.5C17.1875 11.1953 17.293 10.9375 17.5039 10.7266C17.7383 10.4922 18.0078 10.375 18.3125 10.375H19.4375C19.7422 10.375 20 10.4922 20.2109 10.7266C20.4453 10.9375 20.5625 11.1953 20.5625 11.5V16.5625H25.625Z" fill="white"/>
                    </svg>
                </button>
            </div>
            {/* make dynamic */}
            {/* {renderAddGiraffeForm()} */}
        </>
    )
}