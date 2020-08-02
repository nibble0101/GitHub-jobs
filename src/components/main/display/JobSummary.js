import React from "react";
import JobHighlights from "./JobHighlights";
import LoadMore from "./LoadMore";
import MainLink from "./MainLink";

export default function JobDisplay(props) {
  const { jobs } = props;
  return (
    <React.Fragment>
      {jobs.map(job => {
        return (
          <div className="job-wrapper" key={job.id}>
            <JobHighlights
              type={job.type}
              company={job.company}
              location={job.location}
              title={job.title}
              created_at = {job.created_at}
              company_url = {job.company_url}
            />
            <MainLink company = {job.company} title = {job.title} job = {job} />
          </div>
        );
      })}
      {!props.isLastPage && <LoadMore pageHandle = {props.pageHandle} />}
    </React.Fragment>
  );
}
