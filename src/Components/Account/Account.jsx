import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/config';
const currencyType = "usd";

const Account = () => {
  const [userData, setUserData] = useState(null);
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
    const authUser = await new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        resolve(user);
        unsubscribe();
        });
    });

        if (authUser) {
            const db = getFirestore();
            const userRef = collection(db, 'users');
            const userQuery = query(userRef, where('uid', '==', authUser.uid));

        try {
            const querySnapshot = await getDocs(userQuery);

            if (!querySnapshot.empty) {
                querySnapshot.forEach((doc) => {
                setUserData(doc.data());
                });
            } else {
                console.log('No matching user documents.');
                }
            } 
            catch (error) {
            console.error('Error getting user documents: ', error);
            }
        }
    };

    const fetchOrderData = async () => {
    const authUser = await new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        resolve(user);
        unsubscribe();
        });
    });

        if (authUser) {
            const db = getFirestore();
            const ordersRef = collection(db, 'orders');
            const orderQuery = query(ordersRef, where('userId', '==', authUser.uid));

            try {
            const querySnapshot = await getDocs(orderQuery);

            if (!querySnapshot.empty) {
                const ordersData = [];
                querySnapshot.forEach((doc) => {
                ordersData.push({id: doc.id, ...doc.data()});
                });
                setOrderData(ordersData);
            } else {
                console.log('No matching order');
                }
            } 
            catch (error) {
            console.error('Error getting order', error);
            }
        }
    };

        fetchUserData();
        fetchOrderData();
    }, []);

    return (
        <div className='container account'>
            <div>
            <h2>Account info</h2>
            </div>
            <div className='product-card-detail' style={{flexDirection: 'column', alignItems: 'center', margin: '30px 0px 20px 0px'}}>
                <div>
                {userData && (
                    <div>
                        <p>Name:</p>
                            <span>{userData.name}</span>
                                <p>Lastname:</p>
                                    <span>{userData.lastName}</span>
                                    <p>Phone:</p>
                                    <span>{userData.phone}</span>
                                    <p>Email:</p>
                                <span> {userData.email}</span>
                            <p>User ID:</p>
                        <span> {userData.uid}</span>
                    </div>
                )}
                </div>
            </div>
            <div>
            <h2>My orders</h2>
            </div>
            <div className='product-card-detail' style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', margin: '30px 0px 30rem 0px'}}>
                {orderData && orderData.length > 0 ? (
                orderData.map((order, index) => (
                    <div key={index} style={{margin: '5px 15px 5px 15px'}}>
                        <h5>Order {index + 1} ID:</h5>
                        <h6> {order.id}</h6>
                        {order.items.map((item, itemIndex) => (
                            <div key={itemIndex}>
                                <img src={item.image} alt="" style={{height: '60px', width: '60px'}} />
                                    <p>{item.name}</p>
                                    <p>Quantity: {item.quantity}</p>
                                <p>Total: {currencyType} {order.total}.-</p>
                            </div>
                        ))}
                    </div>
                    ))
                ) : (
                    <p>Nothing around here🙁</p>
                )}
            </div>
        </div>
    );
};

export default Account;

