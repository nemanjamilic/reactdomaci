import React,{useState,useEffect} from 'react'
import '../App';
import {API_URL} from '../API';
import axios from 'axios';
import { useAppContext } from './context/appContext';

const ProductList = () => {

    const [products, setProducts] = useState([]);


    const {cart, addToCart, removeFromCart} = useAppContext();

    console.log("cart is: ", cart);

    const cartChecker = (id)=>{
      const boolean = cart.some((product) => product.id === id);
      return boolean;
    }

    useEffect(()=> {
      axios.get(API_URL).then((res)=>{
        console.log(res.data);
        setProducts(res.data);
      }).catch((err)=> console.log(err))
    },[]);

  return (
    <div className='product-list'>
      {products.map((product)=>(
        <div key = {product.id} className = "product">
          <div><h4>{product.name}</h4></div>
          <div><img src = {product.image_url} alt="#"/></div>
          <div><h4>{product.list_price}$</h4></div>
          {cartChecker(product.id) ? 
          (<div><button onClick={()=> removeFromCart(product.id)}>Remove from Cart</button></div>) : (<div><button onClick={()=> addToCart(product)}>Add to Cart</button></div>)
        }
          
        </div>
      ))}
    </div>
  )
}

export default ProductList