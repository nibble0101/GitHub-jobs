import React from "react";

export default function JobHighlights(props) {
  return (
    <section className="job-highlights">
      <h2 className="job-title"> {props.title} </h2>
      <div className="main-highlight">
        <p className="job-type">
          <span className="label"> Job type: </span> {props.type}
        </p>
        <p className="company-name">
          <span className="label"> Company: </span>
          <a href={props.company_url}> {props.company} </a>
        </p>
        <p className="company-location">
          <span className="label"> Location: </span> {props.location}
        </p>
        <p className="date-posted">
          <span className="label"> Posted on: </span> {props.created_at}
        </p>
      </div>
    </section>
  );
}
