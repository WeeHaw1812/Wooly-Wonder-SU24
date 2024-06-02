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
import ViewDetailDisplay from "./Components/ViewDetailDisplay/ViewDetailDisplay";
import ViewDetail from "./Components/ViewDetail/ViewDetail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/lens" element={<Lens />}></Route>
          <Route path="/lens/:lensId" element={<ViewDetail path={"lens"} />}></Route>
          <Route path="/tools" element={<Tools />}></Route>
          <Route path="/tools/:toolsId" element={<ViewDetail path={"tools"} />}></Route>
          <Route path="/decorate" element={<Decorate />}></Route>
          <Route path="/decorate/:decorateId" element={<ViewDetail path={"decorate"} />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/product/:productId" element={<ViewDetail path={"product"} />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
