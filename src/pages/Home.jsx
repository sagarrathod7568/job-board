import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import JobCard from "../components/JobCard";
import { getJobs } from "../services/jobService";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const jobs = useMemo(() => getJobs(), []);
  const resultsRef = useRef(null);
  const { pathname } = useLocation();

  const handleSearch = (query) => {
    setSearchTerm(query);

    requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const filteredJobs = useMemo(() => {
    const query = searchTerm.toLowerCase();

    if (!query) {
      return jobs;
    }

    return jobs.filter((job) => {
      const searchableText = [
        job.title,
        job.company,
        job.location,
        job.type,
        job.experience,
        job.salary,
        job.description,
        ...job.skills,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [jobs, searchTerm]);

  useEffect(() => {
    if (pathname === "/jobs") {
      requestAnimationFrame(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [pathname]);

  return (
    <>
      <Hero onSearch={handleSearch} />

      <section id="jobs" ref={resultsRef} className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex justify-between items-center mb-10">

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Latest Jobs
          </h2>

          <p className="text-gray-500 dark:text-slate-400">
            {filteredJobs.length} Jobs Available
          </p>

        </div>

        {filteredJobs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
              />
            ))}

          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              No data found
            </h3>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Try searching by job title, company, location, or skill.
            </p>
          </div>
        )}

      </section>
    </>
  );
};

export default Home;
