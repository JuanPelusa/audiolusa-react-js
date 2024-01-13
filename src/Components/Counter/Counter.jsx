import {useState, useEffect} from 'react';

const Counter = ({initial, stock, add}) => {
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
            <button disabled={stock <= 0} onClick={() => add(count)} id="add">
               BUY NOW
            </button>
         </div>
      </>
   );
}
export default Counter;