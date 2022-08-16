import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import './styles/NavigationBar.css'
// import 'bootstrap/dist/css/bootstrap.css';

const NavigationBar = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><img id='logo' src={logo} width="10px" height="10px"></img> Jardineria Marcos</Link>
                        <Link className="btn btn-outline-warning" to='./ofertas'>Ofertas</Link>
                    </div>
                    <div className="container-fluid">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/main">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='./faqs'>Dudas comunes</Link>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar productos" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </nav>
            </header>
            {/* <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><img id='logo' src={logo} width="10px" height="10px"></img> Jardineria Marcos</Link>
                        <Link className="btn btn-outline-warning" to='./ofertas'>Ofertas</Link>
                        <Link className="btn btn-outline-light" aria-current="page" to="/main">Inicio</Link>
                    </div>
                </nav>
            </header> */}
        </div>
    )
}
export default NavigationBar;