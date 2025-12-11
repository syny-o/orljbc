"use client";

import { signOutAction } from "@/lib/serverActions/authActions";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  return (
    <form
      action={async () => {
        await signOutAction();
        router.push("/signin"); // redirect after signout
      }}
    >
      <button
        type="submit"
        className="cursor-pointer text-red-600"
      >
        Odhlásit se
      </button>
    </form>
  );
}
