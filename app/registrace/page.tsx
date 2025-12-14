import SignUpPage from "@/components/admin/SignUpPage";
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

  return <SignUpPage />;
}
