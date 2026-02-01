
import { MapPin, Clock, ArrowRight } from "lucide-react";

export default function JobCard({ job, onClick }) {
  return (
    <button
      onClick={() => onClick(job)}
      className="w-full bg-white rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all text-left flex flex-col border border-[rgba(0,0,0,0.08)]"
    >
      {/* Job Photo */}
      <div className="relative w-full aspect-4/3 bg-slate-100">
        <img
          src={job.photoUrl}
          alt={job.title}
          className="w-full h-full object-cover"
        />

    {/* Bid Badge */}
    {job.bidCount > 0 && (
      <div className="absolute top-3 right-3 bg-[#00C48C] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
        {job.bidCount} Bid{job.bidCount !== 1 ? "s" : ""}
      </div>
    )}
  </div>

  {/* Job Info */}
  <div className="p-4 flex-1 flex flex-col gap-3">
    {/* Title */}
    <h3 className="font-bold text-slate-900 text-base line-clamp-1">
      {job.title}
    </h3>

    {/* Location & Posted Time */}
    <div className="space-y-1.5">
      <div className="flex items-center gap-1.5 text-sm text-slate-600">
        <MapPin size={14} className="text-slate-400 shrink-0" />
        <span className="line-clamp-1">{job.location}</span>
      </div>
      <div className="flex items-center gap-1.5 text-xs text-slate-400">
        <Clock size={12} className="shrink-0" />
        <span>{job.postedAt}</span>
      </div>
    </div>

    {/* Read More */}
    <div className="mt-auto pt-2">
      <span className="inline-flex items-center gap-1.5 text-sm text-[#1A66FF] hover:text-[#1A66FF]/80 font-medium group">
        Read more
        <ArrowRight
          size={14}
          className="group-hover:translate-x-1 transition-transform"
        />
      </span>
    </div>
  </div>
</button>
  );
}
