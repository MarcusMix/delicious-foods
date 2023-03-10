import styled from 'styled-components'

export const Wrapper = styled.div `
    margin: 4rem 0;
`

export const Card = styled.div`
    min-height: 25rem;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;

    & img {
        border-radius: 1rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    & p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: #fff;
        font-weight: 600;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`