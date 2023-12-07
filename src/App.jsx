import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home' 
import Footer from './Components/Footer/Footer'
import Error from './Components/Error/Error'
import CartWidget from './Components/CartWidget/CartWidget'
import Home2 from './Components/Home2/Home2'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailcontainer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Home />
        <Routes>
          <Route path={'/'} element={ <ItemListContainer /> } />
          <Route path={'/category/:id'} element={ <ItemListContainer /> } />
          <Route path={'/item/:id'} element={ <ItemDetailContainer/> } />
          <Route path={'/cart'} element={ <CartWidget /> } />
          <Route path={'*'} element={ <Error /> } />
      </Routes>
      <Home2 />
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
