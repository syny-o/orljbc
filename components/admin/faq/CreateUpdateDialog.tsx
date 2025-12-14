"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

type Faq = {
  id: number;
  otazka: string;
  odpoved: string;
  publikovano: boolean;
  poradi: number;
};

type Props = {
  mode: "create" | "update";
  action: (fd: FormData) => Promise<{ success: boolean; error?: string }>;
  faq?: Faq;
  trigger: React.ReactNode;
};

export default function FaqDialog({
  mode,
  action,
  faq,
  trigger,
}: Props) {
  const [open, setOpen] = useState(false);
  const isEdit = mode === "update";

  // Form fields
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [published, setPublished] = useState(false);
  const [order, setOrder] = useState(0);

  // Validation
  const [questionError, setQuestionError] = useState("");
  const [answerError, setAnswerError] = useState("");

  // Prefill on edit
  useEffect(() => {
    if (isEdit && faq) {
      setQuestion(faq.otazka);
      setAnswer(faq.odpoved);
      setPublished(faq.publikovano);
      setOrder(faq.poradi);
    }
  }, [isEdit, faq]);

  function handleClose() {
    if (faq) {
      setQuestion(faq.otazka);
      setAnswer(faq.odpoved);
      setPublished(faq.publikovano);
      setOrder(faq.poradi);
    }
    setOpen(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    let valid = true;

    if (!question.trim()) {
      setQuestionError("Otázka je povinná.");
      valid = false;
    } else setQuestionError("");

    if (!answer.trim()) {
      setAnswerError("Odpověď je povinná.");
      valid = false;
    } else setAnswerError("");

    if (!valid) return;

    const fd = new FormData();
    if (isEdit && faq) fd.append("id", String(faq.id));

    fd.append("otazka", question);
    fd.append("odpoved", answer);
    fd.append("publikovano", published ? "on" : "");
    fd.append("poradi", String(order));

    const result = await action(fd);

    if (!result.success) {
      alert(result.error);
      return;
    }

    // Reset only in create mode
    if (!isEdit) {
      setQuestion("");
      setAnswer("");
      setPublished(false);
      setOrder(0);
      setQuestionError("");
      setAnswerError("");
    }

    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>
              {isEdit ? "Upravit FAQ" : "Přidat FAQ"}
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 mt-4">
            {/* QUESTION */}
            <div className="grid gap-2">
              <Label>Otázka *</Label>
              <Input
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                  if (e.target.value.trim()) setQuestionError("");
                }}
              />
              {questionError && (
                <p className="text-red-500 text-sm">{questionError}</p>
              )}
            </div>

            {/* ANSWER */}
            <div className="grid gap-2">
              <Label>Odpověď *</Label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                value={answer}
                onChange={(e) => {
                  setAnswer(e.target.value);
                  if (e.target.value.trim()) setAnswerError("");
                }}
              />
              {answerError && (
                <p className="text-red-500 text-sm">{answerError}</p>
              )}
            </div>

            {/* ORDER */}
            <div className="grid gap-2">
              <Label>Pořadí</Label>
              <Input
                type="number"
                value={order}
                onChange={(e) => setOrder(Number(e.target.value))}
              />
            </div>

            {/* PUBLISHED */}
            <div className="flex items-center gap-2">
              <Label htmlFor="published">Publikováno</Label>
              <input
                id="published"
                type="checkbox"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
              />
            </div>
          </div>

          <DialogFooter className="mt-4">
            <Button type="button" variant="outline" onClick={handleClose}>
              Zrušit
            </Button>

            <Button
              type="submit"
              disabled={!!questionError || !!answerError}
            >
              {isEdit ? "Uložit změny" : "Přidat FAQ"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
