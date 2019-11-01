import React, { Component } from 'react'

import Alumno from './AlumnoOG';
import axios from 'axios';
import CONFIG  from '../Configuracion/Config';

export default class BusquedaNombre extends Component {

    state = {
        alumnos: {},
        apellido: '',
        codigoAlumno: 0,
        nombre: '',
        nombres: '',
        idAlumno: 0
    }

    onChangeCodigo =(e)=>{
        this.setState({apellido: e.target.value});
    }

    onSubmit = async (e) =>{

        e.preventDefault();
        console.log('Buscando Alumno');
          const res = await axios.get(CONFIG+'alumno/leer/'+this.state.apellido.toUpperCase());
          console.log(CONFIG+'alumno/leer/'+this.state.apellido.toUpperCase());
           this.setState({
            alumnos: res.data
          });
          console.log(this.state.alumnos);
          this.setState({
              codigoAlumno: this.state.alumnos.codigo,
              nombres: this.state.alumnos.apeNom,
              idAlumno: this.state.alumnos.idAlumn
          });
          console.log(this.state.idAlumno);
          alert("Alumno "+this.state.nombres+" con codigo "+this.state.codigoAlumno);
       }
    

    render() {
        return (
            <div>
                        <div className="col s4 offset-s3 py-3">
                            <form className="form-inline" onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Ingrese Nombre" onChange={this.onChangeCodigo}/>
                                </div>
                                <button type="submit" className="btn btn-success">Buscar</button>
                            </form>
                        </div>
                       <Alumno codigoA={this.state.codigoAlumno} nombreA={this.state.nombres}/>  
            </div>
        )
    }
}
