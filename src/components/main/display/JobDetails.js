import React from "react";
import JobHighlights from "./JobHighlights";
export default function JobDetails(props) {
  const{job} = props.location.state
  return (
    <section className="job-details">
      <JobHighlights
      {...job}
      />
      <section
        className="job-description"
        dangerouslySetInnerHTML={{ __html: job.description }}
      />
    </section>
  );
}
