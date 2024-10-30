import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        navigate("/login");
    };

    return <button onClick={handleLogout}>Cerrar sesión</button>;
}

export default Logout;
