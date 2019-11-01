import React, { Component } from 'react'
import Axios from 'axios';
import CONFIG  from '../Configuracion/Config';
export default class Alumno extends Component {

    state = {
        recursos: [],
        numero: 0,
        nombre: ' ',
        concepto: ' ',
        tramite: ' ',
        fechaAsignacion: new Date(),
        recurso:' ',
        anotacion: ' ',
        estado: ' ',
        tramites: [],
        idAlumno: 0,
        fechaA: new Date(),
        codigo: 0
    };

    deleteTramite = async(id) =>{
        console.log('Tramite Eliminado');
        console.log(id);
        await Axios.delete(CONFIG+'HistorialTramites/eliminarRegistro/'+id);
        this.getTramites();
        console.log('Tramite Eliminado ahora c');
    }

editTramite = async (id)=>{
 
    const res = await Axios.get(''+id);
    console.log(res);
    this.setState({
        numeroU: res.data[0].numero,
        idTramite: res.data[0].idTramite,
        codigo: res.data[0].cod_alumno,
        conceptoU :res.data[0].concepto,
    })
    const cuak = await Axios.get(''+this.state.cod_alumno);
    this.setState({nombres: cuak.data[0].apellido})
    //this.setState({tramiteU: res.data});
    //this.getTramites();
}

 getTramites = async ()=>{
     console.log('Obteniendo los Tramites');
    const res = await Axios.get(CONFIG+'HistorialTramites/listaTramite');
    this.setState({tramites: res.data});
    console.log(res);
}
    
    async componentDidMount(){
        console.log(CONFIG);
        console.log(this.state.idAlumno);
        this.getTramites();
        console.log('AQUI DE BE SALIR LA RESPUESTA DE LOS RECUROS CSMR');
        const res = await Axios.get(CONFIG+'administrativo/lista');
        console.log(res);

        this.setState({recursos: res.data});
        
    }
    
    getAlumno = async () =>{
        console.log('obteniendo id del alumno');
        console.log(CONFIG+'alumno/buscarCodigo/'+this.props.codigoA);
        const res = await Axios.get(CONFIG+'alumno/buscarCodigo/'+this.props.codigoA);
        console.log(res.data);
        this.setState({
            idAlumno: res.data.codigo
        });
        console.log(this.state.idAlumno);
    };

    onSubmit = async e =>{
        e.preventDefault();
        console.log('Se va guardar un Tramite'+this.state.numero);
        this.getAlumno();
        console.log('Se va guardar un Tramite');
        console.log(CONFIG+'HistorialTramites/guardarTramite');
        this.setState({fechaA: new Date()})
            await Axios.post(CONFIG+'HistorialTramites/guardarTramite',{
                id_alum: this.state.idAlumno,
                id_admin: this.state.recurso,
                nombre_tramite: this.state.tramite,
                id_numero_tramite: this.state.numero,
                anotacion: this.state.anotacion,
                concepto: this.state.concepto,
                estado:this.state.estado,
                fecha_asignacion: this.state.fechaA,
                fecha_tramite: this.state.fechaAsignacion
            });
            
            console.log(this.state);
            this.getTramites();
           
    }
    

    handleChange = e =>{
        //console.log(e.target.name , e.target.value);
        //const { name, value}= e.target;
       this.setState({
         [e.target.name]: e.target.value ,
      })
    }

    render() {

        return (
            <div>
            <form onSubmit={this.onSubmit}>
            <table className="" >
                <thead className="row">
                    <tr>
                      
                    <th>Número</th>
                    <th>Código</th>
                    <th>Alumno</th>
                    <th>Concepto</th>
                    <th>Trámite</th>
                    <th>Fecha Trámite</th>
                    <th>Recurso</th>
                    <th>Anotación</th>
                    <th>Estado</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="row">
                    
                    <th><input type="text" name="numero" onChange={this.handleChange} required className="input-field" /></th>
                    <th><input type="text"  value={this.props.codigoA} name="codigo" onChange={this.handleChange} required className="input-field" /></th>
                    <td><input type="text"  value={this.props.nombreA} name="nombre" onChange={this.handleChange} required className="input-field" /></td>
                    <td><input type="text"  name="concepto" onChange={this.handleChange} required className="input-field"/></td>
                    <td> <div className="">
                        <select name="tramite" onChange={this.handleChange} required className="browser-default">
                        <option value="" disabled selected>Eliga una opción</option>
                        <option value="Matricula">Matricula</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Rectificacion">Rectificacion</option>
                        <option value="Certificacion">Certificado</option>
                        </select> 
                        </div>
                    </td>
                    <td><input type="date" onChange={this.handleChange} name="fechaAsignacion" required className="input-field"/></td>
                    <td> <select name="recurso" onChange={this.handleChange} required className="browser-default">
                          <option value="" disabled selected>Eliga una opción</option>
                        {
                            this.state.recursos.map(recurso => 
                                <option value={recurso.idAdmin}>{recurso.nombres}</option>)
                        }
                        </select> 
                    </td>
                    <td> <input name="anotacion" onChange={this.handleChange} required className="browser-default" list="Anotacion"/>
                        <datalist id="Anotacion">
                            <option value="Faltan Recursos"/>
                            <option value="Faltan documentos"/>
                            <option value="Tramite Detenido"/>
                            <option value="Problemas internos"/>
                            
                        </datalist>
                    </td>
                    <td> <select name="estado" onChange={this.handleChange} required className="browser-default">
                        <option value="" disabled selected>Eliga una opción</option>
                        <option value="En proceso">En proceso</option>
                        <option value="Inciado">Iniciado</option>
                        <option value="Cancelado">Cancelado</option>
                        <option value="No especifica">No especifica</option>
                        </select> 
                    </td>
                    <td>
                        <button className="btn btn-success" type="submit">Guardar</button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </form>
       <div>
       <table className="highlight centered">
                <thead className="">
                    <tr>
                    <th>Número</th>
                    <th>Concepto</th>
                    <th >Trámite</th>
                    <th >ID Alumno</th>
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
        </div>   
        )
    }
}
