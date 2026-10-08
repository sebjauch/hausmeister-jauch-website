// Einstieg für Cloudflare Workers: Das Formular läuft über /api/contact,
// alle anderen Adressen liefert Cloudflare direkt aus dem Ordner dist aus.
import { onRequestPost } from "../functions/api/contact.js";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405, headers: { Allow: "POST" } });
      }
      return onRequestPost({ request, env });
    }
    return env.ASSETS.fetch(request);
  },
};
