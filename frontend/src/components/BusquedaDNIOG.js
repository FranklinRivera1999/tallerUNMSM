import React, { Component } from 'react'
import axios from 'axios';
import CONFIG  from '../Configuracion/Config'; 
import Alumno from './AlumnoOG';

export default class BusquedaDNI extends Component {

    state= {
        dni: 0,
        codigoAlumno: 0,
        nombres: '',
        idAlumno: 0
    };

    onChangeCodigo =(e)=>{
        this.setState({ dni: e.target.value })
       
    }

    onSubmit = async e =>{
        e.preventDefault();
          console.log(this.state.codigo);
          const res = await axios.get(CONFIG+'alumno/buscarDni/'+this.state.dni);
           console.log(res);
           this.setState({
               codigoAlumno: res.data.codigo,
               idAlumno: res.data.idAlumn,
               nombres: res.data.apeNom
          });
          
          alert("Alumno "+this.state.nombres+" con codigo "+this.state.codigoAlumno);
       
    }

    render() {
        return (
                <div>
                
                        <div className="col s4 offset-s3 py-3">
                            <form className="form-inline" onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Ingrese DNI" onChange={this.onChangeCodigo}/>
                                </div>
                                <button type="submit" className="btn btn-success">Buscar</button>
                            </form>
                        </div>
                        <Alumno codigoA={this.state.codigoAlumno} nombreA={this.state.nombres}></Alumno>
                </div>
        )
    }
}
