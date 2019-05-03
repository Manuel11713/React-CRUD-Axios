import React,{Component} from 'react';
import './css/posts.css';
import Listado from './Listado.jsx';
class Posts extends Component{
    render(){
        return(
            <div className="container">
                <div className="row bg-white mt-3" id="container-posts">
                    <div className="col-12">
                        <h1 className="text-center">Posts</h1>
                    </div>
                    <Listado
                        posts={this.props.posts}
                        borrarPost={this.props.borrarPost}
                        editarPost={this.props.editarPost}
                    />
                </div>
            </div>
        )
    }
}
export default Posts