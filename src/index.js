import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './style/index.css'
import NavBar from './components/navBar'
import Home from './Home'
import Anotacoes from './Anotacoes'
import Exercicios from './Exercicios'
import Contato from './Contato'
import Referencias from './Referencias'
import Footer from './components/footer'
import AnotItem from './components/AnotItem'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/anotacoes' element={<Anotacoes/>}/>
        <Route path='/anotacoes/:tituloAnot' element={<AnotItem/>}/>
      <Route path='/exercicios' element={<Exercicios/>}/>
      <Route path='/contato' element={<Contato/>}/>
      <Route path='/referencias' element={<Referencias/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
)