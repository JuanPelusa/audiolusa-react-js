import {useState} from 'react';

function Counter() {
   const [counter, setCounter] = useState(1);
   return (
      <div className='counter-container'>
         <button onClick={() => setCounter(counter - 1)} className='remove-qty'>-</button>
            <h5>{counter}</h5>
         <button onClick={() => setCounter(counter + 1)} className='add-qty'>+</button>
      </div>
   );
}
export default Counter;