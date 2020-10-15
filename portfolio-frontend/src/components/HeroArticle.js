import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { HeroArticleWrapper, HeroArticleUnderline } from "../elements/HeroElements"
import SocialLinks from "../constants/socialLinks"
import { Button } from "../components/Button"
const HeroArticle = () => {
    return (
        <HeroArticleWrapper>
            <div>
                <h1>I'm Jesper</h1>
                <HeroArticleUnderline></HeroArticleUnderline>
                <h4>Elev på TUC</h4>
                - Jag lär mig just nu strapi, gatsby och GraphQL.
                <br />
                -  Fakta om mig: Jag läser väldigt mycket fantasy böcker
                <br />
                - Hur ni når mig: använd länken nedan.
                <br />
                <Button href={"/contact"}>Kontakta mig</Button>
                <SocialLinks />
            </div>
        </HeroArticleWrapper>
    )
  }
  export default HeroArticle