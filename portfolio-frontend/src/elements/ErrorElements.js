import styled from "styled-components"

export const ErrorPage = styled.main`
  background: ${props => props.theme.colors.clrgrey10};
  min-height: calc(100vh - 5rem - 9rem);
  display: grid;
  place-items: center;
  background: ${props => props.theme.colors.clrprimary10};
  text-align: center;

  h1 {
  text-transform: uppercase;
  color: ${props => props.theme.colors.clrprimary1};
  margin-bottom: 2rem;
}
`