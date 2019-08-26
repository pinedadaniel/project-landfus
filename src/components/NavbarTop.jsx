import React from 'react'
import support from '../images/support.svg'
import user from '../images/user.svg'
import reg from '../images/reg.svg'
import { Link } from 'react-router-dom';

class NavbarTop extends React.Component {
    render() {
        return (
            <React.Fragment>       
                 <nav className="navbar navTop navbar-expand-md navbar-light">
                 <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <Link className="nav-link item-top " to="/"> <img src={support} width='20'/> LANDFUS SOPORTE </Link>
                    </li>
                   
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <Link className="nav-link item-top " to="/"> CONEXIÓN <img src={user} width='17'/> </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link item-top" to="/"> INSCRIPCIÓN <img src={reg} width='17'/> </Link>
                    </li>
                </ul>
             
            </nav>
             
               </React.Fragment>

        );
    }
}

export default NavbarTop;