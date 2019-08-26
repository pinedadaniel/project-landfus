import React from 'react';
import './Styles/HomeStyles.css';
import Carousel from '../components/CarouselComponent';
import Zindex from '../components/zIndexComponent';

class Home extends React.Component {
    render() {
        return (
           <React.Fragment>
               <div className='home'>
                  <Carousel/>     
                  <Zindex/>        
                 
         
               </div>
           </React.Fragment>
        );
    }
}
export default Home;