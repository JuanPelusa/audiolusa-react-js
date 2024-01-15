import { useState } from "react"
import { useCartContext } from "../Context/CartContext"
import {getFirestore, collection, addDoc, updateDoc, doc, getDoc} from 'firebase/firestore';

const currencyType = "usd";

export const CheckOut = () =>{
      const [name, setName] = useState('');
      const [lastname, setLastname] = useState('');
      const [phone, setPhone] = useState('');
      const [email, setEmail] = useState('');
      const [emailConfirmation, setEmailConfirmation] = useState('');
      const [error, setError] = useState('');
      const [orderId, setOrderId] = useState('');
      const [message, setMessage] = useState('');

     const { cart, totalPrice, removeProduct, clearCart, Tax} = useCartContext();

     const formManager = (event) =>{
      event.preventDefault();
     

     if(!name || !lastname || !phone || !email ||!emailConfirmation ){
      setError('Please complete all the fields');
      return;
     }

     if( email !== emailConfirmation){
      setError('emails not match');
      return;
     }


     const total = totalPrice();
     const order ={
      items: cart.map((product)=>({
        id: product.id,
        name: product.name,
        quantity: product.quantity,
      })),
      total: total,
      date: new Date(),
      name,
      lastname,
      phone,
      email,
     };
     Promise.all(
      order.items.map(async (productOrder)=>{
             const db = getFirestore();
             const productRef = doc(db, 'audiolusa products', productOrder.id);

             const productDoc = await getDoc(productRef);
             const actualStock = productDoc.data().stock;

             await updateDoc( productRef, {
              stock: actualStock - productOrder.quantity,
             });
      })
     )
     .then(()=>{
       const db = getFirestore();
       addDoc(collection(db, 'orders'), order)
       .then((docRef)=>{
        setOrderId(docRef.id);
        clearCart()
       })
      .catch((error)=>{
        console.log('No se pudo crear la orden', error);
        setError('Error en la orden');
      });
     })
     .catch((error)=>{
      console.log('No se puede actualizar el stock', error);
      setError('No se actualizo el stock');
     });    
    
     setName('');
     setLastname('');
     setPhone('');
     setEmail('');
     setEmailConfirmation('');
     setMessage('');
    
};
  return(
          <div className="form-area">
              <div className="container form-area">
                <div id="contact-block" className="row single-form g-0" data-aos="zoom-in-up">
                  <div className="col-sm-12 col-lg-6">
                    <div className="contact-form">
                      <div>
                        <h3>Complete to confirm purchase</h3>
                      </div>
                      <div className="form-items">
                        <form onSubmit={formManager}>
                          {cart.map((product)=>(
                            <div key={product.id} className="productsResume">
                              <p>{''} {product.name}</p>
                              <p>Qty: {product.quantity}</p>
                              <p>{currencyType} {product.price + Tax()}.-</p>
                            </div>
                          )
                          )}
                          
          <div className="form-text mb-2 p-2">
           <label className="lab-check form-label">Name</label>
             <input className="input-check form-control sign" type="text" value={name} onChange={(e) => setName(e.target.value)}
             />
          </div>

          <div className="mb-2 p-2">
           <label className="lab-check form-label">Lastname</label>
             <input className="input-check form-control" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)}
             />
          </div>

          <div className="mb-2 p-2">
           <label className="lab-check form-label">Phone number</label>
             <input className="input-check form-control" type="number" value={phone} onChange={(e) => setPhone(e.target.value)}
             />
          </div>

          <div className="mb-2 p-2">
           <label className="lab-check form-label">Email</label>
             <input className="input-check form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
             />
          </div>

          <div className="mb-2 p-2">
           <label className="lab-check form-label">Confirm email</label>
             <input className="input-check form-control" type="email" value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)}
             />
          </div>


          {error && <p>{error}</p>}
          {orderId && (
            <p id="orderNumber">Thx for your purchase!🤩 Your order number is: <br/> {''} 🌟{orderId}🌟 {''} <br/></p>
          )}
           <div className="form-confirm">
            <button type="submit" className="button">Confirm</button>
           </div>
          </form>
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>

     );
    }