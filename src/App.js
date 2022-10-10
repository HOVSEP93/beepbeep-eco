import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import { Route, Routes } from "react-router-dom";

// import Cart from "./components/Cart";
// import CheckOut from "./components/CheckOut";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/products/:id" element={<ProductDetail />} />
        {/* <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<CheckOut />} /> */}

        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />

        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
