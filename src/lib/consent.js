// Cookie-Einwilligung: gespeichert im Browser, Änderungen werden per Event gemeldet,
// damit Google Analytics (siehe layouts/BaseLayout.astro) erst nach Zustimmung lädt.

export const CONSENT_STORAGE_KEY = "sj_cookie_consent";
export const CONSENT_EVENT = "sj-consent-change";

export function readConsent() {
  try {
    return JSON.parse(localStorage.getItem(CONSENT_STORAGE_KEY) || "null");
  } catch {
    return null;
  }
}

export function saveConsent(choice) {
  const value = { ...choice, ts: Date.now() };
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(value));
  } catch {}
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}
