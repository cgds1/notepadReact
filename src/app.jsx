import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import BlocForm from "./Components/blocForm";
import BlocList from "./Components/blocList";
import Login from "./Components/Login";
import Register from "./Components/register";
import Logout from "./Components/Logout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    setIsLoggedIn(!!user);
  }, []);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.length === 0) {
      const defaultUser = { username: "admin", password: "admin123" };
      localStorage.setItem("users", JSON.stringify([defaultUser]));
    }
  }, []);

  
  return (
    <Router>
      <main>
        {isLoggedIn ? (
          <>
            <BlocForm />
            <BlocList />
            <Logout />
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </main>
    </Router>
  );
}

export default App;
