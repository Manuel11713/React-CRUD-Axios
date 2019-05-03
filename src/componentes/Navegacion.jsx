import React from 'react';
import {Link} from 'react-router-dom';

const Navegacion = props =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <nav className="d-flex justify-content-between" id="nav-container">
                        <Link to={'/'} className="text-decoration-none"><span className="font-weight-bold">Todos los Post</span></Link>
                        <Link to={'/crearpost'} className="text-decoration-none"><span className="font-weight-bold text-decoration-none">Crear Post</span></Link>
                    </nav>

                </div>
            </div>
        </div>
    )
}
export default Navegacion;