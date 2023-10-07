import "./Emogipedia.css";
import React from "react";
import Topic from "../Molecules/Topic";
import emogi from "../../emogis";

export default function Emogipedia() {
  return (
    <div className="emogipedia">
      <>
        <header>
          <h1>Emogipedia</h1>
        </header>
      </>
      <>
        {emogi.map((emogis, index) => (
          <>
            <Topic
              nombre={emogi[index].nombre}
              description={emogi[index].desciption}
              use={emogi[index].useFor}
              src={emogi[index].img}
              alt={emogi[index].nombre}
              title={emogi[index].nombre}
            />
          </>
        ))}
      </>
      <>
        <footer>
          <p>Daniel Cardona </p>
          <b>fuentes:</b>
          <ul>
            <li>
              <a
                href="https://emojiterra.com/es/cara-que-babea/"
                target="_blank"
                rel="noreferrer"
              >
                Emogitierra.com
              </a>
            </li>
            <li>
              <a
                href="https://emojipedia.org/es"
                target="_blank"
                rel="noreferrer"
              >
                Emogipedia.org
              </a>
            </li>
          </ul>
        </footer>
      </>
    </div>
  );
}
