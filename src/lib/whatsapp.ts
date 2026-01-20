export const GYM_WHATSAPP_NUMBER = "+252634527737"; // +252 63 452 7737

type BuildWhatsAppUrlParams = {
  phone?: string;
  text: string;
};

export function buildWhatsAppUrl({ phone = GYM_WHATSAPP_NUMBER, text }: BuildWhatsAppUrlParams) {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${phone}?text=${encoded}`;
}

export function openWhatsApp(text: string) {
  // wa.me must be opened via window navigation from a user gesture
  window.open(buildWhatsAppUrl({ text }), "_blank", "noopener,noreferrer");
}

export type ContactJoinPayload = {
  fullName?: string;
  phone?: string;
  goal?: string;
  message?: string;
  plan?: string;
  sourcePath?: string;
};

export function buildContactJoinMessage(payload: ContactJoinPayload) {
  const lines: string[] = ["Pure Fitness Gym Hargeisa — Contact & Join"]; // keep short but structured

  if (payload.plan) lines.push(`Plan: ${payload.plan}`);
  if (payload.fullName) lines.push(`Name: ${payload.fullName}`);
  if (payload.phone) lines.push(`Phone: ${payload.phone}`);
  if (payload.goal) lines.push(`Goal: ${payload.goal}`);
  if (payload.message) lines.push(`Message: ${payload.message}`);
  if (payload.sourcePath) lines.push(`From: ${payload.sourcePath}`);

  lines.push("\nPlease contact me about membership.");
  return lines.join("\n");
}
