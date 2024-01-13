import CartIcon from '/images/cart_icon.png'
import { useCartContext } from "../Context/CartContext";
import { Link } from 'react-router-dom';


const CartWidget = () => {
  const {totalProducts, cart} = useCartContext();
  return (
    <div className="container">
      <Link to={'/cart'} className="nav-link"><img className="navbar-cart" 
                src={CartIcon} alt="" />              
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalProducts() ||cart}</span>
      </Link>
    </div>
  );
};

export default CartWidget;