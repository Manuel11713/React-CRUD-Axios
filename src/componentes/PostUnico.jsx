import React from 'react';


const PostUnico = props =>{

    if(!props.postUnico)return null;

    const {body,title,id} = props.postUnico; 
    return(
        <div className="container mt-5 ">
            <div className="row justify-content-center">
                <div className="col-6 bg-white">
                    <h1>{title}</h1>
                
                    <p><span>Autor: {id}</span></p>
                    <p><span>{body}</span></p>
                </div>
             </div>
        </div>
    );
}

export default PostUnico;