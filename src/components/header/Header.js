import React from "react";

export default function Header() {
  return (
    <header className="header">
      <p className="github-logo">
        <a href = "https://github.com/">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
      </p>
      <h1 className="header-text"> GitHub Jobs </h1>
      <p className="social-media">
        Share on:
        <a href = "https://www.facebook.com/">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href = "https://twitter.com/?lang=en">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href = "https://www.whatsapp.com/">
          <i className="fa fa-whatsapp" aria-hidden="true"></i>
        </a>
      </p>
    </header>
  );
}
