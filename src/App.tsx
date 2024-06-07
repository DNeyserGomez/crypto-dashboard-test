import { useState } from 'react'
import './App.css'
import Footer from "./components/Footer";
import Header  from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CoinsList from './components/CoinsList';
import Details from './components/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>    
      <Header />
        <Container fluid="md">
          <Routes>
          <Route path="/" Component={CoinsList}></Route>
          <Route path="/prices" Component={CoinsList}></Route>
          <Route path="/details" Component={Details}></Route>
          </Routes>
        </Container>
      <Footer />
    </>
  )
}

export default App
