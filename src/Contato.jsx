import React from 'react'

import './style/Contato.css'
import {SiGithub, SiLinkedin} from 'react-icons/si'

const Contato = () => {
    return (
        <div className='contat-container'>
            <h1 className='titulo-contato'>Contato</h1>
            <img className='img-contato' src={process.env.PUBLIC_URL + '/media/persona/Luiz-Fernando.jpg'} title='Luiz Fernando' alt='Luiz Fernando'/>
            <div className='sobre-mim-contato'>
                <h1>Luiz Fernando de Souza</h1>
                <p>Programador / TI</p><br/>
                <p><u>Formado no:</u></p>
                <p>Instituto Federal do Sul de Minas Gerais<br/>Campus Muzambinho</p>
                <p><u>Mensagem:</u></p>
                <p className='mensagem-mim'>Olá, sou o desenvolvedor desse site, dês de já, agradeço por ter chegado aqui e olhado meu projeto.
                    Não foi uma jornada fácil, pois aprender sozinho por si mesmo gera muitos obstáculos e complicações
                    , mas cá estou finalmente deixando minha mensagem final à este projeto.</p>
                <p className='mensagem-mim'>Ao longo de toda esta jornada, pude aprender e me desenvolver muito nas tecnologias que aqui estão
                    catalogadas, e que de fato minha paixão por essa área de desenvolvimento só cresce cada vez mais, assim como
                    minha sede de conhecimento e progresso.</p>
                <p className='mensagem-mim'>Caso tenha se interessado por meu projeto, te convido a conhecer meu
                    portifólio completo no GitHUB, dar uma olhada em meu perfil no LinkedIn e deixo também meu e-mail logo abaixo para contato. ^-^</p>
            </div>
            <h2>Links</h2>
            <div className='redes-sociais-contato'>
                <a className='contato-rede' href='https://github.com/luiz-fernand' target={'_blank'} rel='noreferrer'><SiGithub/> GitHUB</a>
                <a className='contato-rede' href='https://www.linkedin.com/in/luiz-fernando-de-souza-725950187/' target={'_blank'} rel='noreferrer'><SiLinkedin/> LinkedIn</a>
            </div>
            <p><u>E-mail:</u></p>
            <p><b>f3rn.luiz@gmail.com</b></p>
            <p><br/>Obrigado pela atenção! E até breve.</p>
            <div className='sobre-projeto'>

            </div>
        </div>
    )
}
 
export default Contato