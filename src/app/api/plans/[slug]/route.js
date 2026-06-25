import { NextResponse } from "next/server";
import { Plan } from "@/models/Plan";
import dbConnect from "@/lib/db-connect";

export async function GET(req, { params }) {
  try {
    await dbConnect();
    const { slug } = await params;

    const plan = await Plan.findOne({
      slug,
      isActive: true,
    }).lean();

    if (!plan) {
      return NextResponse.json(
        {
          success: false,
          message: "Plan not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      data: plan,
    });
  } catch (error) {
    console.error("Get Plan Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch plan",
      },
      { status: 500 },
    );
  }
}
