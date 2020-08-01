import React, { useState, useEffect } from "react";
import JobSummary from "./display/JobSummary";
import Loader from "./Loader";
const jobsUrl = "https://jobs.github.com/positions.json";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export default function Main() {
  const [jobs, setJobs] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const url = proxyUrl + jobsUrl;
    async function fetchJobs() {
      setIsLoading(true)
      try {
        const jobs = await fetch(url).then(response => response.json());
        setJobs(jobs);
        setIsLoading(false)
      } catch (error) {
        setIsError(true);
      }
    }
    fetchJobs();
  }, []);
  return (
    <section className="main-section">
      {!isError && !isLoading && <JobSummary jobs={jobs} />}
      {isLoading && !isError && <Loader />}
      {isError && (
        <p className = "error-message">
          Can't retrieve data at the moment! <span role = "img" aria-label = "crying emoji">😭</span>
        </p>
      )}
    </section>
  );
}
