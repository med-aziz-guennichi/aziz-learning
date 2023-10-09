import { isTeacher } from "@/lib/teacher";
import { auth, clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = auth();
    const { option } = await req.json();
    if (!userId || !isTeacher(userId)) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!option) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (option === "delete") {
      const deletedUser = await clerkClient.users.deleteUser(params.userId);
      return NextResponse.json(deletedUser);
    } else if (option === "ban") {
      const bannedUser = await clerkClient.users.disableUserMFA(params.userId);
      return NextResponse.json(bannedUser);
    }
  } catch (error) {
    console.log("[USER_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
