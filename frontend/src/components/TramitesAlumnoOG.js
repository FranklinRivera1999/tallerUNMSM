import React, { Component } from 'react'
import axios from 'axios';
import CONFIG  from '../Configuracion/Config';
export default class TramitesAlumno extends Component {

    state={
        tramites: []
    }

deleteTramite = async(id) =>{
    console.log('Tramite Eliminado');
    console.log(id);
    await axios.delete(CONFIG+'HistorialTramites/eliminarRegistro/'+id);
    this.getTramites();
    console.log('Tramite Eliminado ahora c');
}

editTramite = async (id)=>{
    await axios.put('');
    this.getTramites();
}

 getTramites = async ()=>{
    const res = await axios.get(CONFIG+'HistorialTramites/listaTramite');
    this.setState({tramites: res.data});
    console.log(res);
}

async componentDidMount(){
    this.getTramites();
}

    render() {
        return (
            <div>
                
                <table className="highlight centered">
                <thead className="">
                    <tr>
                    <th>Número</th>
                    <th>Concepto</th>
                    <th >Trámite</th>
                    <th >Codigo Alumno</th>
                    <th >Fecha del Trámite</th>
                    <th >Fecha de Asignación</th>
                    <th >ID Recurso</th>
                    <th >Anotación</th>
                    <th >Estado</th>
                    <th ></th>
                    
                    </tr>
                </thead>
                <tbody>                  
                        {
                            this.state.tramites.map(tramite => 
                            <tr>
                            <th>{tramite.id_numero_tramite}</th>
                            <td>{tramite.concepto}</td>
                            <td>{tramite.nombre_tramite}</td>
                            <td>{tramite.id_alum}</td>
                            <td>{tramite.fecha_tramite}</td>
                            <td>{tramite.fecha_asignacion}</td>
                            <td>{tramite.id_admin}</td>
                            <td>{tramite.anotacion}</td>
                            <td>{tramite.estado}</td>
                            <td>
                                <button onClick={()=>this.deleteTramite(tramite.id_numero_tramite)} className="btn btn-outline-danger btn-sm">Eliminar</button>
                            </td>
                            
                            </tr>
                            )
                        }  
                </tbody>
                </table>
                
            </div>
        )
    }
}
