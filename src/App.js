import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/containers/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import MyProvider from './context/CartContext';
import Checkout from './components/Checkout';

function App() {

  return ( <>
    <div className="App"> 
    <h1> Pastas Lau Estilo Casero</h1>    
      <BrowserRouter>
      <MyProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
{        <Route path="checkout" element={<Checkout/>} />}
      </Routes>
      <Footer />
      </MyProvider>
      </BrowserRouter>

    
    </div> 
    </>
  );
}

export default App;
