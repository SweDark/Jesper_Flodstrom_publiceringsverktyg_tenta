import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { HeroWrapper, HeroDiv } from "../elements/HeroElements"
import HeroArticle from "./HeroArticle"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const query = graphql`
    {
      file(relativePath: {eq: "hero-img.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

  const Hero = () => {
    const {
      file: {
        childImageSharp: { fluid },
      },
    } = useStaticQuery(query)
  
    // console.log(data)
  
    return (
      <HeroWrapper>
        {/* <header className="hero"> */}
          <HeroDiv>
          <HeroArticle/>
            <Image fluid={fluid} className="hero-img" />
          </HeroDiv>
        {/* </header> */}
      </HeroWrapper>
    )
  }
  export default Hero