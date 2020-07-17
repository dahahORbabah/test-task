import React from 'react'
import styles from './GiraffeCard.module.sass'

export const GiraffeCard = () => {
    const renderCharacter = () => {
        return(
            <div>
                color + diet + character
            </div>
        )
    }

    const renderParam = () => {
        return(
            <div>
                sex + w + h
            </div>
        )
    }

    const renderGiraffeInfo = () => {
        return(
            <section>
                name
                {renderParam()}
                {renderCharacter()}
            </section>
        )
    }    

    return(
        <article className={styles.giraffeCard}>
            <img />
            {renderGiraffeInfo()}
        </article>
    )
}