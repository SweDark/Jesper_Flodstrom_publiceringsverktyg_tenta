import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
const Layout = ({ children }) => {
const [isOpen, setIsOpen] = React.useState(false)
const toggleSidebar = () => {
setIsOpen(!isOpen)
}
return (

<>

<Navbar toggleSidebar={toggleSidebar} />
{children}
<Footer />

</>

)
} 
export default Layout
