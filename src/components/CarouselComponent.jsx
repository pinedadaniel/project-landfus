import React from 'react';
import './styles/NavbarStyle.css'
import fondo1 from '../images/fondo2.jpg';
import fondo4 from '../images/fondo4.jpg';
import fondo3 from '../images/fondo3.jpg';

class Carousel extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="background">

            <div id="Carousel" className="carousel" className="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={fondo3} className="d-block w-100 " alt="fondo" />
                </div>
                <div className="carousel-item">
                    <img src={fondo1} className="d-block w-100" alt="fondo" />
                </div>
                <div className="carousel-item">
                    <img src={fondo4} className="d-block w-100" alt="fondo" />
                </div>
            </div>
             <a class="carousel-control-prev" href="#Carousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Back</span>
  </a>
  <a class="carousel-control-next" href="#Carousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
           
        </div>
        </div>
          </React.Fragment>
        );
    }
}
export default Carousel;