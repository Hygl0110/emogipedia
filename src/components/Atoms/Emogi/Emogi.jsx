import "./Emoji.css";
import React from "react";

export default function Emogi(props) {
  return (
    <>
      <img
        className="emogi"
        src={props.src}
        alt={props.alt}
        title={props.title}
      />
    </>
  );
}
