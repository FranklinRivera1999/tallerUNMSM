import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class TipoBusqueda extends Component {
    render() {
        return (
            
                        <div className="col s6 offset-s3 py-3">
                            <div className="row">
                                <Link className="waves-effect waves-light btn" to="/og/front/nombre">Buscar por Nombre</Link>
                                <Link className="waves-effect waves-light btn" to="/og/front/DNI">Buscar por DNI</Link>
                                <Link className="waves-effect waves-light btn" to="/og/front/codigo">Buscar por Código</Link>
                            </div>
                        </div>
                        
                 
        )
    }
}
