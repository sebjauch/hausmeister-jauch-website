// Einstieg für Cloudflare Workers: Das Formular läuft über /api/contact,
// die Google-Bewertungen über /api/reviews,
// alle anderen Adressen liefert Cloudflare direkt aus dem Ordner dist aus.
import { onRequestPost } from "../functions/api/contact.js";
import { handleReviews } from "./reviews.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405, headers: { Allow: "POST" } });
      }
      return onRequestPost({ request, env });
    }
    if (url.pathname === "/api/reviews") {
      return handleReviews(request, env, ctx);
    }
    return env.ASSETS.fetch(request);
  },
};
