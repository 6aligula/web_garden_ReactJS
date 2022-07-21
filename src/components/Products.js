import React from 'react'
import clorador from '../img/clorador.jpg'

export default function Products() {
    return (
        
        <div className="row featurette">
            
            <br></br>
            <hr></hr>
            <div className="col-md-7">
                <h2 className="featurette-heading">Clorador salino <span className="text-muted">El mas poderoso.</span></h2>
                <p className="lead">Olvidate de comprar mas cloro</p>

            </div>
            <hr></hr>
            <div className="col-md-5">
                <img src={clorador} width="960" height="640" />
                <title>Placeholder</title>

            </div>

            <p>Consultar precio</p>
        </div>
    )
}