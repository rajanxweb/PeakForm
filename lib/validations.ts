import { z } from "zod";

/**
 * ContactFormSchema — Strict validation for PeakForm intro call inquiries.
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters." })
    .max(100, { message: "Name is too long." }),

  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." }),

  goal: z.enum(["stronger", "fat-loss", "mobility", "not-sure"], {
    message: "Please select your primary athletic goal.",
  }),

  message: z
    .string()
    .max(600, { message: "Message cannot exceed 600 characters." })
    .optional()
    .or(z.literal("")),

  // Honeypot field — must remain empty
  botcheck: z.string().max(0, { message: "Bot detected." }).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
