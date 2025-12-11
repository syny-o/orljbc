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

type Novinka = {
  id: number;
  nazev: string;
  obsah: string;
  publikovano: boolean;
};

type Props = {
  mode: "create" | "update";
  action: (fd: FormData) => Promise<{ success: boolean; error?: string }>;
  novinka?: Novinka;
  trigger: React.ReactNode;
};

export default function NovinkaDialog({
  mode,
  action,
  novinka,
  trigger,
}: Props) {
  const [open, setOpen] = useState(false);

  const isEdit = mode === "update";

  // Form fields
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);

  // Validation
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  // Prefill on edit mode
  useEffect(() => {
    if (isEdit && novinka) {
      setTitle(novinka.nazev);
      setContent(novinka.obsah);
      setPublished(novinka.publikovano);
    }
  }, [isEdit, novinka]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    let valid = true;

    if (!title.trim()) {
      setTitleError("Název je povinný.");
      valid = false;
    } else setTitleError("");

    if (!content.trim()) {
      setContentError("Obsah je povinný.");
      valid = false;
    } else setContentError("");

    if (!valid) return;

    // Build FormData
    const fd = new FormData();
    if (isEdit && novinka) fd.append("id", String(novinka.id));

    fd.append("title", title);
    fd.append("content", content);
    fd.append("published", published ? "on" : "");

    const result = await action(fd);

    if (!result.success) {
      alert(result.error);
      return;
    }

    // Reset only for create mode
    if (!isEdit) {
      setTitle("");
      setContent("");
      setPublished(false);
      setTitleError("");
      setContentError("");
    }

    // Close dialog
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>
              {isEdit ? "Upravit novinku" : "Přidat novinku"}
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 mt-4">
            {/* TITLE */}
            <div className="grid gap-2">
              <Label>Název *</Label>
              <Input
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (e.target.value.trim()) setTitleError("");
                }}
              />
              {titleError && (
                <p className="text-red-500 text-sm">{titleError}</p>
              )}
            </div>

            {/* CONTENT */}
            <div className="grid gap-2">
              <Label>Obsah *</Label>
              <textarea
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                  if (e.target.value.trim()) setContentError("");
                }}
              />
              {contentError && (
                <p className="text-red-500 text-sm">{contentError}</p>
              )}
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
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Zrušit
            </Button>

            <Button type="submit" disabled={!!titleError || !!contentError}>
              {isEdit ? "Uložit změny" : "Přidat novinku"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
