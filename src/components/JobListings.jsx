import React from 'react';
// import jobs from '../jobs.json'; This was the old code before using a json server where we are fetching data from a file not in the server
import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

// const JobListings = () => { OLD
// console.log(jobs); we do console logs for checking if it really outputs of what we need
// const recent = jobs.slice(0, 3); OLD
const JobListings = ({ isHome = false }) => {
  // const jobListings = isHome ? jobs.slice(0, 3) : jobs; old code showing only 3 jobs ay HomePage
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect was used to fetch data. The example below is just one of the example of fetching data(Base way of fetching from client side component). There is also another way of fetching data using SWR(Please check this third-party library if goods na ka) it is much easier compare using useEffect base on Brad
  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
