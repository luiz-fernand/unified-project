import React from 'react'
import {useParams} from 'react-router-dom'

import '../style/components/AnotItem.css'
import anotacao from '../data/anotacoes.json'
import tecno from '../data/tecnologias.json'

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
            {anotacao.map(anot => (
                anot.tecnologia === idTec ? (
                    <div className='anotacao' key={anot.id}>
                        <h2>{anot.titulo}</h2>
                    </div>
                ) : null
            ))}
            {anotacao.tecnologia !== idTec ? (
                <div className='naoAnotado'>
                    <h1>Nenhuma anotação foi encontrada.</h1>
                </div>
            ) : null}
        </div>
    )
}
 
export default AnotItem