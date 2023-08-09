import React from "react";
import aboutStyle from "./About.module.css";

export default function About() {
  return (
    <div className={aboutStyle.container}>
      <h1 className={aboutStyle.aboutMe}>¿Quienes Somos?</h1>
      <h2>
        CG Latam Hosting es una empresa líder en el campo del hosting de
        servidores para Counter-Strike 1.6. Nuestro objetivo es proporcionar a
        los jugadores de toda la región, desde Ecuador hasta América del Norte,
        una plataforma confiable y de alto rendimiento para disfrutar del juego
        en línea.
      </h2>
      <h2>
        Estamos ubicados en Miami, lo que nos permite ofrecer una baja latencia
        y una conexión estable para una experiencia de juego sin problemas.
        Nuestros servidores están equipados con plugins importantes como reHDLS,
        que mejora la calidad del sonido, Reunion, que optimiza los protocolos
        de comunicación, y AMXXmod, que permite la personalización del servidor.
      </h2>
      <h2>
        Confía en CG Latam Hosting para obtener un servicio excepcional y una
        experiencia de juego inigualable en CS 1.6."
      </h2>
    </div>
  );
}
