//HOLDS THE RENDEDER MOLE COMPONENT
import {useState} from 'react'
import React from 'react'
import Mole from './Mole'

//HANDLECLICK FUNC - SCORE BY 1 AND TERNARY FOR WHICH CHILD TO RENDER

function MoleContainer (props) {
    let [displayMole, setDisplayMole] = useState(false)

    const moleBopped = () => {
        //having trouble with this, will reach out for help
    }
    return(
        <div>
                <h1>Mole Container</h1>
                <Mole />
        </div>
    )
}

export default MoleContainer