import { useState } from 'react'
import SignModaL from './Components/SignModal/SignModal' 
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <NavBar />
      <SignModaL />
      <ItemListContainer greetings= 'Welcome to Audiolusa' />
      <Footer />
    </>
  )
}

export default App
