import React from 'react'

import {Link} from 'react-router-dom'
import '../style/components/navBar.css'

const navBar = () => {
    return (
        <div className='navBar-container'>
            <img src={process.env.PUBLIC_URL + '/media/UP-logo-title.png'} title='UP Logo' alt='UP Logo'/>
            <nav className='nav-container'>
                <Link to='/'>Home</Link>
                <Link to='/anotacoes'>Anotações</Link>
                <Link to='/exercicios'>Exercicios</Link>
                <Link to='/contato'>Contato</Link>
                <Link to='/referencias'>Referências</Link>
            </nav>
        </div>
    )
}
 
export default navBar