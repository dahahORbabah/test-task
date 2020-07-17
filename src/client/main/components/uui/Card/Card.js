import React from 'react'
import { GiraffeCard } from './GiraffeCard/GiraffeCard'

export const Card = (props) => {
    const type = props.type
    
    if (type === 'giraffe') {
        return(
            <GiraffeCard />
        )
    } else {
        return null
    }
}