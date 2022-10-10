import React from 'react'
import {Link} from 'react-router-dom'

import { ContainerMob } from '../style/components/navMobile'
import {IoClose} from 'react-icons/io5'

const NavMobile = ({menuIsVisible, setMenuIsVisible}) => {
    return (
        <ContainerMob isVisible={menuIsVisible}>
            <IoClose className='close-button-menu' onClick={() => setMenuIsVisible(false)}/>
            <Link className='links-mobile' onClick={() => setMenuIsVisible(false)} to='/'>Home</Link>
            <Link className='links-mobile' onClick={() => setMenuIsVisible(false)} to='/anotacoes'>Anotações</Link>
            <Link className='links-mobile' onClick={() => setMenuIsVisible(false)} to='/exercicios'>Exercicios</Link>
            <Link className='links-mobile' onClick={() => setMenuIsVisible(false)} to='/contato'>Contato</Link>
            <Link className='links-mobile' onClick={() => setMenuIsVisible(false)} to='/referencias'>Referências</Link>
        </ContainerMob>
    )
}

export default NavMobile