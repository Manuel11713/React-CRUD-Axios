import React,{Component} from 'react';
import './css/crearpost.css';
import swal from 'sweetalert';

class CrearPost extends Component{

    tituloRef = React.createRef();
    contenidoRef = React.createRef();

    infoPostF=e=>{
        e.preventDefault();
        
        

        const titulo = this.tituloRef.current.value;
        const contenido = this.contenidoRef.current.value;
        if(titulo===''||contenido==='')return null;
        swal("Genial!!", "El post ha sido creado!", "success");
        const info ={titulo,contenido}

        this.props.crearPost(info);
        e.target.reset();
    }

    render(){
        return(
            <div className="container">
                <div className="row bg-white p-3 mt-5" id="contenedor-crearPost">
                    <div className="col">
                        <form onSubmit={this.infoPostF}>
                            <div className="form-group">
                                <label htmlFor="inputTitulo">Titulo del Post: </label>
                                <input type="text" id="inputTitulo" className="form-control" placeholder="Titulo..." ref={this.tituloRef}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputContenido">Contenido: </label>
                                <textarea  id="inputTitulo" className="form-control resizeable-none" placeholder="Contenido..." ref={this.contenidoRef}/>
                            </div>
                            <button type="submit" className="btn btn-warning">Crear Post</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default CrearPost;