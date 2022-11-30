import React from 'react'
import "./Product.css"

function Product({title,image,cart}) {
    return (
        <div className='product'>
          
            <div className="product_info ">
         
               <p><b>{title}</b></p>
            </div>
            <img src={image} alt=""/>
            <button>Explore Now</button>
          
        </div>
          
    )
}

export default Product
