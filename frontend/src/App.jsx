import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import ProductDetail from "./pages/ProductDetail";
import { Layout } from "./components/Layout";
import { CartProvider } from "./context/CartContext";
import { LogProvider } from "./context/LogContext";

const App = () => {
  return (
    <LogProvider>
      <CartProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/error" element={<ErrorPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SingUp />} />
              <Route path="/product-detail/:id" element={<ProductDetail />} />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </LogProvider>
  );
};

export default App;
