import JobCard from "../components/JobCard";

export default function WorkerJobFeed({ jobs, loading, onJobClick }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-xl font-bold mb-4">Jobs Feed</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {!loading &&
          jobs.map((job) => (
            <JobCard key={job.id} job={job} onClick={onJobClick} />
          ))}
      </div>
    </div>
  );
}
