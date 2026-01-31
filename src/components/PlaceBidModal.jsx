import { useState, useEffect } from "react";
import { Gavel } from "lucide-react";
import Button from "../components/ui/button";
import Input from "../components/ui/input";
import Label from "../components/ui/label";
import Dialog from "../components/ui/dialog";

function PlaceBidModal({ isOpen, onClose, selectedJob, placeBid }) {
  const [bidPrice, setBidPrice] = useState("");

  useEffect(() => {
    setBidPrice("");
  }, [isOpen, selectedJob]);

  const handleSendBid = () => {
    const amount = Number(bidPrice);
    if (!selectedJob || amount <= 0) return;

    placeBid(selectedJob.id, amount);
    setBidPrice("");
    onClose();
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
            Your Offer (Ksh) *
          </Label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400 text-lg z-10">
              Ksh
            </span>
            <Input
              id="bid-amount"
              type="number"
              min="1"
              placeholder="0"
              className="pl-14 h-16 text-2xl font-bold rounded-2xl border-slate-200 focus:ring-2 focus:ring-[#1A66FF]"
              value={bidPrice}
              onChange={(e) => setBidPrice(e.target.value)}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Button
            onClick={handleSendBid}
            disabled={!bidPrice || Number(bidPrice) <= 0}
            className="w-full h-14 text-lg font-bold bg-linear-to-r from-[#00C48C] to-[#1A66FF] hover:opacity-90 disabled:opacity-50 transition-all rounded-2xl text-white border-none"
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
