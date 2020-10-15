import styled from "styled-components"

export const ContactWrapper = styled.section`
    display: grid;
    place-items: center;
    padding: 5rem 0;

    article {
    background:${props => props.theme.colors.white};
    border-radius: ${props => props.theme.borders.radius};
    text-align: center;
    box-shadow: ${props => props.theme.shadows.lightshadow};
    transition: ${props => props.theme.animations.transition};
    width: 90vw;
    max-width: 35rem;
  }
  article:hover {
    box-shadow: ${props => props.theme.shadows.darkshadow};
  }

  article h3 {
    padding-top: 1.25rem;
    color: ${props => props.theme.colors.clrgrey5};
  }
  div {
    padding: 1rem 1.5rem;
  }

  input, textarea {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 1.25rem;
    background: ${props => props.theme.colors.clrgrey10};
    border-radius: ${props => props.theme.borders.radius};
    letter-spacing: ${props => props.theme.spacings.spacing};
  }

  input::placeholder, textarea::placeholder {
    font-family: ${props => props.theme.fonts.ffprimary};
    color: ${props => props.theme.colors.clrgrey1};
    letter-spacing: ${props => props.theme.spacings.spacing};
  }


  button {
    display: block;
    padding: 1rem; 
    border-bottom-left-radius: ${props => props.theme.borders.radius};
    border-bottom-right-radius: ${props => props.theme.borders.radius};
    width: 100%;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    text-transform: uppercase;
    background: ${props => props.theme.colors.clrprimary5};
    color: ${props => props.theme.colors.clrprimary9};
    letter-spacing: ${props => props.theme.spacings.spacing};
     font-weight: 700;
    -webkit-transition: ${props => props.theme.animations.transition};
    transition: ${props => props.theme.animations.transition};
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); 
    }
    
    button:hover {
        color: ${props => props.theme.colors.clrprimary1};
        background: ${props => props.theme.colors.clrprimary8};
    }
`