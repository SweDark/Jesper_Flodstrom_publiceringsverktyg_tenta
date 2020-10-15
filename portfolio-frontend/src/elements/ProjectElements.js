import styled from "styled-components"

export const ProjectsWrapper = styled.section`
  /* background: var(--clr-grey-10); */
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
h2{
  padding-top: 1rem;
}
@media screen and (min-width: 992px) {
    width: 95vw;
}
`
export const ProjectPage = styled.section`
  background: ${props => props.theme.colors.clrgrey10};
  min-height: calc(100vh - 5rem - 9rem);
`
export const ProjectInfo = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 1rem 2rem;
  border-bottom-left-radius: ${props => props.theme.borders.radius};
  border-bottom-right-radius: ${props => props.theme.borders.radius};
  
  span {
    display: inline-block;
    font-size: 1.25rem;
    color: ${props => props.theme.colors.clrprimary5};
    margin-bottom: 0.75rem;
  }

  h3 {
    font-weight: 500;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
  
  p{
    word-spacing: 15px;
    color: ${props => props.theme.colors.clrgrey3};
  }

  @media screen and (min-width: 992px) {
      border-radius: ${props => props.theme.borders.radius};
      box-shadow: ${props => props.theme.shadows.darkshadow};
      z-index: 1;
      grid-column: 5 /12;
      grid-row: 1 / 1;

  }
`
export const ProjectStack = styled.div`
    margin-bottom: 1rem;

    span{
    display: inline-block;
    background: ${props => props.theme.colors.clrgrey9};
    color: ${props => props.theme.colors.clrgrey5};
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: ${props => props.theme.borders.radius};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
  }
`
export const ProjectLinks = styled.div`
  svg {
    color: ${props => props.theme.colors.clrprimary5};
    font-size: 1.25rem;
    margin-right: 0.5rem;
    transition: ${props => props.theme.animations.transition};
  }
  svg:hover {
    color: ${props => props.theme.colors.clrprimary5};
  }
`


export const ProjectWrapper = styled.article`
    display: grid;
    margin-bottom: 4rem;

  :hover .project-img::after {
    opacity: 0;
  }
   .project-img {
    border-top-left-radius: ${props => props.theme.borders.radius};
    border-top-right-radius: ${props => props.theme.borders.radius};
    height: 19rem;
    z-index: 1;
  } 
  .project-img::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, ${props => props.theme.colors.clrprimary5}, #222);
    opacity: 0.4;
    transition: ${props => props.theme.animations.transition};
  }

  @media screen and (min-width: 576px) {
    .project-img {
      height: 19rem;
    }
  }
  @media screen and (min-width: 768px) {
    .project-img{
      height: 22rem;
    }
  }
  @media screen and (min-width: 992px) {
      grid-template-columns: repeat(12, 1fr);
      align-items: center;

      .project-img {
      grid-column: 1 / span 8;
      /* grid-column-end: 8; */
      grid-row: 1 / 1;
      height: 30rem;
      border-radius: ${props => props.theme.borders.radius};
      box-shadow: ${props => props.theme.shadows.darkshadow};
    }

    &:nth-of-type(even) .project-img{
    grid-column: 5 / -1;
    grid-row: 1 / 1;
    }

    &:nth-child(even) div{
      grid-column: 2 / span 7;
      grid-row: 1 / 1;
      text-align: left;
  }
}
  `