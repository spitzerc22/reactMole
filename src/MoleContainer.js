//HOLDS THE RENDEDER MOLE COMPONENT
import {useState} from 'react'
import React from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

//HANDLECLICK FUNC - SCORE BY 1 AND TERNARY FOR WHICH CHILD TO RENDER

function MoleContainer (props) {
    let [displayMole, setDisplayMole] = useState(false)

    const moleBopped = (e) => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

    const shownMole = displayMole ?
    <Mole   
        clickHandler={moleBopped}
        setScore={props.setScore}
        toggle={setDisplayMole}
    /> 
    :
    <EmptySlot toggle={setDisplayMole} />

    return(
        <div>
                <h1>Mole Container</h1>
                {shownMole}
        </div>
    )
}

export default MoleContainer