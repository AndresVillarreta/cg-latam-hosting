import React from "react";
import styleHome from "./Home.module.css";
import logo from "../../source/logo.jpg";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import carousel1 from "../../source/carousel1.jpg";
import carousel2 from "../../source/img2.webp";
import carousel3 from "../../source/img3.jpg";
import withAutoplay from "react-awesome-slider/dist/autoplay";

export default function Home(props) {
  const AutoPlaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className={styleHome.container}>
      <div className={styleHome.presentation}>
        <h1>CG LATAM HOSTING</h1>
        <h2>llevando tu servidor CS 1.6 al siguiente nivel.</h2>
      </div>
      <AutoPlaySlider
        className={styleHome.slider}
        play={true}
        interval={5000}
        cancelOnInteraction={false}
      >
        <div data-src={carousel1} />
        <div data-src={carousel2} />
        <div data-src={carousel3} />
      </AutoPlaySlider>
      <section className={styleHome.infoSection}>
        <div className={styleHome.textSection1}>
          <h3>
            En CG Latam Hosting, nos especializamos en brindar servicios de
            hosting de CS 1.6 de alta calidad para jugadores y comunidades de
            América Latina. Nuestro objetivo es ofrecer una experiencia de juego
            fluida y sin complicaciones al proporcionar servidores ubicados
            estratégicamente en Miami, garantizando una baja latencia y una
            conexión estable para jugadores de toda la región.
          </h3>
          <div id={styleHome.imgT1}></div>
        </div>
        <div className={styleHome.textSection2}>
          <h3>
            Nos enorgullece ofrecer una solución completa para tus necesidades
            de hosting de CS 1.6. Nuestros servidores están preparados y
            optimizados para que los usuarios no tengan que preocuparse por la
            configuración técnica. Incluimos importantes plugins como reHLDS,
            AMXXmod y Reunion, que son fundamentales para el funcionamiento y la
            administración de los servidores. Además, nos aseguramos de que
            todos los servidores cuenten con los plugins esenciales para brindar
            una experiencia de juego enriquecedora.
          </h3>
          <div id={styleHome.imgT2}></div>
        </div>
        <div className={styleHome.lastText}>
          <h3>
            En CG Latam Hosting, nos destacamos por nuestro compromiso con la
            calidad y el soporte al cliente. Nuestro equipo de expertos está
            disponible para responder a tus preguntas, brindarte asistencia
            técnica y asegurarse de que tu experiencia con nuestro hosting sea
            excepcional. Además, ofrecemos planes flexibles y escalables para
            adaptarnos a las necesidades de tu comunidad, ya sea que estés
            buscando un servidor pequeño para un grupo de amigos o una solución
            más robusta para una comunidad en crecimiento.
          </h3>
        </div>
      </section>
    </div>
  );
}
