import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "../services/UserAuth";
import logo from "../assets/logo/logo-login.png";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await signOut();
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/login");
      } catch (error) {
        console.error("Error en el cierre de sesión", error);
      }
    };

    logoutUser();
  }, [navigate]);

  return (
    <div className="container h-100 mt-5 ">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black border-0">
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Cerrando sesión...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
