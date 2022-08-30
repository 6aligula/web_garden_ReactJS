import React from 'react'
import './styles/Footer.css'

const Footer = () => {
    return (
        <div className='box'>
            <footer>
                <div id='footer' className='row'>
                    <div className="col-sm-6">
                        &copy; 2022–2023 Jardineria Marcos &middot;
                    </div>
                    <div className="col-sm-6">
                        <p>
                            <a href="mailto:marcos2001marcos@hotmail.com">
                                <i className="bi bi-envelope"></i>
                                Correo (marcos2001marcos@hotmail.com)
                            </a>
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <p>
                            <a href="tel:+34650337278">
                                <i className="bi bi-whatsapp"></i>
                                Whats App: 650 33 72 78
                            </a>
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <p>
                            <a href="https://www.instagram.com/jardineriamarcos/?hl=es">
                                <i className="bi bi-instagram"></i>
                                Instagram
                            </a> &middot;
                        </p>
                    </div>

                </div>
                <br></br>
                <div className='row'>
                    <div className='col-sem-12'>
                        <p className="float-end">
                            <a href="#">
                                <i className=' bi bi-arrow-90deg-up'></i>
                                Arriba
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer