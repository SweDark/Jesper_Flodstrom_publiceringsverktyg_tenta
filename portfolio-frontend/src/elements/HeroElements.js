import styled from "styled-components"

export const HeroWrapper = styled.header`
     margin-top: -5rem;
     padding-top: 5rem;
    height: 100vh;
    background: ${props => props.theme.colors.clrprimary10};
    position: relative;
    margin-bottom: 0.5rem;
    margin-left: 0;
    /* margin-top: 1.25rem; */
  .hero-img {
    display: none;
  }

  a {
    margin-top: 1.25rem;
  }
  @media screen and (min-width: 992px) {
    margin-top: -5rem;
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 65%;
      right: 0;
      bottom: 0;
      background: ${props => props.theme.colors.white};
    }
  
    h4 {
      font-size: 0.85rem;
    }

    .hero-img {
      display: block;
      grid-row: 1/1;
      grid-column: 6/-1;
    }
  }
  @media screen and (min-width: 1170px) {
    h4 {
      font-size: 1rem;
      line-height: 1;
    }
  }
`
export const HeroDiv = styled.div`

  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  height: 100%;
  display: grid;
  align-items: center;

  @media screen and (min-width: 992px) {
      grid-template-columns: repeat(12, 1fr);
  }
  

@media screen and (min-width: 992px) {
    width: 95vw;

}
`
export const HeroArticleUnderline = styled.div`
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: ${props => props.theme.colors.clrprimary5};
`
export const HeroArticleWrapper = styled.article`
  background: ${props => props.theme.colors.clrprimary10};

  h4 {
    color: ${props => props.theme.colors.clrgrey5};
  }
  
  @media screen and (min-width: 992px) {
    grid-row: 1/1;
    grid-column: 1 / span 8;
  }

  @media screen and (min-width: 1170px) {
      grid-column: 1 / span 8;

  }
`