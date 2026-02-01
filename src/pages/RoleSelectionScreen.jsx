import React from "react";
import { Briefcase, Search } from "lucide-react";
import logo from "../assets/images/logo.png";

export default function RoleSelectionScreen({ onSelectRole }) {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center px-6 py-12">
      {/* Logo and Header */}
      <div className="text-center mb-12">
        <div className="w-20 h-20 mx-auto mb-6">
          <img
            src={logo}
            alt="HelpHub Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">HelpHub Pro</h1>
        <p className="text-lg text-slate-600">Kenya's #1 Job Marketplace</p>
      </div>

      {/* Role Selection Cards */}
      <div className="w-full max-w-md space-y-4 mb-8">
        {/* I Need Help Card */}
        <button
          type="button"
          onClick={() => onSelectRole("client")}
          className="w-full group"
        >
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all flex items-start gap-4 text-left">
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Briefcase size={28} className="text-[#00C48C]" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-1">
                I Need Help
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Post a task and get competitive bids from skilled workers in
                your area
              </p>
            </div>
          </div>
        </button>

        {/* Find Work Card */}
        <button
          type="button"
          onClick={() => onSelectRole("worker")}
          className="w-full group"
        >
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all flex items-start gap-4 text-left">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Search size={28} className="text-[#1A66FF]" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-1">
                Find Work
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Browse available jobs and place bids to earn money with your
                skills
              </p>
            </div>
          </div>
        </button>
      </div>

      {/* Terms of Service */}
      <p className="text-sm text-slate-500 text-center">
        By continuing, you agree to HelpHub's Terms of Service
      </p>
    </div>
  );
}
