import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/authStyle.css"; 

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(
            (user) => user.username === username && user.password === password
        );
        if (user) {
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            alert("Inicio de sesión exitoso");
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    };
    
   return (
    <div className="auth-container">
      <h2>Inicio de Sesión</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
      <button onClick={() => navigate("/register")}>Registrarse</button>
    </div>
  );
}

export default Login;