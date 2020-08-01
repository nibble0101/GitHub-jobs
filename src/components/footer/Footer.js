import React from "react";
export default function Footer() {
  const date = new Date();
  return (
    <footer className="footer">
      <p className="date"> Retrieved on: {date.toLocaleString()} </p>
      <p className="source">
        Source: <a href="https://jobs.github.com/"> GitHub Jobs </a>
      </p>
    </footer>
  );
}
