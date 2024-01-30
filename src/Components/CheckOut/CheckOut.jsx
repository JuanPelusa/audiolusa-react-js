import { useState, useEffect } from "react";
import { Button, Container, Row, Form } from "react-bootstrap";
import { useCartContext } from "../Context/CartContext"
import {getFirestore, collection, addDoc, updateDoc, doc, getDoc} from 'firebase/firestore';
import { useAuth } from "../AuthContext/AuthContext";
import Swal from "sweetalert2";

const currencyType = "usd";

export const CheckOut = () =>{
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [error, setError] = useState('');
  const [orderId, setOrderId] = useState('');
  const [message, setMessage] = useState('');

  const { cart, totalPrice, clearCart, Tax} = useCartContext();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setEmailConfirm(user.email);
    }
  }, [user]);

  const formManager = (event) =>{
    event.preventDefault();
      if((!user && !name) || (!user && !lastname) || (!user && !phone) || (!user && !email) || (!user && !emailConfirm)){
        setError('Please complete all fields');
      return;
    }

    setError('');

  const total = totalPrice();
    const order ={
      items: cart.map((product)=>({
        id: product.id,
        image: product.image,
        name: product.name,
        quantity: product.quantity,
      })),
      total: total,
      date: new Date(),
      name,
      lastname,
      phone,
      email,
      emailConfirm,
      userId: user ? user.uid : null,
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
      . then((docRef)=>{
          setOrderId(docRef.id);
          console.log('Order confirmed:', order);
          console.log('Order ID:', docRef.id);
        clearCart()
        Swal.fire({
          icon: "success",
          title: "Thanks for your purchase!🤩",
          text: `🌟Your order number is: ${docRef.id}🌟`,
          showConfirmButton: false,
          position: 'center',
        }).then(function() {
          window.location = "http://localhost:5173/";
      });
      })
      .catch((error)=>{
        console.log('Order not created', error);
        setError('Order error');
      });
    })
    .catch((error)=>{
      console.log('Stock could not be updated', error);
      setError('Stock not updated');
    });    
    setName('');
    setLastname('');
    setPhone('');
    setEmail('');
    setMessage('');
    setOrderId('')
  }; 

  return(
    <div className="formArea">
      <Container className="formArea">
        <Row id="contact-block" className="single-form g-0" data-aos="zoom-in-up">
          <div className="mb-2 p-2">
            <div id="contact-form">
              <h3>Complete to confirm purchase</h3>
              <h6>{user ? `Buy as ${user.email}` : ''}</h6>
              <div className="form-items">
                <Form onSubmit={formManager}>
                  {cart.map((product)=>(
                    <div key={product.id} className="productsResume">
                      <img src={product.image} alt={product.name} width={35}/>
                      <p>{product.name}</p>
                        <p>Qty: {product.quantity}</p>
                      <p>{currencyType} {product.price + Tax()}.-</p>
                    </div>
                    )
                  )}   
                  <div className="productsResume">
                    <p>Total: </p>
                    <p>{currencyType} {totalPrice() + Tax()}.-</p>
                  </div>  
                  {!user && (         
                    <div className="p-2">
                      <Form.Label className="lab-check form-label">Name</Form.Label>
                      <Form.Control className="input-check form-control sign" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    )} 
                    {!user && (
                      <div className="p-2">
                        <Form.Label className="lab-check form-label">Lastname</Form.Label>
                        <Form.Control className="input-check form-control" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                      </div>
                      )} 
                      {!user && (
                        <div className="p-2">
                          <Form.Label className="lab-check form-label">Phone number</Form.Label>
                          <Form.Control className="input-check form-control" type="number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                        )} 
                        {!user && (
                      <div className="p-2">
                        <Form.Label className="lab-check form-label">Email</Form.Label>
                        <Form.Control className="input-check form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                      </div>
                      )} 
                      {!user && (
                      <div className="p-2">
                        <Form.Label className="lab-check form-label">Confirm Email</Form.Label>
                        <Form.Control className="input-check form-control" type="email" value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)}/>
                      </div>
                      )} 
                    {error && <p>{error}</p>}
                  <div className="form-confirm mb-2">
                    <Button type="submit" className="button">Confirm</Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
