import { AppSidebar } from "@/components/admin/AppSidebar";
import DashboardPage from "@/components/admin/DashboardPage";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <SidebarTrigger className="absolute cursor-pointer z-100" />
        <DashboardPage />
      </div>
    </SidebarProvider>
  );
}
