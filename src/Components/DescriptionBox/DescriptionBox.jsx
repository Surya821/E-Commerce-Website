import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews</div>
        </div>
    <div className="descriptionbox-description">
        <p>
            An e-commerce website is an online platform that facilitates the buying and selling of products of services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products interact with customers and conduct transaction without the need for a physical presence. -E-commmerce websites have gained immense popularity due to their convenience accessibility and the global reach they offer.
        </p>
        <p>
            E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g. size, colors). Each product usually has its own dedicated page with a relevant informations.
        </p>
    </div>
    </div>
  )
}
