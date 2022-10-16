import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Ofertas from './pages/Ofertas';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Faqs from './pages/Faqs';
// import Autosuggest from 'react-autosuggest';

// const data = [
//   {title: "Clorador Salino", subtitle: "Olvidate de comprar mas cloro. Venta y puesta en marcha de todo el sistema."},
//   {title: "Bomba peristáltica", subtitle: "La solución mas duradera y económica. Venta y cambio de la pieza, presupuesto sin compromiso."},
//   {title: "Valvula Selectora", subtitle: "Venta y cambio de la pieza, presupuesto sin compromiso."},
//   {title: "Tricomplet Granulado", subtitle: "Venta y entrega a domicilio a particulares o empresas."},
//   {title: "Alkaliplus", subtitle: "Tu mayor aliado para ahorrar cloro."},
//   {title: "Riego Automático RAIN BIRD", subtitle: "La marca con mayor fiabilidad del mercado."},
//   {title: "Motor para piscina", subtitle: "Trabajamos con la mejor marca del mercado, por que al final lo barato sale caro."},
//   {title: "Focos Led para piscina y exteriores", subtitle: "Dale vida nocturna a tu piscina y patio."},
//   {title: "Limpia Fondos", subtitle: "Limpia Fondos."},
// ];

const App = () => {
  // const [title, subtitle]= useState(data);
  // const [value, setValue]= useState("");
  // const [titleSelect, setTitleSelect ]= useState({});
  return (
    <div>

      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/main/ofertas" element={<Ofertas />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/main/faqs" element={<Faqs />} />
          <Route path="/ofertas/faqs" element={<Faqs />} />
          <Route path="/main/ofertas/faqs" element={<Faqs />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HashRouter>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/main/ofertas" element={<Ofertas />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/main/faqs" element={<Faqs />} />
          <Route path="/ofertas/faqs" element={<Faqs />} />
          <Route path="/main/ofertas/faqs" element={<Faqs />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
    </div>


  )
}

export default App

// function App() {
//   return (
//     <div className='App'>

//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/main" element={<Main />} />
//           <Route path="/main/ofertas" element={<Ofertas />} />
//           <Route path="/ofertas" element={<Ofertas />} />
//           <Route path="/main/faqs" element={<Faqs />} />
//           <Route path="/faqs" element={<Faqs />} />
//           <Route path='*' element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>

//     </div >
//   );
// } export default App;


// https://www.youtube.com/watch?v=yBHEjEmk0ss&list=PLIddmSRJEJ0vEBB6ECegg35IQ-sWjSDdo&index=11