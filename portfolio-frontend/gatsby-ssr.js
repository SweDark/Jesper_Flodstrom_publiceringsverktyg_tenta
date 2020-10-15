import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"

const GlobalStyles = createGlobalStyle`
    *,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: ${props => props.theme.fonts.ffsecondary};
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.clrgrey1};
  line-height: 1.5;
  font-size: 0.875rem;
  margin-top: 5rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  letter-spacing: ${props => props.theme.spacings.spacing};
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: ${props => props.theme.fonts.ffprimary};
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: ${props => props.theme.colors.clrgrey3};
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
`

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
)