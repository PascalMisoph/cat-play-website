export const LEGAL_CONTACT = {
  name: "Pascal Misoph",
  street: "Holbeinstr. 7",
  postalCode: "01307",
  city: "Dresden",
  country: "Germany",
  email: "hello@pawandsage.com",
} as const;

export const LEGAL_VERSIONS = {
  privacyNotice: "2026-04-26",
  waitlistConsent: "2026-04-26",
  privacyBanner: "2026-04-26",
} as const;

export const WAITLIST_CONSENT_TEXT =
  "I agree that CatPlay may process my email address to send me launch updates and early access information by email. I can withdraw my consent at any time by emailing hello@pawandsage.com.";

export const PRIVACY_PREFERENCE_KEY = "catplay_privacy_preferences";
export const PRIVACY_PREFERENCE_TTL_DAYS = 180;
