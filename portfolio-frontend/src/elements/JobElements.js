import styled from "styled-components"

export const JobArticle = styled.article`
     /* min-height: 420px;  */
  h3 {
    font-weight: 400;
  }

  h4 {
    text-transform: uppercase;
    color: ${props => props.theme.colors.clrgrey5};
    background: ${props => props.theme.colors.clrgrey9};
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: ${props => props.theme.borders.radius};
  }
  /* p below = the text after >> */
  p { 
    letter-spacing: ${props => props.theme.spacings.spacing};
  }
  div {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;
  }
  div p {
    margin-bottom: 0;
    color: ${props => props.theme.colors.clrgrey3};
  }
  svg {
    color: ${props => props.theme.colors.clrprimary5};
  }
`

export const JobButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 4rem;

    button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: ${props => props.theme.spacings.spacing};
    margin: 0 0.5rem;
    transition: ${props => props.theme.animations.transition};
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;
  }
  button:hover {
    color: ${props => props.theme.colors.clrprimary5};
    box-shadow: 0 2px ${props => props.theme.colors.clrprimary5};
  }
  .active-btn {
    color: ${props => props.theme.colors.clrprimary5};
    box-shadow: 0 2px ${props => props.theme.colors.clrprimary5};
  }
    @media screen and (min-width: 992px) {
      flex-direction: column;
      justify-content: flex-start;

    button {
      margin-bottom: 1rem;
    }

    button:hover {
      box-shadow: -2px 0 ${props => props.theme.colors.clrprimary5};
    }
    .active-btn {
      box-shadow: -2px 0 ${props => props.theme.colors.clrprimary5};
    }
    }
`
export const JobWrapper = styled.section`
  padding: 5rem 0;

  a {
    display: block;
    width: 12rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }

`
export const JobCenter = styled.div`
    width: 80vw;
    margin: 0 auto;
    max-width: ${props => props.theme.breakpoints.maxwidth};
  @media screen and (min-width: 992px) {
      width: 90vw;
      display: grid;
      grid-template-columns: 200px 1fr;
      column-gap: 4rem;
    
  }
`