import React from 'react'

import './style/Referencias.css'

const Referencias = () => {
    return (
        <div className='container'>
            <h1 className='referencias-titulo'>Referências</h1>
            <h2>Imagens</h2>
            <div className='imagens-ref'>
                <p>Algumas imagens foram utilizadas sem a permissão de seus criadores, sem nenhum interesse comercial como foi proposto,
                     e somente para fins estéticos, úteis e de aprendizado, deixo a referência dos mesmos:</p>
                <div className='links'>
                    <a className='link-ref' href='https://www.w3.org/html/logo/' target={'_blank'} rel='noreferrer'>W3C - HTML</a>
                    <a className='link-ref' href='https://commons.wikimedia.org/wiki/File:CSS3_logo_and_wordmark.svg' target={'_blank'} rel='noreferrer'>Wikimedia - CSS</a>
                    <a className='link-ref' href='https://commons.wikimedia.org/wiki/File:JavaScript-logo.png' target={'_blank'} rel='noreferrer'>Wikimedia - JS</a>
                    <a className='link-ref' href='https://seeklogo.com/vector-logo/273749/node-js' target={'_blank'} rel='noreferrer'>Seeklogo - Node</a>
                    <a className='link-ref' href='https://seeklogo.com/vector-logo/273845/react' target={'_blank'} rel='noreferrer'>Seeklogo - React</a>
                    <a className='link-ref' href='https://commons.wikimedia.org/wiki/File:JSON_vector_logo.svg' target={'_blank'} rel='noreferrer'>Wikimedia - JSON</a>
                    <a className='link-ref' href='https://git-scm.com/downloads/logos' target={'_blank'} rel='noreferrer'>Git - Git</a>
                    <a className='link-ref' href='https://www.freepnglogos.com/images/logo-mysql-26353.html' target={'_blank'} rel='noreferrer'>Freepnglogos - MySQL</a>
                    <a className='link-ref' href='https://br.freepik.com/vetores-premium/paisagem-de-montanha-preto-e-branco-com-floresta-de-pinheiros_7038778.htm' target={'_blank'} rel='noreferrer'>Freepik - Background</a>
                </div>
            </div>
        </div>
    )
}
 
export default Referencias