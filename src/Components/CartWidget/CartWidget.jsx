import CartIcon from '/images/cart_icon.png'
import { useCartContext } from "../Context/CartContext";
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const CartWidget = () => {
  const {totalProducts, cart} = useCartContext();
  return (
    <Container>
      <Link to={'/cart'} className="nav-link cartIcon"><img className="navbar-cart" 
                src={CartIcon} alt="" height={25} />              
        <span className="position-absolute top-20 translate-middle badge rounded-pill bg-danger">{totalProducts() ||cart}</span>
      </Link>
    </Container>
  );
};

export default CartWidget;