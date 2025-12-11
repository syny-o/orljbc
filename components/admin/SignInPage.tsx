"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { signInAction } from "@/lib/serverActions/authActions";
import { LoadingButton } from "@/components/shared/LoadingButton";
import { Input } from "@/components/ui/input";

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  // Validation helpers
  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.trim()) return "Email je povinný";
    if (!emailRegex.test(value)) return "Zadejte platný email";
    return "";
  };

  const validatePassword = (value: string) => {
    if (!value.trim()) return "Heslo je povinné";
    if (value.length < 6) return "Heslo musí mít alespoň 6 znaků";
    return "";
  };

  const handleSubmit = async () => {
    setServerError("");

    // Run local validation
    const emailErr = validateEmail(email);
    const passErr = validatePassword(password);

    setEmailError(emailErr);
    setPasswordError(passErr);

    if (emailErr || passErr) return;

    setLoading(true);

    // Build FormData manually
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const result = await signInAction(formData);

    if (result.ok) {
      router.push("/dashboard");
      router.refresh();
    } else {
      setServerError(result.error || "Něco se nepovedlo");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20">
        <h1 className="text-3xl font-semibold text-primary text-center mb-6">
          Přihlásit se
        </h1>

        <p className="text-primary text-center mb-8">
          Vítejte zpět — přihlaste se do svého účtu
        </p>

        <form noValidate action={(formData) => handleSubmit()} className="">
          {/* EMAIL INPUT */}
          <Input
            value={email}
            disabled={loading}
            onChange={(e) => {
              const value = e.target.value;
              setEmail(value);

              // Live validation (error disappears when valid)
              const err = validateEmail(value);
              setEmailError(err === "" ? "" : emailError);

              // Clear server error on user typing
              setServerError("");
            }}
            placeholder="email@domena.cz"
            className={`mt-1 w-full px-4 py-2 rounded-lg bg-white/10 border text-white
    placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400
    ${emailError ? "border-red-500 shake" : "border-white/20"}`}
          />

          {emailError && (
            <span className="text-red-400 text-sm">{emailError}</span>
          )}

          <Input
            type="password"
            value={password}
            disabled={loading}
            onChange={(e) => {
              const value = e.target.value;
              setPassword(value);

              const err = validatePassword(value);
              setPasswordError(err === "" ? "" : passwordError);

              setServerError("");
            }}
            placeholder="Vaše heslo"
            className={`mt-5 w-full px-4 py-2 rounded-lg bg-white/10 border text-white
    placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400
    ${passwordError ? "border-red-500 shake" : "border-white/20"}`}
          />

          {passwordError && (
            <p className="text-red-400 text-sm">{passwordError}</p>
          )}

          <LoadingButton
            type="submit"
            loading={loading}
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold mt-5"
          >
            Přihlásit
          </LoadingButton>
          {serverError && (
            <p className="text-red-500 text-sm text-center mt-1">{serverError}</p>
          )}
        </form>

        <p className="text-center text-primary text-sm mt-6">
          Nemáte účet?{" "}
          <Link href="/signup" className="text-sky-400 hover:underline">
            Vytvořit účet
          </Link>
        </p>
      </div>

      {/* Shake animation */}
      <style>{`
        .shake {
          animation: shake 0.3s ease-in-out;
        }
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          50% { transform: translateX(4px); }
          75% { transform: translateX(-4px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
