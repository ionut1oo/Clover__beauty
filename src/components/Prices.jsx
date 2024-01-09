
import React from 'react';
import '../styles/prices.css';

const Prices = () => {
    return (
      <section id='prețuri'>
           <h2 className='price-title'> <strong>Listă de Prețuri</strong>  </h2>
           <h3 className='price-subtitle'>Manichiură</h3>
           <div className='prices'>
           <div className='prices__category'>
            <h4 className='prices__item'>
              Manichiura semipermanentă</h4>
            <h4 className='prices__item'>
              Intretinere Marimi mai mici de 3 </h4> 
            <h4 className='prices__item'>
              Intretinere Marimi mai mici de 3 </h4>  
            <h4 className='prices__item'>Intretinere Slim </h4>
             <h4 className='prices__item'>Constructie Marimi mai mici de 3 </h4>
             <h4 className='prices__item'>Constructie Marimi mai mici de 3 </h4>
             <h4 className='prices__item'>Constructie Slim </h4>
           </div>
           <div className='prices__dots'>
            <h4 className='price__dot'>..........................................................................................................................</h4>
            <h4 className='price__dot'>..........................................................................................................................</h4>
            <h4 className='price__dot'>..........................................................................................................................</h4>
            <h4 className='price__dot'>..........................................................................................................................</h4>
            <h4 className='price__dot'>..........................................................................................................................</h4>
            <h4 className='price__dot'>..........................................................................................................................</h4>
            <h4 className='price__dot'>..........................................................................................................................</h4>
           </div>
           <div className='prices__per-item'>
             <h4 className='item'>100 Ron</h4> 
             <h4 className='item'>120 Ron</h4> 
             <h4 className='item'>140 Ron</h4>
             <h4 className='item'>150 Ron</h4>  
             <h4 className='item'>150 Ron</h4> 
             <h4 className='item'>170 Ron</h4> 
             <h4 className='item'>200 Ron</h4> 
           </div>
          </div> 
       </section>
    )
}

export default Prices;