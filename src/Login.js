import React, { useState, useEffect } from "react";
import "./styles.css";

function Login({ onLogin }) {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [apiUsername, setApiUsername] = useState("");
  const [apiPassword, setApiPassword] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data.results);

        if (data.results.length > 0) {
          setApiUsername(data.results[0].login.username);
          setApiPassword(data.results[0].login.password);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleLogin = () => {
    if (username && password) {
      if (username === apiUsername && password === apiPassword) {
        onLogin();
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } else {
      alert("Por favor ingrese usuario y contraseña");
    }
  };

  return (
    <div className="login-form-container">
      <h2 className="textLogin">Login</h2>
      <form className="login-form">
        <div className="form-group">
          <input
            type="text"
            id="username"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="login-button" onClick={handleLogin}>
          Iniciar sesión
        </button>
      </form>
      <div className="api-data">
        {posts.map((post, index) => (
          <div key={index}>
            <h6>User: {post.login.username}</h6>
            <h6>Password: {post.login.password}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Login;
