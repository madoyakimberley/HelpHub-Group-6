import { useState, useEffect } from "react";
import { Gavel } from "lucide-react";
// UI components
import Button from "../components/ui/button";
import Input from "../components/ui/input";
import Label from "../components/ui/label";
import Dialog from "../components/ui/dialog";

/*
  PLACE BID MODAL
  Logic: Tracks bidPrice state and sends it via placeBid.
  UI Shell: Uses the Dialog component for the popup container.
  UI Elements: Uses pre-made Button, Input, and Label for consistent styling.
*/
function PlaceBidModal({ isOpen, onClose, selectedJob, placeBid }) {
  // THE MEMORY: Notebook to store the price the user types
  const [bidPrice, setBidPrice] = useState("");

  // Reset bidPrice whenever modal opens/closes or selected job changes
  useEffect(() => {
    setBidPrice("");
  }, [isOpen, selectedJob]);

  // THE ACTION: Packaging the data to send to the logic hook
  const handleSendBid = () => {
    if (!bidPrice || !selectedJob) return;

    // ✅ Only use placeBid; don't touch jobs directly
    placeBid(selectedJob.id, Number(bidPrice));

    setBidPrice(""); // Clear notebook
    onClose(); // Close the modal
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Place Your Bid">
      <div className="p-2 text-center">
        {/* Icon */}
        <div className="w-20 h-20 bg-emerald-50 text-[#00C48C] rounded-full flex items-center justify-center mx-auto mb-6">
          <Gavel size={36} />
        </div>

        {/* Job Info */}
        <div className="mb-8">
          <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">
            Bidding on Task
          </p>
          <h3 className="text-lg font-bold text-slate-900 mt-1">
            {selectedJob?.title || "No Task Selected"}
          </h3>
        </div>

        {/* Bid Input */}
        <div className="space-y-2 mb-8 text-left">
          <Label htmlFor="bid-amount" className="text-slate-900 font-semibold">
            Your Offer ($) *
          </Label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400 text-xl z-10">
              $
            </span>
            <Input
              id="bid-amount"
              type="number"
              placeholder="0.00"
              className="pl-10 h-16 text-2xl font-bold rounded-2xl border-slate-200 focus:ring-2 focus:ring-[#1A66FF]"
              value={bidPrice}
              onChange={(e) => setBidPrice(e.target.value)}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <Button
            onClick={handleSendBid}
            className="w-full h-14 text-lg font-bold bg-linear-to-r from-[#00C48C] to-[#1A66FF] hover:opacity-90 transition-all rounded-2xl text-white border-none"
          >
            Confirm & Send Bid
          </Button>

          <Button
            variant="ghost"
            onClick={onClose}
            className="w-full text-slate-400 hover:text-slate-600"
          >
            Cancel
          </Button>
        </div>
      </div>
    </Dialog>
  );
}

export default PlaceBidModal;
