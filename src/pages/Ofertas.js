import React from "react";
import Footer from "../components/Footer";
import ProductsLists from "../components/ProductsLists";
import NavigationBar from '../components/NavigationBar';

class Ofertas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{
                "id": 1,
                "title": "Cloro en pastillas",
                "subtitle": "Botes de 5 Kilos",
                "description": "Precio 28€ (IVA incluido)",
                "img": "https://firebasestorage.googleapis.com/v0/b/web-papa-de84a.appspot.com/o/cloroPastillas.JPG?alt=media&token=05e9ef53-3c94-40c0-b68a-c287786eeb40",
                "leftColor": "#68b38400",
                "rightColor": "#74c0c62b"
            }, {
                "id": 2,
                "title": "Limpia Borde",
                "subtitle": "Limpiador de linea de flotación",
                "description": "Precio 15€ (IVA incluido)",
                "img": "https://firebasestorage.googleapis.com/v0/b/web-papa-de84a.appspot.com/o/limpiaBordes.JPG?alt=media&token=7804fcac-fee7-47b5-9e4d-97672503b7f6",
                "leftColor": "#68b38400",
                "rightColor": "#74c0c62b"
            }, {
                "id": 3,
                "title": "Ph +, Elevador de Ph",
                "subtitle": "Botes de 30 kilos",
                "description": "Precio 55€ (IVA incluido)",
                "img": "https://firebasestorage.googleapis.com/v0/b/web-papa-de84a.appspot.com/o/phMas.JPG?alt=media&token=89eb61bd-c450-4882-842b-b7fe5a124566",
                "leftColor": "#68b38400",
                "rightColor": "#74c0c62b"
            }]
        }
    }
    render() {
        const titleArray = Object.values(this.state['data']).map(pac => pac.title);
        const idArray = Object.values(this.state['data']).map(pac => pac.id);
        return (
            <div className="grid-layout">
                <NavigationBar
                    name="ATRAS" path="../" title={titleArray} idKey={idArray}/>
                <br></br>
                <ProductsLists
                    products={this.state.data} />
                <Footer />
            </div>
        )
    }
}
export default Ofertas;