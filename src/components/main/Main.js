import React, { useState, useEffect, useCallback } from "react";
import JobSummary from "./display/JobSummary";
import Loader from "./Loader";
const jobsUrl = "https://jobs.github.com/positions.json?page=";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export default function Main() {
  const [jobs, setJobs] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const pageHandle = useCallback((e) => {
    setPage((prevPage) => prevPage + 1);
  }, []);
  useEffect(() => {
    const url = proxyUrl + jobsUrl + page;
    async function fetchJobs() {
      setIsLoading(true);
      try {
        const jobs = await fetch(url).then((response) => response.json());
        if (!jobs.length) {
          setIsLastPage(true);
        } else {
          setIsLastPage(false);
        }
        setJobs((prevJobs) => [...prevJobs, ...jobs]);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    }
    fetchJobs();
  }, [page]);
  return (
    <section className="main-section">
      {!isError && !isLoading && (
        <JobSummary
          jobs={jobs}
          pageHandle={pageHandle}
          isLastPage={isLastPage}
        />
      )}
      {isLoading && !isError && <Loader />}
      {isError && (
        <p className="error-message">
          Can't retrieve data at the moment!{" "}
          <span role="img" aria-label="crying emoji">
            😭
          </span>
        </p>
      )}
    </section>
  );
}
