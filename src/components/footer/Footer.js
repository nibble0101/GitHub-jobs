import React from "react";
export default function Footer() {
  const date = new Date();
  return (
    <footer className="footer">
      <p className="date"> Retrieved on: {date.toDateString()}, {date.toLocaleTimeString()} </p>
      <p className="source">
        Source: <a href="https://jobs.github.com/"> GitHub Jobs </a>
      </p>
      <p> Coded by: <a href = "https://github.com/nibble0101"> Joseph Mawa </a></p>
    </footer>
  );
}
