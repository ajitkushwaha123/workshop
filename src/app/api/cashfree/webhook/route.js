import crypto from "crypto";
import dbConnect from "@/lib/db-connect";
import { NextResponse } from "next/server";
import { Registration } from "@/models/Registration";

export async function POST(req) {
  try {
    await dbConnect();

    const rawBody = await req.text();
    console.log("RawBody" , rawBody)

    const signature =
      req.headers.get("x-webhook-signature") ||
      req.headers.get("x-cashfree-signature");

    const timestamp =
      req.headers.get("x-webhook-timestamp") ||
      req.headers.get("x-cashfree-timestamp");

    if (!signature) {
      return NextResponse.json(
        { success: false, message: "Missing signature" },
        { status: 401 },
      );
    }

    const generatedSignature = crypto
      .createHmac("sha256", process.env.CASHFREE_WEBHOOK_SECRET)
      .update(timestamp + rawBody)
      .digest("base64");

    if (generatedSignature !== signature) {
      console.error("Invalid webhook signature");

      return NextResponse.json(
        { success: false, message: "Invalid signature" },
        { status: 401 },
      );
    }

    const payload = JSON.parse(rawBody);

    console.log("Cashfree Webhook:", JSON.stringify(payload, null, 2));

    const { type, data } = payload;

    if (type === "PAYMENT_SUCCESS_WEBHOOK") {
      const orderId = data.order.order_id;
      const cfPaymentId = data.payment.cf_payment_id;

      const registration = await Registration.findOne({
        orderId,
      });

      if (!registration) {
        return NextResponse.json({
          success: true,
          message: "Registration not found",
        });
      }

      if (registration.paymentStatus === "SUCCESS") {
        return NextResponse.json({
          success: true,
          message: "Already processed",
        });
      }

      registration.paymentStatus = "SUCCESS";
      registration.paymentId = cfPaymentId;
      registration.paymentCompletedAt = new Date();

      await registration.save();

      console.log(`Payment Success: ${orderId}`);
    }

    if (type === "PAYMENT_FAILED_WEBHOOK") {
      const orderId = data.order.order_id;

      await Registration.findOneAndUpdate(
        { orderId },
        {
          paymentStatus: "FAILED",
        },
      );
    }

    if (type === "USER_DROPPED_WEBHOOK") {
      const orderId = data.order.order_id;

      await Registration.findOneAndUpdate(
        { orderId },
        {
          paymentStatus: "DROPPED",
        },
      );
    }

    if (type === "PAYMENT_VERIFICATION_WEBHOOK") {
      console.log("Payment verification received", data.order.order_id);
    }

    if (type === "ABANDONED_CHECKOUT_WEBHOOK") {
      const orderId = data.order.order_id;

      await Registration.findOneAndUpdate(
        { orderId },
        {
          paymentStatus: "ABANDONED",
        },
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Cashfree Webhook Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
