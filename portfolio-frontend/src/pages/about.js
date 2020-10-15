import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import downloadFile from "../../static/cv.pdf"
import { AboutPage, AboutWrapper } from "../elements/AboutElements"
import { Button } from "../components/Button"
// ...GatsbyImageSharpFluid
const About = ({
  data: {
    about: { nodes },
  },
}) => {
  //console.log(nodes)
  const { info, stack, title, image } = nodes[0]
  return (
    <Layout>
      <SEO title="CV" description="Jespers CV" />
      <AboutPage>
        <AboutWrapper>
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          
          <article>
            <ReactMarkdown source={info} />
            <div>
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>

            <a href={downloadFile} download>Ladda ner fullständig CV</a>{` `}
            <Button href={"/contact"}>Kontakta mig</Button>

          </article>
        </AboutWrapper>
        <>


        </>
      </AboutPage>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
