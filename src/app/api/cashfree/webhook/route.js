import crypto from "crypto";
import dbConnect from "@/lib/db-connect";
import { NextResponse } from "next/server";
import { Registration } from "@/models/Registration";

const FIVE_MINUTES = 5 * 60 * 1000;

function verifySignature({ rawBody, timestamp, signature, secret }) {
  const generatedSignature = crypto
    .createHmac("sha256", secret)
    .update(`${timestamp}${rawBody}`)
    .digest("base64");

  try {
    return crypto.timingSafeEqual(
      Buffer.from(generatedSignature),
      Buffer.from(signature),
    );
  } catch {
    return false;
  }
}

export async function POST(req) {
  try {
    await dbConnect();

    const rawBody = await req.text();

    const signature = req.headers.get("x-webhook-signature");
    const timestamp = req.headers.get("x-webhook-timestamp");
    const idempotencyKey = req.headers.get("x-idempotency-key");
    const webhookVersion = req.headers.get("x-webhook-version");

    console.log("Webhook Headers:", {
      signature,
      timestamp,
      idempotencyKey,
      webhookVersion,
    });

    if (!signature || !timestamp) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing webhook headers",
        },
        {
          status: 401,
        },
      );
    }

    // Replay protection
    const webhookTime = Number(timestamp);

    if (!Number.isNaN(webhookTime)) {
      const age = Math.abs(Date.now() - webhookTime);

      if (age > FIVE_MINUTES) {
        return NextResponse.json(
          {
            success: false,
            message: "Webhook timestamp expired",
          },
          {
            status: 401,
          },
        );
      }
    }

    const isValid = verifySignature({
      rawBody,
      timestamp,
      signature,
      secret:
        process.env.CASHFREE_WEBHOOK_SECRET || process.env.CASHFREE_SECRET_KEY,
    });

    if (!isValid) {
      console.error("Invalid webhook signature");

      return NextResponse.json(
        {
          success: false,
          message: "Invalid signature",
        },
        {
          status: 401,
        },
      );
    }

    const payload = JSON.parse(rawBody);

    console.log("Verified Cashfree Webhook:", JSON.stringify(payload, null, 2));

    if (payload.type === "WEBHOOK") {
      console.log("Cashfree test webhook received");

      return NextResponse.json({
        success: true,
        message: "Test webhook received",
      });
    }

    const { type, data } = payload;

    switch (type) {
      case "PAYMENT_SUCCESS_WEBHOOK": {
        const orderId = data?.order?.order_id;
        const cfPaymentId = data?.payment?.cf_payment_id;

        if (!orderId) break;

        const registration = await Registration.findOne({
          orderId,
        });

        if (!registration) {
          console.log(`Registration not found for order ${orderId}`);

          break;
        }

        if (registration.paymentStatus === "SUCCESS") {
          console.log(`Duplicate success webhook for ${orderId}`);

          break;
        }

        registration.paymentStatus = "SUCCESS";
        registration.paymentId = cfPaymentId;
        registration.paymentCompletedAt = new Date();

        await registration.save();

        console.log(`Payment SUCCESS processed for ${orderId}`);

        break;
      }

      case "PAYMENT_FAILED_WEBHOOK": {
        const orderId = data?.order?.order_id;

        if (!orderId) break;

        await Registration.findOneAndUpdate(
          { orderId },
          {
            paymentStatus: "FAILED",
          },
        );

        console.log(`Payment FAILED processed for ${orderId}`);

        break;
      }

      case "USER_DROPPED_WEBHOOK": {
        const orderId = data?.order?.order_id;

        if (!orderId) break;

        await Registration.findOneAndUpdate(
          { orderId },
          {
            paymentStatus: "DROPPED",
          },
        );

        console.log(`Payment DROPPED processed for ${orderId}`);

        break;
      }

      case "ABANDONED_CHECKOUT_WEBHOOK": {
        const orderId = data?.order?.order_id;

        if (!orderId) break;

        await Registration.findOneAndUpdate(
          { orderId },
          {
            paymentStatus: "ABANDONED",
          },
        );

        console.log(`Checkout ABANDONED processed for ${orderId}`);

        break;
      }

      case "PAYMENT_VERIFICATION_WEBHOOK": {
        console.log("PAYMENT_VERIFICATION_WEBHOOK received");

        break;
      }

      default: {
        console.log(`Unhandled webhook type: ${type}`);
      }
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
