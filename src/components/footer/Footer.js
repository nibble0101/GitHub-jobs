import React from "react";
export default function Footer() {
  const date = new Date();
  return (
    <footer className="footer">
      <p className="date">
        Retrieved on:{" "}
        <span>
          {" "}
          {date.toDateString()}, {date.toLocaleTimeString()}
        </span>
      </p>
      <div className="wrapper">
        <p className="source">
          Source:{" "}
          <a href="https://jobs.github.com/">
            GitHub Jobs <i class="fa fa-external-link" aria-hidden="true"></i>
          </a>
        </p>
        <p className="profile-link">
          By:{" "}
          <a href="https://github.com/nibble0101">
            Joseph Mawa <i class="fa fa-external-link" aria-hidden="true"></i>
          </a>
        </p>
        <p className="social-media">
          Share:
          <a href="https://www.facebook.com/">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/?lang=en">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://www.whatsapp.com/">
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </footer>
  );
}
