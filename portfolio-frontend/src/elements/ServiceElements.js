import styled from "styled-components"

export const ServiceWrapper = styled.section`
padding: 5rem 0;

svg {
      font-size: 2rem;
    margin-bottom: 1.5rem;
}
`
export const ServiceDiv = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  @media screen and (min-width: 676px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
  }
  @media screen and (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr;
  }
`

export const ServiceArticle = styled.article`
    background: ${props => props.theme.colors.white};
    padding: 3rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: ${props => props.theme.borders.radius};
    text-align: center;
    -webkit-transition: ${props => props.theme.animations.transition};
    transition: ${props => props.theme.animations.transition};

    :hover  {
      background: ${props => props.theme.colors.clrprimary5};
      color: ${props => props.theme.colors.clrprimary9}
    }

    :hover p {
    color: ${props => props.theme.colors.clrprimary9}
  }

  div {
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background: ${props => props.theme.colors.clrprimary5};
    margin-left: auto;
    margin-right: auto;
    width: 3rem;
    height: 0.12rem;
    -webkit-transition: ${props => props.theme.animations.transition};
    transition: ${props => props.theme.animations.transition};
    }

    p {
    -webkit-transition: ${props => props.theme.animations.transition};
    transition: ${props => props.theme.animations.transition};
    }


`