import React from 'react';
import { Ul} from '../elements/NavElements'
import {Link} from "gatsby"
const NavMenu = ({ open }) => {
  return (
    <Ul open={open}>
      <li><Link to="/">home</Link></li>
      <li><Link to="/about">about</Link></li>
      <li><Link to="/projects">projects</Link></li>
      <li><Link to="/blog">blog</Link></li>
      <li><Link to="/contact">contact</Link></li>
    </Ul>
  )
}
 export default NavMenu