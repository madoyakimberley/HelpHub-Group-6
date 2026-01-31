import { useState } from "react";
import { Upload, MapPin } from "lucide-react";
import Button from "./ui/button";
import Input from "./ui/input";
import Label from "./ui/label";
import Textarea from "./ui/textarea";
import Dialog from "./ui/dialog";

function PostTaskModal({ isOpen, onClose, addJob }) {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    category: "Cleaning",
    image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.location) return;

    addJob(formData); // <-- Add the new job

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
          <Label>Task Photo *</Label>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="task-photo"
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.files?.[0] || null })
            }
          />
          <label
            htmlFor="task-photo"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-2xl cursor-pointer"
          >
            <Upload size={28} className="mb-1" />
            <span>
              {formData.image ? formData.image.name : "Click to upload a file"}
            </span>
          </label>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="task-title">What do you need help with? *</Label>
          <Input
            id="task-title"
            required
            placeholder="e.g., Fix broken kitchen sink"
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
              className="pl-12"
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
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>

        <Button type="submit">Post Task & Get Bids</Button>
      </form>
    </Dialog>
  );
}

export default PostTaskModal;
