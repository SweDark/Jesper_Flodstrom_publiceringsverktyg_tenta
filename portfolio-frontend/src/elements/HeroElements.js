import styled from "styled-components"

export const HeroWrapper = styled.header`
    margin-top: -5rem;
    padding-top: 5rem;
    height: 100vh;
    background: var(--clr-primary-10);
    position: relative;
  
  .hero-center {
    height: 100%;
    display: grid;
    align-items: center;
  }
  
   .hero { 
    margin-bottom: 0.5rem;
    margin-left: 0;
  }
  .hero-img {
    display: none;
  }

  .hero-icons {
    justify-items: flex-start;
  }
  .hero .btn {
    margin-top: 1.25rem;
  }
  
  @media screen and (min-width: 992px) {
    .hero::before {
      content: "";
      position: absolute;
      top: 0;
      left: 65%;
      right: 0;
      bottom: 0;
      background: var(--clr-white);
    }
    .hero-center {
      grid-template-columns: repeat(12, 1fr);
    }
  
    .hero h4 {
      font-size: 0.85rem;
    }

    .hero-img {
      display: block;
      grid-row: 1/1;
      grid-column: 6/-1;
    }
  }
  @media screen and (min-width: 1170px) {
    .hero h4 {
      font-size: 1rem;
    }
  
    .hero h4 {
      line-height: 1;
    }
  }
`


export const HeroArticleWrapper = styled.article`
background: var(--clr-primary-10);

.underline {
    margin-bottom: 0.5rem;
    margin-left: 0;
}

h4 {
    color: var(--clr-grey-5);
  }

  @media screen and (min-width: 992px) {
    grid-row: 1/1;
    grid-column: 1 / span 8;
  }

  @media screen and (min-width: 1170px) {
      grid-column: 1 / span 8;

  }
`