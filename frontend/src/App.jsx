import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Lens from "./Components/Lens/Lens";
import Tools from "./Components/Tools/Tools";
import Footer from "./Components/Footer/Footer";
import Decorate from "./Components/Decorate/Decorate";
import Product from "./Components/Product/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/lens" element={<Lens />}></Route>
          <Route path="/tools" element={<Tools />}></Route>
          <Route path="/decorate" element={<Decorate />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
