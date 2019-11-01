import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';




import Navigation from './components/NavigationOG';
import BusquedaAlumno from './components/BusquedaAlumnoOG';

import TramitesAlumno from './components/TramitesAlumnoOG';
import TipoBusqueda from './components/TipoBusquedaOG';
import BusquedaDNI from './components/BusquedaDNIOG';
import BusquedaNombre from './components/BusquedaNombreOG';

function App() {
  return (
 
    <Router>
      <Navigation/>
      <div className="container-fluid">
        <div className="row">
        <TipoBusqueda />
         <Route path="/og/front/codigo" exact component={BusquedaAlumno}></Route>
         <Route path="/og/front/DNI"  component={BusquedaDNI}></Route>
         <Route path="/og/front/nombre"  component={BusquedaNombre}></Route>
        </div>
        <Route path="/og"  exact component={TramitesAlumno}></Route>   
      </div>
    </Router>
    

  );
}

export default App;
