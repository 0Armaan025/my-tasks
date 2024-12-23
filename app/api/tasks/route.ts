import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/app/utils/connect";

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const { title, description, date, completed, important } = await req.json();

    if (!title || !description || !date) {
      return NextResponse.json({
        error: "Missing required fields",
        status: 400,
      });
    }

    if (title.length < 3) {
      return NextResponse.json({
        error: "Title must be at least 3 characters long",
        status: 400,
      });
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        date,
        isCompleted: completed,
        isImportant: important,
        userId,
      },
    });
  } catch (e) {
    console.log("Error creating your task : ", e);
    return NextResponse.json({ error: "Error creating task", status: 500 });
  }
}

export async function GET(req: Request) {
  try {
  } catch (e) {
    console.log("Error GETTING TASKS : ", e);
    return NextResponse.json({ error: "Error GETTING TASKS", status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
  } catch (e) {
    console.log("Error UPDATING TASKS : ", e);
    return NextResponse.json({ error: "Error UPDATING TASKS", status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
  } catch (e) {
    console.log("Error DELETE TASKS : ", e);
    return NextResponse.json({ error: "Error DELETING TASKS", status: 500 });
  }
}
