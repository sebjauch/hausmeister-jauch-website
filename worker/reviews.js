// /api/reviews: holt Gesamtnote, Anzahl und die neuesten Rezensionen von Google
// (offizielle Places API). Der Aufruf läuft auf dem Server von Cloudflare, Besucher
// haben also keinen Kontakt zu Google. Das Ergebnis wird 12 Stunden zwischengespeichert.
//
// Benötigt in Cloudflare das Secret GOOGLE_PLACES_API_KEY.
// Optional: GOOGLE_PLACE_ID (sonst wird der unten stehende Wert bzw. eine Suche genutzt).

const DEFAULT_PLACE_ID = "ChIJ2wEXTyN2CUQRAFuuBxLfCsk";
const SEARCH_QUERY = "Hausmeisterservice Sebastian Jauch, Ismaning";
const CACHE_SECONDS = 12 * 60 * 60;
const API = "https://places.googleapis.com/v1";

function json(data, status = 200, maxAge = 0) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": maxAge ? `public, max-age=${maxAge}` : "no-store",
    },
  });
}

async function placeDetails(placeId, key) {
  return fetch(`${API}/places/${encodeURIComponent(placeId)}?languageCode=de`, {
    headers: {
      "X-Goog-Api-Key": key,
      "X-Goog-FieldMask": "id,rating,userRatingCount,reviews,googleMapsUri",
    },
  });
}

async function findPlaceId(key) {
  const res = await fetch(`${API}/places:searchText`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": key,
      "X-Goog-FieldMask": "places.id",
    },
    body: JSON.stringify({ textQuery: SEARCH_QUERY, languageCode: "de" }),
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.places?.[0]?.id ?? null;
}

async function loadFromGoogle(env) {
  const key = env.GOOGLE_PLACES_API_KEY;
  if (!key) return { ok: false, error: "GOOGLE_PLACES_API_KEY fehlt" };

  let res = await placeDetails(env.GOOGLE_PLACE_ID || DEFAULT_PLACE_ID, key);
  if (res.status === 400 || res.status === 404) {
    const id = await findPlaceId(key);
    if (id) res = await placeDetails(id, key);
  }
  if (!res.ok) {
    let detail = "";
    try { detail = (await res.json()).error?.message ?? ""; } catch {}
    return { ok: false, error: `Google antwortet mit ${res.status}`, detail };
  }

  const place = await res.json();
  const reviews = (place.reviews ?? [])
    .filter((r) => (r.rating ?? 0) >= 4 && (r.originalText?.text || r.text?.text))
    .map((r) => ({
      author: r.authorAttribution?.displayName ?? "Google-Nutzer",
      authorUrl: r.authorAttribution?.uri ?? null,
      rating: r.rating,
      text: (r.originalText?.text || r.text?.text).trim(),
      time: r.publishTime ?? null,
      source: "Google",
    }))
    .sort((a, b) => (b.time ?? "").localeCompare(a.time ?? ""));

  return {
    ok: true,
    placeId: place.id,
    rating: place.rating ?? null,
    count: place.userRatingCount ?? null,
    url: place.googleMapsUri ?? null,
    reviews,
    updated: new Date().toISOString(),
  };
}

export async function handleReviews(request, env, ctx) {
  const cache = caches.default;
  const cacheKey = new Request(new URL("/api/reviews", request.url).toString());
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  let data;
  try {
    data = await loadFromGoogle(env);
  } catch (e) {
    data = { ok: false, error: "Abruf fehlgeschlagen", detail: String(e?.message ?? e) };
  }

  // Fehler nur kurz merken, damit ein neuer Schlüssel schnell greift.
  const response = json(data, 200, data.ok ? CACHE_SECONDS : 300);
  ctx?.waitUntil?.(cache.put(cacheKey, response.clone()));
  return response;
}
