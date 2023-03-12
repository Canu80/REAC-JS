import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Pages/Cart/Cart";
import CartProvider from "./Context/CartProvider";
import "./App.css";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/Cart" element={<Cart />} />
          {/* <Route path="*" element={<div><h1>Esta página no existe</h1></div>} /> */}
        </Routes>
      </CartProvider>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
