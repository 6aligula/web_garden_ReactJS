import React from "react";
import ProductsLists from "../components/ProductsLists";
import CarouselDady from '../components/CarouselDady';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
//import 'bootstrap/dist/css/bootstrap.css';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{
                "id": 1,
                "title": "Clorador salino",
                "subtitle": "Olvidate de comprar mas cloro. Venta y puesta en marcha de todo el sistema.",
                "description": "Este hecho te facilitará muchísimo sustituir un tratamiento tradicional de cloro.Cuando el agua salada de nuestra piscina pasa a través del clorador. La sal disuelta se transforma en hipoclorito sódico (NaCIO) que disuelto en agua, resulta un potente desinfectante. Además, la célula generará automáticamente un cloro libre (Cl2) que no se degrada.El potente desinfectante que crean mediante su proceso de descomposición, iones de cloruro, elimina las sustancias contaminantes que aparecen en el agua (bacterias, algas, cloraminas, etc)",
                "img": "https://firebasestorage.googleapis.com/v0/b/web-papa-de84a.appspot.com/o/clorador.jpg?alt=media&token=b80df9d7-7e16-4b37-a6b6-4d8c0d2c93d1",
                "leftColor": "#68b38400",
                "rightColor": "#74c0c62b"
            }, {
                "id": 2,
                "title": "Bomba peristáltica",
                "subtitle": "La solución mas duradera y económica. Venta y cambio de la pieza, presupuesto sin compromiso",
                "description": "Una bomba peristáltica es un tipo de bomba hidráulica de desplazamiento positivo usada para bombear una variedad de fluidos. Mientras que el rotor da vuelta, la parte del tubo bajo compresión se cierra (o se ocluye) forzando, de esta manera, el fluido a ser bombeado para moverse a través del tubo. Adicionalmente, mientras el tubo se vuelve a abrir a su estado natural después del paso de la leva ('restitución'), el flujo del fluido es inducido a la bomba. Este proceso es llamado peristalsis y es usado en muchos sistemas biológicos como el aparato digestivo.",
                "img": "https://firebasestorage.googleapis.com/v0/b/web-papa-de84a.appspot.com/o/Bomba-peristaltica.jpg?alt=media&token=5c2ad78e-95d6-49f4-844b-9f140bc2fc21",
                "leftColor": "#68b38400",
                "rightColor": "#74c0c62b"
            }, {
                "id": 3,
                "title": "Valvula Selectora",
                "subtitle": "Venta y cambio de la pieza, presupuesto sin compromiso",
                "description": "La gama de válvulas selectoras AstralPool están diseñadas pensando en el usuario que tiene que manipularlas. De innovador diseño, cómodo manejo y máxima ﬁabilidad, éstas se convierten en un elemento básico en el éxito del perfecto estado de su piscina.",
                "img": "https://firebasestorage.googleapis.com/v0/b/web-papa-de84a.appspot.com/o/valvula_selectora.jpg?alt=media&token=3a1b1366-bee8-4f67-abbe-dcef2649cf1b",
                "leftColor": "#68b38400",
                "rightColor": "#74c0c62b"
            }, {
                "id": 4,
                "title": "Tricomplet Granulado",
                "subtitle": "Venta y entrega a domicilio a particulares o empresas",
                "description": "Ahora tiempo y dinero con este producto que contiene Cloro, Algicida y floculante",
                "img": "https://firebasestorage.googleapis.com/v0/b/web-papa-de84a.appspot.com/o/tricomplet.JPG?alt=media&token=29d8ed69-703f-444a-848d-9d089121096f",
                "leftColor": "#68b38400",
                "rightColor": "#74c0c62b"
            }]
        }
    }
    render() {
        return (
            <div className="grid-layout">
                <NavigationBar
                    name="Ofertas" path="./ofertas" />
                <br></br>
                <CarouselDady />
                <br></br>
                <ProductsLists
                    products={this.state.data} />
                <Footer />
            </div>
        )
    }
}
export default Main;