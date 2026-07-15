// Shared, framework-agnostic validation used by both the client forms and the
// API routes. Keeping validation on the server too means the site is not
// relying on the browser alone (which can be bypassed).

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Allows +, spaces, hyphens, parentheses; requires at least 7 digits.
export const PHONE_RE = /^[+]?[\d\s().-]{7,20}$/;

export function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && EMAIL_RE.test(value.trim());
}

export function isValidPhone(value: unknown): value is string {
  return typeof value === "string" && PHONE_RE.test(value.trim());
}

export function isNonEmpty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

// Caps length and coerces to a trimmed string to keep payloads sane and
// prevent oversized submissions.
export function clampText(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

// Safely parse a positive integer from any input (handles "", NaN, pasted junk).
export function toPositiveInt(value: unknown, fallback = 1, max = 99): number {
  const n = Math.floor(Number(value));
  if (!Number.isFinite(n) || n < 1) return fallback;
  return Math.min(n, max);
}

// Minimal HTML-escaping for values interpolated into email HTML, to avoid
// injecting markup via form fields.
export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
