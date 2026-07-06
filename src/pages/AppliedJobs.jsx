import { Link } from "react-router-dom";
import JobCard from "../components/JobCard";
import { getAppliedJobs } from "../services/appliedJobsService";

const AppliedJobs = () => {
  const appliedJobs = getAppliedJobs();

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col gap-3 mb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Applied Jobs
          </h1>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Jobs you applied for will appear here.
          </p>
        </div>

        <Link
          to="/jobs"
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Browse Jobs
        </Link>
      </div>

      {appliedJobs.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appliedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-800">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            No applied jobs yet
          </h2>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Open a job and click Apply Now to add it here.
          </p>
        </div>
      )}
    </section>
  );
};

export default AppliedJobs;
