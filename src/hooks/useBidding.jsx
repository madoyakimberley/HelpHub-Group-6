import { useState } from "react";

export function useBidding() {
  // 1. The Mailbox: An array to store all bids placed
  const [bids, setBids] = useState([]);

  // 2. The Delivery Function: This takes the "Letter" (bid) and puts it in the mailbox
  // Simple explanation: "Tell me which job, and how much money."
  const placeBid = (jobId, amount) => {
    // Create the bid object (The Letter)
    const newBid = {
      id: bids.length + 1, // Simple ID based on list size
      jobId: jobId,
      price: amount,
      status: "Sent",
    };

    // Add it to our list (Put it in the mailbox)
    setBids([...bids, newBid]);

    console.log("Bid recorded for job:", jobId);
  };

  return {
    bids, // The list of bids to show on screen
    placeBid, // The action to call when a button is clicked
  };
}
