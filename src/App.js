import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Notfound from "./component/Notfound/Notfound";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Blog from "./component/Blog/Blog";
import Checkout from "./component/Checkout/Checkout";
import Requireauth from "./component/Required/Requireauth";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route
          path="/checkout"
          element={
            <Requireauth>
              <Checkout />
            </Requireauth>
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
