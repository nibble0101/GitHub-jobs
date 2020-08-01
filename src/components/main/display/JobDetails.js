import React from "react";
import JobHighlights from "./JobHighlights";
import Reveal from "react-reveal/Reveal";
export default function JobDetails(props) {
  const { job } = props.location.state;
  return (
    <section className="job-details">
      <JobHighlights {...job} />
      <Reveal>
        <section
          className="job-description"
          dangerouslySetInnerHTML={{ __html: job.description }}
        />
      </Reveal>
    </section>
  );
}
