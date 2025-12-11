"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { signUpAction } from "@/lib/serverActions/authActions";
import { LoadingButton } from "@/components/shared/LoadingButton";
import { Input } from "@/components/ui/input";

export default function SignUpPage() {
  const router = useRouter();

  // Controlled form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Password strength
  const [passwordScore, setPasswordScore] = useState(0);

  // Validation errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Server error
  const [serverError, setServerError] = useState("");

  const [loading, setLoading] = useState(false);

  // Password scoring logic
  const getPasswordScore = (password: string) => {
    let score = 0;

    if (!password) return 0;
    if (password.length >= 6) score++;
    if (password.length >= 10) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return Math.min(score, 4); // keep score between 0–4
  };

  const getPasswordLabel = (score: number) => {
    switch (score) {
      case 0:
        return "Příliš slabé";
      case 1:
        return "Slabé";
      case 2:
        return "Střední";
      case 3:
        return "Silné";
      case 4:
        return "Velmi silné";
      default:
        return "";
    }
  };

  const getPasswordColor = (score: number) => {
    switch (score) {
      case 0:
        return "bg-red-500";
      case 1:
        return "bg-red-400";
      case 2:
        return "bg-yellow-500";
      case 3:
        return "bg-green-500";
      case 4:
        return "bg-emerald-500";
      default:
        return "bg-gray-400";
    }
  };

  // Validation helpers
  const validateName = (value: string) => {
    if (!value.trim()) return "Jméno je povinné";
    if (value.length < 2) return "Jméno musí mít alespoň 2 znaky";
    return "";
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.trim()) return "Email je povinný";
    if (!emailRegex.test(value)) return "Zadejte platný email";
    return "";
  };

  const validatePassword = (value: string) => {
    if (!value.trim()) return "Heslo je povinné";
    if (value.length < 8) return "Heslo musí mít alespoň 8 znaků";
    return "";
  };

  // Form submission handler
  const handleSubmit = async () => {
    setServerError("");

    const nameErr = validateName(name);
    const emailErr = validateEmail(email);
    const passErr = validatePassword(password);

    setNameError(nameErr);
    setEmailError(emailErr);
    setPasswordError(passErr);

    if (nameErr || emailErr || passErr) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    const result = await signUpAction(formData);

    if (result.ok) {
      router.push("/dashboard");
      router.refresh();
    } else {
      setServerError(result.error || "Registrace se nezdařila.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-700 px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/10">
        <h1 className="text-3xl font-semibold text-white text-center mb-6">
          Vytvořit účet
        </h1>

        <p className="text-slate-300 text-center mb-8">
          Zadejte své údaje a vytvořte nový účet
        </p>

        <form noValidate action={handleSubmit} className="space-y-6">
          {/* NAME */}
          <div>
            <label className="text-white text-sm">Jméno</label>
            <Input
              value={name}
              disabled={loading}
              onChange={(e) => {
                const v = e.target.value;
                setName(v);
                setNameError(validateName(v) === "" ? "" : nameError);
                setServerError("");
              }}
              placeholder="Vaše jméno"
              className={`mt-1 w-full px-4 py-2 rounded-lg bg-white/10 border text-white
                placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400
                ${nameError ? "border-red-500" : "border-white/20"}`}
            />
            {nameError && (
              <p className="text-red-400 text-sm mt-1">{nameError}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-white text-sm">Email</label>
            <Input
              value={email}
              disabled={loading}
              onChange={(e) => {
                const v = e.target.value;
                setEmail(v);
                setEmailError(validateEmail(v) === "" ? "" : emailError);
                setServerError("");
              }}
              placeholder="email@domena.cz"
              className={`mt-1 w-full px-4 py-2 rounded-lg bg-white/10 border text-white
                placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400
                ${emailError ? "border-red-500" : "border-white/20"}`}
            />
            {emailError && (
              <p className="text-red-400 text-sm mt-1">{emailError}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-white text-sm">Heslo</label>
            <Input
              type="password"
              value={password}
              disabled={loading}
              autoComplete="new-password"
              onChange={(e) => {
                const v = e.target.value;
                setPassword(v);
                setPasswordError(
                  validatePassword(v) === "" ? "" : passwordError
                );
                setPasswordScore(getPasswordScore(v));
                setServerError("");
              }}
              placeholder="Min. 8 znaků"
              className={`mt-1 w-full px-4 py-2 rounded-lg bg-white/10 border text-white
                placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400
                ${passwordError ? "border-red-500" : "border-white/20"}`}
            />
            {passwordError && (
              <p className="text-red-400 text-sm mt-1">{passwordError}</p>
            )}

            {/* PASSWORD STRENGTH BAR */}
            <div className="mt-2 flex w-full gap-5 items-center">
              <p className="w-1/5 text-slate-300 text-sm mt-1">
                {getPasswordLabel(passwordScore)}
              </p>
              <div className="w-4/5 h-2 bg-white/20 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${getPasswordColor(
                    passwordScore
                  )}`}
                  style={{ width: `${(passwordScore / 4) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* SUBMIT */}
          <LoadingButton
            type="submit"
            loading={loading}
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold"
          >
            Registrovat
          </LoadingButton>

          {serverError && (
            <p className="text-red-500 text-center mt-2">{serverError}</p>
          )}
        </form>

        <p className="text-center text-slate-200 text-sm mt-6">
          Máte již účet?{" "}
          <Link href="/signin" className="text-sky-400 hover:underline">
            Přihlásit se
          </Link>
        </p>
      </div>
    </div>
  );
}
