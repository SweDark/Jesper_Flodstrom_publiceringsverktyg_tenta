import styled from "styled-components"

export const FooterWrapper = styled.footer`
  height: 9rem;
  background: #222;
  text-align: center;
  display: grid;
  place-items: center;

  h4 {
    margin-top: 0.5rem;
    color: var(--clr-white);
    font-weight: normal;
    text-transform: uppercase;
}

h4 span {
    color: var(--clr-primary-5);
}
.footer-links {
  margin: 0 auto 1rem auto;
}
.social-link {
  color: var(--clr-white);
}
.social-link:hover {
  color: var(--clr-primary-5);
}
`