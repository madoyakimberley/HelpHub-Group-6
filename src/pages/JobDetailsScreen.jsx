import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { MapPin, Calendar, Phone, MessageCircle } from "lucide-react";

import Avatar from "../components/ui/avatar";
import PaymentModal from "../components/PaymentModal";
import PlaceBidModal from "../components/PlaceBidModal";

export default function JobDetailsScreen({
  userType,
  jobs,
  selectedJob,
  setSelectedJob,
  placeBid,
}) {
  const { id } = useParams();
  const [bidModalOpen, setBidModalOpen] = useState(false);
  const [acceptedBid, setAcceptedBid] = useState(null);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [paymentData, setPaymentData] = useState(null);

  // :small_blue_diamond: NEW: ref for scrolling
  const selectedBidRef = useRef(null);

  const job = jobs.find((j) => String(j.id) === id) || selectedJob;

  useEffect(() => {
    if (job) setSelectedJob(job);
  }, [job, setSelectedJob]);

  // :small_blue_diamond: NEW: scroll when accepted or selected
  useEffect(() => {
    if (selectedBidRef.current) {
      selectedBidRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [acceptedBid, selectedWorker]);

  if (!job) return <p className="p-6">Loading job...</p>;

  const myBid = job.bids.find((b) => b.workerName === "You");

  // :small_blue_diamond: SAME logic, untouched
  const sortedBids = [
    ...(selectedWorker ? [selectedWorker] : []),
    ...(acceptedBid && !selectedWorker ? [acceptedBid] : []),
    ...job.bids
      .filter(
        (b) =>
          (!selectedWorker || b.id !== selectedWorker.id) &&
          (!acceptedBid || b.id !== acceptedBid.id),
      )
      .sort((a, b) => a.amount - b.amount),
  ];

  const handleAccept = (bid) => {
    setAcceptedBid(bid);
    setPaymentData({ bid });
  };

  const handlePayLater = () => {
    if (!acceptedBid) return;
    const confirmed = window.confirm(
      "Are you sure you want to proceed with Pay Later?",
    );
    if (confirmed) {
      setSelectedWorker(acceptedBid);
      setPaymentData(null);
    }
  };

  const handleSendBid = (jobId, amount) => {
    placeBid(jobId, {
      workerName: "You",
      workerAvatar: "",
      amount,
      rating: 0,
      completedJobs: 0,
      phone: "+254700000000",
    });
    setBidModalOpen(false);
  };

  const openWhatsApp = (phone) =>
    window.open(`https://wa.me/${phone.replace(/\D/g, "")}`, "_blank");

  const makeCall = (phone) =>
    window.open(`tel:${phone.replace(/\D/g, "")}`, "_blank");

  return (
    <div className="min-h-screen bg-[#F3F4F6] pb-24">
      {/* Job Image */}
      <div className="w-full h-72 bg-slate-200">
        {job.photoUrl && (
          <img
            src={job.photoUrl}
            alt={job.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

  {/* Job Info */}
  <div className="bg-white px-6 py-6 space-y-4 border-b">
    <h1 className="text-2xl font-bold">{job.title}</h1>
    <div className="flex gap-4 text-sm text-slate-600">
      <span className="flex items-center gap-1">
        <MapPin size={16} /> {job.location}
      </span>
      <span className="flex items-center gap-1">
        <Calendar size={16} /> {job.postedAt}
      </span>
    </div>
    <p className="text-sm text-slate-600">{job.description}</p>
  </div>

  {/* ================= CLIENT: BIDS LIST ================= */}
  {userType === "client" && (
    <div className="px-6 py-6 space-y-4">
      {sortedBids.map((bid) => {
        // 🔹 NEW: hide other bids once accepted/selected
        if (
          (acceptedBid || selectedWorker) &&
          bid.id !== acceptedBid?.id &&
          bid.id !== selectedWorker?.id
        ) {
          return null;
        }

        return (
          <div
            key={bid.id}
            ref={
              bid.id === acceptedBid?.id || bid.id === selectedWorker?.id
                ? selectedBidRef
                : null
            }
            className={`bg-white p-4 rounded-xl flex gap-4 shadow ${
              selectedWorker && bid.id === selectedWorker.id
                ? "border-2 border-green-500 bg-green-50"
                : ""
            }`}
          >
            <Avatar src={bid.workerAvatar} fallback={bid.workerName[0]} />
            <div className="flex-1">
              <p className="font-semibold">{bid.workerName}</p>
              <p className="text-sm">
                ⭐ {bid.rating} • {bid.completedJobs} jobs
              </p>
            </div>

            <div className="text-right">
              <p className="font-bold text-green-600">
                Ksh {bid.amount.toLocaleString()}
              </p>
              {!selectedWorker &&
                (!acceptedBid || bid.id !== acceptedBid.id) && (
                  <button
                    onClick={() => handleAccept(bid)}
                    className="mt-2 px-4 py-2 bg-[#00C48C] text-white rounded-xl font-semibold
                             transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#00b07a] cursor-pointer"
                  >
                    Accept
                  </button>
                )}
            </div>
          </div>
        );
      })}
    </div>
  )}

  {/* ================= CLIENT: ACCEPTED BID (Pending Payment) ================= */}
  {userType === "client" && acceptedBid && !selectedWorker && (
    <div className="px-6 py-6">
      <div className="bg-white p-6 rounded-xl border border-green-300">
        <div className="flex gap-4 items-center">
          <Avatar
            src={acceptedBid.workerAvatar}
            fallback={acceptedBid.workerName[0]}
          />
          <div>
            <p className="font-bold">{acceptedBid.workerName}</p>
            <p className="text-green-600 font-bold">
              Ksh {acceptedBid.amount.toLocaleString()}
            </p>
          </div>
        </div>
        <button
          onClick={handlePayLater}
          className="mt-4 w-full bg-[#1A66FF] text-white py-3 rounded-xl font-semibold
                     transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
        >
          Pay Later
        </button>
      </div>
    </div>
  )}

  {/* ================= WORKER ================= */}
  {userType === "worker" && (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
      <button
        onClick={() => setBidModalOpen(true)}
        className="w-full bg-linear-to-r from-[#00C48C] to-[#1A66FF]
                   text-white py-4 rounded-2xl font-semibold
                   transition-all hover:scale-[1.01] hover:shadow-lg cursor-pointer"
      >
        {myBid ? "Update My Bid" : "Place My Bid"} • Total Bids:{" "}
        {job.bids.length}
      </button>
    </div>
  )}

  {/* ================= MODALS ================= */}
  <PlaceBidModal
    isOpen={bidModalOpen}
    onClose={() => setBidModalOpen(false)}
    selectedJob={job}
    placeBid={handleSendBid}
  />

  <PaymentModal
    isOpen={!!paymentData}
    onClose={() => setPaymentData(null)}
    acceptedBid={paymentData?.bid}
  />

  {/* ================= SELECTED WORKER ACTIONS ================= */}
  {userType === "client" && selectedWorker && (
    <div className="px-6 py-6">
      <div className="bg-white p-6 rounded-xl border border-green-300">
        <div className="flex gap-4 items-center">
          <Avatar
            src={selectedWorker.workerAvatar}
            fallback={selectedWorker.workerName[0]}
          />
          <div>
            <p className="font-bold">{selectedWorker.workerName}</p>
            <p className="text-green-600 font-bold">
              Ksh {selectedWorker.amount.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => openWhatsApp(selectedWorker.phone)}
            className="flex-1 flex items-center justify-center gap-2
                       bg-[#1A66FF] text-white py-3 rounded-xl font-semibold
                       transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#1557d6] cursor-pointer"
          >
            <MessageCircle size={18} /> WhatsApp
          </button>
          <button
            onClick={() => makeCall(selectedWorker.phone)}
            className="flex-1 flex items-center justify-center gap-2
                       bg-[#00C48C] text-white py-3 rounded-xl font-semibold
                       transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#00b07a] cursor-pointer"
          >
            <Phone size={18} /> Call
          </button>
        </div>
      </div>
    </div>
  )}
</div>
  );
}

