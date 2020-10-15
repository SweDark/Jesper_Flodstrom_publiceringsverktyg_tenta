import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


export const ButtonWrapper = styled(props => <Link {...props} />)`
  // styling for the button
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

 :hover {
    color: ${props => props.theme.colors.clrprimary1};
    background: ${props => props.theme.colors.clrprimary8};
  }
`

export const CentralButton = styled(props => <Link {...props} />)`
  // styling for the button
  text-transform: uppercase;
  background: ${props => props.theme.colors.clrprimary5};
  color: ${props => props.theme.colors.clrprimary9};
  padding: 0.375rem 0.75rem;
  letter-spacing: ${props => props.theme.spacings.spacing};
  font-weight: 700;
  -webkit-transition: ${props => props.theme.animations.transition};
  transition: ${props => props.theme.animations.transition};
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: ${props => props.theme.borders.radius};

   display: block;
  width: 12rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 3rem;
 :hover {
    color: ${props => props.theme.colors.clrprimary1};
    background: ${props => props.theme.colors.clrprimary8};
  }
`

