import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (

         
                <nav className="nav-wrapper">
                    <Link to="/og" className="brand-logo"> Registro Interno de Expedientes</Link>
                </nav>
  
            
            
        )
    }
}
