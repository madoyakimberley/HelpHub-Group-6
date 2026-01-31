import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import PostTaskModal from "./components/PostTaskModal";
import PlaceBidModal from "./components/PlaceBidModal";

import JobMarketplace from "./pages/JobMarketplace";
import WorkerJobFeed from "./pages/WorkerJobFeed";
import JobDetailsScreen from "./pages/JobDetailsScreen";
import RoleSelectionScreen from "./pages/RoleSelectionScreen";

import { useJobs } from "./hooks/useJobs";

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const shouldShowHeader = location.pathname !== "/";

  const [userType, setUserType] = useState(null);
  const [isPostTaskOpen, setIsPostTaskOpen] = useState(false);
  const [isBidModalOpen, setIsBidModalOpen] = useState(false);

  const {
    jobs,
    loading,
    selectedJob,
    setSelectedJob,
    addJob,
    placeBid,
    acceptBid,
  } = useJobs();

  const handleSelectRole = (role) => {
    setUserType(role);
    navigate(role === "client" ? "/marketplace" : "/feed");
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
    navigate(`/job/${job.id}`);
  };

  const handleSwitchRole = () => {
    setUserType((prev) => {
      const next = prev === "client" ? "worker" : "client";
      navigate(next === "client" ? "/marketplace" : "/feed");
      return next;
    });
  };

  return (
    <>
      {shouldShowHeader && (
        <Header userType={userType} onSwitchRole={handleSwitchRole} />
      )}

      <Routes>
        <Route
          path="/"
          element={<RoleSelectionScreen onSelectRole={handleSelectRole} />}
        />

        <Route
          path="/marketplace"
          element={
            <JobMarketplace
              jobs={jobs}
              loading={loading}
              onJobClick={handleJobClick}
              onPostTaskClick={
                userType === "client" ? () => setIsPostTaskOpen(true) : null
              }
            />
          }
        />

        <Route
          path="/feed"
          element={
            <WorkerJobFeed
              jobs={jobs}
              loading={loading}
              onJobClick={handleJobClick}
            />
          }
        />

        <Route
          path="/job/:id"
          element={
            <JobDetailsScreen
              userType={userType}
              jobs={jobs}
              selectedJob={selectedJob}
              setSelectedJob={setSelectedJob}
              placeBid={placeBid}
              acceptBid={acceptBid}
            />
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <PostTaskModal
        isOpen={isPostTaskOpen}
        onClose={() => setIsPostTaskOpen(false)}
        addJob={addJob}
      />

      <PlaceBidModal
        isOpen={isBidModalOpen && selectedJob}
        onClose={() => setIsBidModalOpen(false)}
        selectedJob={selectedJob}
        placeBid={placeBid}
      />
    </>
  );
}
