import React,{useState, useEffect} from 'react'
import '../App';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { PRODUCT_DETAILS_URL } from '../API';

const ProductDetails = () => {

const [product, setProduct] = useState({});

const {id} = useParams();

useEffect(()=>{
axios.get(`${PRODUCT_DETAILS_URL}/${id}`).then(res => {
  setProduct(res.data);
}).catch(err => console.log(err))
},[])

  return (
    <div className='product-details'>
      <div className='product-image'>
        <h2>{product?.name}</h2>
        <img src={product?.image_url} alt ="#"></img>
      </div>
      <div className='product-more'>
        <h2>Description:</h2>
        <p>{product?.description}</p>
        <h2>Average product rating:</h2>
        <p>{product?.average_product_rating}</p>
        <h2>Number of reviews:</h2>
        <p>{product?.num_reviews}</p>
        <h2>SKU:</h2>
        <p>{product?.sku}</p>
        <h2>Price:</h2>
        <p>{product?.list_price}$</p>
      </div>

    </div>
  )
}

export default ProductDetails