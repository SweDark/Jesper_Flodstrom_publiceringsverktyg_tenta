import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { ProjectWrapper, ProjectInfo, ProjectStack, ProjectLinks, ProjectImage } from "../elements/ProjectElements"

const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <ProjectWrapper>
    {/* <article className="project"> */}
        {/* if image is not supplied, instead of breaking, dont show any image */}
      {image && (
        
        <Image fluid={image.childImageSharp.fluid} className="project-img" />
      )}
      <ProjectInfo>
        <span>0{index + 1}.</span>
        {/* if title is not supplied, set a defualt title */}
        <h3>{title || "Projekt"}</h3>
        <p>{description}</p>
        <ProjectStack>
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </ProjectStack>
        <ProjectLinks>
          <a href={github}>
            <FaGithubSquare/>
          </a>
          <a href={url}>
            <FaShareSquare/>
          </a>
        </ProjectLinks>
      </ProjectInfo>
    {/* </article> */}
    </ProjectWrapper>
  )
}

/*if you for example forget to set these fields in strapi,
so if you forget to give them values, you will get a error in your console
*/
Project.propTypes = {
  title: PropTypes.string.isRequired,
  git: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
