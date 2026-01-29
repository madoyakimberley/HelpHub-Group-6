import { useState } from "react";
import { Upload, MapPin } from "lucide-react";
import Button from "./ui/button";
import Input from "./ui/input";
import Label from "./ui/label";
import Textarea from "./ui/textarea";
import Dialog from "./ui/dialog";

function PostTaskModal({ isOpen, onClose, addJob }) {
  // 1. THE BRAIN'S NOTEBOOK
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    category: "Cleaning",
    image: null, // ✅ Store uploaded file
  });

  // 2. HANDLE FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.location) return;

    addJob({
      ...formData,
      image: formData.image
        ? URL.createObjectURL(formData.image)
        : "cleaning_house.jpg",
      date: "Just now",
      status: "open",
    });

    // Reset form
    setFormData({
      title: "",
      location: "",
      description: "",
      category: "Cleaning",
      image: null,
    });

    onClose();
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Post New Task">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Upload Photo */}
        <div className="space-y-2">
          <Label className="font-semibold text-slate-900">Task Photo *</Label>

          {/* Hidden file input */}
          <input
            type="file"
            id="task-photo"
            accept="image/*"
            className="hidden"
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.files[0] })
            }
          />

          {/* Clickable upload box */}
          <label
            htmlFor="task-photo"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[#00C48C] rounded-2xl bg-emerald-50/30 cursor-pointer hover:bg-emerald-50/50 transition-all"
          >
            <Upload size={28} className="text-[#00C48C] mb-1" />
            <span className="text-xs font-medium text-slate-600">
              {formData.image ? formData.image.name : "Click to upload photo"}
            </span>
          </label>
        </div>

        {/* Task Title */}
        <div className="space-y-2">
          <Label htmlFor="task-title">What do you need help with? *</Label>
          <Input
            id="task-title"
            required
            placeholder="e.g., Fix broken kitchen sink"
            className="h-14 rounded-xl focus:ring-[#1A66FF] text-lg"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label htmlFor="location">Location *</Label>
          <div className="relative">
            <MapPin
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <Input
              id="location"
              required
              placeholder="e.g., Nairobi, Westlands"
              className="h-14 pl-12 rounded-xl focus:ring-[#1A66FF]"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="desc">Description</Label>
          <Textarea
            id="desc"
            placeholder="Provide details so workers can bid accurately..."
            className="rounded-xl min-h-25 resize-none focus:ring-[#1A66FF]"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full h-14 bg-linear-to-r from-[#00C48C] to-[#1A66FF] text-white rounded-2xl font-bold text-lg hover:shadow-[0_8px_24px_rgba(0,196,140,0.3)] transition-all border-none"
        >
          Post Task & Get Bids
        </Button>
      </form>
    </Dialog>
  );
}

export default PostTaskModal;
