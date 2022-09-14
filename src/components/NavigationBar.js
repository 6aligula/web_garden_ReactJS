import React, { useEffect } from 'react'
import { NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import './styles/NavigationBar.css'
// import 'bootstrap/dist/css/bootstrap.css';

//function move tu up
function to_up() {
    //console.log("dentro");
    document.body.scroll({
        top: 0
    })
    document.documentElement.scrollTo({
        top: 0
    })
}

/*go to product select */
function searchProduct(searchDataId) {
    var idSearch = searchDataId;
    var productSelect = document.getElementById(idSearch);
    productSelect.scrollIntoView(true);

}
/*cat Id of product selected*/
function catIdProduct() {
    /*https://stackoverflow.com/questions/57493879/how-do-i-get-the-value-of-the-selected-item-in-a-datalist-using-pure-js */
    const datalist = document.getElementById("products");
    const input = document.getElementById("search");
    // alert(Value)
    for (var i = 0; i < datalist.options.length; i++) {
        if (datalist.options[i].value == input.value) {
            // obtains the data-id attribute
            var idData=(datalist.options[i].getAttribute("data-id"));
            console.log(idData);
            //console.log(datalist.options[i].getAttribute("data-id"));
            break;
        }
    }
    searchProduct(idData);
}

const NavigationBar = (props) => {
    /*useEffect is similar window.onload or document.ready*/
    useEffect(() => {
        var option = "";
        var pri = '<option value = "';
        var sec = '" ';
        var closeOption = "'></option>";
        var idProduct = "data-id= '";

        for (const key in props.title) {
            option += pri + `${props.title[key]}` + sec + idProduct + `${props.idKey[key]}` + closeOption;
            // option = pri + `${props.title[key]}` + sec;
            //console.log(option);
        }
        var modelList = document.getElementById("products");
        modelList.innerHTML = option;

    }, [])


    return (

        < div id='navibar' className='box fixed-top bg-dark ir-arriba' >

            <header>
                <nav className="navbar navbar-dark bg-dark" >
                    <div className="container-fluid">
                        <div type="button" className="navbar-brand" onClick={to_up}>
                            <img id='logo' src={logo} width="10px" height="10px"></img> Jardineria Marcos
                        </div>

                        <div id='ofert_button'>
                            <Link className="btn btn-outline-warning" to={props.path}>{props.name}</Link>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div id='faqs_button'>
                            <Link className="btn btn-primary" type='button' to='./faqs'>Dudas comunes</Link>
                        </div>

                        <form className="d-flex">
                            <input id='search' list='products' className="form-control me-2" placeholder='Buscar productos' />
                            <datalist id='products'>

                            </datalist>
                            {/* <a className="btn btn-outline-success" onClick={searchProduct} id='buscar'>Buscar</a> */}
                            <a className="btn btn-outline-success" onClick={catIdProduct} id='buscar'>Buscar</a>
                        </form>
                    </div>
                </nav>
            </header>
        </div >

    )
}
export default NavigationBar;

// const applications = {
//     "apps": [
//         { "app": "app_uno", "buzon": "buzon_uno" },
//         { "app": "app_dos", "buzon": "buzón_dos" }
//     ]
// };

// function fillSelector(options_list) {
//     var options = options_list;
//     var option = "";
//     var modelList = document.getElementById("products");
//     alert(modelList);
//     // for (var i in options.apps) {
//     //     // creamos un elemento de tipo option
//     //     var opt = document.createElement("option");
//     //     // le damos un valor
//     //     opt.value = options.apps[i].app;
//     //     // le ponemos un texto
//     //     opt.textContent = options.apps[i].buzon;
//     //     // lo agregamos al select
//     //     modelList.appendChild(opt);
//     //     //console.log(modelList.options.add(opt).textContent);
//     // }

//     modelList.innerHTML = option;
// }
// function code() {
//     var modelList = document.getElementById("products");

//     console.log(modelList);
// }
// window.onload = code();

//fillSelector(applications);
// function LoadTitle(titleArray) {
//     useEffect(() => {
//         var title = titleArray;
//         var option = "";

//         var pri = '<option value = "';
//         var sec = '"></option>';
//         for (const key in title) {
//             // option += '<option value="' + title[prop] + '" />';
//             option = pri + `${title[key]}` + sec;
//             console.log(option);
//         }
//         var modelList = document.getElementById("products");
//         modelList.innerHTML = option;

//     }, [])
// }


// class NavigationBar extends React.Component {

//     render() {
//         const {
//             idKey,
//             title,
//             path,
//             name } = this.props
//         LoadTitle(title);

//         return (

//             < div id='navibar' className='box fixed-top bg-dark ir-arriba' >
//                 <header>
//                     <nav className="navbar navbar-dark bg-dark" >
//                         <div className="container-fluid">
//                             <div type="button" className="navbar-brand" onClick={to_up}>
//                                 <img id='logo' src={logo} width="10px" height="10px"></img> Jardineria Marcos
//                             </div>

//                             <div id='ofert_button'>
//                                 <Link className="btn btn-outline-warning" to={path}>{name}</Link>
//                             </div>
//                         </div>
//                         <div className="container-fluid">
//                             <div id='faqs_button'>
//                                 <Link className="btn btn-primary" type='button' to='./faqs'>Dudas comunes</Link>
//                             </div>

//                             <form className="d-flex">
//                                 <input id='search' list='products' className="form-control me-2" type="search" placeholder='Buscar productos' />
//                                 <datalist id='products'>
//                                     <option value='Que quieres buscar'></option>
//                                 </datalist>
//                                 <a className="btn btn-outline-success" onClick={searchProduct} id='buscar'>Buscar</a>
//                             </form>
//                         </div>
//                     </nav>
//                 </header>
//             </div >

//         )
//     }


// }
// export default NavigationBar;