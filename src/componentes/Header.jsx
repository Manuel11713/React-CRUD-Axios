import React from 'react';
import {Link} from 'react-router-dom';

const Header = props =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <header id="header-container">
                        <Link to={'/'} className="text-decoration-none">
                            <h1 className="text-center">React Blog</h1>
                        </Link>
                    </header>
                </div>
            </div>
        </div>
    );
}
export default Header;