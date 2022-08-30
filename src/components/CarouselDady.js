import { Carousel } from 'react-bootstrap';
import grassBefore from "../img/carusel/cespedAntes.png";
import grassAfter from "../img/carusel/cespedDespues.png";
import naturalGrassA from "../img/carusel/cespedNaturalA.png";
import naturalGrassF from "../img/carusel/cespedNaturalMedio.png";
import naturalGrassM from "../img/carusel/cespedNaturalFinal.png";
import yardBefore from "../img/carusel/patioAntes.png";
import yardAfter from "../img/carusel/patioDespues.png";
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
