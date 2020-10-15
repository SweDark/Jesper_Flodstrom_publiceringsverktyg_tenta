import React from "react"
import Title from "./Title"
import services from "../constants/services"
import { ServiceWrapper, ServiceArticle, ServiceDiv } from "../elements/ServiceElements"
const Services = () => {
  return (
    
      <ServiceWrapper>
        <Title title="Tjänster" />
        <ServiceDiv>
          {services.map(service => {
            //  destructure
            const { id, icon, title, text } = service

            return (
              <ServiceArticle key={id}>
                {icon}
                <h4>{title}</h4>
                <div></div>
                <p>{text}</p>
              </ServiceArticle>
            )
          })}
        </ServiceDiv>
      </ServiceWrapper>
     

  )
}

export default Services