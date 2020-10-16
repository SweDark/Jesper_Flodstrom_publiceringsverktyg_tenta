import React from "react"
import SocialLinks from "../constants/socialLinks"
import { FooterWrapper } from "../elements/FooterElements"
//footer html code
const Footer = () => {
return (
<FooterWrapper>
<div>
<SocialLinks></SocialLinks>
<h4>
copyright&copy; {new Date().getFullYear()} |
&nbsp;<span>SweDark</span> | all rights reserved
</h4>
</div>
</FooterWrapper>
)
}
export default Footer
