import React from 'react'

import './style/Home.css'
import TenoJson from './data/tecnologias.json'

const Home = () => {
  return (
    <div className='container'>
      <div className='up-container'>
        <h1>Olá! Bem vindo ao</h1>
        <img className='up-logo' src={process.env.PUBLIC_URL + '/media/logos up/UP-logo-grande.png'} alt='UP Logo'/>
      </div>
      <div className='banner-container'>

      </div>
      <div className='sobre-container'>
        <h1 className='sobre-title'>Sobre</h1>
        <p>Olá! Me chamo Luiz, e esse é meu Projeto Unificado, cuja função é a de unir meus conhecimentos,
           anotações e exercícios de várias tecnologias, mas principalmente dessas:</p>
        <div className='imagens'>
          {TenoJson.map(tecnologias => (
            tecnologias.home ? (
              <div className='img-container' key={tecnologias.id}>
                <img key={tecnologias.id} src={process.env.PUBLIC_URL + tecnologias.logo} title={tecnologias.titulo} alt={tecnologias.titulo}/>
                <p>{tecnologias.titulo}</p>
              </div>
            ) : null
          ))}
        </div>
        <p>Assim, com todas elas em um só lugar, me possibilita uma maior compreensão
          e organização em minhas dúvidas e requisições próprias. Também consequentemente,
          acarretando um estudo por parte do uso de tais tecnologias para o desenvolvimento deste mesmo site.</p>
      </div>
    </div>
  )
}
 
export default Home