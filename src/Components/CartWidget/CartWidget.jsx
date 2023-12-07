import CartIcon from '/images/cart_icon.png'
import { Link } from 'react-router-dom'

function CartWidget({Cart}) {
    return (
        <div className="nav-item" id="seeCart">
            <Link to="./pages/shopping-cart.html" className="nav-link"><img className="navbar-cart" 
                src={CartIcon} alt="" />              
            </Link>
        </div>
    )
}


export default CartWidget
