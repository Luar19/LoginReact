import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginForm from "./Login";
import WelcomePage from "./Vistas";
import "./styles.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState("cards");
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchBookData();
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleViewChange = () => {
    setView((prevView) => (prevView === "cards" ? "table" : "cards"));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setBookData([]);
  };

  const fetchBookData = async () => {
    try {
      const response = await axios.get(
        "https://fakerapi.it/api/v1/texts?_quantity=5&_characters=200"
      );
      setBookData(response.data.data);
    } catch (error) {
      console.error("Error al recuperar datos:", error);
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        {!isLoggedIn ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <WelcomePage
            view={view}
            onViewChange={handleViewChange}
            onLogout={handleLogout}
            bookData={bookData}
          />
        )}
      </div>
    </div>
  );
}

export default App;
