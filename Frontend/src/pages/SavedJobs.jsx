import { Link } from "react-router-dom";
import { useState } from "react";
import JobCard from "../components/JobCard";
import { getSavedJobs } from "../services/savedJobsService";

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState(() => getSavedJobs());

  const refreshSavedJobs = () => {
    setSavedJobs(getSavedJobs());
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col gap-3 mb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Saved Jobs
          </h1>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Jobs you bookmarked will appear here.
          </p>
        </div>

        <Link
          to="/jobs"
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Browse Jobs
        </Link>
      </div>

      {savedJobs.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {savedJobs.map((job) => (
            <JobCard key={job.id} job={job} onSavedChange={refreshSavedJobs} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-800">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            No saved jobs yet
          </h2>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Click the bookmark icon on any job to save it here.
          </p>
        </div>
      )}
    </section>
  );
};

export default SavedJobs;
