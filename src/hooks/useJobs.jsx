import { useEffect, useState } from "react";
import jobsData from "../data/jobs.json";
import bidsData from "../data/bids.json";

import cleaningClothes from "../assets/images/cleaning_clothes.jpg";
import cleaningHouse from "../assets/images/cleaning_house.jpg";
import fixingBike from "../assets/images/fixing_bike.jpg";
import paintingHouse from "../assets/images/painting_house.jpg";
import plumbing from "../assets/images/plumbing.jpg";
import walkingDogs from "../assets/images/walking_dogs.jpg";

const assetMap = {
  "cleaning_clothes.jpg": cleaningClothes,
  "cleaning_house.jpg": cleaningHouse,
  "fixing_bike.jpg": fixingBike,
  "painting_house.jpg": paintingHouse,
  "plumbing.jpg": plumbing,
  "walking_dogs.jpg": walkingDogs,
};

export function useJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const processedJobs = jobsData.map((job) => {
      const jobBids = bidsData
        .filter((bid) => String(bid.jobId) === String(job.id))
        .map((bid) => ({
          ...bid,
          accepted: bid.accepted || false,
        }))
        .sort((a, b) => a.amount - b.amount);

      return {
        ...job,
        bids: jobBids,
        photoUrl: assetMap[job.image] || plumbing,
        postedAt: job.postedAt || "2 days ago",
        status: job.status || "Open",
      };
    });

    setJobs(processedJobs);
    setLoading(false);
  }, []);

  const placeBid = (jobId, bidData) => {
    setJobs((prev) =>
      prev.map((job) => {
        if (String(job.id) !== String(jobId)) return job;

        const newBid = {
          id: `bid-${Date.now()}`,
          accepted: false,
          ...bidData,
        };

        const updatedJob = {
          ...job,
          bids: [...job.bids, newBid].sort((a, b) => a.amount - b.amount),
        };

        if (selectedJob?.id === jobId) setSelectedJob(updatedJob);

        return updatedJob;
      }),
    );
  };

  const acceptBid = (jobId, bidId) => {
    setJobs((prev) =>
      prev.map((job) => {
        if (String(job.id) !== String(jobId)) return job;

        const updatedJob = {
          ...job,
          status: "Awarded",
          bids: job.bids.map((bid) => ({
            ...bid,
            accepted: bid.id === bidId,
          })),
        };

        if (selectedJob?.id === jobId) setSelectedJob(updatedJob);

        return updatedJob;
      }),
    );
  };

  const addJob = (jobData) => {
    const newJob = {
      id: `job-${Date.now()}`,
      ...jobData,
      bids: [],
      photoUrl: jobData.image ? URL.createObjectURL(jobData.image) : plumbing,
      postedAt: "Just now",
      status: "Open",
    };
    setJobs((prev) => [newJob, ...prev]); // prepend to list
  };

  return {
    jobs,
    loading,
    selectedJob,
    setSelectedJob,
    placeBid,
    acceptBid,
    addJob,
  };
}
