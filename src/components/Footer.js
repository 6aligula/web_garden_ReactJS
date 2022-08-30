import React from 'react'
import './styles/Footer.css'
import icono from '../img/icono.png'

const Footer = () => {
    return (
        <div className='box'>
            <div className='container-boton'>
                <p>
                    <a href="https://api.whatsapp.com/send?phone=650337278" target="_blank">
                        <img className="boton" src={icono} alt="" />
                    </a>
                </p>
            </div>

            <footer>
                <div className='row'>
                    <div className="col-sm-6">
                        &copy; 2022–2023 Jardineria Marcos &middot;
                    </div>
                    <div className="col-sm-6 social">
                        <p>
                            <a href="mailto:marcos2001marcos@hotmail.com">
                                <i className="bi bi-envelope"></i>
                                Correo (marcos2001marcos@hotmail.com)
                            </a>
                        </p>
                    </div>
                    <div className="col-sm-6 social">
                        <p>
                            <a href="tel:+34650337278">
                                <i className="bi bi-whatsapp"></i>
                                WhatsApp: 650 33 72 78
                            </a>
                        </p>
                    </div>
                    <div className="col-sm-6 social">
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
                        <p>
                            <a href="#">
                                <i className='bi bi-arrow-up-circle-fill'></i>
                                
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer