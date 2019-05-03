import React,{Component} from 'react';
import ElementoLista from './ElementoLista';
import './css/listado.css'
class Listado extends Component{
    mostrarPosts=()=>{
        const posts = this.props.posts;
        if(posts.length === 0)return null; 

        return(
            Object.keys(posts).map(key=>{
                return(
                   <ElementoLista
                        key={key}
                        post={posts[key]}
                        borrarPost={this.props.borrarPost}
                        editarPost={this.props.editarPost}
                   />
                );
            })
            
        )
    }
    render(){
        return(
            <React.Fragment>
                <table className="table">
                    <thead >
                        <tr id="container-listado">
                            <th scope="col">ID</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>  
                        {this.mostrarPosts()}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
export default Listado;