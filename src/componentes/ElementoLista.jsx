import React from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';
const ElementoLista =props=>{

    const {id,title}=props.post;

    const borrarElemento = ()=>{
        swal({
            title: "¿Estas seguro que quires eliminar este post?",
            text: "Una vez que lo borres no podras recuperarlo",
            icon: "warning",
            buttons: {
                continuar:{
                    text:'dale',
                    value:true
                },
                cancelar:{
                    text:'nope',
                    value:false
                }
            },
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("El Post ha sido borrado!!!", {
                icon: "success",
              });
              props.borrarPost(id);
            } else {
              swal("El post esta seguro");
            }
          });   
    }

    return(
        <tr>
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td>
                <Link to={`/listado/${id-1}`} className="btn btn-primary">
                    Ver Info
                </Link>
                <button className="btn btn-danger" onClick={borrarElemento}>Eliminar</button>
                <Link to={`/editarpost/${id}`}>
                  <button className="btn btn-warning">Editar</button>
                </Link>
            </td>
        </tr>
    )
}
export default ElementoLista;