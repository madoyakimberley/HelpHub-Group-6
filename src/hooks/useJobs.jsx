import { useState, useEffect } from "react";
import jobsData from "../data/jobs.json";

/**
 ASSET IMPORTS
 We import images here so React's build tools can find them.
 You don't need to import these in your files! The hook handles it.
 */
import cleaningClothes from "../assets/images/cleaning_clothes.jpg";
import cleaningHouse from "../assets/images/cleaning_house.jpg";
import fixingBike from "../assets/images/fixing_bike.jpg";
import paintingHouse from "../assets/images/painting_house.jpg";
import plumbing from "../assets/images/plumbing.jpg";
import walkingDogs from "../assets/images/walking_dogs.jpg";

/*
 THE ASSET MAP
 This links the text "image.jpg" in our JSON to the actual file above.
 */
const assetMap = {
  "cleaning_clothes.jpg": cleaningClothes,
  "cleaning_house.jpg": cleaningHouse,
  "fixing_bike.jpg": fixingBike,
  "painting_house.jpg": paintingHouse,
  "plumbing.jpg": plumbing,
  "walking_dogs.jpg": walkingDogs,
};

export function useJobs() {
  // 1. STATE INITIALIZATION
  /*
  FOR YOU GUYS: HOW OUR HOOK WORKS
  1. useState (The "Memory Box")
  ===> Think of useState like a magic toy box. 
  - The first value (e.g., 'jobs') is what is currently inside the box.
  - The second value (e.g., 'setJobs') is the only person allowed to change what's in the box.
  - Whenever we put something NEW in the box, React yells "HEY EVERYONE!" and 
    immediately redraws the screen so the user sees the new toy.
 */
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  /*NEW STATE FOR RYAN: selectedJob
   This stores the specific job the user clicked on.
   */
  const [selectedJob, setSelectedJob] = useState(null);

  // 2. THE FETCH SIMULATOR (My part - Logic Lead)
  /*
 2. useEffect (The "To-Do List")
 ===> Think of useEffect like a set of instructions you give a robot when it first enters a room.
  - We tell the robot: "As soon as you stand up, wait 400ms, then open the JSON file."
  - The empty brackets [] at the end are like saying: "Only do this ONCE when you arrive."
  - The 'return' (cleanup) is like the robot cleaning up its mess before it leaves the room.
 */
  useEffect(() => {
    const timer = setTimeout(() => {
      const processedData = jobsData.map((job) => ({
        ...job,
        image: assetMap[job.image] || plumbing,
      }));

      setJobs(processedData);
      setFilteredJobs(processedData);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  /*
   FOR Sanau : Category Filtering
   Call this when a user clicks a category button (e.g., "Plumbing").
   */
  const filterByCategory = (category) => {
    if (category === "All") {
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(jobs.filter((job) => job.category === category));
    }
  };

  /**
    FOR Ted & Sanau: Selection Logic
    Call this function inside your onClick on the Job Cards.
    Example: <div onClick={() => selectJob(item)}> 
   */
  const selectJob = (job) => {
    setSelectedJob(job);
  };

  /*
   FOR KiM : Creating New Content
    When a user submits the "Post Task" form, call this.
   */
  const addJob = (newJobData) => {
    const newJob = {
      ...newJobData,
      id: jobs.length + 1,
      status: "open",
      image: assetMap[newJobData.image] || cleaningHouse,
    };

    setJobs((prev) => [newJob, ...prev]);
    setFilteredJobs((prev) => [newJob, ...prev]);
  };

  // 3. THE TEAM'S TOOLBOX
  return {
    jobs: filteredJobs, // Ted & Sanau: Use this for your map() loops
    loading, // Everyone: Use this for Skeletons
    filterByCategory, // Sanau: Use this for your filter buttons
    selectedJob, // Ryan: Use this to show the details of the clicked job
    selectJob, // Ted: Use this to "set" which job was clicked
    addJob, // KiM: Use this for the form submit
  };
}
