import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    previewLink: {
      type: String,
      required: [true, "Please provide a preview link"],
    },
    previewImg: {
      type: String,
      required: [true, "Please provide a preview image URL"],
    },
    category: {
      type: String,
      required: [true, "Please provide a category"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
