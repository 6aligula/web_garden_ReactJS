import React from 'react'
import { Link } from 'react-router-dom'

import React from 'react'

const AddButton = () => {
    return (
        <div><Link to="/main/ofertas">
            <button>
                Ofertas
            </button>
        </Link></div>
    )
}

export default AddButton

// export default function AddButton(props) {
//     return (
//         <Link to="/main/ofertas">
//             <button>
//                 Ofertas
//             </button>
//         </Link>

//     )
// }