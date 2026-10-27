"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site-config";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  goal?: string;
  message?: string;
  botcheck?: string;
}

export function ContactForm() {
  const { form } = siteConfig.contact;

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    goal: "stronger",
    message: "",
    botcheck: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateField = (fieldName: keyof ContactFormData) => {
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldError = result.error.issues.find(
        (err) => err.path[0] === fieldName
      );
      if (fieldError) {
        setErrors((prev) => ({ ...prev, [fieldName]: fieldError.message }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent spam if botcheck honeypot is filled
    if (formData.botcheck) {
      setStatus("success");
      return;
    }

    // Validate entire form with Zod
    const validationResult = contactFormSchema.safeParse(formData);
    if (!validationResult.success) {
      const formattedErrors: FormErrors = {};
      validationResult.error.issues.forEach((err) => {
        const path = err.path[0] as keyof FormErrors;
        if (path && !formattedErrors[path]) {
          formattedErrors[path] = err.message;
        }
      });
      setErrors(formattedErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");
    setErrorMessage("");

    const accessKey =
      siteConfig.contact.web3formsAccessKey ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          goal: formData.goal,
          message: formData.message || "No additional message provided.",
          subject: `New PeakForm Inquiry from ${formData.name}`,
          from_name: "PeakForm Web",
          botcheck: formData.botcheck,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
      } else {
        const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
        setStatus("error");
        setErrorMessage(
          data.message ||
            (contactEmail
              ? `Failed to send your inquiry. Please try again or contact ${contactEmail} directly.`
              : "Failed to send your inquiry. Please try again later.")
        );
      }
    } catch {
      const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
      setStatus("error");
      setErrorMessage(
        contactEmail
          ? `Network error occurred. Please check your connection or email ${contactEmail} directly.`
          : "Network error occurred. Please check your connection and try again."
      );
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      goal: "stronger",
      message: "",
      botcheck: "",
    });
    setErrors({});
    setStatus("idle");
    setErrorMessage("");
  };

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="p-6 md:p-8 bg-ink text-bone border-l-4 border-accent animate-fade-in"
      >
        <span className="font-mono text-label uppercase text-accent mb-2 block tracking-wider font-bold">
          {form.successBanner.title}
        </span>
        <h3 className="font-display text-display-md uppercase text-bone mb-3">
          Message Received, {formData.name}.
        </h3>
        <p className="font-sans text-body text-stone-dark leading-relaxed mb-6">
          Thank you. I have received your training history and goals. I will personally review your notes and reply to{" "}
          <strong className="text-bone font-mono">{formData.email}</strong> within 24 hours with schedule options.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="font-mono text-label uppercase text-accent hover:underline focus-visible:outline-3 focus-visible:outline-focus cursor-pointer"
        >
          ← Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot field (hidden from real users) */}
      <input
        type="text"
        name="botcheck"
        value={formData.botcheck}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {/* Full Name */}
      <Input
        name="name"
        label={form.nameLabel.replace(" *", "")}
        placeholder={form.namePlaceholder}
        value={formData.name}
        onChange={handleChange}
        onBlur={() => validateField("name")}
        error={errors.name}
        required
      />

      {/* Email Address */}
      <Input
        type="email"
        name="email"
        label={form.emailLabel.replace(" *", "")}
        placeholder={form.emailPlaceholder}
        value={formData.email}
        onChange={handleChange}
        onBlur={() => validateField("email")}
        error={errors.email}
        required
      />

      {/* Primary Goal */}
      <div>
        <label
          htmlFor="client-goal"
          className="block font-mono text-label uppercase text-ink tracking-wider mb-2"
        >
          {form.goalLabel.replace(" *", "")}
          <span className="text-accent ml-1" aria-hidden="true">
            *
          </span>
        </label>
        <select
          id="client-goal"
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          onBlur={() => validateField("goal")}
          aria-invalid={Boolean(errors.goal)}
          className="w-full h-[52px] bg-paper px-4 font-sans text-body text-ink border border-ink focus:outline-none focus:border-ink focus-visible:outline-3 focus-visible:outline-focus focus-visible:outline-offset-2 cursor-pointer transition-colors duration-150"
        >
          {form.goalOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.goal && (
          <p className="mt-1.5 font-sans text-body-sm text-error" role="alert">
            {errors.goal}
          </p>
        )}
      </div>

      {/* Message with Character Counter */}
      <Textarea
        id="client-message"
        name="message"
        label={form.messageLabel}
        placeholder={form.messagePlaceholder}
        value={formData.message}
        onChange={handleChange}
        onBlur={() => validateField("message")}
        charCount={formData.message?.length || 0}
        maxCharCount={form.messageMaxLength}
        error={errors.message}
        rows={4}
      />

      {/* Error Feedback Banner */}
      {status === "error" && (
        <div
          role="alert"
          className="p-4 bg-paper text-error border-l-4 border-error"
        >
          <p className="font-mono text-label uppercase font-bold mb-1">
            SUBMISSION FAILED
          </p>
          <p className="font-sans text-body-sm">{errorMessage}</p>
        </div>
      )}

      {/* Submit Button */}
      <div>
        <Button
          type="submit"
          variant="ink"
          size="full"
          disabled={status === "submitting"}
          showArrow={status !== "submitting"}
        >
          {status === "submitting" ? "Sending inquiry..." : form.submitButtonText.replace(" ↗", "")}
        </Button>
      </div>

      <p className="font-mono text-label uppercase text-stone tracking-wider text-center">
        {form.privacyNote}
      </p>
    </form>
  );
}

export default ContactForm;
