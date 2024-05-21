import React from "react";

function Tabla({ bookData }) {
  return (
    <div className="table-view">
      <table>
        <thead>
          <tr className="titulos">
            <th>Índice</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Género</th>
            <th>Contenido</th>
          </tr>
        </thead>
        <tbody>
          {bookData.map((book, index) => (
            <tr
              key={index}
              className={
                index === bookData.length - 1
                  ? "amarillo"
                  : index % 2 === 0
                  ? "verde"
                  : "rojo"
              }
            >
              <td>{index + 1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td className="table-content">{book.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
