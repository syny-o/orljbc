"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import { SignInState, SignUpState } from "@/types/auth";

// SIGN UP

export async function signUpAction(formData: FormData): Promise<SignInState> {
  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name")

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof name !== "string"

  ) {
    return { ok: false, error: "Neplatný formulář." };
  }

  try {
    await auth.api.signUpEmail({ body: { name, email, password } });

    return { ok: true, error: null };
  } catch (err) {
    return { ok: false, error: "Registrace se nezdařila. Zkontrolujte údaje a zkuste to znovu." };
  }
}

// SIGN OUT

export async function signOutAction() {
  const result = await auth.api.signOut({ headers: await headers() });

  return result;
}

// SIGN IN

export async function signInAction(formData: FormData): Promise<SignInState> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return { ok: false, error: "Neplatný formulář." };
  }

  try {
    await auth.api.signInEmail({ body: { email, password } });

    return { ok: true, error: null };
  } catch (err) {
    return { ok: false, error: "Nesprávný email nebo heslo" };
  }
}
