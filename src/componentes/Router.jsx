import React, {Component} from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Header from './Header.jsx';
import Navegacion from './Navegacion.jsx';
import Posts from './Posts';
import PostUnico from './PostUnico.jsx';
import CrearPost from './CrearPost.jsx';
import EditarPost from './EditarPost.jsx';
import axios from 'axios';


class Router extends Component{
    state={
        posts:[]
    }

    componentWillMount(){
        const url = `https://jsonplaceholder.typicode.com/posts`;
        axios.get(url)
                    .then(respuesta =>this.setState({posts:respuesta.data}))
                    .catch(error=>console.log(error));   
    }
    borrarPost=id=>{

        const postCopia = [...this.state.posts];

        const posts = postCopia.filter(postF=>{
            return postF.id !== id;
        });

        this.setState({posts})
    }
    crearPost=info=>{
        let postsCopia = [...this.state.posts];
        const tamaño = postsCopia.length;
        const nuevoPost = {
            userId: 100+tamaño,
            id: 100+tamaño,
            title: info.titulo,
            body:  info.contenido
        }
        this.setState(prevState=>({
            posts: [...prevState.posts,nuevoPost]
        }));
    }   
    editarPost=postNuevo=>{
        const posts = [...this.state.posts];
        const indexPost = posts.findIndex(post=>{
             return post.id === Number(postNuevo.id);
        })
        console.log(postNuevo);
        console.log(postNuevo.title);
        posts[indexPost].title = postNuevo.titulo;
        posts[indexPost].body = postNuevo.contenido;

        //this.setState({posts})
    }

    render(){
        
        return(
            <BrowserRouter>
                <Header/>
                <Navegacion/>
                <Switch>
                    <Route exact path={'/'} render={()=>{
                        return(<Posts 
                            posts = {this.state.posts}
                            borrarPost={this.borrarPost}
                            
                        />)

                    }}/>

                    <Route exact path={'/listado/:id'} render={algo=>{
                        let id = algo.match.params.id
                        return(
                            <PostUnico 
                            postUnico = {this.state.posts[id]}
                            />
                        );
                    }} 
                    />
                    <Route 
                        exact path="/crearpost" render={()=>{
                            return(<CrearPost 
                                crearPost={this.crearPost}
                            
                            />)
                        }}
                    />
                    <Route
                        exact path="/editarpost/:id" render={props=>{
                            let id = props.match.params.id;
                            return(
                                <EditarPost
                                    editarPost={this.editarPost}
                                    id={id}
                                    posts = {this.state.posts}
                                   
                                />
                            )
                        }}
                    /> 
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;

