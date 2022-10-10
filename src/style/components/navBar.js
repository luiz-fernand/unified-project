import styled from 'styled-components'

export const NavContainer = styled.section`
    background-color: rebeccapurple;
    color: white;
    font: bold 12pt Arial;
    justify-content: space-between;
    display: flex;
    align-items: center;
    width: 100%;
    max-height: 60px;
    position: fixed;
    border-bottom: solid black 1px;
    padding: 0 20px;

    .nav-img {
        max-height: 60px;
    }
    .nav-container {
        flex: 2;
        display: flex;
        justify-content: center;
        padding: 0 50px;
    }

    .link-nav-pr {
        color: white;
        font: normal 15pt 'Oswald';
        text-decoration: none;
        padding: 15px 20px;
        transition: all 0.5s ease;
    }
    .link-nav-pr:hover {
        background-color: rgb(160, 82, 240);
    }

    .mobile-menu {
        height: 30px;
        width: 30px;
        cursor: pointer;
    }

    @media (min-width: 850px){
        .mobile-menu {
            display: none;
        }
    }

    @media (max-width: 850px){
        .nav-container {
            display: none;
        }

        .nav-img {
            align-items: center;
            justify-content: center;
        }
    }
`