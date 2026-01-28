import Header from "./components/Header";
import RoleSelectionScreen from "./components/RoleSelectionScreen";
import JobMarketplace from "./components/JobMarketplace";
import JobDetailsScreen from "./components/JobDetailsScreen";
import WorkerJobFeed from "./components/WorkerJobFeed";
import PostTaskModal from "./components/PostTaskModal";
import PlaceBidModal from "./components/PlaceBidModal";
import PaymentModal from "./components/PaymentModal";

function App() {
  return (
    <div className="app-container">
      <Header />
      {/* TODO: Add a state variable here (e.g., const [view, setView] = useState('landing')) 
          to toggle between these components below */}
      <RoleSelectionScreen />
      {/* These will be hidden/shown based on your logic later */}
      {/* <JobMarketplace /> */}
      {/* <PostTaskModal /> */}
    </div>
  );
}

export default App;
