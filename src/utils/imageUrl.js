const PLACEHOLDER = "https://placehold.co/800x500?text=No+Image";

export function getImageUrl(path) {
  if (!path) return PLACEHOLDER;

  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://serv-production-0b49.up.railway.app/api";

  const BASE_URL = API_URL.replace("/api", "");

  if (path.startsWith("http")) {
    return path.replace("http://", "https://");
  }

  const cleanPath = path
    .replace(/^public\//, "")
    .replace(/^storage\//, "");

  return `${BASE_URL}/storage/${cleanPath}`;
}