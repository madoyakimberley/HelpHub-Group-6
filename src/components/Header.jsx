// Header.js
import React from "react";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Avatar from "../components/ui/avatar";
import logo from "../assets/images/logo.png"; // keep your logo

/**

Header component
Props:
showBackButton: boolean, show the back button if true
onBack: function to handle back action
onSwitchRole: function to switch role (optional)
userType: 'client' | 'worker' | null
*/
export function Header({
showBackButton = false,
onBack,
onSwitchRole,
userType,
}) {
const navigate = useNavigate();

return (
  <header className="sticky top-0 z-50 bg-white border-b border-[rgba(0,0,0,0.08)] shadow-sm">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {/* Optional Back Button */}
       {showBackButton && (
         <button
           onClick={onBack || (() => navigate(-1))}
           className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
           aria-label="Go back"
         >
           <ArrowLeft size={20} strokeWidth={2.5} />
         </button>
       )}

       {/* Logo and App Name */}
       <div className="flex items-center gap-3">
         {/* Logo Image */}
         <div className="w-10 h-10 flex items-center justify-center">
           <img
             src={logo}
             alt="HelpHub Pro Logo"
             className="w-full h-full object-contain"
           />
         </div>

     <div>
       <h1 className="text-lg font-bold text-slate-900">HelpHub Pro</h1>
       {userType && (
         <p className="text-xs text-slate-500 font-medium capitalize">
           {userType === "client" ? "Client Mode" : "Worker Mode"}
         </p>
       )}
     </div>
   </div>
 </div>

 {/* Right Section */}
 <div className="flex items-center gap-3">
   {/* Role Switch Button */}
   {onSwitchRole && (
     <button
       onClick={onSwitchRole}
       className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F3F4F6] hover:bg-slate-200 text-slate-700 font-medium transition-all border border-[rgba(0,0,0,0.08)]"
       title="Switch role"
     >
       <RefreshCw size={16} strokeWidth={2.5} />
       <span className="text-sm">Switch Role</span>
     </button>
   )}

   {/* User Avatar */}
   <Avatar
     src="" // Replace with dynamic user image
     fallback="DS"
     className="w-9 h-9 border-2 border-white shadow-sm"
   />
      </div>
    </div>
  </header>
);
}
export default Header;