import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainPage } from "../pages/MainPage";
import { closeCart } from "../store/cartSlice";
import { fetchProducts } from "../store/productsSlice";
import { Cart } from "./Cart/Cart";
import { Header } from "./Header/Header";
import { Routes, Route } from "react-router-dom";
import "./index.scss";
import { FavPage } from "../pages/FavPage";
import { ProfilePage } from "../pages/ProfilePage";

function App() {
  const isOpen = useSelector((state) => state.cart.isOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const hideCart = (event) => {
    if (event.target.id !== "cartBg") {
      return;
    }
    dispatch(closeCart());
    document.body.className = "";
  };

  return (
    <div className="wrapper">
      <div
        style={isOpen ? {} : { display: "none" }}
        id="cartBg"
        className="cartBg"
        onClick={(event) => hideCart(event)}
      >
        <Cart />
      </div>
      <div className="container">
        <Header />
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/fav" element={<FavPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
