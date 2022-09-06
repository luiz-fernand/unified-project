import React from 'react'

import './style/Referencias.css'

const Referencias = () => {
    return (
        <div className='container'>
            <h1 className='referencias-titulo'>Referências</h1>
            <h2>Imagens</h2>
            <div className='imagens'>
                <div className='img'>
                    <img src={process.env.PUBLIC_URL + '/media/backgroundHome.png'}  alt='Background Home'/>
                    <p>Link</p>
                </div>
                <div className='img'>
                    <img src={process.env.PUBLIC_URL + '/media/CSS-logo.png'}  alt='CSS'/>
                    <p>Link</p>
                </div>
                <div className='img'>
                    <img src={process.env.PUBLIC_URL + '/media/Git-logo.png'}  alt='Git'/>
                    <p>Link</p>
                </div>
                <div className='img'>
                    <img src={process.env.PUBLIC_URL + '/media/HTML-logo.png'}  alt='HTML'/>
                    <p>Link</p>
                </div>
                <div className='img'>
                    <img src={process.env.PUBLIC_URL + '/media/JS-logo.png'}  alt='JS'/>
                    <p>Link</p>
                </div>
                <div className='img'>
                    <img src={process.env.PUBLIC_URL + '/media/JSON-logo.png'}  alt='JSON'/>
                    <p>Link</p>
                </div>
                <div className='img'>
                    <img src={process.env.PUBLIC_URL + '/media/MySQL-logo.png'}  alt='MySQL'/>
                    <p>Link</p>
                </div>
                <div className='img'>
                    <img src={process.env.PUBLIC_URL + '/media/Node-logo.png'}  alt='Node'/>
                    <p>Link</p>
                </div>
                <div className='img'>
                    <img src={process.env.PUBLIC_URL + '/media/React-logo.png'}  alt='React'/>
                    <p>Link</p>
                </div>
                <div className='img'>
                    <img src={process.env.PUBLIC_URL + '/media/UP-logo-grande.png'}  alt='UP'/>
                    <p>Própria</p>
                </div>
                <div className='img'>
                    <img src={process.env.PUBLIC_URL + '/media/UP-logo-title.png'}  alt='UP'/>
                    <p>Própria</p>
                </div>
                <div className='img'>
                    <img src={process.env.PUBLIC_URL + '/UP-logo.ico'}  alt='UP'/>
                    <p>Própria</p>
                </div>
            </div>
            <div className='referencia'>

            </div>
        </div>
    )
}
 
export default Referencias