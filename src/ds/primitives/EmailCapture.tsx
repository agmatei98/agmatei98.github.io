import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Input } from "./Input";
import { Button } from "./Button";
import { cn } from "@ds/cn";

type Tone = "light" | "dark";

/**
 * EmailCapture - composite. Input + Button. Stacks on mobile, inline on
 * ≥480px. Has an internal "submitted" state that swaps the button label
 * to a tick + "You're on the list".
 *
 * Pre-launch this is the only conversion surface on the site.
 */
export function EmailCapture({
  id = "email",
  placeholder = "your@email.co.uk",
  ctaLabel = "Get early access",
  tone = "light",
  className,
  onSubmit,
}: {
  id?: string;
  placeholder?: string;
  ctaLabel?: string;
  tone?: Tone;
  className?: string;
  /** Optional handler. If absent, the form just shows the success state. */
  onSubmit?: (email: string) => Promise<void> | void;
}) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "done">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setState("submitting");
    try {
      await onSubmit?.(email);
      setState("done");
      setEmail("");
    } catch {
      setState("idle");
    }
  }

  if (state === "done") {
    return (
      <div
        className={cn(
          "flex items-center gap-3 rounded-lg px-5 py-4",
          tone === "dark"
            ? "bg-[color:var(--color-primary-900)] text-white"
            : "bg-[var(--color-success-50)] text-[var(--color-success-700)] ring-1 ring-[var(--color-success-200)]",
          className
        )}
        role="status"
        aria-live="polite"
      >
        <Check className="h-5 w-5 shrink-0" aria-hidden />
        <span className="font-semibold">
          You're on the list. We'll email you when we open up.
        </span>
      </div>
    );
  }

  return (
    <form
      className={cn(
        "flex flex-col gap-2 sm:flex-row sm:gap-2",
        className
      )}
      onSubmit={handleSubmit}
      noValidate
    >
      <label htmlFor={id} className="sr-only">
        Your email
      </label>
      <Input
        id={id}
        type="email"
        autoComplete="email"
        required
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="sm:flex-1"
      />
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={state === "submitting"}
        trailing={<ArrowRight className="h-5 w-5" aria-hidden />}
      >
        {state === "submitting" ? "Sending…" : ctaLabel}
      </Button>
    </form>
  );
}
