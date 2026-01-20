import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export type AppLanguage = "en" | "so";

const STORAGE_KEY = "pf_lang";

export function getInitialLanguage(): AppLanguage {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "so") return stored;
  // Default to English; Somali can be selected via toggle.
  return "en";
}

export function persistLanguage(lng: AppLanguage) {
  localStorage.setItem(STORAGE_KEY, lng);
}

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        membership: "Membership",
        facilities: "Facilities",
        trainers: "Trainers",
        schedule: "Schedule",
        tour: "Tour",
        contact: "Contact",
      },
      common: {
        joinToday: "Join Today",
        send: "Send",
        whiteMode: "White mode",
        darkMode: "Dark mode",
        language: "Language",
        openingWhatsApp: "Opening WhatsApp",
        openingWhatsAppDesc: "We’re sending your details to Pure Fitness.",
      },
      hero: {
        badge: "Premium training • Modern equipment • Hargeisa",
        titleLine1: "Hargeisa’s Premier Fitness Destination —",
        titleLine2: "Train Hard, Live Strong.",
        subtitle:
          "A high-energy space for athletes, beginners, and community members—designed to keep you consistent and progressing.",
        tourCta: "Take a Virtual Tour",
      },
      contact: {
        title: "Contact & join",
        subtitle: "Tell us your goal and schedule—we’ll recommend a plan and a starter routine.",
        cardTitle: "Pure Fitness Gym Hargeisa",
        locationLabel: "Location",
        hoursLabel: "Hours",
        fullName: "Full name",
        yourName: "Your name",
        phone: "Phone / WhatsApp",
        goal: "Goal",
        message: "Message",
        messagePlaceholder: "Tell us your availability and what you want to achieve.",
        consent: "By submitting, you agree to be contacted about membership.",
      },
      pricing: {
        title: "Memberships that move fast.",
        subtitle: "Tap a plan to feel the motion. Switch cadence for monthly or yearly savings.",
        monthly: "Monthly",
        yearly: "Yearly",
        from: "From",
        mo: "mo",
        yr: "yr",
        choose: "Choose",
        popular: "Popular",
        noContracts: "No long contracts. Cancel anytime.",
      },
      schedule: {
        pageKicker: "Class Schedule",
        pageTitle: "Your week, engineered.",
        pageSubtitle: "Filter by class type and intensity. Tap any session for details and a fast join flow.",
        sectionTitle: "Class schedule",
        sectionSubtitle: "A fast filter experience with smooth transitions. Next step: calendar view + class detail modals.",
        details: "Details",
        intensity: "intensity",
      },
      tour: {
        title: "Virtual tour & video",
        subtitle: "A fast, cinematic look at our spaces—hit play, then message us on WhatsApp to book your first visit.",
        watch: "Watch tour",
        play: "Play video",
        dialogTitle: "Pure Fitness — Virtual Tour",
      },
      conversion: {
        title: "Proof. Results. Community.",
        subtitle:
          "Real members, real transformations, and a crew that keeps you accountable—start today and feel the difference this week.",
        urgencyTitle: "Limited spots this week",
        urgencySubtitle: "Message us now and we’ll reserve your first visit + assessment.",
        reviewsTitle: "Google reviews",
        testimonialsTitle: "Member stories",
        beforeAfterTitle: "Before / After",
      },
      footer: {
        blurb:
          "Premium training, modern equipment, and a community that shows up. Train hard, live strong.",
        location: "Location",
        hours: "Hours",
        rights: "All rights reserved.",
        built: "Built for speed, accessibility, and conversion.",
      },
    },
  },
  so: {
    translation: {
      nav: {
        home: "Bogga Hore",
        membership: "Xubinimo",
        facilities: "Qalab & Goobo",
        trainers: "Tababarayaal",
        schedule: "Jadwal",
        tour: "Dalxiis",
        contact: "Xiriir",
      },
      common: {
        joinToday: "Ku Biir Hadda",
        send: "Dir",
        whiteMode: "Hab Caddaan",
        darkMode: "Hab Madow",
        language: "Luuqad",
        openingWhatsApp: "WhatsApp waa furmayaa",
        openingWhatsAppDesc: "Waxaan u diraynaa faahfaahintaada Pure Fitness.",
      },
      hero: {
        badge: "Tababar heer sare • Qalab casri ah • Hargeysa",
        titleLine1: "Goobta Jimicsiga ugu Fiican Hargeysa —",
        titleLine2: "Dadaal Adag, Nolol Xooggan.",
        subtitle:
          "Meel tamar badan oo loogu talagalay ciyaartooy, bilow iyo bulshada—si aad u joogteyso oo aad u horumarto.",
        tourCta: "Daawo Dalxiiska",
      },
      contact: {
        title: "Xiriir & Ku Biir",
        subtitle: "Noo sheeg yoolkaaga iyo jadwalkaaga—waxaan kuu soo jeedinaynaa qorshe iyo bilow.",
        cardTitle: "Pure Fitness Gym Hargeisa",
        locationLabel: "Goobta",
        hoursLabel: "Saacadaha",
        fullName: "Magaca buuxa",
        yourName: "Magacaaga",
        phone: "Telefoon / WhatsApp",
        goal: "Yool",
        message: "Fariin",
        messagePlaceholder: "Noo sheeg waqtigaaga iyo waxa aad rabto inaad gaarto.",
        consent: "Markaad dirto, waad oggolaatay in lagaa la xiriiri karo xubinimada.",
      },
      pricing: {
        title: "Xubinimo dhaqso u shaqeysa.",
        subtitle: "Dooro qorshe. Beddel bille ama sannadle si aad u hesho qiimo dhimis.",
        monthly: "Bille",
        yearly: "Sannadle",
        from: "Laga bilaabo",
        mo: "bil",
        yr: "san",
        choose: "Dooro",
        popular: "Caan",
        noContracts: "Qandaraas dheer ma jiro. Jooji goor kasta.",
      },
      schedule: {
        pageKicker: "Jadwalka Fasallada",
        pageTitle: "Toddobaadkaaga, si xirfad leh.",
        pageSubtitle: "Sifee nooca fasalka iyo xoojinta. Taabo si aad u aragto faahfaahin.",
        sectionTitle: "Jadwalka fasallada",
        sectionSubtitle: "Sifeeyn degdeg ah oo leh dhaqdhaqaaqyo jilicsan.",
        details: "Faahfaahin",
        intensity: "xoojinta",
      },
      tour: {
        title: "Dalxiis muuqaal & video",
        subtitle: "Daawo si dhakhso ah, kadibna WhatsApp noogu soo dir si aan kuu ballansanno booqashada.",
        watch: "Daawo dalxiiska",
        play: "Daawo video",
        dialogTitle: "Pure Fitness — Dalxiis",
      },
      conversion: {
        title: "Caddeyn. Natiijo. Bulsho.",
        subtitle: "Xubno dhab ah, isbeddel dhab ah, iyo bulsho ku taageerta—ku bilow maanta.",
        urgencyTitle: "Boos kooban toddobaadkan",
        urgencySubtitle: "WhatsApp hadda noo soo dir si aan kuu xafidno booqasho + qiimeyn.",
        reviewsTitle: "Qiimeyn Google",
        testimonialsTitle: "Sheekooyinka xubnaha",
        beforeAfterTitle: "Kahor / Kadib",
      },
      footer: {
        blurb:
          "Tababar heer sare, qalab casri ah, iyo bulsho ku garab taagan. Dadaal adag, nolol xooggan.",
        location: "Goobta",
        hours: "Saacadaha",
        rights: "Xuquuqda way dhowran tahay.",
        built: "Waxaa loo dhisay xawaare, helitaan, iyo iib.",
      },
    },
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
