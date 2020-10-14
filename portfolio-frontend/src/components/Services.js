import React from "react"
import Title from "./Title"
import services from "../constants/services"
import { ServiceWrapper } from "../elements/ServiceElements"
const Services = () => {
  return (
    
      <ServiceWrapper>
        <Title title="Tjänster" />
        <div className="section-center services-center">
          {services.map(service => {
            //  destructure
            const { id, icon, title, text } = service

            return (
              <article key={id} className="service">
                {icon}
                <h4>{title}</h4>
                <div className="underline"></div>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </ServiceWrapper>
     

  )
}

export default Services