import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import { ProjectsWrapper } from "../elements/ProjectElements"
import { ButtonCenter } from "../components/Button"

const Projects = ({ projects, title, showLink }) => {
  return (
    <ProjectsWrapper>
    {/* <section className="section projects"> */}
      <Title title={title} />
      <div>
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>

      {showLink && (
        <ButtonCenter href={"/projects"}>Alla Projekt</ButtonCenter>
      )}
    {/* </section> */}
    </ProjectsWrapper>
  )
}

export default Projects
