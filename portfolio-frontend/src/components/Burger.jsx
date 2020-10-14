import React, { useState } from 'react';
import NavMenu from './Sidebar';
import { StyledBurger} from '../elements/NavElements'

const Hamburger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div /> 
      </StyledBurger>
      <NavMenu open={open}/>
    </>
  )
}
export default Hamburger