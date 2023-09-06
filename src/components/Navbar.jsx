import React from 'react'
import '../App';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <Link to = "/"><h1>React Products App</h1></Link>
            </div>
        <div><Link to = "/cart"><h3>Your Cart</h3></Link></div>

    </div>
  )
}

export default Navbar