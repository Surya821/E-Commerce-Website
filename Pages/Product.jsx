import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../Components/Breadcrums/Breadcrum';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import {DescriptionBox} from'../Components/DescriptionBox/DescriptionBox.jsx'
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts.jsx';

export const Product = () => {

  const {all_Product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_Product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product = {product}  /> 
      <ProductDisplay product= {product} />
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}
