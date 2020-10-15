import styled from "styled-components"

export const AboutWrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;

  div span {
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

div span {
  margin-top: 0.5rem;
}

a {
    text-transform: uppercase;
    background: ${props => props.theme.colors.clrprimary5};
    color: ${props => props.theme.colors.clrprimary9};
    padding: 0.375rem 0.75rem;
    letter-spacing: ${props => props.theme.spacings.spacing};
    display: inline-block;
    font-weight: 700;
    -webkit-transition: ${props => props.theme.animations.transition};
    transition: ${props => props.theme.animations.transition};
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: ${props => props.theme.borders.radius};
}
a:hover {
    color: ${props => props.theme.colors.clrprimary1};
    background: ${props => props.theme.colors.clrprimary8};
  }
.about-img {
  margin-bottom: 2rem;
  height: 25rem;
}

@media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    column-gap: 4rem;
    width: 95vw;  
    
    .about-img {
        grid-column: 1 / span 5;
        margin-bottom: 0;
    }
    article {
        grid-column: 6 / -1;
    }
    }
  
`
export const AboutPage = styled.section`
    background: ${props => props.theme.colors.clrgrey10};
    min-height: calc(100vh - 5rem - 9rem);
    padding: 7rem 0;
`