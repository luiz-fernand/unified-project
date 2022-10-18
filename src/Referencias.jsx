import React from 'react'

import RefLinks from './data/referencias.json'
import './style/Referencias.css'
import {BsImages, BsPeopleFill} from 'react-icons/bs'

const Referencias = () => {
    return (
        <div className='ref-container'>
            <h1 className='referencias-titulo'>Referências</h1>
            <div className='imagens-ref'>
                <div className='sub-titulo-ref'>
                    <BsImages className='svg-ref'/>
                    <h2>Imagens</h2>
                </div>
                <p>Algumas imagens foram utilizadas sem a permissão de seus criadores, sem nenhum interesse comercial como foi proposto,
                     e somente para fins estéticos, úteis e de aprendizado. Sendo assim, deixo a referência dos mesmos para que o crédito
                     permaneça com seus devidos criadores:</p>
                <div className='ref-links'>
                    {RefLinks.map(refer => (<a className='link-ref' href={refer.link} target={'_blank'} rel='noreferrer'>{refer.titulo}</a>))}
                </div>
            </div>
            <div className='colab-ref'>
                <div className='sub-titulo-ref colab'>
                    <BsPeopleFill className='svg-ref'/>
                    <h2>Colaboradores</h2>
                </div>
                <h3>Aulas/Aprendizado</h3>
                
            </div>
        </div>
    )
}
 
export default Referencias