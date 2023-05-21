import React from "react";
import ProductsLists from "../components/ProductsLists";
import CarouselDady from '../components/CarouselDady';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    "id": 1,
                    "title": "Motor para piscina",
                    "subtitle": "Winner 2CV  PVP:465,85€",
                    "description": "El motor de piscina Winner de 2 caballos de potencia es una unidad confiable y potente diseñada para la filtración y circulación eficiente del agua de la piscina. Con su durabilidad, funcionamiento silencioso y eficiente energéticamente, y características de protección, este motor garantiza un rendimiento excepcional y una piscina limpia y cristalina, convirtiéndose en una elección destacada para piscinas de cualquier tamaño..",
                    "img": "winner_2cv.jpeg",
                    "leftColor": "#68b38400",
                    "rightColor": "#74c0c62b"
                }, 
                {
                    "id": 2,
                    "title": "Motor para piscina",
                    "subtitle": "Winner 1,5CV  PVP:399,30€",
                    "description": "El motor de piscina Winner de 1,5 caballos de potencia es una unidad potente y confiable diseñada para brindar un rendimiento excepcional en la circulación y filtración del agua de la piscina. Con una potencia de 1,5 caballos de fuerza, este motor proporciona un flujo constante de agua, asegurando una limpieza óptima y una circulación eficiente en piscinas de diferentes tamaños. Construido con materiales duraderos y de alta calidad, este motor ofrece una larga vida útil y resistencia a las condiciones del entorno de la piscina.",
                    "img": "winner_1_5cv.jpeg",
                    "leftColor": "#68b38400",
                    "rightColor": "#74c0c62b"
                }, 
                {
                    "id": 3,
                    "title": "Motor para piscina",
                    "subtitle": "Winner 1CV PVP:363€",
                    "description": "El motor de piscina Winner de 1 caballo de potencia es una unidad confiable y eficiente diseñada para proporcionar un rendimiento óptimo en la circulación y filtración del agua de la piscina. Con su potencia de 1 caballo de fuerza, este motor garantiza un flujo constante de agua, asegurando una limpieza efectiva en piscinas de diferentes tamaños. Construido con materiales duraderos y de alta calidad, este motor ofrece una larga vida útil y resistencia a las condiciones del entorno de la piscina. Es una elección confiable y eficiente para mantener tu piscina en condiciones óptimas.",
                    "img": "winner_1cv.jpeg",
                    "leftColor": "#68b38400",
                    "rightColor": "#74c0c62b"
                }, 
                {
                    "id": 4,
                    "title": "Smart pool controller",
                    "subtitle": "Saci pumps  PVP:242€",
                    "description": "El nuevo SMART POOL es un sistema de control integral de la piscina. Este cuadro electrónico nos permite una programación fácil e intuitiva y un control completo de la piscina. Incorpora las máximas protecciones para la bomba (trabajo en seco y sobre consumo). Incluye además relojes programadores de filtración, entradas/salidas para el sistema de iluminación, clorado salino, bomba de calor, sonda de temperatura PT-100, etc",
                    "img": "smart_pool_controller.jpeg",
                    "leftColor": "#68b38400",
                    "rightColor": "#74c0c62b"
                }, {
                    "id": 5,
                    "title": "Clorador salino",
                    "subtitle": "Olvidate de comprar mas cloro. Venta y puesta en marcha de todo el sistema.",
                    "description": "Este hecho te facilitará muchísimo sustituir un tratamiento tradicional de cloro.Cuando el agua salada de nuestra piscina pasa a través del clorador. La sal disuelta se transforma en hipoclorito sódico (NaCIO) que disuelto en agua, resulta un potente desinfectante. Además, la célula generará automáticamente un cloro libre (Cl2) que no se degrada.El potente desinfectante que crean mediante su proceso de descomposición, iones de cloruro, elimina las sustancias contaminantes que aparecen en el agua (bacterias, algas, cloraminas, etc)",
                    "img": "https://firebasestorage.googleapis.com/v0/b/web-papa-de84a.appspot.com/o/clorador.jpg?alt=media&token=b80df9d7-7e16-4b37-a6b6-4d8c0d2c93d1",
                    "leftColor": "#68b38400",
                    "rightColor": "#74c0c62b"
                }, {
                    "id": 6,
                    "title": "Valvula Selectora",
                    "subtitle": "Venta y cambio de la pieza, presupuesto sin compromiso",
                    "description": "La gama de válvulas selectoras AstralPool están diseñadas pensando en el usuario que tiene que manipularlas. De innovador diseño, cómodo manejo y máxima ﬁabilidad, éstas se convierten en un elemento básico en el éxito del perfecto estado de su piscina.",
                    "img": "https://firebasestorage.googleapis.com/v0/b/web-papa-de84a.appspot.com/o/valvula_selectora.jpg?alt=media&token=3a1b1366-bee8-4f67-abbe-dcef2649cf1b",
                    "leftColor": "#68b38400",
                    "rightColor": "#74c0c62b"
                }, {
                    "id": 7,
                    "title": "Tricomplet Granulado",
                    "subtitle": "Venta y entrega a domicilio a particulares o empresas",
                    "description": "Ahora tiempo y dinero con este producto que contiene Cloro, Algicida y floculante.",
                    "img": "https://firebasestorage.googleapis.com/v0/b/web-papa-de84a.appspot.com/o/tricomplet.JPG?alt=media&token=29d8ed69-703f-444a-848d-9d089121096f",
                    "leftColor": "#68b38400",
                    "rightColor": "#74c0c62b"
                }, {
                    "id": 8,
                    "title": "Alkaliplus",
                    "subtitle": "Tu mayor aliado para ahorrar cloro",
                    "description": "Con una buena regulación de la alcalinidad del agua podemos mantener el pH en sus margenes y por lo tanto una reducción del consumo de cloro.",
                    "img": "https://firebasestorage.googleapis.com/v0/b/web-papa-de84a.appspot.com/o/alkaliplus.JPG?alt=media&token=ec5a0d80-4ca7-40fc-a418-f19f062eee03",
                    "leftColor": "#68b38400",
                    "rightColor": "#74c0c62b"
                }, {
                    "id": 9,
                    "title": "Riego Automático RAIN BIRD",
                    "subtitle": "La marca con mayor fiabilidad del mercado",
                    "description": "Relajate en tu jardin y deja que la tecnologia Rain Bird se encargue del riego de todo tu patio. Preuspuesto y puesta en marcha de todo el sistema.",
                    "img": "https://firebasestorage.googleapis.com/v0/b/web-papa-de84a.appspot.com/o/riegoAuto.JPG?alt=media&token=4bb719a5-2fb5-493c-8da7-3aa682a8e993",
                    "leftColor": "#68b38400",
                    "rightColor": "#74c0c62b"
                }, {
                    "id": 10,
                    "title": "Bomba peristáltica",
                    "subtitle": "La solución mas duradera y económica. Venta y cambio de la pieza, presupuesto sin compromiso",
                    "description": "Una bomba peristáltica es un tipo de bomba hidráulica de desplazamiento positivo usada para bombear una variedad de fluidos. Mientras que el rotor da vuelta, la parte del tubo bajo compresión se cierra (o se ocluye) forzando, de esta manera, el fluido a ser bombeado para moverse a través del tubo. Adicionalmente, mientras el tubo se vuelve a abrir a su estado natural después del paso de la leva ('restitución'), el flujo del fluido es inducido a la bomba. Este proceso es llamado peristalsis y es usado en muchos sistemas biológicos como el aparato digestivo.",
                    "img": "https://firebasestorage.googleapis.com/v0/b/web-papa-de84a.appspot.com/o/Bomba-peristaltica.jpg?alt=media&token=5c2ad78e-95d6-49f4-844b-9f140bc2fc21",
                    "leftColor": "#68b38400",
                    "rightColor": "#74c0c62b"
                    
                }, {
                    "id": 11,
                    "title": "Focos Led para piscina y exteriores",
                    "subtitle": "Dale vida nocturna a tu piscina y patio",
                    "description": "No hay nada mejor que una buena iluminación para disfrutar de tu preciosa piscina y exteriores. Con la tecnologia LED ahorras dinero en la factura de la luz.",
                    "img": "https://firebasestorage.googleapis.com/v0/b/web-papa-de84a.appspot.com/o/foco.JPG?alt=media&token=8d45731d-343c-4564-a58e-1a59ab92f45c",
                    "leftColor": "#68b38400",
                    "rightColor": "#74c0c62b"
                }, {
                    "id": 12,
                    "title": "Limpia Fondos",
                    "subtitle": "Perfecto para todo tipo de piscinas",
                    "description": "Este modelo es perfecto para todo tipo de piscinas. Las piscinas de liner son dificiles de limpiar el fondo y este diseño esta pensado para resolver ese molesto problema.",
                    "img": "https://firebasestorage.googleapis.com/v0/b/web-papa-de84a.appspot.com/o/limpiaFondo.JPG?alt=media&token=4f53debf-5544-4ec9-ba17-44cbb555649b",
                    "leftColor": "#68b38400",
                    "rightColor": "#74c0c62b"
                }]
        }
    }
    render() {
        const titleArray = Object.values(this.state['data']).map(pac => pac.title);
        const idArray = Object.values(this.state['data']).map(pac => pac.id);
        //var titleArray = []
        //var titleArray= this.state.data.map(({ title }) => ({ title }))
        //console.log(titleArray)
        //alert(title);

        // let title = []
        // let item=0;
        // let array = this.state.data;
        // for (item of array) {
        //     title.push(item.title);
        // }
        // console.log(title);


        return (
            <div className="grid-layout">
                <NavigationBar
                    name="Ofertas" path="./ofertas" title={titleArray} idKey={idArray} />
                {/* name="Ofertas" path="./ofertas" title={title} idKey={id} /> */}
                <br></br>
                <CarouselDady />
                <br></br>
                <h1>Diseño, construcción y mantenimiento de jardines&#127796; Instalaciones de césped natural y artificial&#128170; Venta de productos de piscina con entrega a domicilio &#128667;
                </h1>
                <br></br>
                <section id="mySection">
                    <ProductsLists
                        products={this.state.data} />
                    <hr></hr>
                </section>

                <Footer />
            </div>
        )
    }
}
export default Main;