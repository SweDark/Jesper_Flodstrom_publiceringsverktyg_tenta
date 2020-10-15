import styled from "styled-components"

 export const IconsList = styled.ul`

    margin-top: 2rem;
    width: 15rem;
    display: flex;
    justify-content: space-between;
    
    a {
    font-size: 1.75rem;
    color: ${props => props.theme.colors.clrgrey1};
    transition: ${props => props.theme.animations.transition};
    }

    a:hover{
    color: ${props => props.theme.colors.clrprimary5};
    }
`