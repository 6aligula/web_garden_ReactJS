import React, { useState } from 'react'
import './styles/Accordion.css'
import AddButton from '../components/AddButton';


const dataCollection = [
    {
        question: '¿Cuanto tiempo llevamos en el mercado?',
        answer: 'LLevamos en el mercado desde el año 2003. Hemos pasado la crisis del 2008 gracias a nuestros precios competitivos y nuestra calidad de trabajo'
    }, {
        question: '¿Posibles cambios en los presupuestos?',
        answer: 'Somos totalmente concientes de la economia actual y las fluctuaciones de las materias primas por lo tanto nuestros presupuestos son cerrados y cualquier extra correria cargo de nuestra cuenta'
    }, {
        question: '¿Que tipos de trabajos aceptamos?¿Trabajos pequeños o grandes ?',
        answer: 'Nos avalan nuestros 19 años de expriencia y ningun trabajo nos queda grande. Obviamente el presupuesto de ajusta a los trabajos pequeños'
    }
];

function Accordion() {
    const [accordion, setActiveAccordion] = useState(0);
    function toogleAccordion(index) {
        if (index === accordion) {
            setActiveAccordion(-1);
            return
        }
        setActiveAccordion(index);
    }

    return (
        <div className='containerA'>
            <AddButton/>
            <div>
                <span className='accordion_title'>Dudas comunes</span>
                <h1 className='h1-Accordion'>Algunas respuestas a tus preguntas</h1>
            </div>
            <div className='accordion_faq'>
                {dataCollection.map((item, index) =>
                    <div key={index} onClick={() => toogleAccordion(index)}>
                        <div className='accordion_faq-heading'>
                            <h3 className={accordion === index ? "active" : ""}>
                                {item.question}
                            </h3>
                        </div>

                        <div>
                            {accordion === index ? (
                                <>
                                    <span className='verticle'>-</span>
                                </>
                            ) : (
                                <>
                                    <span className='verticle'>+</span>
                                </>
                            )}

                        </div>

                        <div>
                            <p className={accordion === index ? "active" : "inactive"}>
                                {item.answer}
                            </p>
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
};

export default Accordion