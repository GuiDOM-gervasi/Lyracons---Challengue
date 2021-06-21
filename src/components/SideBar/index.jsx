import React from 'react'
import { StyledSideBar } from './StyledSideBar'

const SideBar = ({color, hello}) => {
    return (
        <StyledSideBar color={color} hello={hello}>
            <h2>HOLA MUNDO!</h2>            
        </StyledSideBar>
    )
}

export default SideBar
