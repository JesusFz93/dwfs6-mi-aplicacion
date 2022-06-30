import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Title from "../components/Title";

const HomePage = () => {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      nombre: "Tarea 1",
    },
    {
      id: 2,
      nombre: "Tarea 2",
    },
    {
      id: 3,
      nombre: "Tarea 3",
    },
  ]);

  const imprimirTareas = () => {
    console.log(tareas);
  };

  const saludar = () => {
    console.log("Saludos UCamper ");
  };

  // saludar(nombre);

  const eventos = (e) => {
    console.log(e);
  };

  return (
    <>
      <NavBar />
      <Title nombre="Home" />
      <button
        id="btnSaludar"
        type="button"
        className="btn btn-primary"
        onClick={imprimirTareas}
      >
        Funcion sin parametros
      </button>
      <button
        id="btnSaludar"
        type="button"
        className="btn btn-primary principal"
        onClick={saludar}
      >
        Funcion sin parametros
      </button>

      <button
        id="btnSaludar"
        type="button"
        className="btn btn-primary principal"
        onClick={(event) => eventos(event)}
      >
        Enviar eventos
      </button>

      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>{tarea.nombre}</li>
        ))}
      </ul>

      <Footer />
    </>
  );
};

export default HomePage;
