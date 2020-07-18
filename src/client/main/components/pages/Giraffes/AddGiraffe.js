import React, { useState } from 'react'
import { useHTTP } from '../../../../hooks/http.hook'
import styles from './Giraffes.module.sass'

export const AddGiraffe = () => {
    const { loading, request } = useHTTP()
    const [form, setForm] = useState({
        name: '', 
        // gender: '', weight: '', height: '', color: '', diet: '', character: ''
    })
    // const [giragges, setGiraffes] = useState(
    //     [{ name: '', gender: '', weight: '', height: '', color: '', diet: '', character: '' }]
    // )

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

    const getGiragges = async () => {
        // use Callback
        try {
            const data = await request('/api/giraffe', 'GET', null, {})
            console.log(data);
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
                    onClick={addHandler}
                    disabled={loading}
                >
                    add G
                </button>
            </div>
            {/* make dynamic with redux */}
            {renderAddGiraffeForm()}
            <button 
                onClick={getGiragges}
                disabled={loading}
            >
                get
            </button>
        </>
    )
}