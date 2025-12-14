import { AppSidebar } from "@/components/admin/AppSidebar";
import FaqPage from "@/components/admin/faq/ListPage";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/prihlaseni");
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <SidebarTrigger className="absolute cursor-pointer z-100" />
        <FaqPage />
      </div>
    </SidebarProvider>
  );
}
