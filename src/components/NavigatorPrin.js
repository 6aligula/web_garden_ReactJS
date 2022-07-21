import React from 'react'
import logo from '../img/logo.png'

export default function NavigatorPrin() {
    return (
        <div>
            <header>
                <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img src={logo} width="10%" height="10%"></img> Jardineria Marcos</a>
                        <a class="btn btn-outline-warning" href="ofertas.html">Ofertas</a>

                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">Dudas comunes</a>
                                </li>

                            </ul>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Buscar productos" aria-label="Search"/>
                                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
