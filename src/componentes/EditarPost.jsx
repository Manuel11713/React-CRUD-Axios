import React,{Component} from 'react';
import './css/crearpost.css';
import swal from 'sweetalert';

class EditarPost extends Component{

    tituloRef = React.createRef();
    contenidoRef = React.createRef();
    
    infoPostF=e=>{
        e.preventDefault();
        
        const titulo = this.tituloRef.current.value;
        const contenido = this.contenidoRef.current.value;
        if(titulo===''||contenido==='')return null;

        const info ={titulo,contenido,id:this.props.id}
        
        this.props.editarPost(info);

        swal("Genial!!", "El post ha sido Modificado", "success");
       
    }

    render(){
        const posts = this.props.posts;
        if(posts.length===0)return null;
        let id = this.props.id;
        id = Number(id);
        const postE = posts.filter(post=>{
            return post.id === id;
        });
        return(
            <div className="container">
                <div className="row bg-white p-3 mt-5" id="contenedor-crearPost">
                    <div className="col">
                        <form onSubmit={this.infoPostF}>
                            <div className="form-group">
                                <label htmlFor="inputTitulo">Titulo del Post: </label>
                                <input type="text" id="inputTitulo" className="form-control" placeholder="Titulo..." ref={this.tituloRef} defaultValue={postE[0].title}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputContenido">Contenido: </label>
                                <textarea rows='5' id="inputTitulo" className="form-control resizeable-none" placeholder="Contenido..." ref={this.contenidoRef} defaultValue={postE[0].body}/>
                            </div>
                            <button type="submit" className="btn btn-warning">Editar Post</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default EditarPost;