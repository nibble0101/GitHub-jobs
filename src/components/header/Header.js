import React from "react";
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <header className="header">
      <p className="github-logo">
        <a href = "https://github.com/">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
      </p>
      <h1 className="header-text"> GitHub Jobs </h1>
     <p> <Link to = "/other"> Other Jobs </Link> </p>
    </header>
  );
}
