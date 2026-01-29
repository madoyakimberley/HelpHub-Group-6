import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Note: router-dom
import { useJobs } from "./hooks/useJobs";
//components
import Header from "./components/Header";
import PostTaskModal from "./components/PostTaskModal";
import PlaceBidModal from "./components/PlaceBidModal";
import PaymentModal from "./components/PaymentModal";
//pages
import RoleSelectionScreen from "./pages/RoleSelectionScreen";
import JobMarketplace from "./pages/JobMarketplace";
import WorkerJobFeed from "./pages/WorkerJobFeed";
import JobDetailsScreen from "./pages/JobDetailsScreen";

function App() {
  const { jobs, loading } = useJobs();

  return (
    <BrowserRouter>
      <div className="app-container min-h-screen bg-slate-50">
        <Header />

        <main className="max-w-7xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<RoleSelectionScreen />} />

            <Route path="/feed" element={<WorkerJobFeed jobs={jobs} />} />

            <Route
              path="/marketplace"
              element={<JobMarketplace jobs={jobs} />}
            />

            <Route path="/job/:id" element={<JobDetailsScreen />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <PostTaskModal />
        <PlaceBidModal />
        <PaymentModal />
      </div>
    </BrowserRouter>
  );
}

export default App;
