import mongoose, { Schema, model, models } from "mongoose";

const planSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    description: {
      type: String,
    },

    price: {
      type: Number,
      required: true,
    },

    originalPrice: {
      type: Number,
      default: null,
    },

    currency: {
      type: String,
      default: "INR",
    },

    features: [
      {
        type: String,
      },
    ],

    bonuses: [
      {
        title: String,
        value: Number,
      },
    ],

    badge: {
      type: String,
      default: "",
    },

    ctaText: {
      type: String,
      default: "Reserve Seat",
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    metadata: {
      type: Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
  },
);

export const Plan = models.Plan || model("Plan", planSchema);
