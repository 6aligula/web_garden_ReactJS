import { Carousel } from 'react-bootstrap';
import grassBefore from "../img/carusel/cespedAntes.png";
import grassAfter from "../img/carusel/cespedDespues.png";
import naturalGrassA from "../img/carusel/cespedNaturalA.png";
import naturalGrassF from "../img/carusel/cespedNaturalMedio.png";
import naturalGrassM from "../img/carusel/cespedNaturalFinal.png";
import yardBefore from "../img/carusel/patioAntes.png";
import yardAfter from "../img/carusel/patioDespues.png";
import palletBefore from "../img/carusel/tarimaAntes.png";
import palletFinal from "../img/carusel/tarimaFinal.png";
import electrolysis from "../img/carusel/electrolisis.png"


export default function CarouselDady() {

    return (
        <div id='carro'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={grassBefore}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={grassAfter}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={naturalGrassA}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={naturalGrassM}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={naturalGrassF}
                        alt="Third slide"
                    />
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

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={palletBefore}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={palletFinal}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={electrolysis}
                        alt="Third slide"
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    );
}
