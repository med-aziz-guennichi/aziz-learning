import { auth, clerkClient } from "@clerk/nextjs";
import DataTableUsers from "./_components/data-table";
import { isAdmin } from "@/lib/teacher";
import { redirect } from "next/navigation";

const UsersPage = async () => {
  const { userId } = auth();
  const isAdminA = await isAdmin(userId);
  if (!isAdminA) {
    return redirect("/");
  }
  return (
    <div className="p-6  items-center">
      <DataTableUsers />
    </div>
  );
};

export default UsersPage;
