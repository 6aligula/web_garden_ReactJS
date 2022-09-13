import Autosuggest from 'react-autosuggest';
import React, { useState } from "react";

const data = [
    { title: "Clorador Salino", subtitle: "Olvidate de comprar mas cloro. Venta y puesta en marcha de todo el sistema." },
    { title: "Bomba peristáltica", subtitle: "La solución mas duradera y económica. Venta y cambio de la pieza, presupuesto sin compromiso." },
    { title: "Valvula Selectora", subtitle: "Venta y cambio de la pieza, presupuesto sin compromiso." },
    { title: "Tricomplet Granulado", subtitle: "Venta y entrega a domicilio a particulares o empresas." },
    { title: "Alkaliplus", subtitle: "Tu mayor aliado para ahorrar cloro." },
    { title: "Riego Automático RAIN BIRD", subtitle: "La marca con mayor fiabilidad del mercado." },
    { title: "Motor para piscina", subtitle: "Trabajamos con la mejor marca del mercado, por que al final lo barato sale caro." },
    { title: "Focos Led para piscina y exteriores", subtitle: "Dale vida nocturna a tu piscina y patio." },
    { title: "Limpia Fondos", subtitle: "Limpia Fondos." },
];
const [title, setTitle] = useState(data);
const [value, setValue] = useState("");
const [titleSelect, setTitleSelect] = useState({});

const onSuggestionsFetchRequested = ({ value }) => {
    setTitle(filterTitle(value));
}

/*filter title and description */
const filterTitle = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    var filterFinal = data.filter((title) => {
        var textComplet = title.title + " - " + title.subtitle;

        if (textComplet.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(inputValue)) {
            return title;
        }

    });
    return inputLength === 0 ? [] : filterFinal;
}
/*call when erase suggest */
const onSuggestionsClearRequested = () => {
    setTitle([]);
}
/*enter value when client click on suggestion */
const getSuggestionValue = (suggestion) => {
    return `${suggestion.title} - ${suggestion.subtitle}`
}
/*show html code */
const renderSuggestion = (suggestion) => (
    <div className="suggestion" onClick={() => selectTitle(suggestion)}>
        {`${suggestion.title} - ${suggestion.subtitle}`}
    </div>
);

const selectTitle = (title) => {
    setTitleSelect(title);

}
/*value and method onchange */
const onChange = (e, { newValue }) => {
    setValue(newValue);
}

const inputProps = {
    placeholder: "Producto a buscar",
    value,
    onChange
};


const eventEnter = (e) => {
    if (e.key == 'Enter') {
        var split = e.target.value.split('-');
        var title = {
            title: split[0].trim(),
            subtitle: split[1].trim()
        };
        selectTitle(title);
    }
}


const BuscadorReact = () => {

    return (
        <div className="box">
            <Autosuggest
                suggestions={title}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                /*Configure input*/
                inputProps={inputProps}
                onSuggestionSelected={eventEnter}
            />
            <br />
            <button className="btn btn-primary" onClick={() => console.log(titleSelect)}>Check</button>

        </div>
    )
}