import { useNavigate } from "react-router-dom";
import { useLog } from "../context/AuthContext";
import { useEffect } from "react";

const Profile = () => {
  const { user } = useLog();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
        navigate("/login");
    }
  }, []);
  return (
    <div className="container ">
      {user && (
        <div className="profile my-5 py-5">
          <h1>Perfil de {user.username}</h1>
          <div className="user-details">
            <p>
              <strong>Nombre:</strong> {user.first_name}
            </p>
            <p>
              <strong>Apellido:</strong> {user.last_name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
          <button className="btn btn-primary">Reiniciar Contraseña</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
