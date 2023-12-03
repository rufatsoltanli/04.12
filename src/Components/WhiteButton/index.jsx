import React from 'react'
import "./style.scss"
function WhiteButton
    ({children}) {
    return (
        <>
            <button className='whiteButton'>{children}</button>
        </>
    )
}

export default WhiteButton
