import React, {useContext} from 'react'
import { ShopContext } from '../context/shopContext'
import cartIcon from '../header/images/cart-icon.png'


const Navbar = () => {

    const { openCart } = useContext(ShopContext)

    return (
        <>  
         <button onClick={() => openCart()}> <img src={cartIcon}/> </button>
        
        </>
    )
}

export default Navbar