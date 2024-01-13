import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home' 
import Footer from './Components/Footer/Footer'
import Error from './Components/Error/Error'
import Home2 from './Components/Home2/Home2'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailcontainer'
import Cart from './Components/Cart/Cart'
import { CheckOut } from './Components/CheckOut/CheckOut'
import CartProvider from './Components/Context/CartContext'



function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
            <Home />
              <Routes>
                <Route path={'/'} element={ <ItemListContainer /> } />
                <Route path={'/category/:id'} element={ <ItemListContainer /> } />
                <Route path={'/item/:id'} element={ <ItemDetailContainer /> } />
                <Route path={'/cart'} element={ <Cart /> } />
                <Route path={'/checkout'} element={<CheckOut />} />
                <Route path={'*'} element={ <Error /> } />
              </Routes>
            <Home2 />
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
