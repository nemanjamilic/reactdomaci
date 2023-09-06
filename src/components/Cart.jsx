import React from 'react'
import '../App';
import { useAppContext } from './context/appContext';


const Cart = () => {


  const {cart, addToCart, removeFromCart} = useAppContext();

  console.log("cart is: ", cart);

  const cartChecker = (id)=>{
    const boolean = cart.some((product) => product.id === id);
    return boolean;
  }



  return (
    <div className='cart'>
      {cart.length > 0 ? (
        cart.map((product) => (
          <div key={product.id} className="product">
            <div>
              <h4>{product.name}</h4>
            </div>
            <div>
              <img src={product.image_url} alt="#" />
            </div>
            <div>
              <h4>{product.list_price}$</h4>
            </div>
            {cartChecker(product.id) ? (
              <div>
                <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
              </div>
            ) : (
              <div>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            )}
          </div>
        ))
      ) : (
        <h1>You don't have any products in the cart yet!</h1>
      )}
    </div>
  );
  
      }
export default Cart