import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import './styles/NavigationBar.css'
// import 'bootstrap/dist/css/bootstrap.css';

function to_up() {
    //console.log("dentro");
    document.body.scroll({
        top: 0
    })
    document.documentElement.scrollTo({
        top: 0
    })
}

const NavigationBar = (props) => {

    return (
        <div id='navibar' className='box fixed-top bg-dark ir-arriba'>
            <header>
                <nav className="navbar navbar-dark bg-dark" >
                    <div className="container-fluid">
                        <div type="button" className="navbar-brand" onClick={to_up}><img id='logo' src={logo} width="10px" height="10px"></img> Jardineria Marcos</div>
                        <button onClick={to_up} className="btn btn-outline-info ir-arriba"  >Inicio</button>
                        <Link className="btn btn-outline-warning" to={props.path}>{props.name}</Link>
                    </div>
                    <div className="container-fluid">
                        <Link className="btn btn-primary" type='button' to='./faqs'>Dudas comunes</Link>

                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar productos" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </nav>
            </header>
        </div>

    )
}
export default NavigationBar;