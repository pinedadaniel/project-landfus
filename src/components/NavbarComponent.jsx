import React from 'react';
import brand from '../images/brand.png';
import './styles/NavbarStyle.css'
import NavbarTop from './NavbarTop'
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="fixed-top">
                      {/* Importacion del Navbar Top*/}
                    <NavbarTop />
            
                    <hr />
                
                      {/* Inicio Barra de Navegacion*/}
                    <nav className="navbar navbar-expand-md navbar-light ">
                        {/* Inicio Brand SM*/}
                        <Link className="navbar-brand brand-sm navbar-center " to="#">
                            <img src={brand} width="200" height="66" alt="icon Landfus" />
                            <span className="menu-collapsed" ></span>
                        </Link>
                        {/* Fin Brand SM*/}

                        <button class="navbar-toggler  btn-ham" type="button" data-toggle="collapse" data-target="#collapsibleNavbar2">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        {/* Inicio Navbar*/}
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav navbar-center" id='contItem'>
                                <li className="nav-item">
                                    <Link className="nav-link text-light line" to="/"> INICIO </Link>

                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link text-light  line" to="/"> REGISTRO  </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light  " to="/"> REGLAS </Link>
                                </li>
                                <Link className="navbar-brand" to="#">
                                    <img src={brand} width="200" height="66" alt=" icon Landfus" />
                                    <span className="menu-collapsed" ></span>
                                </Link>

                                <li className="nav-item ">
                                    <Link className="nav-link text-light  line" to="/About">  GUIAS </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light  line" to="/Services"> JUGAR </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light " to="/Projects"> TIENDA  </Link>
                                </li>

                            </ul>
                        </div>
                        {/* Fin Navbar*/}


                        {/* Inicio Navbar Desplegable */}
                        <div className='collapse navbar-collapse bg-ul2' id="collapsibleNavbar2">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link text-light ul2" to="/"> * INICIO</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light ul2" to="/"> * REGISTRO</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light ul2" to="/"> * REGLAS </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light ul2" to="/"> * GUIAS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light ul2" to="/"> * JUGAR</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light ul2" to="/">  * TIENDA</Link>
                                </li>
                            </ul>
                        </div>
                        {/* Fin Navbar Desplegable */}

                    </nav>
                      {/* Fin Barra de Navegacion*/}
                </header>
            </React.Fragment>

        );
    }
}

export default Navbar;