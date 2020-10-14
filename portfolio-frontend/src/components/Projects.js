import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

import { ProjectsWrapper } from "../elements/ProjectElements"
const Projects = ({ projects, title, showLink }) => {
  return (
    <ProjectsWrapper>
    {/* <section className="section projects"> */}
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          Alla projekt
        </Link>
      )}
    {/* </section> */}
    </ProjectsWrapper>
  )
}

export default Projects
