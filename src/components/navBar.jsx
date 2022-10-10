import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {NavContainer} from '../style/components/navBar'
import NavMobile from './navMobile'
import {RiMenu3Fill} from 'react-icons/ri'

const NavBar = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false)
    
    return (
        <>
            <NavMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible}/>
            <NavContainer>
                <img className='nav-img' src={process.env.PUBLIC_URL + '/media/UP-logo-title.png'} title='UP Logo' alt='UP Logo'/>
                <nav className='nav-container'>
                    <Link className='link-nav-pr' to='/'>Home</Link>
                    <Link className='link-nav-pr' to='/anotacoes'>Anotações</Link>
                    <Link className='link-nav-pr' to='/exercicios'>Exercicios</Link>
                    <Link className='link-nav-pr' to='/contato'>Contato</Link>
                    <Link className='link-nav-pr' to='/referencias'>Referências</Link>
                </nav>
                <RiMenu3Fill className='mobile-menu' onClick={() => setMenuIsVisible(true)}/>
            </NavContainer>
        </>
    )
}
 
export default NavBar