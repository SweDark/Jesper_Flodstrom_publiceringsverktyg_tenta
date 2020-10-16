import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { JobWrapper, JobArticle, JobButtonsContainer, JobCenter } from "../elements/JobElements"

import { Button } from "../components/Button"
export const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        id
        company
        desc {
          name
          id
        }
        position
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  console.log(data)
  // destructering
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  console.log(jobs)
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]
  console.log(company, position, date, desc)

  return (
    <JobWrapper>
      <Title title="erfarenhet" />
      <JobCenter>
        {/* btn container */}
        <JobButtonsContainer>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.strapiId}
                onClick={() => setValue(index)}
                className={` ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </JobButtonsContainer>
        {/* job info */}
        <JobArticle>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p>{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id}>
                <FaAngleDoubleRight></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </JobArticle>
      </JobCenter>
      <Button href={"/about"}>
      Mitt CV
      </Button>
    </JobWrapper>
  )
}

export default Jobs
