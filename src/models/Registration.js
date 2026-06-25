import mongoose, { Schema } from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
    },

    email: String,
    paymentStatus: {
      type: String,
      enum: ["PENDING", "SUCCESS", "FAILED"],
      default: "PENDING",
    },

    planId: {
      type: Schema.Types.ObjectId,
      ref: "Plan",
      required: true,
    },

    orderId: String,
    tickedId: String,
    amount: Number,
  },
  {
    timestamps: true,
  },
);

export const Registration =
  mongoose.models.Registration ||
  mongoose.model("Registration", registrationSchema);
