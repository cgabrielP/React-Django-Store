import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import ProductDetail from "./pages/ProductDetail";
import { Layout } from "./components/Layout";
import { CartProvider } from "./context/CartContext";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import { AuthProvider } from "./context/AuthContext";
import CreateOrder from "./pages/CreateOrder";

const App = () => {
  const isAuthenticated = () => {
    return localStorage.getItem("accessToken") !== null;
  };
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<ErrorPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SingUp />} />
              <Route path="/product-detail/:id" element={<ProductDetail />} />
              {isAuthenticated && <Route path="/logout" element={<Logout />} />}
              {isAuthenticated && (
                <Route path="/create" element={<CreateOrder />} />
              )}
              {isAuthenticated && (
                <Route path="/profile" element={<Profile />} />
              )}
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
