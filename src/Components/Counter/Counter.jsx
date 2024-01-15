import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';

const Counter = ({initial, stock, add, product}) => {
   const { addToCart } = useCartContext();
   const [count, setCount] = useState(parseInt(initial));
   const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);
   
   return (
      <>
      <div className='counter-container'>
         <button disabled={count <= 0} onClick={decrease} className='remove-qty'>-</button>
            <h5>{count}</h5>
         <button disabled={count >= stock} onClick={increase} className='add-qty'>+</button>
         </div>
         <div>
            <button disabled={stock <= 0} onClick={() => addToCart(product) + add(count)} id="addToCart">
               Add to cart
            </button>
            </div>
            <div id="buy-now">
            <Link to={'/cart'} disabled={stock <= 0} onClick={() => addToCart(product) + add(count)} className='buy-now'>
               BUY NOW
            </Link>
         </div>
      </>
   );
}
export default Counter;