import JobCard from "../components/JobCard";
import Button from "../components/ui/button";
import { Plus } from "lucide-react";

export default function JobMarketplace({
  jobs,
  loading,
  onJobClick,
  onPostTaskClick,
}) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-xl font-bold mb-4">Available Jobs</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {!loading &&
          jobs?.map((job) => (
            <JobCard key={job.id} job={job} onClick={onJobClick} />
          ))}
      </div>

      {onPostTaskClick && (
        <Button
          onClick={onPostTaskClick}
          className="fixed bottom-6 right-6 rounded-full p-4 bg-blue-400 hover:bg-blue-500 cursor-pointer flex items-center justify-center transition-all group"
        >
          <Plus
            size={24}
            className="transition-transform duration-500 ease-in-out group-hover:rotate-360"
          />
          <span className="font-bold ml-2">Post A Task</span>
        </Button>
      )}
    </div>
  );
}
