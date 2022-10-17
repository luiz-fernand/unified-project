import styled, {css} from 'styled-components'

export const ContainerMob = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;

    opacity: 0;
    pointer-events: none;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: rebeccapurple;
    background: linear-gradient(225deg, rgba(0,0,0,0.95) 15%, rgba(160,82,240,0.95) 95%);
    backdrop-filter: blur(3px);
    transition: all 0.3s ease;
    color: white;

    .close-button-menu {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 40px;
        height: 40px;
        cursor: pointer;
    }

    .links-mobile {
        text-decoration: none;
        color: white;
        margin: 10px 0;
        font: normal 15pt 'Oswald';
    }

    ${({isVisible}) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
    `}
`