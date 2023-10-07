import "./Topic.css";
import React from "react";
import Name from "../Atoms/Name/Name";
import Parrafo from "../Atoms/Parrafo/Parrafo";
import Emogi from "../Atoms/Emogi/Emogi";

export default function Topic(props) {
  return (
    <div className="topic">
      <Name nombre={props.nombre} />
      <Parrafo text={props.description} />
      <Parrafo text={props.use} />
      <Emogi src={props.src} alt={props.alt} title={props.title} />
    </div>
  );
}
