import React from "react";
import { Link } from "react-router-dom";

export default function LinkComponent(props) {
  return (
    <>
      <Link to={props.to}>
      <li className="nav-item active">
        <a className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>{props.name}</span></a>
      </li>
    </Link>
    </>
  )
};