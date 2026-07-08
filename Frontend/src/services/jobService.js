import jobs from "../data/jobs";

const POSTED_JOBS_KEY = "postedJobs";

const getPostedJobs = () => {
  const postedJobs = localStorage.getItem(POSTED_JOBS_KEY);

  if (!postedJobs) {
    return [];
  }

  try {
    return JSON.parse(postedJobs);
  } catch {
    return [];
  }
};

export const getJobs = () => {
  return [...getPostedJobs(), ...jobs];
};

export const getJobById = (id) => {
  return getJobs().find((job) => String(job.id) === String(id));
};

export const addPostedJob = (job) => {
  const postedJobs = getPostedJobs();
  const newJob = {
    ...job,
    id: `posted-${Date.now()}`,
  };

  localStorage.setItem(
    POSTED_JOBS_KEY,
    JSON.stringify([newJob, ...postedJobs]),
  );

  return newJob;
};
