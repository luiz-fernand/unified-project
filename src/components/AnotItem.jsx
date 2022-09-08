import React from 'react'
import {useParams} from 'react-router-dom'

import '../style/components/AnotItem.css'
import anotacao from '../data/anotacoes.json'
import tecno from '../data/tecnologias.json'

const anotLista = (id) => {
    var con = 0
    anotacao.map(anot => (anot.tecnologia === id ? null : con++))

    if(con > 0) return (
        <div className='naoAnotado'>
            <h2>Nenhuma anotação encontrada ;-;</h2>
        </div>
    )
    else return (
        anotacao.map(anot => (
            anot.tecnologia === id ? (
                <div className='anotacao'>
                    <h2>{anot.titulo}</h2>
                    <p>{anot.conteudo}</p>
                </div>
            ) : null
        ))
    )
}

const AnotItem = () => {
    const params = useParams()
    var idTec = 0
    tecno.map(te => (te.titulo===params.tituloAnot ? (idTec = te.id) : null))
    
    return (
        <div className='anotacoes-container'>
            <div className='titulo-anotacoes'>
                <h1 className='titulo-prim'>Anotações de:</h1>
                <img key={tecno[idTec-1].id} src={process.env.PUBLIC_URL + tecno[idTec-1].logo} alt={tecno[idTec-1].titulo}/>
                <h1>{params.tituloAnot}</h1>
            </div>
            {anotLista(idTec)}
        </div>
    )
}
 
export default AnotItem