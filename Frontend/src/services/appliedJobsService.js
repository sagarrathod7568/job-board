import { getJobs } from "./jobService";

const APPLIED_JOBS_KEY = "appliedJobs";

const getAppliedJobIds = () => {
  const appliedJobs = localStorage.getItem(APPLIED_JOBS_KEY);

  if (!appliedJobs) {
    return [];
  }

  try {
    return JSON.parse(appliedJobs);
  } catch {
    return [];
  }
};

export const getAppliedJobs = () => {
  const appliedJobIds = getAppliedJobIds();

  return getJobs().filter((job) =>
    appliedJobIds.some(
      (appliedJobId) => String(appliedJobId) === String(job.id),
    ),
  );
};

export const isJobApplied = (jobId) => {
  return getAppliedJobIds().some(
    (appliedJobId) => String(appliedJobId) === String(jobId),
  );
};

export const saveAppliedJob = (jobId) => {
  const appliedJobIds = getAppliedJobIds();

  if (isJobApplied(jobId)) {
    return;
  }

  localStorage.setItem(
    APPLIED_JOBS_KEY,
    JSON.stringify([...appliedJobIds, jobId]),
  );
};
