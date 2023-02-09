//router
import { Link } from "react-router-dom";

//styles
import styled from "styled-components";

export const Logo = styled(Link) `
    text-decoration: none;
    font-size: 3rem;
    font-weight: 400;
    font-family: 'Cookie', cursive;
`

export const Nav = styled.div `
    padding: 4rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & svg {
        font-size: 2rem;
    }
`

