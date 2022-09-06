import { Carousel } from 'react-bootstrap';
import grassBefore from "../img/carusel/cespedAntes.jpg";
import grassAfter from "../img/carusel/cespedDespues.jpg";
import naturalGrassA from "../img/carusel/cespedNaturalA.jpg";
import naturalGrassF from "../img/carusel/cespedNaturalMedio.jpg";
import naturalGrassM from "../img/carusel/cespedNaturalFinal.jpg";
import yardBefore from "../img/carusel/patioAntes.jpg";
import yardAfter from "../img/carusel/patioDespues.jpg";
import './styles/Carro.css'


export default function CarouselDady() {

    return (
        <div id='car' className='box'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={grassBefore}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>SIN CESPED ARTIFICIAL</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={grassAfter}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>CON CESPED ARTIFICIAL</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={naturalGrassA}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>SIN CESPED NATURAL</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={naturalGrassF}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>COLOCANDO CESPED NATURAL</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={naturalGrassM}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>CON CESPED NATURAL</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={yardBefore}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={yardAfter}
                        alt="Third slide"
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    );
}
