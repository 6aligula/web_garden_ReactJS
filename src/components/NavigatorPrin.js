import React from 'react'
import logo from '../img/logo.png'

export default function NavigatorPrin() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={logo} width="10%" height="10%"></img> Jardineria Marcos</a>
                        <a className="btn btn-outline-warning" href="ofertas.html">Ofertas</a>

                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                                </li>

                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Buscar productos" aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
