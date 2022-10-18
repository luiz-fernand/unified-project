import React from 'react'

import {Link} from 'react-router-dom'
import '../style/components/footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='site-info'>
                <p><b>Project Unified</b></p>
                <p>Um projeto criado para estudo</p>
                <br/>
                <p><u>Desenvolvido por:</u></p>
            </div>
            <div className='me-present'>
                <img className='me-img' src={process.env.PUBLIC_URL + '/media/persona/Luiz-Fernando.jpg'} title='Luiz Fernando' alt='Luiz Fernando'/>
                <div className='me-dados'>
                    <p>©2022</p>
                    <p><b>Luiz Fernando de Souza</b></p>
                    <p>Programador / TI</p>
                </div>
            </div>
            <div className='contato-basico'>
                <p>Para mais informações</p>
                <p>Veja na pagina:</p>
                <Link className='link-foot-contato' to='/contato'>Contato</Link>
            </div>
        </div>
    )
}
 
export default Footer