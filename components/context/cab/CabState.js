import React, {useState} from 'react'
import CabContext from './CabContext'

const CabState = (props) => {
    const [driverMode, setDriverMode] = useState(false)

    return (
        <CabContext.Provider value={{driverMode, setDriverMode}}>
            {props.children}
        </CabContext.Provider>
    )
}

export default CabState