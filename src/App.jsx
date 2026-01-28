import { useState } from "react";
import { useJobs } from "./hooks/useJobs";

import Header from "./components/Header";
import RoleSelectionScreen from "./pages/RoleSelectionScreen";
import JobMarketplace from "./pages/JobMarketplace";
import JobDetailsScreen from "./pages/JobDetailsScreen";
import WorkerJobFeed from "./pages/WorkerJobFeed";
import PostTaskModal from "./components/PostTaskModal";
import PlaceBidModal from "./components/PlaceBidModal";
import PaymentModal from "./components/PaymentModal";

function App() {
  const jobsData = useJobs();

  const [view, setView] = useState("landing");
  const [userType, setUserType] = useState(null);

  const handleRoleSelect = (role) => {
    setUserType(role);
    setView("feed");
  };
  //PAGES WILL BE ADDED LATER ON
  return (
    <div className="app-container">
      <Header />

      <PostTaskModal />
      <PlaceBidModal />
      <PaymentModal />
    </div>
  );
}

export default App;
