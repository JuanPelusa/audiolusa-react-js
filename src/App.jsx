import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'

import Footer from './Components/Footer/Footer'
import Error from './Components/Error/Error'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailcontainer'
import Cart from './Components/Cart/Cart'
import { CheckOut } from './Components/CheckOut/CheckOut'
import CartProvider from './Components/Context/CartContext'
import Services from './Components/Services/Services'
import AboutUs from './Components/AboutUs/AboutUs'
import Contact from './Components/Contact/Contact'
import Parent from './Components/Parent/Parent'
import ParentList from './Components/ParentList/ParentList'
import Sign from './Components/Sign/Sing'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
              <Routes>
                <Route path={'/'} element={ <Parent /> } />
                  <Route path={'/category/:id'} element={ <ParentList /> } />
                    <Route path={'/item/:id'} element={ <ItemDetailContainer /> } />
                    <Route path={'/services'} element={<Services />} /> 
                      <Route path={'/about'} element={<AboutUs />} />
                        <Route path={'/contact'} element={<Contact />} />
                      <Route path={'/sign'} element={<Sign />} />
                    <Route path={'/cart'} element={ <Cart /> } />
                  <Route path={'/checkout'} element={<CheckOut />} />                 
                <Route path={'*'} element={ <Error /> } />
              </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
