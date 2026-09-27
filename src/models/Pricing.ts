import mongoose from "mongoose";

const PricingSchema = new mongoose.Schema(
  {
    planName: {
      type: String,
      required: [true, "Please provide a plan name"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a price"],
    },
    currency: {
      type: String,
      default: "$",
    },
    description: {
      type: String,
      required: [true, "Please provide a short description"],
    },
    features: {
      type: [String],
      required: [true, "Please provide at least one feature"],
    },
    isPopular: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Pricing || mongoose.model("Pricing", PricingSchema);
