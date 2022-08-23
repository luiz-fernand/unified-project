import React from 'react'

import './style/Home.css'
import TenoJson from './data/tecnologias.json'

const Home = () => {
  return (
    <div className='container'>
      <div className='pu-container'>
        <h1>Olá! Bem vindo ao</h1>
        <img className='pu-logo' src={process.env.PUBLIC_URL + '/media/PU-logo-grande.png'} alt='PU Logo'/>
      </div>
      <div className='sobre-container'>
        <h1 className='sobre-title'>Sobre</h1>
        <p>Me chamo Luiz, e esse é meu Projeto Unificado, cuja função é a de unir minhas anotações
          e exercícios com estas tecnologias:</p>
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
        <p>Assim, com todas elas em um só lugar, me possibilitando uma maior compreensão
          e organização em minhas dúvidas e requisições próprias. Também consequentemente,
          acarretando um estudo por parte do uso de tais tecnologias para o desenvolvimento do mesmo.</p>
      </div>
    </div>
  )
}
 
export default Home