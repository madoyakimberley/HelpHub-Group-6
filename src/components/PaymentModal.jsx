import { CheckCircle2, Shield } from "lucide-react";
import Avatar from "../components/ui/avatar";
import Button from "../components/ui/button";

export default function PaymentModal({
  isOpen,
  onClose,
  acceptedBid,
  onPayment,
}) {
  if (!isOpen || !acceptedBid) return null;

  const handlePayLater = () => {
    alert("Payment postponed. You can pay later.");
    onClose();
  };

  const handlePayment = () => {
    if (onPayment) onPayment(acceptedBid);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:max-w-md rounded-2xl shadow-2xl transform transition-transform duration-300 ease-out scale-95 hover:scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-8 text-center border-b border-[rgba(0,0,0,0.08)]">
          <div className="flex justify-center mb-4">
            <CheckCircle2
              size={64}
              className="text-[#00C48C]"
              strokeWidth={2}
            />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Bid Accepted!
          </h2>
          <p className="text-slate-600">
            Your payment is held securely in escrow
          </p>
        </div>

        {/* Bid Details */}
        <div className="px-6 py-6 space-y-5">
          <div className="bg-slate-50 rounded-2xl p-5 space-y-4 border border-[rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-3">
              <Avatar
                src={acceptedBid.workerAvatar}
                fallback={acceptedBid.workerName?.[0] ?? "?"}
                className="w-14 h-14 border-2 border-[#00C48C]/30"
              />
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-base">
                  {acceptedBid.workerName}
                </h3>
                <p className="text-sm text-slate-600 mt-0.5">
                  Will complete your task
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  WhatsApp: {acceptedBid.phone}
                </p>
                <p className="text-sm text-slate-600 mt-0.5">
                  Call: {acceptedBid.phone}
                </p>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-600 font-medium">Bid Amount</span>
                <span className="text-2xl font-bold text-[#00C48C]">
                  Ksh {acceptedBid.amount.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Escrow Notice */}
          <div className="flex gap-3 bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <Shield
              className="text-[#1A66FF] shrink-0"
              size={22}
              strokeWidth={2}
            />
            <div className="text-sm">
              <p className="font-semibold text-slate-900 mb-1">
                Payment Protection
              </p>
              <p className="text-slate-600 leading-relaxed">
                Your payment is held securely. Funds will only be released when
                you mark the job as complete.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-2">
            <Button
              onClick={handlePayment}
              variant="primary"
              className="w-full py-4 bg-linear-to-r from-[#00C48C] to-[#1A66FF]"
            >
              Pay via M-Pesa (Escrow)
            </Button>

            <Button
              onClick={handlePayLater}
              variant="secondary"
              className="w-full py-3.5 border border-slate-300 text-slate-900"
            >
              Pay Later
            </Button>

            <Button
              onClick={onClose}
              variant="outline"
              className="w-full py-3.5"
            >
              View Job Status
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

