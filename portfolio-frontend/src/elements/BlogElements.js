import styled from "styled-components"

export const BlogTemplate = styled.section`
  background: ${props => props.theme.colors.clrgrey10};
  min-height: calc(100vh - 5rem - 9rem);
  padding: 5rem 0;

div{
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
}

h1, h2 {
  text-align: center;
}

ul {
  margin-top: 2rem;
  display: inline-block;
}
ul li {
  background: ${props => props.theme.colors.clrgrey9};
  color: ${props => props.theme.colors.clrgrey5};
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  text-transform: uppercase;
}

blockquote {
  background: ${props => props.theme.colors.clrprimary9};
  border-radius: ${props => props.theme.borders.radius};
  padding: 1rem;
  line-height: 2;
  color: ${props => props.theme.colors.clrprimary5};
  margin: 2rem 0;
}

pre {
  background: #222;
  color: yellow;
  overflow-x: scroll;
  padding: 1rem 1.5rem;
  border-radius: ${props => props.theme.borders.radius};
}
img {
  width: 15rem;
  height: 15rem;
  margin: 3rem 0;
}

@media screen and (min-width: 992px) {
    div {
      width: 95vw;
    }
}
`


export const BlogsWrapper = styled.section`
padding: 5rem 0;
section a{
  display: block;
  margin: 0 auto;
  width: 12rem;
  text-align: center;
    margin-top: 3rem;
}
`

export const BlogPage = styled.section`
  background: ${props => props.theme.colors.clrgrey10};
  min-height: calc(100vh - 5rem - 9rem);
`
export const BlogsArticles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
    column-gap: 2rem;
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;

    @media screen and (min-width: 992px) {
    width: 95vw;
    }
`

export const BlogWrapper = styled.article`
    display: block;
    margin-bottom: 2rem;
    background: ${props => props.theme.colors.clrgrey10};
    border-radius: ${props => props.theme.borders.radius};
    box-shadow: ${props => props.theme.shadows.lightshadow};
    transition: ${props => props.theme.animations.transition};
:hover {
    box-shadow: ${props => props.theme.shadows.darkshadow};
    transform: scale(1.02);
}
article {
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
}
.blog-img {
  border-top-left-radius: ${props => props.theme.borders.radius};
  border-top-right-radius: ${props => props.theme.borders.radius};
  height: 15rem;
}

@media screen and (min-width: 576px) {
  /* .blogs-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
    column-gap: 2rem;
  } */
  .blog-img {
    height: 17.5rem;
  }
}
@media screen and (min-width: 850px) {
  .blog-img {
    height: 13.75rem;
  }
}
`

export const BlogCard = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 1.5rem 1rem;
  h4 {
    color: ${props => props.theme.colors.clrgrey1};
  }
  `

export const BlogFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
p {
  margin-bottom: 0;
  font-weight: bold;
  color: ${props => props.theme.colors.clrgrey5};
}
p:first-of-type {
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