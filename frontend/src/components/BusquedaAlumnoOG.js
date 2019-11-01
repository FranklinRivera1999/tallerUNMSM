import React, { Component } from 'react'
import axios from 'axios'

import Alumno from './AlumnoOG';
import CONFIG  from '../Configuracion/Config';

export default class BusquedaAlumno extends Component {

    state= {
        codigo: 0,
        codigoAlumno: 0,
        nombres: '',
        idAlumno: 0
    };
    onChangeCodigo =(e)=>{   
        this.setState({codigo: e.target.value})
     }

      onSubmit = async (e) =>{
          e.preventDefault();
        console.log(this.state.codigo);
        console.log(CONFIG+'og/alumno/buscarCodigo/'+this.state.codigo);
        const res = await axios.get(CONFIG+'alumno/buscarCodigo/'+this.state.codigo);
         console.log(res.data);
         this.setState({
            codigoAlumno: res.data.codigo,
            idAlumno: res.data.idAlumn,
            nombres: res.data.apeNom
        });
        
        alert("Alumno "+this.state.nombres+" con codigo "+this.state.codigoAlumno)
     }
    render() {
        return (

                <div>
                        <div className="col s4 offset-s3 py-3">
                            <form className="form-inline" onSubmit={this.onSubmit}> 
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Ingrese Código" onChange={this.onChangeCodigo}/>
                                </div>
                                <button type="submit" className="btn btn-success">Buscar</button>
                            </form>
                        </div>
                        <span>
                        <Alumno codigoA={this.state.codigoAlumno} nombreA={this.state.nombres}/>
                        </span>
                </div>
        )
    }
}
