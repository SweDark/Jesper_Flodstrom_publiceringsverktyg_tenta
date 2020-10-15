import styled from "styled-components"

export const FooterWrapper = styled.footer`
  height: 9rem;
  background: #222;
  text-align: center;
  display: grid;
  place-items: center;

  h4 {
    margin-top: 0.5rem;
    color: ${props => props.theme.colors.white};
    font-weight: normal;
    text-transform: uppercase;
}

h4 span {
    color: ${props => props.theme.colors.clrprimary5};
}
a{
  color: ${props => props.theme.colors.clrprimary7};
}

a:hover{
  color:${props => props.theme.colors.clrprimary4};
}

`