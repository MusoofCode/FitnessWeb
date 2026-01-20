import { toast } from "@/hooks/use-toast";
import { buildContactJoinMessage, openWhatsApp, type ContactJoinPayload } from "@/lib/whatsapp";

export const PURE_FITNESS_ADDRESS = "Pure Fitness, Hargeisa, Somaliland";
export const PURE_FITNESS_HOURS = "Daily • 6:00 AM – 10:00 PM";
export const PURE_FITNESS_MAPS_URL = "https://maps.app.goo.gl/ptmwFAwEK2NVKQ8e8";

export type WhatsAppLeadOptions = {
  cta: string; // e.g. "header_join", "contact_send", "pricing_choose"
  plan?: string;
  payload?: ContactJoinPayload;
};

function buildLeadMessage({ cta, plan }: { cta: string; plan?: string }) {
  const parts: string[] = [];
  parts.push("I want to join Pure Fitness.");
  if (plan) parts.push(`Interested plan: ${plan}.`);
  parts.push(`CTA: ${cta}.`);
  parts.push(`Location: ${PURE_FITNESS_ADDRESS}.`);
  parts.push(`Hours: ${PURE_FITNESS_HOURS}.`);
  parts.push(`Maps: ${PURE_FITNESS_MAPS_URL}`);
  return parts.join(" ");
}

export function openWhatsAppLead({ cta, plan, payload }: WhatsAppLeadOptions) {
  const sourcePath = payload?.sourcePath ?? window.location.pathname;

  openWhatsApp(
    buildContactJoinMessage({
      ...payload,
      plan: payload?.plan ?? plan,
      sourcePath,
      // ensure we always include lead tracking + location context
      message: payload?.message ? `${payload.message}\n\n${buildLeadMessage({ cta, plan })}` : buildLeadMessage({ cta, plan }),
    }),
  );

  toast({
    title: "Opening WhatsApp",
    description: "We’re sending your details to Pure Fitness.",
  });
}
