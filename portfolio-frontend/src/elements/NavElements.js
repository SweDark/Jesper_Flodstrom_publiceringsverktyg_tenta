import styled from "styled-components"

export const NavWrapper = styled.nav`
  /* main style for the navigation wrapper. */

  position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 5rem;
   display: flex;
   align-items: center;
   z-index: 200;
   background: var(--clr-white);
   justify-content: space-between;
   padding-left: 5%;
   padding-right: 5%;

  img {
    height: 30px;
  }
  
  a{
    /* styling for all elements in nav, even the image. */
    padding: ${props => props.theme.spacings.small};
    text-decoration: none;    
    text-transform: capitalize;
    color: var(--clr-grey-1);
    font-weight: bold;
    letter-spacing: var(--spacing);
    transition: var(--transition);
  }

  a:hover{
    color: var(--clr-primary-5);
    box-shadow: 0px 2px var(--clr-primary-5);
    /* filter: brightness(110%); */
  }
  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

export const StyledBurger = styled.div`
/* Burger styling for mobile. */
@media ${props => props.theme.breakpoints.mobile} {
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 20px; 
  right: 25px;
  z-index: 20;
  display: none;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'}; 
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
}
`;

export const Ul = styled.ul`
list-style: none;
display: flex;
flex-flow: row nowrap;
@media ${props => props.theme.breakpoints.mobile} { 
  /* How stuff should look in the burger menu */
  flex-flow: column nowrap;
  background-color: ${props => props.theme.colors.main1};
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 100vh; 
  width: 35vh; 
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  z-index: 15;
  ul{
    list-style: none;
    padding: 0;
  }
  li{
    background-color:${props => props.theme.colors.main1};
  }
  li:hover{
    filter: brightness(110%);
  }
  a{    
    border-radius: 0rem;
    margin: 0;
    color: ${props => props.theme.colors.light1};
    padding: ${props => props.theme.spacings.small};
    display:block;
    width: 100%;
    height: 100%;
  }
}
`;