const WP_API_BASE = import.meta.env.PUBLIC_WORDPRESS_API;

/**
 * Obtiene una página de WordPress por su slug
 */
export async function getPageBySlug(slug: string) {
  try {
    if (!WP_API_BASE) {
      throw new Error(
        "❌ La variable PUBLIC_WORDPRESS_API no está definida. Revisa tu .env"
      );
    }

    const url = `${WP_API_BASE}/pages?slug=${slug}&_embed`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(
        `❌ Error al obtener la página "${slug}": ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();

    if (!data || data.length === 0) {
      console.warn(`⚠️ No se encontró ninguna página con slug "${slug}"`);
      return null;
    }

    return data[0];
  } catch (error) {
    console.error("❌ Error en getPageBySlug:", error);
    return null;
  }
}


/**
 * Trae todos los posts de WordPress
 */
export async function getAllPosts() {
  try {
    if (!WP_API_BASE) {
      throw new Error(
        "❌ La variable PUBLIC_WORDPRESS_API no está definida. Revisa tu .env"
      );
    }
/**
 * Trae todas las páginas (por si quieres generar rutas dinámicas en el futuro)
 */
export async function getAllPages() {
  const res = await fetch(`${WP_API_BASE}/pages?_embed`);
  return await res.json();
}

export async function getPostById(id: number) {
  try {
    if (!WP_API_BASE) {
      throw new Error(
        "❌ La variable PUBLIC_WORDPRESS_API no está definida. Revisa tu .env"
      );
    }

    const url = `${WP_API_BASE}/posts/${id}?_embed`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(
        `❌ Error al obtener el post con ID "${id}": ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();

    if (!data) {
      console.warn(`⚠️ No se encontró ningún post con ID "${id}"`);
      return null;
    }

    return data;
  } catch (error) {
    console.error("❌ Error en getPostById:", error);
    return null;
  }
}