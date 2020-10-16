import React from 'react';
import {Ul} from '../elements/NavElements'
import {Link} from "gatsby"
//menu links (from old navbar)
const NavMenu = ({ open }) => {
  return (
    <Ul open={open}>
      <li><Link to="/">Hem</Link></li>
      <li><Link to="/about">Mitt CV</Link></li>
      <li><Link to="/projects">Projekt</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/contact">Kontakt</Link></li>
    </Ul>
  )
}
 export default NavMenu