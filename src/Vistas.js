import React, { useEffect, useState } from "react";
import axios from "axios";
import Targetas from "./Targetas";
import Tablas from "./Tabla";
import "./styles.css";

function WelcomePage({ view, onViewChange, onLogout }) {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    fetchBookData();
  }, []);

  const fetchBookData = async () => {
    try {
      const response = await axios.get(
        "https://fakerapi.it/api/v1/texts?_quantity=200&_characters=200&_locale=es_ES"
      );
      setBookData(response.data.data);
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  };

  const handleViewChange = () => {
    onViewChange();
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <div>
    
      <nav>
        <div className="button-container">
          <button className="buttonVista" onClick={handleViewChange}>
            Cambiar vista
          </button>
          <button className="buttonCerrar" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </nav>

      {view === "cards" ? (
        <div className="card-view">
          {bookData.map((book, index) => (
            <Targetas
              key={index}
              index={index}
              title={book.title}
              author={book.author}
              genre={book.genre}
              content={book.content}
              className={index === bookData.length - 1 ? "yellow" : ""}
            />
          ))}
        </div>
      ) : (
        <Tablas bookData={bookData} />
      )}
    </div>
  );
}

export default WelcomePage;
