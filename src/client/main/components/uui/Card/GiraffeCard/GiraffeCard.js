import React from 'react'
import styles from './GiraffeCard.module.sass'

export const GiraffeCard = (props) => {
    const renderCharacter = () => {
        const color = props.giraffe.color || '-'
        const diet = props.giraffe.diet || '-'
        const character = props.giraffe.character || '-'
        return(
            <div className={styles.charContainer}>
                <span className={styles.param}>Цвет:<p>{color}</p></span>
                <span className={styles.param}>Диета:<p>{diet}</p></span>
                <span className={styles.param}>Характер:<p>{character}</p></span>
            </div>
        )
    }

    const renderParam = () => {
        const sex = props.giraffe.sex || '-'
        const weight = props.giraffe.weight || '-'
        const height = props.giraffe.height || '-'
        return(
            <div className={styles.paramContainer}>
                <p>{sex}</p>
                <p>{weight}</p>
                <p>{height}</p>
            </div>
        )
    }

    const renderGiraffeInfo = () => {
        return(
            <div>
                <p className={styles.name}>{props.giraffe.name}</p>
            </div>
        )
    }    

    return(
        <article className={styles.giraffeCard}>
            {renderGiraffeInfo()}
            {renderParam()}
            {renderCharacter()}
        </article>
    )
}