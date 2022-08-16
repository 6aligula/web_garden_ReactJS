import React from 'react'
import { Link } from 'react-router-dom'

export default function AddButton(props) {
    return (
            <Link to="/main/ofertas">
                <button>
                    Ofertas
                </button>
            </Link>

    )
}