import React from "react";

function Targetas({ index, title, author, genre, content }) {
  const getClassByIndex = (index) => {
    if (index % 2 === 0) return "verde";
    if (index % 2 !== 0) return "rojo";
  };

  return (
    <div className={`card ${getClassByIndex(index)}`}>
      <h3>{title}</h3>

      <p>
        <strong>Autor:</strong> {author}
      </p>
      <p>
        <strong>Género:</strong> {genre}
      </p>
      <p className="card-content">{content}</p>
    </div>
  );
}

export default Targetas;
