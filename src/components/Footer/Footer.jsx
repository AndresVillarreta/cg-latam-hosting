import React from "react";
import footerStyle from "./footerStyle.module.css";
import { useState } from "react";

export default function Footer() {
  const [spawnCopy, setSpawnCopy] = useState(false);

  const copyClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setSpawnCopy(true);

        setTimeout(() => {
          setSpawnCopy(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error al copiar el texto:", error);
      });
  };
  return (
    <footer>
      <div className={footerStyle.section1}>
        <div className={footerStyle.content}>
          <a>Informacion</a>
          {spawnCopy && (
            <p className={footerStyle.spawnCopy}>Copiado Al Portapapeles</p>
          )}
          <a onClick={() => copyClipboard("correo@correo.com")}>
            Correo: correo@correo.com
          </a>
          <a onClick={() => copyClipboard("+58-123-456-7890")}>
            Celular: +58-123-456-7890
          </a>
          <a onClick={() => copyClipboard("+58-123-456-7890")}>
            Celular2: +58-123-456-7890
          </a>
          <a>CG Latam Hosting</a>
        </div>
      </div>
      <div className={footerStyle.section1}>
        <div className={footerStyle.content}>
          <a>Display1</a>
          <a>Display2</a>
          <a>Display3</a>
          <a>Display5</a>
          <a>Display5</a>
        </div>
      </div>
      <div className={footerStyle.section1}>
        <div className={footerStyle.content}>
          <a>Display1</a>
          <a>Display2</a>
          <a>Display3</a>
          <a>Display5</a>
          <a>Display5</a>
        </div>
      </div>
      <div className={footerStyle.section1}>
        <div className={footerStyle.content}>
          <a>Display1</a>
          <a>Display2</a>
          <a>Display3</a>
          <a>Display5</a>
          <a>Login</a>
        </div>
      </div>
    </footer>
  );
}
