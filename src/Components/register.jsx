import React, { useState } from "react";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Usuario registrado con éxito");
    };

    return (
        <div>
            <h2>Registro</h2>
            <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Registrarse</button>
        </div>
    );
}

export default Register;
