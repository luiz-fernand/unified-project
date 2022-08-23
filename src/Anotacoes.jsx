import React from 'react'
import {useLinkClickHandler} from 'react-router-dom'

import './style/Anotacoes.css'
import TecnoJson from './data/tecnologias.json'

const ItensTecno = (tecno) => {
    return (
        <div className='item-tecnologia' onClick={useLinkClickHandler(`/anotacoes/${tecno.titulo}`)} key={tecno.id}>
            <img src={process.env.PUBLIC_URL + tecno.logo}  alt={tecno.titulo}/>
            <p>{tecno.titulo}</p>
        </div>
    )
} 

const Anotacoes = () => {
    return (
        <div className='container' >
            <h1 className='anotacoes-titulo'>Anotações</h1>
            <h2>Escolha a tecnologia que está procurando:</h2>
            <div className='anotacoes-lista'>
                {TecnoJson && TecnoJson.map(tecnologia => (ItensTecno(tecnologia)))}
            </div>
        </div>
    )
}
 
export default Anotacoes