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
    },

    email: String,
    paymentStatus: {
      type: String,
      enum: ["PENDING", "CREATED", "ABANDONED", "DROPPED", "FAILED", "SUCCESS"],
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

registrationSchema.index(
  { phone: 1 },
  {
    unique: true,
    partialFilterExpression: { paymentStatus: "SUCCESS" },
  },
);

export const Registration =
  mongoose.models.Registration ||
  mongoose.model("Registration", registrationSchema);
