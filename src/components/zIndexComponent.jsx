import React from 'react';
import iconDofus from '../images/iconplay.png'
import iconplaybot from '../images/iconplaybot.jpg'
import { Link } from 'react-router-dom';

class zIndex extends React.Component{
    render(){
        return(
            <React.Fragment>
            <Link to='/' className='contBtnPlay text-center'> ¡JUGAR!  </Link>
            <Link to='/' className='contBtnSv text-decoration-none'> <img src={iconDofus} width='16' alt="icon"/> <span className='m-1'> LANDFUS | SERVIDOR PRIVADO DE DOFUS  </span>
            <p className='text-light text-center text-event'> <img src={iconplaybot} width='15' className='rounded-circle' alt=""/>    VER ACTUALIZACION <span className='text-warning'>[1.54]</span> </p></Link>     
            </React.Fragment>
                   );
    }
}
export default zIndex;